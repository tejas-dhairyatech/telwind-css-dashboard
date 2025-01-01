import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi) // Load translations via HTTP
    .use(LanguageDetector) // Detect language
    .use(initReactI18next) // Bind React
    .init({
        fallbackLng: 'en', // Default language
        debug: true,       // Debug mode
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Path to JSON files
        },
        interpolation: {
            escapeValue: false, // React escapes by default
        },
    });

export default i18n;
