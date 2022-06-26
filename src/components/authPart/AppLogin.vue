<template>
    <div class="popup__title">{{ this.$attrs.value }}</div>
    <div class="popup__content">
        <form class='popup__form' action='#' @submit.prevent="authForm">
            <small v-if="err.email">{{ err.email }}</small>
            <app-input
                my-class="popup__email"
                v-model.trim="email"
                place="Email"
                type="email"
            ></app-input>
            <small v-if="err.password">{{ err.password }}</small>
            <app-input
                my-class="popup__password"
                v-model.trim="password"
                place="Password"
                type="password"
            ></app-input>


            <button class="popup__btn popup__btn-login btn" type="submit">{{ this.$attrs.value }}</button>

        </form>
    </div>
</template>

<script>
import AppInput from "@/components/authPart/AppInput";

export default {
    name: "AppLogin",
    components: {
        AppInput,
    },
    data() {
        return {
            email: '',
            password: '',
            err: {
                email: null,
                password: null,
            }
        }
    },
    methods: {
        authIsValid() {
            let isValid = true
            if (this.email.length <= 0) {
                this.err.email = 'Заполните email'
                isValid = false
            } else {
                this.err.email = ''
            }
            if (this.password.length <= 0) {
                this.err.password = 'Заполните пароль'
                isValid = false
            } else {
                this.err.password = ''
            }
            return isValid
        },
        authForm() {
            if (!this.authIsValid()) {
                return
            }
            this.$emit('getAuthForm', this.email, this.password)

        }
    }

}
</script>

<style scoped>
small {
    color: red;
}
</style>