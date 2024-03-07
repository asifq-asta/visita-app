// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";
import arTranslation from "./locales/ar.json";

const resources = {
	en: { translation: enTranslation },
	es: { translation: esTranslation },
	ar: { translation: arTranslation },
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
