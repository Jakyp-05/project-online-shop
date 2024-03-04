import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    lang: "en",
    debug: true,
    recources: {
        en: {
            translation: {
                "key": "hello world"
            }
        }
    }
})

export default i18n