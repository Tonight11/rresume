<template>
    <div class="container" >
        <p>
            <button class="btn primary" @click="$emit('load')">Загрузить комментарии</button>
        </p>
        <div class="card" v-if="comments.length">
            <h2>Комментарии</h2>
            <ul class="list">
                <li class="list-item" v-for="comment in comments" :key="comment.id">
                    <div>
                        <p><strong>{{ comment.email }}</strong></p>
                        <small>{{ comment.body }}</small>
                    </div>
                </li>
            </ul>
        </div>
        <app-loader v-show="load"></app-loader>
    </div>
</template>

<script>
import AppLoader from "@/components/AppLoader";
export default {
    components: {
        AppLoader
    },
    name: "AppComments",
    props: ['comments', 'load']
}
</script>

<style scoped>
@media screen and (max-width: 827px) {
    p {
        text-align: center;
    }
}
</style>