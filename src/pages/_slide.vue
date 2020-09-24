<template>
  <div class = "p-title">
        <div class = "p-title__img"/>
        <section class = "word">
            <div class = "word__1">
            __何気ない日常を
            </div>
            <div class = "word__2">
                ___価値あるものにする
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "hoge",
    }
</script>

<style lang = "scss" scoped>
    @import "@/assets/scss/mixins";
    .p-title {
        position: relative;
        width: 60%;
        height: 500px;
        margin: 0 auto;
        font-family: NotoSerifJP;
        @include smartphone() {
            height: 350px;
        }
        &__img {
            @include image("../assets/img/slide4.jpg", 100%, 100%);
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
    .word {
        color: white;
        font-size: 13px;
        @include smartphone() {
            font-size: 11px;
        }
        @include desktop() {
            font-size: 20px;
        }
        &__1 {
            position: absolute;
            top: 15%;
            left:50px;
        }
        &__2 {
            position: absolute;
            bottom: 15%;
            right: 50px;
        }
    }
</style>
