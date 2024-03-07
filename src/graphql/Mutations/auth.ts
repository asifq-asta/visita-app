import { gql } from "@apollo/client";

const AUTH_MUTATION = gql`
	mutation auth(
		$clientId: String!
		$clientSecret: String!
		$audience: String!
		$grantType: String!
	) {
		auth(
			client_id: $clientId
			client_secret: $clientSecret
			audience: $audience
			grant_type: $grantType
		) {
			access_token
			expires_in
		}
	}
`;

export { AUTH_MUTATION };
