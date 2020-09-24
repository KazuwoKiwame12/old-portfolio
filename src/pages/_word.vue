<template>
    <div class = "p-word">
        <snow/>
        <router-link to = "word" class = "link">
            <h1 class = "link__topic">
                <span>W</span>O<span>R</span>D
            </h1>
            <div class = "link__icon"></div>
        </router-link>

        <article class = "p-word__text">
            <section class = "target">_____言葉とは人を動かす原動力となる。<br>良い言葉に巡り合うことで、人生が豊かになる。<br>そうした言葉に出会えたら、人生はより幸せに。</section>
        </article>
    </div>
</template>

<script>
    import snow from "@/components/snow.vue"

    export default {
        name: "hogehoge3",
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
    .p-word {
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
            @include image("../assets/img/word.png", 130px, 130px);
            @include smartphone() {
                @include image("../assets/img/word.png", 70px, 70px);
            }
        }
    }
</style>
