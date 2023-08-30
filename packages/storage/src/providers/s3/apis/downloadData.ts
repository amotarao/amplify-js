// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Amplify } from '@aws-amplify/core';

import { S3TransferOptions, S3DownloadDataResult } from '../types';
import { resolveS3ConfigAndInput } from '../utils/resolveS3ConfigAndInput';
import { StorageValidationErrorCode } from '../../../errors/types/validation';
import { StorageDownloadDataRequest, DownloadTask } from '../../../types';
import { createDownloadTask } from '../utils';
import { getObject } from '../utils/client';

/**
 * Download S3 object data to memory
 *
 * @param {StorageDownloadDataRequest<S3TransferOptions>} downloadDataRequest The parameters that are passed to the
 * 	downloadData operation.
 * @returns {DownloadTask<S3DownloadDataResult>} Cancelable task exposing result promise from `result` property.
 * @throws service: {@link S3Exception} - thrown when checking for existence of the object
 * @throws validation: {@link StorageValidationErrorCode } - Validation errors
 * thrown either username or key are not defined.
 *
 * TODO: add config errors
 */
export const downloadData = (
	downloadDataRequest: StorageDownloadDataRequest<S3TransferOptions>
): DownloadTask<S3DownloadDataResult> => {
	const abortController = new AbortController();

	const downloadTask = createDownloadTask({
		job: downloadDataJob(downloadDataRequest, abortController.signal),
		onCancel: (abortErrorOverwrite?: Error) => {
			abortController.abort(abortErrorOverwrite);
		},
	});
	return downloadTask;
};

const downloadDataJob =
	(
		{
			options: downloadDataOptions,
			key,
		}: StorageDownloadDataRequest<S3TransferOptions>,
		abortSignal: AbortSignal
	) =>
	async () => {
		const { bucket, keyPrefix, s3Config } = await resolveS3ConfigAndInput(
			Amplify,
			downloadDataOptions
		);
		// TODO[AllanZhengYP]: support excludeSubPaths option to exclude sub paths
		const finalKey = keyPrefix + key;

		const {
			Body: body,
			LastModified: lastModified,
			ContentLength: size,
			ETag: eTag,
			Metadata: metadata,
			VersionId: versionId,
			ContentType: contentType,
		} = await getObject(
			{
				...s3Config,
				abortSignal,
				onDownloadProgress: downloadDataOptions?.onProgress,
			},
			{
				Bucket: bucket,
				Key: finalKey,
			}
		);
		return {
			// Casting with ! as body always exists for getObject API.
			// TODO[AllanZhengYP]: remove casting when we have better typing for getObject API
			key,
			body: body!,
			lastModified,
			size,
			contentType,
			eTag,
			metadata,
			versionId,
		};
	};
