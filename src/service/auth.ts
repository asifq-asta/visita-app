import {
	AUDIENCE,
	CLIENT_ID,
	CLIENT_SECRET,
	GRANT_TYPE,
	VITE_API_URL_REST,
} from "@helpers/constants";
import { POST } from "./httpUtility";

const authApi = async () => {
	try {
		const body = {
			clientId: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
			audience: AUDIENCE,
			grantType: GRANT_TYPE,
		};
		const data = await POST(VITE_API_URL_REST, body);
		return data;
	} catch (error) {
		return error;
	}
};

export { authApi };
