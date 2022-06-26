export default {
    install(app, options) {

        let language = 'ru'

        const changeLanguage = name => {
            language = name
        }


        app.config.globalProperties.$i18n = key => {
            return key.split('.').reduce((words, i)=> {
                return words[i]
            },options[language])
        }

        app.provide('currentLanguage', changeLanguage)
    }
}