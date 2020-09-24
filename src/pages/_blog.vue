<template>
    <div class = "p-blog">
        <snow/>
        <!--スマホ版-->
        <router-link to = "works" class = "link spVer">
            <h1 class = "link__topic">
                BL<span>O</span>G
            </h1>
            <div class = "link__icon"></div>
        </router-link>

        <article class = "p-blog__text">
            <section class = "target">_____人間は過行く時の中で忘却する生き物だ。<br>自分の大切な思いや知識まで忘れてゆく。<br>だからこそ、私は形に残すのである。</section>
        </article>

        <!--PC版-->
        <router-link to = "works" class = "link pcVer">
            <h1 class = "link__topic">
                BL<span>O</span>G
            </h1>
            <div class = "link__icon"></div>
        </router-link>
    </div>
</template>

<script>
    import snow from "@/components/snow.vue"

    export default {
        name: "hogehoge2",
        components: {
            snow
        }
    }
</script>

<style lang = "scss" scoped>
    @import "@/assets/scss/mixins";

    span {
        color: lightblue;
    }
    .p-blog {
        @include container();
        @include smartphone(){
            display: flex;
            flex-direction: column;
            font-size: 2vw;
        }
        &__text {
            @include text(left);
            @include smartphone() {
                margin: 0 auto;
                font-size: 8px;
            }
        }
        &__text .target {
            position: relative;
            top: 30%;
        }
    }
    .link {
        @include link_container();
        margin: 0 0 0 auto;
        @include smartphone() {
            margin: 0 auto;
        }
        &__topic {
            @include topic();
            @include smartphone() {
                font-size: 18px;
            }
        }
        &__icon {
            @include image("../assets/img/blog.png", 130px, 130px);
            @include smartphone() {
                @include image("../assets/img/blog.png", 70px, 70px);
                left: 10px;
            }
        }
    }
    .spVer {
        display: none;
        @include smartphone() {
            display: inline-block;
        }
    }
    .pcVer {
        display: inline-block;
        @include smartphone() {
            display: none;
        }
    }
</style>
