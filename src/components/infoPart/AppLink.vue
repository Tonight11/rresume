<template>
    <div class="info__line">
        <p class="info__link">{{ this.$attrs.value }}</p>
        <a :href="this.$attrs.link" target="_blank">
            <img :src="this.$attrs.icon" alt="">
        </a>
    </div>
</template>

<script>

export default {
    name: "AppLink",

}
</script>

<style scoped>

img {
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    object-fit: cover;
}

a {

}
</style>