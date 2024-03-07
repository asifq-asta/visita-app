import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { VITE_API_URL_QRAPHQL } from "@helpers/constants";

export const createApolloClient = (
	authToken: string,
): ApolloClient<NormalizedCacheObject> => {
	const httpLink = new HttpLink({
		uri: VITE_API_URL_QRAPHQL,
	});

	const authLink = setContext((_, { headers }) => {
		if (_.operationName === "auth") {
			return {
				headers: {
					...headers,
				},
			};
		}
		return {
			headers: {
				...headers,
				Authorization: authToken ? `Bearer ${authToken}` : "",
			},
		};
	});

	return new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});
};
