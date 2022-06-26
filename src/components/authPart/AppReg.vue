<template>

    <div class="popup__title">{{ this.$attrs.value }}</div>
    <div class="popup__content">
        <form class='popup__form' action='#'>

            <app-input
                my-class="popup__email"
                v-model.trim="email"
                place="Email"
                type="email"
            ></app-input>
            <app-input
                my-class="popup__password"
                v-model.trim="password"
                place="Password"
                type="password"
            ></app-input>

            <button class="popup__btn popup__btn-reg btn" type="submit">{{ this.$attrs.value }}</button>

        </form>
    </div>

</template>

<script>
import AppInput from "@/components/authPart/AppInput";

export default {
    name: "AppModal",
    components: {
        AppInput,
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        regForm() {
            console.log(this.email)
        }
    },
}
</script>

<style scoped>

</style>