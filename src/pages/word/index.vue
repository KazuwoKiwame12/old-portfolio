<template>
        <div class="d-word">
            <snow/>
            <div v-for = "(word, index) in goodWords" :key = "index">
                <section class = movie-container>
                    <h1 class = "movie-container__text">{{ word.title }}</h1><span class="movie-container__from">by {{word.author}}</span>
                    <iframe class = "movie" :src="word.url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
            </div>
            <link-button prev = "works" next = "blog"/>
        </div>
</template>

<script>
    import LinkButton from '@/components/link-button';
    import snow from "@/components/snow";

    export default {
        name: "index",
        components: {
            LinkButton,
            snow
        },
        data() {
            return {
                goodWords: []
            }
        },
        async mounted() {
            const fetchData = await require('@/assets/data/goodWords.json')
            this.goodWords = fetchData.goodWords
            console.log(this.goodWords)
        },
    }
</script>
<style lang = "scss" scoped>
    @import "@/assets/scss/mixins";

    .d-word {
        margin: 0 auto;
        width: 60%;
    }

    .movie-container {
        @include text(left);
        margin-top: 100px;
        margon-bottom: 30px;
        position: relative;

        &__from {
            position: absolute;
            right: 0px;
            font-size: 0.8vw;
        }

        &__text {
            font-size: 30px;
            @include smartphone() {
                font-size: 15px;
            }
        }
    }
    .movie {
        width: 100%;
        height: 400px;
        @include smartphone() {
            height: 200px;
        }
        margin: 50px auto;
    }
</style>
