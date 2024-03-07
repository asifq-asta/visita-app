// src/components/LanguageToggle.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { IonSelect, IonSelectOption } from "@ionic/react";
import {
	LANGUAGE_OPTIONS,
	SELECT_LANGUAGE_PLACEHOLDER,
} from "@helpers/constants";

const LanguageToggle: React.FC = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (event: CustomEvent) => {
		i18n.changeLanguage(event.detail.value);
	};

	return (
		<IonSelect
			value={i18n.language}
			placeholder={SELECT_LANGUAGE_PLACEHOLDER}
			onIonChange={changeLanguage}
		>
			{LANGUAGE_OPTIONS.map((option) => (
				<IonSelectOption key={option.value} value={option.value}>
					{option.label}
				</IonSelectOption>
			))}
		</IonSelect>
	);
};

export default LanguageToggle;
