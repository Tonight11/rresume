<template>
    <form class="card card-w30">
        <small v-if="admin.length">{{admin}}</small>
        <div class="form-control">
            <label for="type">{{ $i18n('app.typeBlock') }}</label>
            <select id="type" v-model="type">
                <option value="title">{{ $i18n('option.title') }}</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option>
                <option value="link">Ссылка</option>
            </select>
        </div>

        <div class="form-control">
            <label for="value">{{ $i18n('app.valueBlock') }}</label>
            <textarea id="value" rows="3" v-model="textInfo"></textarea>
        </div>

        <div class="form-control" v-if="type === 'link'">
            <label for="value">Иконка</label>
            <textarea id="value" rows="2" v-model="icon" required></textarea>
        </div>
        <div class="form-control" v-if="type === 'link'">
            <label for="value">Ссылка</label>
            <textarea id="value" rows="2" v-model="link" required></textarea>
        </div>

        <button class="btn primary" :disabled="isDisabled" @click.prevent="getInfo">{{ $i18n('app.btnBlock') }}</button>
    </form>
</template>

<script>
export default {
    name: "AppForm",
    emits: ['get-info'],
    props: {
        admin: String
    },
    data() {
        return {
            type: 'title',
            textInfo: '',
            link: '',
            icon: ''
        }
    },

    methods: {
        getInfo() {
            const infoData = {
                type: this.type,
                text: this.textInfo,
                link: this.link,
                icon: this.icon
            }
            this.$emit('get-info', infoData)
            this.type = 'title'
            this.textInfo = ''
            this.link = ''
            this.icon = ''
        }
    },

    computed: {
        isDisabled() {
            return this.textInfo.length < 4
        }
    }
}
</script>

<style scoped>
    small {
        display: inline-block;
        color: red;
        margin-bottom: 10px;
    }
</style>