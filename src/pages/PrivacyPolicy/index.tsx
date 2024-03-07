import React from "react";
import { useStoryblok } from "@storyblok/react";
import { useTranslation } from "react-i18next";
import "./index.css";

const PrivacyPolicy: React.FC = () => {
	const { i18n } = useTranslation();
	const { t } = useTranslation();

	let lang = i18n.language; // Set the language dynamically based on your application's preferences or user settings.
	let slug = `privacy-policy`;

	const story = useStoryblok(slug, { version: "published", language: lang });

	if (!story || !story.content) {
		return <div>Loading...</div>;
	}
	return (
		<div className="image-background">
			<div className="privacy-container">
				<h1 className="privacy-heading">{t("Privacy Policy")}</h1>
				<li>
					<p className="privacy-paragraph">{story.content.policy}</p>
				</li>
				<li>
					<p className="privacy-paragraph">{story.content.policy}</p>
				</li>
				<li>
					<p className="privacy-paragraph">{story.content.policy}</p>
				</li>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
