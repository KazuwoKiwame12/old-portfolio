<template>
    <div id ="app">
        <pHeader id = "top"/>

        <transition mode = "out-in">
            <router-view></router-view>
        </transition>
        <pBack/>
        <pFooter/>
    </div>
</template>

<script>
    import pHeader from "@/components/layout/pheader"
    import pBack from "@/components/scroll"
    import pFooter from "@/components/layout/pfooter"

    export default {
        name: "App",
        components: {
            pHeader,
            pBack,
            pFooter,
        }
    }
</script>

<style>
    * {
        margin: 0;
    }
    .v-enter {
        transform: translate(-100px, 0);
        opacity: 0;
    }
    .v-enter-to {
        opacity: 1;
    }
    .v-enter-active {
        transition: all 1s 0s ease;
    }
    .v-leave {
        transform: translate(0, 0);
        opacity: 1;
    }
    .v-leave-to {
        transform: translate(100px, 0);
        opacity: 0;
    }
    .v-leave-active {
        transition: all .5s 0s ease;
    }
</style>
