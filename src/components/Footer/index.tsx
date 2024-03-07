import React from "react";
import { IonCol, IonFooter, IonRow, IonToolbar } from "@ionic/react";
import "./index.css"; // Import your custom CSS file
import { useStoryblok } from "@storyblok/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SocialSharingButton from "@components/SocialSharingButton";
import { logoWhatsapp, mailOutline, callOutline } from "ionicons/icons";

const Footer: React.FC = () => {
	const { i18n } = useTranslation();
	let lang = i18n.language;
	let slug = "footer";

	const { content } = useStoryblok(slug, {
		version: "published",
		language: lang,
	});
	if (!content) {
		return <div>Loading...</div>;
	}

	const shareViaWhatsApp = () => {
		const shareUrl = "App url link or message ";
		const text = "Hi please download visita application";
		window.open(
			`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${encodeURIComponent(shareUrl)}`,
		);
	};

	const shareViaEmail = () => {
		const email = "abc@gmail.com";
		const subject = "visita application";
		const body = "Hi developer please download visita application";
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	};

	const shareViaPhone = () => {
		const phoneNumber = "1234567890";
		window.location.href = `tel:${phoneNumber}`;
	};

	return (
		<IonFooter className="footer">
			<IonToolbar>
				<IonRow className="ion-align-items-center">
					{content &&
						content.body.map(
							(item: {
								_uid: React.Key | null | undefined;
								link: { url: any };
								label: string;
							}) => (
								<IonCol key={item._uid}>
									{item.link && item.link.url && (
										<Link to={item.link.url}>{item.label}</Link>
									)}
								</IonCol>
							),
						)}
					<IonCol>
						<SocialSharingButton
							onClick={shareViaWhatsApp}
							icon={logoWhatsapp}
							size="small"
						/>
					</IonCol>
					<IonCol>
						<SocialSharingButton
							onClick={shareViaEmail}
							icon={mailOutline}
							size="small"
						/>
					</IonCol>
					<IonCol>
						<SocialSharingButton
							onClick={shareViaPhone}
							icon={callOutline}
							size="small"
						/>
					</IonCol>
				</IonRow>
			</IonToolbar>
		</IonFooter>
	);
};

export default Footer;
