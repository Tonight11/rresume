<template>
    <ul class="card container ">
        <li class="menu" v-for="item in nav" :key="item.name" @click="$emit('menu-handler', item)">{{ item.name }}</li>
    </ul>
</template>

<script>
export default {
    name: "AppAuth",
    props: ['nav']
}
</script>

<style scoped>
ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}

.menu {
    list-style: none;

    cursor: pointer;
}
</style>