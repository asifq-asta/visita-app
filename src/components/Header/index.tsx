import React from "react";
import { IonHeader, IonToolbar, IonRow, IonCol, IonItem } from "@ionic/react";
import { Link } from "react-router-dom";
import { useStoryblok } from "@storyblok/react";
import LanguageToggle from "@components/LanguageToggle";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
	const slug = "header";
	const { i18n } = useTranslation();

	let lang = i18n.language;
	const { content } = useStoryblok(slug, {
		version: "published",
		language: lang,
	});

	return (
		<IonHeader>
			<IonToolbar>
				<IonRow className="header-row ion-align-items-center">
					{/* Logo */}
					<IonCol
						style={{
							textAlign: "center",
						}}
					>
						Visita
					</IonCol>
					{/* Navigation Links */}
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
					{/* Language Toggle */}
					<IonCol size-md="1" className="ion-text-end">
						<IonItem>
							<LanguageToggle />
						</IonItem>
					</IonCol>
				</IonRow>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
