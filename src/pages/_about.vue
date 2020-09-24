<template>
    <div class = "p-about">
        <snow/>
        <router-link to = "about" class = "link">
            <h1 class = "link__topic">
                A<span>B</span>OU<span>T</span>
            </h1>
            <div class = "link__icon"></div>
        </router-link>

        <article class = "p-about__text">
            <section class = "target">_____自分とは何かを常に追求している。<br>自分の武器を磨き、まだ見ぬ自分を目指す。<br>そうして、自分を理想の自分へ近づける。</section>
        </article>
    </div>
</template>

<script>
    import snow from "../components/snow.vue"

    export default {
        name: "hogehoge1",
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
    .p-about {
        @include container();
        @include smartphone(){
            display: flex;
            flex-direction: column;
        }

        &__text {
            margin: 0 0 0 auto;
            @include text(right);
            @include smartphone() {
                margin: 0 auto;
                @include text(left);
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
        &__topic {
            @include topic();
            @include smartphone() {
                font-size: 18px;
            }
        }
        &__icon {
            @include image("../assets/img/about.png", 130px, 130px);
            @include smartphone() {
                @include image("../assets/img/about.png", 70px, 70px);
            }
        }
    }
</style>
