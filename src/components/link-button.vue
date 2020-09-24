<template>
    <div>
        <!-- 詳細ページに存在する各ページへの遷移ボタン -->
        <div class = "naviItems">
            <router-link :to = "`${prev}`" class = "naviItem">prev</router-link>
            <router-link to = '/portfolio/' class = "naviItem">home</router-link>
            <router-link :to = "`${next}`" class = "naviItem">next</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "link-button",
        props: {
            prev: {
                type: String,
                required: true
            },
            next: {
                type: String,
                required: true
            },
        },
    }
</script>

<style lang = "scss" scoped>
    @import "@/assets/scss/mixins";

    .naviItems {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 20px auto;
    }

    .naviItem {
        @include text(center);
        width: 10vw;
        text-decoration: none;
        color: white;
        background-color: lightblue;
        border-radius: 10px;
        @include smartphone() {
            font-size: 1.5vw;
        }
    }


</style>
