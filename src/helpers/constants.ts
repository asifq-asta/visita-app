import { Preferences } from "@capacitor/preferences";

export const MENU_TITLE = "Menu";
export const BUTTON_TEXT = "button";
export const SELECT_LANGUAGE_PLACEHOLDER = "Select Language";
export const MENU_ITEMS = [
	{ label: "About", path: "/about" },
	{ label: "Setting", path: "/setting" },
];
export const LANGUAGE_OPTIONS = [
	{ value: "en", label: "English" },
	{ value: "es", label: "Español" },
	{ value: "ar", label: "Arabic" },
];

export const {
	VITE_API_URL,
	VITE_SECRET_KEY,
	VITE_CLIENT_ID,
	VITE_CLIENT_SECRET,
	VITE_AUDIENCE,
	VITE_GRANT_TYPE,
	VITE_API_URL_QRAPHQL,
	VITE_ACCESS_TOKEN_DEFAULT,
	VITE_API_URL_REST,
	VITE_STORY_BLOK_ACCESS_TOKEN,
} = import.meta.env;

// JSON "set" example
export const setAuthToken = async (value: any) => {
	await Preferences.set({
		key: "token",
		value,
	});
};

export const getAuthToken = async () => {
	return (
		await Preferences.get({
			key: "token",
		})
	).value;
};

export const conversionRates: Record<string, number> = {
	USD: 1,
	AED: 3.67,
	INR: 74.5,
	EUR: 0.85,
};

export function calculateFutureTime(timestamp: number, minutes: number) {
	const futureTimestamp = timestamp + minutes * 60; // Convert minutes to seconds
	return futureTimestamp;
}

export const currentTimestamp = Math.floor(Date.now() / 1000);

export const CLIENT_ID = VITE_CLIENT_ID;
export const CLIENT_SECRET = VITE_CLIENT_SECRET;
export const AUDIENCE = VITE_AUDIENCE;
export const GRANT_TYPE = VITE_GRANT_TYPE;
