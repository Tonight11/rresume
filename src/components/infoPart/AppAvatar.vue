<template>
    <div class="info__line" v-if="this.$attrs.value.includes('https://')">
        <div class="avatar">
            <img :src="this.$attrs.value" alt="">
        </div>
    </div>
    <div v-else>
        <img :src="this.$attrs.value" :alt="this.$attrs.value">
    </div>
</template>

<script>

export default {
    name: "AppAvatar",

}
</script>

<style scoped>
.avatar {
    margin: 0 auto;
}
.avatar img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;

}

</style>