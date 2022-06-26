<template>
    <div class="card card-w70">
        <div v-if="rezInfo.length">
            <component
                v-for="info in rezInfo"
                :key="info.id"
                :is="'app-' + info.type"
                v-bind="{value: info.text, icon: info.icon, link: info.link, admin}"
            >
            </component>
        </div>
        <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
</template>

<script>
import AppTitle from "@/components/infoPart/AppTitle";
import AppAvatar from "@/components/infoPart/AppAvatar";
import AppSubtitle from "@/components/infoPart/AppSubtitle";
import AppText from "@/components/infoPart/AppText";
import AppLink from "@/components/infoPart/AppLink";

export default {
    name: "AppInfo",
    components: {
        AppTitle,
        AppAvatar,
        AppSubtitle,
        AppText,
        AppLink
    },

    props: ['rezInfo', 'admin'],
}
</script>

<style scoped>

</style>