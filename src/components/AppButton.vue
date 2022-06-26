<template>
    <div class="btn-last" v-if="admin">
        <button class="btn" :class="type">{{name}}</button>
    </div>
</template>

<script>
export default {
    name: "AppButton",
    props: ['type', 'name', 'admin']
}
</script>

<style scoped>

</style>