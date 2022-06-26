<template>
    <input
        :type="type"
        :placeholder="place"
        class='popup__input'
        :value="modelValue"
        :class="myClass"
        @input="getValue"
    />
</template>

<script>

export default {
    name: "AppInput",
    props: {
        myClass: String,
        type: String,
        modelValue: String,
        place: String
    },
    methods: {
        getValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
    },
}
</script>

<style scoped>

</style>