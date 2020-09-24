<template>
    <div class = "d-works">
        <div v-if = "works">
            <section class="works_for_lang" v-for ="(worksLang, index) in works" :key = "index">
                <h1 class="works_for_lang__lang">{{ worksLang.lang }}</h1>
                <section class="work" v-for ="(work, index) in worksLang.works" :key = "index">
                    <snow/>
                    <h2 class="work__name">・{{ work.name }}</h2>
                    <!--スマホ版-->
                    <hooper class="work__images_container spVer"  :settings="hooperSettings" :itemsToShow="1">
                        <slide v-for ="(img, index) in work.imgs" :key = "index">
                            <img class="work__image" :src="require('@/assets/img/Works/'+work.dir+'/'+img)"/>
                        </slide>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                    <!--PC版-->
                    <hooper class="work__images_container pcVer"  :settings="hooperSettings" :itemsToShow="3">
                        <slide v-for ="(img, index) in work.imgs" :key = "index">
                            <img class="work__image" :src="require('@/assets/img/Works/'+work.dir+'/'+img)"/>
                        </slide>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>

                    <div class="work__description sentence">
                        <snow/>
                        <article class = sentence__container>
                            <h4>Fu<span>nc</span>tion</h4>
                            <p class = "sentence__text_f">{{ work.functions }}</p>
                        </article>
                        <article class = "sentence__container">
                            <h4>Eff<span>ort</span> Po<span>in</span>t</h4>
                            <p class = "sentence__text_e">{{ work.effortPoints }}</p>
                        </article>
                    </div>
                </section>
            </section>
        </div>
        <link-button prev = "about" next = "word"></link-button>
    </div>
</template>

<script>
    import LinkButton from "@/components/link-button";
    import snow from "@/components/snow.vue"
    import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        name: "index",
        components: {
            LinkButton,
            snow,
            Hooper,
            Slide,
            HooperPagination
        },
        data() {
            return {
                works: [],
                hooperSettings: {
                    infiniteScroll: "true",
                    centerMode: "true"
                }
            }
        },
        async mounted() {
            const fetchData = await require('@/assets/data/works.json')
            this.works = fetchData.works
            console.log(this.works)
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/mixins";

    span {
        color: lightblue;
    }

    .d-works {
        @include text(left);
        width: 60%;
        margin: 0 auto;
    }

    .works_for_lang {
        margin-bottom: 50px;
        &__lang {
            @include topic();
            letter-spacing: 20px;
            font-size: 35px;
            @include smartphone() {
                font-size: 25px;
            }
        }
    }

    .work {
        width: 95%;
        margin: 0 auto;
        padding-top: 15px;
        &__name {
            overflow-wrap: break-word;
            word-wrap: break-word;
            font-size: 25px;
            padding-bottom: 10px;
            @include smartphone() {
                font-size: 15px;
            }
        }
        &__images_container {
            min-height: 250px;
            height: 30%;
            max-height: 1000px;
            margin: 10px 0px 10px;
        }
        &__image {
            width: 100%;
        }
        &__description {
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            align-content: space-around;
        }
    }

    .sentence {
        margin: 20px 0px 20px;
        font-size: 25px;
        @include smartphone() {
            font-size: 10px;
        }
        &__container {
            width: 50%;
        }
        &__text_f {
            padding-right: 5px;
            font-size: 12px;
            @include smartphone() {
                font-size: 8px;
            }
            overflow-wrap: break-word;
            word-wrap: break-word;
        }
        &__text_e {
            padding-right: 5px;
            font-size: 12px;
            @include smartphone() {
                font-size: 8px;
            }
            overflow-wrap: break-word;
            word-wrap: break-word;
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
