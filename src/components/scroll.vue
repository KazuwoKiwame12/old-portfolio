<template>
    <!-- ページ上部に遷移 -->
    <div>
        <a href = "#top" v-smooth-scroll = "{ duration: 3000 }" class = "goTop">
            <img src="@/assets/img/BackSnow2.png" class ="size" />
            <div class ="goTop__center"></div>
            <img src="@/assets/img/BackSnow3.png"  class ="size"  />
        </a>
    </div>
</template>

<script>
    export default {
        name: "back"
    }
</script>

<style lang = "scss" scoped>
    @import '@/assets/scss/mixins';
    .goTop {
        margin-top: 15px;
        display: flex;
        positoin: relative;
        justify-content: space-between;
        &__center {
            @include image("../assets/img/go_top.png", 25px, 25px);
            top: 169px;
        }
    }
    .size {
        @include smartphone(){
            width: 150px;
            height: 150px;
        }
    }
</style>
