<template>
    <!-- 雪を降らす -->
    <div>
        <section id="snow">
            <div class="inner">
                <div v-for = "(flake, index) in flakes" :key = 'index' :class = 'flake.flake'></div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "snow",
        data: function(){
            return {
                flakes: [
                    {flake: 'snowflake1'},
                    {flake: 'snowflake2'},
                    {flake: 'snowflake3'},
                    {flake: 'snowflake4'},
                    {flake: 'snowflake5'},
                    {flake: 'snowflake6'},
                    {flake: 'snowflake7'},
                    {flake: 'snowflake8'},
                ]
            }
        }
    }
</script>

<style lang = "scss" scoped>
    @import "@/assets/scss/mixins";
    /*動かす前段階のアニメーション*/
    section .inner div {
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: Drop;
        animation-timing-function: linear;
        opacity: 0;
        transform-origin: 0px 0px;
        height: 100%;
    }

    /*背景の設定*/
    section#snow {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    #snow .inner {
        height: 100%;
        width: 100%;
    }
    /*雪の設定*/
    #snow .inner div {
        @include image("../assets/img/BlueSnow_1.png", 20px, 20px);
        border-radius: 4px;
        display: block;
        height: 20px;
        position: absolute;
        width: 20px;
    }

    /*いくつかランダムに大きさを変える*/
    #snow .inner div.snowflake1,
    #snow .inner div.snowflake2,
    #snow .inner div.snowflake5,
    #snow .inner div.snowflake8 {
        background-size: 20px 20px;
    }

    /*雪をどの辺りに表示するか*/
    .snowflake1 {
        animation-duration: 4.6s;
        left: 15%;
    }

    .snowflake2 {
        animation-delay: 0.3s;
        animation-duration: 4s;
        left: 21%;
    }

    .snowflake3 {
        animation-delay: 0.5s;
        animation-duration: 5s;
        left: 28%;
    }

    .snowflake4 {
        animation-delay: 0s;
        animation-duration: 4.7s;
        left: 38%;
    }

    .snowflake5 {
        animation-delay: 1s;
        animation-duration: 4.5s;
        left: 50%;
    }

    .snowflake6 {
        animation-delay: 1.2s;
        animation-duration: 4.1s;
        left: 60%;
    }

    .snowflake7 {
        animation-delay: 1.2s;
        animation-duration: 4.4s;
        left: 70%;
    }

    .snowflake8 {
        animation-delay: 1.4s;
        animation-duration: 4.8s;
        left: 85%;
    }

    /*アニメーションの設定*/
    @keyframes Drop {
        0% {
            opacity: 0.2;
            transform: translateY(0px);
        }

        20% {
            opacity: 0.6;
            transform: translate(18px, 60px);
        }

        25% {
            opacity: 0.6;
            transform: translate(23px, 75px);
        }

        30% {
            opacity: 0.7;
            transform: translate(18px, 85px);
        }

        50% {
            opacity: 1;
            transform: translate(0px, 150px);
        }

        70% {
            opacity: 0.6;
            transform: translate(-18px, 210px);
        }

        75% {
            opacity: 0.6;
            transform: translate(-23px, 225px);
        }

        80% {
            opacity: 0.5;
            transform: translate(-18px, 235px);
        }

        100% {
            opacity: 0.3;
            transform: translate(-2px, 300px);
        }
    }

</style>
