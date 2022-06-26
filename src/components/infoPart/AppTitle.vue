<template>
    <div class="info__line">
        <h1>
            {{ this.$attrs.value }}
        </h1>
    </div>
</template>

<script>

export default {
    name: "AppTitle",
    data() {
        return {
            color: 'red',
            styleType: 'color'
        }
    },
}
</script>

<style scoped>
    h1  {
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        transition: all .3s linear;
    }
</style>