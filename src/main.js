import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import languagePlugin from "@/languagePlugin";


const ru = {
    app: {
        typeBlock: 'Тип блока',
        valueBlock: 'Значение',
        btnBlock: 'Добавить'
    },
    option: {
        title: 'Заголовок'
    }
}
const en = {
    app: {
        typeBlock: 'Block type',
        valueBlock: 'Value',
        btnBlock: 'Add'
    },
    option: {
        title: 'Title'
    }
}


const app = createApp(App)

app.use(languagePlugin, {ru,en})

app.mount('#app')
