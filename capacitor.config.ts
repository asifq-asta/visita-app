import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.visita",
	appName: "visita",
	webDir: "dist",
	server: {
		androidScheme: "https",
	},
	plugins: {
		PushNotifications: {
			presentationOptions: ["badge", "sound", "alert"],
		},
	},
};

export default config;
