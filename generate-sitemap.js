import fs from "fs";
import { SitemapStream } from "sitemap";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const routes = [
	{ path: "/" },
	{ path: "/about" },
	{ path: "/home" },
	{ path: "/privacy-policy" },
	{ path: "/contact-us" },
	{ path: "/setting" },
	{ path: "/login" },
	{ path: "/attraction" },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sitemap = new SitemapStream({ hostname: "http://localhost:3006" });

// Iterate over your React routes and add them to the sitemap
routes.forEach((route) => {
	sitemap.write({ url: route.path });
});

// End sitemap
sitemap.end();

// Stream sitemap to a file
const writeStream = fs.createWriteStream(
	resolve(__dirname, "./public/sitemap.xml"),
);
sitemap.pipe(writeStream);
