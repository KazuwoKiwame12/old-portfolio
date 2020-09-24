<template>
    <!-- header -->
    <header class = "p-header">
        <snow/>
        <div class = "p-title">
            <h1 class = "p-title__topic">
                Po<span>r</span>fo<span>l</span>io <span class = "from">_KazuwoKiwame12</span>
            </h1>
            <a class = "p-title__item1"></a>
        </div>
        <div class = "naviItems">
            <router-link to = "About" class = "naviItem">A<span>b</span>ou<span>t</span></router-link>
            <router-link to = "Works" class = "naviItem">Wo<span>r</span>k<span>s</span></router-link>
            <router-link to = "Word" class = "naviItem"><span>W</span>o<span>r</span>d</router-link>
            <router-link to = "Blog" class = "naviItem">Bl<span>o</span>g</router-link>
        </div>
        <a class = "p-title__item2"></a>
    </header>
</template>

<script>
    import snow from "@/components/snow.vue"

    export default {
        name: 'pheader',
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

    .p-header {
        margin-bottom: 30px;
        text-align: center;
    }
    .p-title {
        @include container();
        height: 60px;
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        @include desktop(){
            justify-content: space-between;
        }
        &__topic {
            font-family: NotoSerifJP;
            font-size: 25px;
            font-weight: bold;
            letter-spacing: 10px;
            @include smartphone(){
                font-size: 20px;
                letter-spacing: 5px;
            }
            @include desktop(){
                font-size: 40px;
            }
            .from {
                font-size: 5px;
                letter-spacing: 0.2px;
                color: black;
                @include desktop(){
                    letter-spacing: 1px;
                    font-size: 10px;
                }
            }
            &:before {
                content: "";
                margin-right: 10px;
                @include image("../../assets/img/icon.png", 25px, 25px);
                @include smartphone(){
                    @include image("../../assets/img/icon.png", 20px, 20px);
                }
                @include desktop(){
                    @include image("../../assets/img/icon.png", 40px, 40px);
                }
              }
        }
        &__item1 {
            @include desktop() {
                top: 10px;
                @include image("../../assets/img/mail.png", 30px, 30px);
            }
        }
        &__item2 {
            top: 10px;
            @include image("../../assets/img/mail.png", 15px, 15px);
            @include desktop() {
                display: none;
            }
        }
    }

    .naviItems {
        width: 60%;
        height: 20px;
        margin: 0 auto;
        margin-top: 30px;
        font-size: 15px;
        font-family: NotoSerifJP;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        @include smartphone() {
            justify-content: space-around;
            font-size: 1.2vw;
        }
        @include desktop() {
            justify-content: flex-end;
        }
        .naviItem {
             display: inline-block;
             margin-left: 20px;
             margin-right: 20px;
             cursor: pointer;
             transition: 0.3s linear;
             color: black;
             text-decoration: none;
             &:hover {
                 opacity: 0.4;
                 text-decoration: none;
             }
         }
     }
</style>
