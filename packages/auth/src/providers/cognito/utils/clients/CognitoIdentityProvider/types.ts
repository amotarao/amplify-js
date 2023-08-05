import { MetadataBearer as __MetadataBearer } from '@aws-sdk/types';

declare enum AuthFlowType {
	ADMIN_NO_SRP_AUTH = "ADMIN_NO_SRP_AUTH",
	ADMIN_USER_PASSWORD_AUTH = "ADMIN_USER_PASSWORD_AUTH",
	CUSTOM_AUTH = "CUSTOM_AUTH",
	REFRESH_TOKEN = "REFRESH_TOKEN",
	REFRESH_TOKEN_AUTH = "REFRESH_TOKEN_AUTH",
	USER_PASSWORD_AUTH = "USER_PASSWORD_AUTH",
	USER_SRP_AUTH = "USER_SRP_AUTH"
}
declare enum ChallengeNameType {
	ADMIN_NO_SRP_AUTH = "ADMIN_NO_SRP_AUTH",
	CUSTOM_CHALLENGE = "CUSTOM_CHALLENGE",
	DEVICE_PASSWORD_VERIFIER = "DEVICE_PASSWORD_VERIFIER",
	DEVICE_SRP_AUTH = "DEVICE_SRP_AUTH",
	MFA_SETUP = "MFA_SETUP",
	NEW_PASSWORD_REQUIRED = "NEW_PASSWORD_REQUIRED",
	PASSWORD_VERIFIER = "PASSWORD_VERIFIER",
	SELECT_MFA_TYPE = "SELECT_MFA_TYPE",
	SMS_MFA = "SMS_MFA",
	SOFTWARE_TOKEN_MFA = "SOFTWARE_TOKEN_MFA"
}
declare enum DeliveryMediumType {
	EMAIL = "EMAIL",
	SMS = "SMS"
}
declare enum DeviceRememberedStatusType {
	NOT_REMEMBERED = "not_remembered",
	REMEMBERED = "remembered"
}
declare enum VerifySoftwareTokenResponseType {
	ERROR = "ERROR",
	SUCCESS = "SUCCESS"
}
declare namespace AnalyticsMetadataType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: AnalyticsMetadataType) => any;
}
declare namespace AssociateSoftwareTokenRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: AssociateSoftwareTokenRequest) => any;
}
declare namespace AssociateSoftwareTokenResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: AssociateSoftwareTokenResponse) => any;
}
declare namespace AttributeType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: AttributeType) => any;
}
declare namespace AuthenticationResultType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: AuthenticationResultType) => any;
}
declare namespace ChangePasswordRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ChangePasswordRequest) => any;
}
declare namespace ChangePasswordResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ChangePasswordResponse) => any;
}
declare namespace CodeDeliveryDetailsType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: CodeDeliveryDetailsType) => any;
}
declare namespace ConfirmDeviceRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ConfirmDeviceRequest) => any;
}
declare namespace ConfirmDeviceResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ConfirmDeviceResponse) => any;
}
declare namespace ConfirmForgotPasswordRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ConfirmForgotPasswordRequest) => any;
}
declare namespace ConfirmForgotPasswordResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ConfirmForgotPasswordResponse) => any;
}
declare namespace ConfirmSignUpRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ConfirmSignUpRequest) => any;
}
declare namespace ConfirmSignUpResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ConfirmSignUpResponse) => any;
}
declare namespace DeleteUserRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: DeleteUserRequest) => any;
}
declare namespace DeviceSecretVerifierConfigType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: DeviceSecretVerifierConfigType) => any;
}
declare namespace DeviceType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: DeviceType) => any;
}
declare namespace ForgetDeviceRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ForgetDeviceRequest) => any;
}
declare namespace ForgotPasswordRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ForgotPasswordRequest) => any;
}
declare namespace ForgotPasswordResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ForgotPasswordResponse) => any;
}
declare namespace GetCSVHeaderResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: GetCSVHeaderResponse) => any;
}
declare namespace GetUserAttributeVerificationCodeRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: GetUserAttributeVerificationCodeRequest) => any;
}
declare namespace GetUserAttributeVerificationCodeResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: GetUserAttributeVerificationCodeResponse) => any;
}
declare namespace GetUserRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: GetUserRequest) => any;
}
declare namespace GetUserResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: GetUserResponse) => any;
}
declare namespace GlobalSignOutRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: GlobalSignOutRequest) => any;
}
declare namespace InitiateAuthRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: InitiateAuthRequest) => any;
}
declare namespace InitiateAuthResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: InitiateAuthResponse) => any;
}
declare namespace ListDevicesRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ListDevicesRequest) => any;
}
declare namespace ListDevicesResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ListDevicesResponse) => any;
}
declare namespace MFAOptionType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: MFAOptionType) => any;
}
declare namespace NewDeviceMetadataType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: NewDeviceMetadataType) => any;
}
declare namespace ResendConfirmationCodeRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ResendConfirmationCodeRequest) => any;
}
declare namespace ResendConfirmationCodeResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: ResendConfirmationCodeResponse) => any;
}
declare namespace RespondToAuthChallengeRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: RespondToAuthChallengeRequest) => any;
}
declare namespace RespondToAuthChallengeResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: RespondToAuthChallengeResponse) => any;
}
declare namespace SMSMfaSettingsType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: SMSMfaSettingsType) => any;
}
declare namespace SetUserMFAPreferenceRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: SetUserMFAPreferenceRequest) => any;
}
declare namespace SetUserMFAPreferenceResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: SetUserMFAPreferenceResponse) => any;
}
declare namespace SignUpRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: SignUpRequest) => any;
}
declare namespace SignUpResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: SignUpResponse) => any;
}
declare namespace SoftwareTokenMfaSettingsType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: SoftwareTokenMfaSettingsType) => any;
}
declare namespace UpdateDeviceStatusRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: UpdateDeviceStatusRequest) => any;
}
declare namespace UpdateDeviceStatusResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: UpdateDeviceStatusResponse) => any;
}
declare namespace UpdateUserAttributesRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: UpdateUserAttributesRequest) => any;
}
declare namespace UpdateUserAttributesResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: UpdateUserAttributesResponse) => any;
}
declare namespace UserContextDataType {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: UserContextDataType) => any;
}
declare namespace VerifySoftwareTokenRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: VerifySoftwareTokenRequest) => any;
}
declare namespace VerifySoftwareTokenResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: VerifySoftwareTokenResponse) => any;
}
declare namespace VerifyUserAttributeRequest {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: VerifyUserAttributeRequest) => any;
}
declare namespace VerifyUserAttributeResponse {
	/**
	 * @internal
	 */
	const filterSensitiveLog: (obj: VerifyUserAttributeResponse) => any;
}
/**
 * <p>An Amazon Pinpoint analytics endpoint.</p>
 *         <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p>
 *          <note>
 *             <p>Amazon Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the Region in which the user pool resides.</p>
 *          </note>
 */
export interface AnalyticsMetadataType {
	/**
	 * <p>The endpoint ID.</p>
	 */
	AnalyticsEndpointId?: string;
}
export interface AssociateSoftwareTokenCommandInput extends AssociateSoftwareTokenRequest {
}
export interface AssociateSoftwareTokenCommandOutput extends AssociateSoftwareTokenResponse, __MetadataBearer {
}
export interface AssociateSoftwareTokenRequest {
	/**
	 * <p>The access token.</p>
	 */
	AccessToken?: string;
	/**
	 * <p>The session that should be passed both ways in challenge-response calls to the service. This allows authentication of the user as part of the MFA setup process.</p>
	 */
	Session?: string;
}
export interface AssociateSoftwareTokenResponse {
	/**
	 * <p>A unique generated shared secret code that is used in the time-based one-time password (TOTP) algorithm to generate a one-time code.</p>
	 */
	SecretCode?: string;
	/**
	 * <p>The session that should be passed both ways in challenge-response calls to the service. This allows authentication of the user as part of the MFA setup process.</p>
	 */
	Session?: string;
}
/**
 * <p>Specifies whether the attribute is standard or custom.</p>
 */
export interface AttributeType {
	/**
	 * <p>The name of the attribute.</p>
	 */
	Name: string | undefined;
	/**
	 * <p>The value of the attribute.</p>
	 */
	Value?: string;
}
/**
 * <p>The authentication result.</p>
 */
export interface AuthenticationResultType {
	/**
	 * <p>The access token.</p>
	 */
	AccessToken?: string;
	/**
	 * <p>The expiration period of the authentication result in seconds.</p>
	 */
	ExpiresIn?: number;
	/**
	 * <p>The token type.</p>
	 */
	TokenType?: string;
	/**
	 * <p>The refresh token.</p>
	 */
	RefreshToken?: string;
	/**
	 * <p>The ID token.</p>
	 */
	IdToken?: string;
	/**
	 * <p>The new device metadata from an authentication result.</p>
	 */
	NewDeviceMetadata?: NewDeviceMetadataType;
}
export interface ChangePasswordCommandInput extends ChangePasswordRequest {
}
export interface ChangePasswordCommandOutput extends ChangePasswordResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to change a user password.</p>
 */
export interface ChangePasswordRequest {
	/**
	 * <p>The old password.</p>
	 */
	PreviousPassword: string | undefined;
	/**
	 * <p>The new password.</p>
	 */
	ProposedPassword: string | undefined;
	/**
	 * <p>The access token.</p>
	 */
	AccessToken: string | undefined;
}
/**
 * <p>The response from the server to the change password request.</p>
 */
export interface ChangePasswordResponse {
}
/**
 * <p>The code delivery details being returned from the server.</p>
 */
export interface CodeDeliveryDetailsType {
	/**
	 * <p>The destination for the code delivery details.</p>
	 */
	Destination?: string;
	/**
	 * <p>The delivery medium (email message or phone number).</p>
	 */
	DeliveryMedium?: DeliveryMediumType | string;
	/**
	 * <p>The attribute name.</p>
	 */
	AttributeName?: string;
}
export interface ConfirmDeviceCommandInput extends ConfirmDeviceRequest {
}
export interface ConfirmDeviceCommandOutput extends ConfirmDeviceResponse, __MetadataBearer {
}
/**
 * <p>Confirms the device request.</p>
 */
export interface ConfirmDeviceRequest {
	/**
	 * <p>The access token.</p>
	 */
	AccessToken: string | undefined;
	/**
	 * <p>The device key.</p>
	 */
	DeviceKey: string | undefined;
	/**
	 * <p>The configuration of the device secret verifier.</p>
	 */
	DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
	/**
	 * <p>The device name.</p>
	 */
	DeviceName?: string;
}
/**
 * <p>Confirms the device response.</p>
 */
export interface ConfirmDeviceResponse {
	/**
	 * <p>Indicates whether the user confirmation must confirm the device response.</p>
	 */
	UserConfirmationNecessary?: boolean;
}
export interface ConfirmForgotPasswordCommandInput extends ConfirmForgotPasswordRequest {
}
export interface ConfirmForgotPasswordCommandOutput extends ConfirmForgotPasswordResponse, __MetadataBearer {
}
/**
 * <p>The request representing the confirmation for a password reset.</p>
 */
export interface ConfirmForgotPasswordRequest {
	/**
	 * <p>The app client ID of the app associated with the user pool.</p>
	 */
	ClientId: string | undefined;
	/**
	 * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.</p>
	 */
	SecretHash?: string;
	/**
	 * <p>The user name of the user for whom you want to enter a code to retrieve a forgotten password.</p>
	 */
	Username: string | undefined;
	/**
	 * <p>The confirmation code sent by a user's request to retrieve a forgotten password. For more information,
	 *             see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html">ForgotPassword</a>.</p>
	 */
	ConfirmationCode: string | undefined;
	/**
	 * <p>The password sent by a user's request to retrieve a forgotten password.</p>
	 */
	Password: string | undefined;
	/**
	 * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ConfirmForgotPassword</code> calls.</p>
	 */
	AnalyticsMetadata?: AnalyticsMetadataType;
	/**
	 * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
	 */
	UserContextData?: UserContextDataType;
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p>
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ConfirmForgotPassword API action, Amazon Cognito
	 *             invokes the function that is assigned to the <i>post confirmation</i> trigger. When Amazon Cognito invokes this function, it passes a
	 *             JSON payload,
	 *             which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned
	 *             to the ClientMetadata parameter in your ConfirmForgotPassword request. In your function code in Lambda, you can process the
	 *             <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p>
	 *         <p>For more information,
	 *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a>
	 *             in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *          <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool
	 *                 configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
}
/**
 * <p>The response from the server that results from a user's request to retrieve a forgotten password.</p>
 */
export interface ConfirmForgotPasswordResponse {
}
export interface ConfirmSignUpCommandInput extends ConfirmSignUpRequest {
}
export interface ConfirmSignUpCommandOutput extends ConfirmSignUpResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to confirm registration of a user.</p>
 */
export interface ConfirmSignUpRequest {
	/**
	 * <p>The ID of the app client associated with the user pool.</p>
	 */
	ClientId: string | undefined;
	/**
	 * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.</p>
	 */
	SecretHash?: string;
	/**
	 * <p>The user name of the user whose registration you want to confirm.</p>
	 */
	Username: string | undefined;
	/**
	 * <p>The confirmation code sent by a user's request to confirm registration.</p>
	 */
	ConfirmationCode: string | undefined;
	/**
	 * <p>Boolean to be specified to force user confirmation irrespective of existing alias. By default set to <code>False</code>. If this parameter is set to
	 *             <code>True</code> and the phone number/email used for sign up confirmation already exists as an alias with a different user, the API call will migrate
	 *             the alias from the previous user to the newly created user being confirmed. If set to <code>False</code>, the API will throw an
	 *             <b>AliasExistsException</b> error.</p>
	 */
	ForceAliasCreation?: boolean;
	/**
	 * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ConfirmSignUp</code> calls.</p>
	 */
	AnalyticsMetadata?: AnalyticsMetadataType;
	/**
	 * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
	 */
	UserContextData?: UserContextDataType;
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p>
	 *
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ConfirmSignUp API action,
	 *             Amazon Cognito invokes the function that is assigned to the <i>post confirmation</i> trigger. When Amazon Cognito invokes this
	 *             function, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which
	 *             provides the data that you assigned to the ClientMetadata parameter in your ConfirmSignUp request. In your function code in Lambda,
	 *             you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p>
	 *         <p>For more information,
	 *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a>
	 *             in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *          <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool
	 *                 configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
}
/**
 * <p>Represents the response from the server for the registration confirmation.</p>
 */
export interface ConfirmSignUpResponse {
}
export interface DeleteUserCommandInput extends DeleteUserRequest {
}
export interface DeleteUserCommandOutput extends __MetadataBearer {
}
/**
 * <p>Represents the request to delete a user.</p>
 */
export interface DeleteUserRequest {
	/**
	 * <p>The access token from a request to delete a user.</p>
	 */
	AccessToken: string | undefined;
}
/**
 * <p>The device verifier against which it is authenticated.</p>
 */
export interface DeviceSecretVerifierConfigType {
	/**
	 * <p>The password verifier.</p>
	 */
	PasswordVerifier?: string;
	/**
	 * <p>The salt.</p>
	 */
	Salt?: string;
}
/**
 * <p>The device type.</p>
 */
export interface DeviceType {
	/**
	 * <p>The device key.</p>
	 */
	DeviceKey?: string;
	/**
	 * <p>The device attributes.</p>
	 */
	DeviceAttributes?: AttributeType[];
	/**
	 * <p>The creation date of the device.</p>
	 */
	DeviceCreateDate?: Date;
	/**
	 * <p>The last modified date of the device.</p>
	 */
	DeviceLastModifiedDate?: Date;
	/**
	 * <p>The date when the device was last authenticated.</p>
	 */
	DeviceLastAuthenticatedDate?: Date;
}
export interface ForgetDeviceCommandInput extends ForgetDeviceRequest {
}
export interface ForgetDeviceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Represents the request to forget the device.</p>
 */
export interface ForgetDeviceRequest {
	/**
	 * <p>The access token for the forgotten device request.</p>
	 */
	AccessToken?: string;
	/**
	 * <p>The device key.</p>
	 */
	DeviceKey: string | undefined;
}
export interface ForgotPasswordCommandInput extends ForgotPasswordRequest {
}
export interface ForgotPasswordCommandOutput extends ForgotPasswordResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to reset a user's password.</p>
 */
export interface ForgotPasswordRequest {
	/**
	 * <p>The ID of the client associated with the user pool.</p>
	 */
	ClientId: string | undefined;
	/**
	 * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.</p>
	 */
	SecretHash?: string;
	/**
	 * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
	 */
	UserContextData?: UserContextDataType;
	/**
	 * <p>The user name of the user for whom you want to enter a code to reset a forgotten password.</p>
	 */
	Username: string | undefined;
	/**
	 * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ForgotPassword</code> calls.</p>
	 */
	AnalyticsMetadata?: AnalyticsMetadataType;
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p>
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ForgotPassword API action,
	 *             Amazon Cognito invokes any functions that are assigned to the following triggers: <i>pre sign-up</i>, <i>custom message</i>,
	 *             and <i>user migration</i>. When Amazon Cognito invokes any of these functions, it passes a JSON
	 *             payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned
	 *             to the ClientMetadata parameter in your ForgotPassword request. In your function code in Lambda, you can process the
	 *             <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p>
	 *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows
	 *             with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *          <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool
	 *                 configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
}
/**
 * <p>Respresents the response from the server regarding the request to reset a password.</p>
 */
export interface ForgotPasswordResponse {
	/**
	 * <p>The code delivery details returned by the server in response to the request to reset a password.</p>
	 */
	CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
export interface GetCSVHeaderCommandOutput extends GetCSVHeaderResponse, __MetadataBearer {
}
/**
 * <p>Represents the response from the server to the request to get the header information of the CSV file for the user import job.</p>
 */
export interface GetCSVHeaderResponse {
	/**
	 * <p>The user pool ID for the user pool that the users are to be imported
	 *     into.</p>
	 */
	UserPoolId?: string;
	/**
	 * <p>The header information of the CSV file for the user import job.</p>
	 */
	CSVHeader?: string[];
}
export interface GetUserAttributeVerificationCodeCommandInput extends GetUserAttributeVerificationCodeRequest {
}
export interface GetUserAttributeVerificationCodeCommandOutput extends GetUserAttributeVerificationCodeResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to get user attribute verification.</p>
 */
export interface GetUserAttributeVerificationCodeRequest {
	/**
	 * <p>The access token returned by the server response to get the user attribute verification code.</p>
	 */
	AccessToken: string | undefined;
	/**
	 * <p>The attribute name returned by the server response to get the user attribute verification code.</p>
	 */
	AttributeName: string | undefined;
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p>
	 *
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the GetUserAttributeVerificationCode
	 *             API action, Amazon Cognito invokes the function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it
	 *             passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data
	 *             that you assigned to the ClientMetadata parameter in your GetUserAttributeVerificationCode request. In your function code in Lambda,
	 *             you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p>
	 *         <p>For more information,
	 *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a>
	 *             in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *          <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool
	 *                 configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
}
/**
 * <p>The verification code response returned by the server response to get the user attribute verification code.</p>
 */
export interface GetUserAttributeVerificationCodeResponse {
	/**
	 * <p>The code delivery details returned by the server in response to the request to get the user attribute verification code.</p>
	 */
	CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
export interface GetUserCommandInput extends GetUserRequest {
}
export interface GetUserCommandOutput extends GetUserResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to get information about the user.</p>
 */
export interface GetUserRequest {
	/**
	 * <p>The access token returned by the server response to get information about the user.</p>
	 */
	AccessToken: string | undefined;
}
/**
 * <p>Represents the response from the server from the request to get information about the user.</p>
 */
export interface GetUserResponse {
	/**
	 * <p>The user name of the user you want to retrieve from the get user request.</p>
	 */
	Username: string | undefined;
	/**
	 * <p>An array of name-value pairs representing user attributes.</p>
	 *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>
	 */
	UserAttributes: AttributeType[] | undefined;
	/**
	 * <p>
	 *             <i>This response parameter is no longer supported.</i> It provides information only about SMS MFA configurations. It doesn't provide information about time-based one-time
	 *             password (TOTP) software token MFA configurations. To look up information about either type of MFA configuration, use UserMFASettingList instead.</p>
	 */
	MFAOptions?: MFAOptionType[];
	/**
	 * <p>The user's preferred MFA setting.</p>
	 */
	PreferredMfaSetting?: string;
	/**
	 * <p>The MFA options that are activated for the user. The possible values in this list are <code>SMS_MFA</code> and <code>SOFTWARE_TOKEN_MFA</code>.</p>
	 */
	UserMFASettingList?: string[];
}
export interface GlobalSignOutCommandInput extends GlobalSignOutRequest {
}
/**
 * <p>Represents the request to sign out all devices.</p>
 */
export interface GlobalSignOutRequest {
	/**
	 * <p>The access token.</p>
	 */
	AccessToken: string | undefined;
}
export interface InitiateAuthCommandInput extends InitiateAuthRequest {
}
export interface InitiateAuthCommandOutput extends InitiateAuthResponse, __MetadataBearer {
}
/**
 * <p>Initiates the authentication request.</p>
 */
export interface InitiateAuthRequest {
	/**
	 * <p>The authentication flow for this call to run. The API action will depend on this value. For example:</p>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>REFRESH_TOKEN_AUTH</code> takes in a valid refresh token and returns new tokens.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>USER_SRP_AUTH</code> takes in <code>USERNAME</code> and <code>SRP_A</code> and returns the SRP variables to be used for next challenge execution.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>USER_PASSWORD_AUTH</code> takes in <code>USERNAME</code> and <code>PASSWORD</code> and returns the next challenge or tokens.</p>
	 *             </li>
	 *          </ul>
	 *         <p>Valid values include:</p>
	 *
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>USER_SRP_AUTH</code>: Authentication flow for the Secure Remote Password (SRP) protocol.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>REFRESH_TOKEN_AUTH</code>/<code>REFRESH_TOKEN</code>: Authentication flow for refreshing the access token and ID token by supplying a valid refresh token.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>CUSTOM_AUTH</code>: Custom authentication flow.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>USER_PASSWORD_AUTH</code>: Non-SRP authentication flow; USERNAME and PASSWORD are passed directly. If a user migration Lambda trigger is set, this flow will invoke the user migration
	 *             Lambda if it doesn't find the USERNAME in the user pool. </p>
	 *             </li>
	 *          </ul>
	 *         <p>
	 *             <code>ADMIN_NO_SRP_AUTH</code> isn't a valid value.</p>
	 */
	AuthFlow: AuthFlowType | string | undefined;
	/**
	 * <p>The authentication parameters. These are inputs corresponding to the <code>AuthFlow</code> that you're invoking. The required values depend on the value of <code>AuthFlow</code>:</p>
	 *
	 *          <ul>
	 *             <li>
	 *                <p>For <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required), <code>SRP_A</code> (required), <code>SECRET_HASH</code> (required if the app client is configured with a client secret),
	 *             <code>DEVICE_KEY</code>.</p>
	 *             </li>
	 *             <li>
	 *                <p>For <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code> (required), <code>SECRET_HASH</code> (required if the app client is configured with a client secret),
	 *             <code>DEVICE_KEY</code>.</p>
	 *             </li>
	 *             <li>
	 *                <p>For <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required), <code>SECRET_HASH</code> (if app client is configured with client secret), <code>DEVICE_KEY</code>. To start the
	 *             authentication flow with password verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The SRP_A Value)</code>.</p>
	 *             </li>
	 *          </ul>
	 */
	AuthParameters?: {
		[key: string]: string;
	};
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for certain custom workflows that this action triggers.</p>
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the InitiateAuth API action, Amazon Cognito invokes the Lambda functions that are specified for various
	 *             triggers. The ClientMetadata value is passed as input to the functions for only the following triggers:</p>
	 *          <ul>
	 *             <li>
	 *                <p>Pre signup</p>
	 *             </li>
	 *             <li>
	 *                <p>Pre authentication</p>
	 *             </li>
	 *             <li>
	 *                <p>User migration</p>
	 *             </li>
	 *          </ul>
	 *         <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON
	 *             payload, which the function receives as input. This payload contains a <code>validationData</code> attribute, which provides the data that you assigned to the ClientMetadata parameter in your
	 *             InitiateAuth request. In your function code in Lambda, you can process the <code>validationData</code> value to enhance your workflow for your specific needs.</p>
	 *         <p>When you use the InitiateAuth API action, Amazon Cognito also invokes the functions for the following triggers, but it doesn't provide the ClientMetadata value as input:</p>
	 *          <ul>
	 *             <li>
	 *                <p>Post authentication</p>
	 *             </li>
	 *             <li>
	 *                <p>Custom message</p>
	 *             </li>
	 *             <li>
	 *                <p>Pre token generation</p>
	 *             </li>
	 *             <li>
	 *                <p>Create auth challenge</p>
	 *             </li>
	 *             <li>
	 *                <p>Define auth challenge</p>
	 *             </li>
	 *             <li>
	 *                <p>Verify auth challenge</p>
	 *             </li>
	 *          </ul>
	 *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with
	 *             Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *         <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration
	 *                     doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *         </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
	/**
	 * <p>The app client ID.</p>
	 */
	ClientId: string | undefined;
	/**
	 * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>InitiateAuth</code> calls.</p>
	 */
	AnalyticsMetadata?: AnalyticsMetadataType;
	/**
	 * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
	 */
	UserContextData?: UserContextDataType;
}
/**
 * <p>Initiates the authentication response.</p>
 */
export interface InitiateAuthResponse {
	/**
	 * <p>The name of the challenge that you're responding to with this call. This name is returned in the <code>AdminInitiateAuth</code> response if you must pass another challenge.</p>
	 *         <p>Valid values include the following. Note that all of these challenges require
	 *             <code>USERNAME</code> and <code>SECRET_HASH</code> (if applicable) in the parameters.</p>
	 *
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>SMS_MFA</code>: Next challenge is to supply an <code>SMS_MFA_CODE</code>, delivered via SMS.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>PASSWORD_VERIFIER</code>: Next challenge is to supply <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after the
	 *             client-side SRP calculations.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DEVICE_SRP_AUTH</code>: If device tracking was activated on your user pool and the previous challenges were passed, this challenge is returned so that Amazon Cognito can start tracking
	 *             this device.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to <code>PASSWORD_VERIFIER</code>, but for devices only.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their passwords after successful first login. This challenge should be passed with <code>NEW_PASSWORD</code>
	 *             and any other required attributes.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters
	 *             <code>MFA_CAN_SETUP</code> value. </p>
	 *                    <p> To set up software token MFA, use the session returned here from <code>InitiateAuth</code> as an input to <code>AssociateSoftwareToken</code>. Use the session returned by
	 *                        <code>VerifySoftwareToken</code> as an input to <code>RespondToAuthChallenge</code> with challenge name <code>MFA_SETUP</code> to complete sign-in. To set up SMS MFA, an
	 *                        administrator should help the user to add a phone number to their account, and then the user should call <code>InitiateAuth</code> again to restart sign-in.</p>
	 *             </li>
	 *          </ul>
	 */
	ChallengeName?: ChallengeNameType | string;
	/**
	 * <p>The session that should pass both ways in challenge-response calls to the service. If the caller must pass another challenge, they return a session with other challenge parameters. This session
	 *             should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.</p>
	 */
	Session?: string;
	/**
	 * <p>The challenge parameters. These are returned in the <code>InitiateAuth</code> response if you must pass another challenge. The responses in this parameter should be used to compute inputs to
	 *             the next call (<code>RespondToAuthChallenge</code>). </p>
	 *         <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if applicable).</p>
	 */
	ChallengeParameters?: {
		[key: string]: string;
	};
	/**
	 * <p>The result of the authentication response. This result is only returned if the caller doesn't need to pass another challenge. If the caller does need to pass another challenge before it gets
	 *             tokens, <code>ChallengeName</code>, <code>ChallengeParameters</code>, and <code>Session</code> are returned.</p>
	 */
	AuthenticationResult?: AuthenticationResultType;
}
export interface ListDevicesCommandInput extends ListDevicesRequest {
}
export interface ListDevicesCommandOutput extends ListDevicesResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to list the devices.</p>
 */
export interface ListDevicesRequest {
	/**
	 * <p>The access tokens for the request to list devices.</p>
	 */
	AccessToken: string | undefined;
	/**
	 * <p>The limit of the device request.</p>
	 */
	Limit?: number;
	/**
	 * <p>The pagination token for the list request.</p>
	 */
	PaginationToken?: string;
}
/**
 * <p>Represents the response to list devices.</p>
 */
export interface ListDevicesResponse {
	/**
	 * <p>The devices returned in the list devices response.</p>
	 */
	Devices?: DeviceType[];
	/**
	 * <p>The pagination token for the list device response.</p>
	 */
	PaginationToken?: string;
}
/**
 * <p>
 *             <i>This data type is no longer supported.</i> You can use it
 *             only for SMS multi-factor authentication (MFA) configurations. You can't use it for time-based one-time password (TOTP) software token MFA configurations.</p>
 */
export interface MFAOptionType {
	/**
	 * <p>The delivery medium to send the MFA code. You can use this parameter to set only the <code>SMS</code> delivery medium value.</p>
	 */
	DeliveryMedium?: DeliveryMediumType | string;
	/**
	 * <p>The attribute name of the MFA option type. The only valid value is <code>phone_number</code>.</p>
	 */
	AttributeName?: string;
}
/**
 * <p>The new device metadata type.</p>
 */
export interface NewDeviceMetadataType {
	/**
	 * <p>The device key.</p>
	 */
	DeviceKey?: string;
	/**
	 * <p>The device group key.</p>
	 */
	DeviceGroupKey?: string;
}
export interface ResendConfirmationCodeCommandInput extends ResendConfirmationCodeRequest {
}
export interface ResendConfirmationCodeCommandOutput extends ResendConfirmationCodeResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to resend the confirmation code.</p>
 */
export interface ResendConfirmationCodeRequest {
	/**
	 * <p>The ID of the client associated with the user pool.</p>
	 */
	ClientId: string | undefined;
	/**
	 * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.</p>
	 */
	SecretHash?: string;
	/**
	 * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
	 */
	UserContextData?: UserContextDataType;
	/**
	 * <p>The <code>username</code> attribute of the user to whom you want to resend a confirmation code.</p>
	 */
	Username: string | undefined;
	/**
	 * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ResendConfirmationCode</code> calls.</p>
	 */
	AnalyticsMetadata?: AnalyticsMetadataType;
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p>
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the ResendConfirmationCode API action, Amazon Cognito
	 *             invokes the function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it passes a
	 *             JSON
	 *             payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned
	 *             to the ClientMetadata parameter in your ResendConfirmationCode request. In your function code in Lambda, you can process the <code>clientMetadata</code>
	 *             value to enhance your workflow for your specific needs.</p>
	 *         <p>For more information,
	 *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a>
	 *             in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *          <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool
	 *                 configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
}
/**
 * <p>The response from the server when Amazon Cognito makes the request to resend a confirmation code.</p>
 */
export interface ResendConfirmationCodeResponse {
	/**
	 * <p>The code delivery details returned by the server in response to the request to resend the confirmation code.</p>
	 */
	CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
export interface RespondToAuthChallengeCommandInput extends RespondToAuthChallengeRequest {
}
export interface RespondToAuthChallengeCommandOutput extends RespondToAuthChallengeResponse, __MetadataBearer {
}
/**
 * <p>The request to respond to an authentication challenge.</p>
 */
export interface RespondToAuthChallengeRequest {
	/**
	 * <p>The app client ID.</p>
	 */
	ClientId: string | undefined;
	/**
	 * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
	 *         <p>
	 *             <code>ADMIN_NO_SRP_AUTH</code> isn't a valid value.</p>
	 */
	ChallengeName: ChallengeNameType | string | undefined;
	/**
	 * <p>The session that should be passed both ways in challenge-response calls to the service. If <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call determines
	 *             that the caller must pass another challenge, they return a session with other challenge parameters. This session should be passed as it is to the next <code>RespondToAuthChallenge</code>
	 *             API call.</p>
	 */
	Session?: string;
	/**
	 * <p>The challenge responses. These are inputs corresponding to the value of <code>ChallengeName</code>, for example:</p>
	 *          <note>
	 *             <p>
	 *                <code>SECRET_HASH</code> (if app client is configured with client secret) applies to all of the inputs that follow (including <code>SOFTWARE_TOKEN_MFA</code>).</p>
	 *          </note>
	 *          <ul>
	 *             <li>
	 *                <p>
	 *                   <code>SMS_MFA</code>: <code>SMS_MFA_CODE</code>, <code>USERNAME</code>.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>PASSWORD_VERIFIER</code>: <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, <code>TIMESTAMP</code>, <code>USERNAME</code>.</p>
	 *                <note>
	 *                   <p>
	 *                      <code>PASSWORD_VERIFIER</code> requires <code>DEVICE_KEY</code> when signing in with a remembered device.</p>
	 *                </note>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>NEW_PASSWORD_REQUIRED</code>: <code>NEW_PASSWORD</code>, any other required attributes, <code>USERNAME</code>. </p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>SOFTWARE_TOKEN_MFA</code>: <code>USERNAME</code> and <code>SOFTWARE_TOKEN_MFA_CODE</code> are required attributes.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DEVICE_SRP_AUTH</code> requires <code>USERNAME</code>, <code>DEVICE_KEY</code>, <code>SRP_A</code> (and <code>SECRET_HASH</code>).</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>DEVICE_PASSWORD_VERIFIER</code> requires everything that <code>PASSWORD_VERIFIER</code> requires, plus <code>DEVICE_KEY</code>.</p>
	 *             </li>
	 *             <li>
	 *                <p>
	 *                   <code>MFA_SETUP</code> requires <code>USERNAME</code>, plus you must use the session value returned by <code>VerifySoftwareToken</code> in the <code>Session</code> parameter.</p>
	 *             </li>
	 *          </ul>
	 */
	ChallengeResponses?: {
		[key: string]: string;
	};
	/**
	 * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>RespondToAuthChallenge</code> calls.</p>
	 */
	AnalyticsMetadata?: AnalyticsMetadataType;
	/**
	 * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
	 */
	UserContextData?: UserContextDataType;
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p>
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the RespondToAuthChallenge API action, Amazon Cognito
	 *             invokes any functions that are assigned to the following triggers: <i>post authentication</i>, <i>pre token generation</i>,
	 *             <i>define auth challenge</i>, <i>create auth challenge</i>, and <i>verify auth challenge</i>. When Amazon Cognito
	 *             invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a <code>clientMetadata</code>
	 *             attribute, which provides the data that you assigned to the ClientMetadata parameter in your RespondToAuthChallenge request. In your function code in
	 *             Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for your specific needs.</p>
	 *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing
	 *             User Pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *          <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration
	 *                 doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
}
/**
 * <p>The response to respond to the authentication challenge.</p>
 */
export interface RespondToAuthChallengeResponse {
	/**
	 * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
	 */
	ChallengeName?: ChallengeNameType | string;
	/**
	 * <p>The session that should be passed both ways in challenge-response calls to the service. If the caller must pass another challenge, they return a session with other challenge parameters.
	 *             This session should be passed as it is to the next <code>RespondToAuthChallenge</code> API call.</p>
	 */
	Session?: string;
	/**
	 * <p>The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
	 */
	ChallengeParameters?: {
		[key: string]: string;
	};
	/**
	 * <p>The result returned by the server in response to the request to respond to the authentication challenge.</p>
	 */
	AuthenticationResult?: AuthenticationResultType;
}
/**
 * <p>The type used for enabling SMS multi-factor authentication (MFA) at the user level. Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type
 *             is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted. If you
 *             would like MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.</p>
 */
export interface SMSMfaSettingsType {
	/**
	 * <p>Specifies whether SMS text message MFA is activated. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is
	 *             turned on and the device has been trusted.</p>
	 */
	Enabled?: boolean;
	/**
	 * <p>Specifies whether SMS is the preferred MFA method.</p>
	 */
	PreferredMfa?: boolean;
}
export interface SetUserMFAPreferenceCommandInput extends SetUserMFAPreferenceRequest {
}
export interface SetUserMFAPreferenceCommandOutput extends SetUserMFAPreferenceResponse, __MetadataBearer {
}
export interface SetUserMFAPreferenceRequest {
	/**
	 * <p>The SMS text message multi-factor authentication (MFA) settings.</p>
	 */
	SMSMfaSettings?: SMSMfaSettingsType;
	/**
	 * <p>The time-based one-time password software token MFA settings.</p>
	 */
	SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
	/**
	 * <p>The access token for the user.</p>
	 */
	AccessToken: string | undefined;
}
export interface SetUserMFAPreferenceResponse {
}
export interface SignUpCommandInput extends SignUpRequest {
}
export interface SignUpCommandOutput extends SignUpResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to register a user.</p>
 */
export interface SignUpRequest {
	/**
	 * <p>The ID of the client associated with the user pool.</p>
	 */
	ClientId: string | undefined;
	/**
	 * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message.</p>
	 */
	SecretHash?: string;
	/**
	 * <p>The user name of the user you want to register.</p>
	 */
	Username: string | undefined;
	/**
	 * <p>The password of the user you want to register.</p>
	 */
	Password: string | undefined;
	/**
	 * <p>An array of name-value pairs representing user attributes.</p>
	 *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>
	 */
	UserAttributes?: AttributeType[];
	/**
	 * <p>The validation data in the request to register a user.</p>
	 */
	ValidationData?: AttributeType[];
	/**
	 * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>SignUp</code> calls.</p>
	 */
	AnalyticsMetadata?: AnalyticsMetadataType;
	/**
	 * <p>Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
	 */
	UserContextData?: UserContextDataType;
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.</p>
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the SignUp API action, Amazon Cognito
	 *             invokes any functions that are assigned to the following triggers: <i>pre sign-up</i>, <i>custom message</i>,
	 *             and <i>post confirmation</i>. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function
	 *             receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you assigned to the
	 *             ClientMetadata parameter in your SignUp request. In your function code in Lambda, you can process the <code>clientMetadata</code>
	 *             value to enhance your workflow for your specific needs.</p>
	 *         <p>For more information,
	 *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a>
	 *             in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *         <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool
	 *                     configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *         </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
}
/**
 * <p>The response from the server for a registration request.</p>
 */
export interface SignUpResponse {
	/**
	 * <p>A response from the server indicating that a user registration has been confirmed.</p>
	 */
	UserConfirmed: boolean | undefined;
	/**
	 * <p>The code delivery details returned by the server response to the user registration request.</p>
	 */
	CodeDeliveryDetails?: CodeDeliveryDetailsType;
	/**
	 * <p>The UUID of the authenticated user. This isn't the same as <code>username</code>.</p>
	 */
	UserSub: string | undefined;
}
/**
 * <p>The type used for enabling software token MFA at the user level. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking
 *             is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive
 *             Authentication for the user pool.</p>
 */
export interface SoftwareTokenMfaSettingsType {
	/**
	 * <p>Specifies whether software token MFA is activated. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned
	 *             on and the device has been trusted.</p>
	 */
	Enabled?: boolean;
	/**
	 * <p>Specifies whether software token MFA is the preferred MFA method.</p>
	 */
	PreferredMfa?: boolean;
}
export interface UpdateDeviceStatusCommandInput extends UpdateDeviceStatusRequest {
}
export interface UpdateDeviceStatusCommandOutput extends UpdateDeviceStatusResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to update the device status.</p>
 */
export interface UpdateDeviceStatusRequest {
	/**
	 * <p>The access token.</p>
	 */
	AccessToken: string | undefined;
	/**
	 * <p>The device key.</p>
	 */
	DeviceKey: string | undefined;
	/**
	 * <p>The status of whether a device is remembered.</p>
	 */
	DeviceRememberedStatus?: DeviceRememberedStatusType | string;
}
/**
 * <p>The response to the request to update the device status.</p>
 */
export interface UpdateDeviceStatusResponse {
}
export interface UpdateUserAttributesCommandInput extends UpdateUserAttributesRequest {
}
export interface UpdateUserAttributesCommandOutput extends UpdateUserAttributesResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to update user attributes.</p>
 */
export interface UpdateUserAttributesRequest {
	/**
	 * <p>An array of name-value pairs representing user attributes.</p>
	 *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>
	 */
	UserAttributes: AttributeType[] | undefined;
	/**
	 * <p>The access token for the request to update user attributes.</p>
	 */
	AccessToken: string | undefined;
	/**
	 * <p>A map of custom key-value pairs that you can provide as input for any custom workflows that this action initiates. </p>
	 *         <p>You create custom workflows by assigning Lambda functions to user pool triggers. When you use the UpdateUserAttributes API action, Amazon Cognito invokes the
	 *             function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this function, it passes a
	 *             JSON
	 *             payload, which the function receives as input. This payload contains a <code>clientMetadata</code> attribute, which provides the data that you
	 *             assigned to the ClientMetadata parameter in your UpdateUserAttributes request. In your function code in Lambda, you can process the <code>clientMetadata</code>
	 *             value to enhance your workflow for your specific needs.</p>
	 *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool
	 *             Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
	 *
	 *          <note>
	 *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the following:</p>
	 *             <ul>
	 *                <li>
	 *                   <p>Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool
	 *                 configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Validate the ClientMetadata value.</p>
	 *                </li>
	 *                <li>
	 *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive information.</p>
	 *                </li>
	 *             </ul>
	 *          </note>
	 */
	ClientMetadata?: {
		[key: string]: string;
	};
}
/**
 * <p>Represents the response from the server for the request to update user attributes.</p>
 */
export interface UpdateUserAttributesResponse {
	/**
	 * <p>The code delivery details list from the server for the request to update user attributes.</p>
	 */
	CodeDeliveryDetailsList?: CodeDeliveryDetailsType[];
}
/**
 * <p>Contextual data, such as the user's device fingerprint, IP address, or location, used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
 */
export interface UserContextDataType {
	/**
	 * <p>Contextual data, such as the user's device fingerprint, IP address, or location, used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
	 */
	EncodedData?: string;
}
export interface VerifySoftwareTokenCommandInput extends VerifySoftwareTokenRequest {
}
export interface VerifySoftwareTokenCommandOutput extends VerifySoftwareTokenResponse, __MetadataBearer {
}
export interface VerifySoftwareTokenRequest {
	/**
	 * <p>The access token.</p>
	 */
	AccessToken?: string;
	/**
	 * <p>The session that should be passed both ways in challenge-response calls to the service.</p>
	 */
	Session?: string;
	/**
	 * <p>The one- time password computed using the secret code returned by
	 *             <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html">AssociateSoftwareToken</a>.</p>
	 */
	UserCode: string | undefined;
	/**
	 * <p>The friendly device name.</p>
	 */
	FriendlyDeviceName?: string;
}
export interface VerifySoftwareTokenResponse {
	/**
	 * <p>The status of the verify software token.</p>
	 */
	Status?: VerifySoftwareTokenResponseType | string;
	/**
	 * <p>The session that should be passed both ways in challenge-response calls to the service.</p>
	 */
	Session?: string;
}
export interface VerifyUserAttributeCommandInput extends VerifyUserAttributeRequest {
}
export interface VerifyUserAttributeCommandOutput extends VerifyUserAttributeResponse, __MetadataBearer {
}
/**
 * <p>Represents the request to verify user attributes.</p>
 */
export interface VerifyUserAttributeRequest {
	/**
	 * <p>The access token of the request to verify user attributes.</p>
	 */
	AccessToken: string | undefined;
	/**
	 * <p>The attribute name in the request to verify user attributes.</p>
	 */
	AttributeName: string | undefined;
	/**
	 * <p>The verification code in the request to verify user attributes.</p>
	 */
	Code: string | undefined;
}
/**
 * <p>A container representing the response from the server from the request to verify user attributes.</p>
 */
export interface VerifyUserAttributeResponse {
}

export {};
