<template>
    <div class = "p-works">
        <snow/>
        <!--スマホ版-->
        <router-link to = "works" class = "link spVer">
            <h1 class = "link__topic">
                WO<span>R</span>K<span>S</span>
            </h1>
            <div class = "link__icon"></div>
        </router-link>

        <article class = "p-works__text">
            <section class = "target">_____技術を「楽しむ」、それがいつも根底にある。<br>技術とは時代と共に進歩するものである。<br>だからこそ、いつまでも楽しめる。</section>
        </article>

        <!--PC版-->
        <router-link to = "works" class = "link pcVer">
            <h1 class = "link__topic">
                WO<span>R</span>K<span>S</span>
            </h1>
            <div class = "link__icon"></div>
        </router-link>
    </div>
</template>

<script>
    import snow from "@/components/snow.vue"

    export default {
        name: "hogehoge4",
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
    .p-works {
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
            @include image("../assets/img/GithubMark.png", 130px, 130px);
            @include smartphone() {
                @include image("../assets/img/GithubMark.png", 70px, 70px);
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
