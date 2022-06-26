<template>
    <div class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <a class="popup__close">
                    x
                </a>
                <p v-if="err.message" style="color: red">{{ err.message }}</p>
                <p v-if="err.errMain" style="color: red">{{ err.errMain }}</p>
                <component
                    v-if="modal.type"
                    :is="'app-' + modal.type"
                    v-bind="{value: modal.name, type: modal.type}"
                    @getAuthForm="getAuth"
                ></component>
                <p>login: hello@mail.com </p>
                <p>password: 123123</p>
                <p>but please dont litter resume</p>
            </div>
        </div>
    </div>
</template>

<script>
import AppLogin from "@/components/authPart/AppLogin";
import AppReg from "@/components/authPart/AppReg";

export default {
    name: "AppPopup",
    components: {
        AppLogin, AppReg
    },
    props: ['modal'],
    data() {
        return {
            err: {
                message: '',
                errMain: ''
            }
        }
    },


    methods: {
        getAuth(email, password) {
            const KEY = 'AIzaSyCs-CgCIcPDpDxsPN-yHVIDPI2juN_3FLo'
            return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password,
                    returnSecureToken: true
                })
            })
                .then(response => response.json())
                .then(token => {
                    if(token.error) {
                        this.err.errMain = token.error.message
                        return
                    }

                    return token.idToken
                })
                .then(this.isAdmin)
        },
        isAdmin(token) {
            if (!token) {
                this.err.message = 'Неверный логин или пароль'
                return
            } else {
                this.err.message = ''
            }
            this.$emit('isAvailableAuth', token)
        }
    }
}
</script>

<style scoped>

</style>