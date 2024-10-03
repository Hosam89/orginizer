// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation files (e.g., en.json, fr.json)
import en from './en'
import de from './de'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback if selected language is not available
  interpolation: {
    escapeValue: false, // React already escapes values
  },
})

export default i18n
