import path from "path";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), legacy()],
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@theme": path.resolve(__dirname, "src/theme"),
			"@validations": path.resolve(__dirname, "src/validations"),
			"@interfaces": path.resolve(__dirname, "src/interfaces"),
			"@service": path.resolve(__dirname, "src/service"),
			"@redux": path.resolve(__dirname, "src/redux"),
			"@helpers": path.resolve(__dirname, "src/helpers"),
			"@graphql": path.resolve(__dirname, "src/graphql"),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
	},
});
