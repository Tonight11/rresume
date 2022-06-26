<template>
    <button class="btn danger" @click="changeLangEN">EN</button>
    <button class="btn danger" @click="changeLangRU">RU</button>
    <teleport to="body">
        <app-popup
            v-if="modal.type"
            :modal="modal"
            @click="closeModal"
            @isAvailableAuth="saveAndClose"
        ></app-popup>
    </teleport>
    <div class="card center container" v-if="isAdmin"><h1>Привет, Админ Баястан</h1></div>
    <app-auth :nav="nav" v-if="!isAdmin" @menu-handler="setContent"></app-auth>
    <div class="container column">
        <app-form :admin="errAdmin" @get-info="partOfInfo" :key="lang"></app-form>
        <app-info :rez-info="rezInfo" :admin="isAdmin"></app-info>
    </div>
    <app-comments
        @load="getComments"
        :comments="comments"
        :load="load"
    ></app-comments>
</template>

<script>

import AppForm from "@/components/AppForm";
import AppInfo from "@/components/AppInfo";
import AppComments from "@/components/AppComments";
import AppAuth from "@/components/AppAuth";
import AppPopup from "@/components/authPart/AppPopup";


export default {
    inject: ['currentLanguage'],
    components: {
        AppForm,
        AppInfo,
        AppComments,
        AppAuth,
        AppPopup
    },

    data() {
        return {
            rezInfo: [],
            comments: [],
            nav: [
                {type: 'login', name: 'Войти'},
            ],
            load: false,
            modal: {},
            isAdmin: false,
            errAdmin: '',
            lang: 'ru'
        }

    },

    methods: {
        changeLangEN: function () {
            this.lang = 'en'
            this.currentLanguage(this.lang)
            this.$forceUpdate()
        },
        changeLangRU: function () {
            this.lang = 'ru'
            this.currentLanguage(this.lang)
            this.$forceUpdate()
        },
        partOfInfo(data) {
            if (this.isAdmin === true) {
                fetch('https://authresume-48602-default-rtdb.europe-west1.firebasedatabase.app/resume.json', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        ...data
                    })
                })
                    .then(response => response.json())
                    .then(prop => {
                        this.rezInfo.push({
                            id: prop.name,
                            ...data
                        })
                    })
                this.errAdmin = ''
                console.log(this.rezInfo)
            } else {
                this.errAdmin = 'Только админу можно менять Резюме'
            }

        },
        async getComments() {
            this.load = true
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=30')
            this.comments = await response.json()
            this.load = false
        },
        setContent(title) {
            this.modal = {
                type: title.type,
                name: title.name
            }
            document.body.classList.add('lock')
        },
        closeModal(e) {
            if (!e.target.classList.contains('popup__close')) {
                return
            }
            this.modal = {}
            document.body.classList.remove('lock')
        },
        saveAndClose() {
            this.isAdmin = true
            localStorage.setItem('idToken', JSON.stringify(true))
            this.modal = {}
            document.body.classList.remove('lock')
        },
        async onLoadIsAdmin() {
            const localToken = this.checkLocalStorage()

            if (localToken === true) {
                this.isAdmin = true
            }
            try {
                const response = await fetch('https://authresume-48602-default-rtdb.europe-west1.firebasedatabase.app/resume.json')
                const data = await response.json()
                if (!data) {
                    throw new Error('Резюме пока пуст')
                }
                this.rezInfo = Object.keys(data).map(key => data[key])
            } catch (error) {
                console.log(error.message)
            }
        },
        checkLocalStorage() {
            return JSON.parse(localStorage.getItem('idToken')) || ''
        }
    },
    mounted() {
        this.onLoadIsAdmin()
    },
}
</script>

<style>
h1 {
    margin: 0;
}

.avatar {
    display: flex;
    justify-content: center;
}

.avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
}
</style>
