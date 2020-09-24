<template>
    <div class = "d-about">
        <section class="profile">
            <img src="@/assets/img/about.png" alt="" class="profile__img">
            <article class="profile__description">
                <p>所属:理工学部情報系３回生</p>
                <p>趣味:スポーツと観光</p>
                <p>日課:ランニングと読書</p>
                <p>頑張っていること:毎朝の早起き</p>
            </article>
        </section>

        <snow/>
        <h1 class = "d-about__Lang">得意<span>な</span>言<span>語</span></h1>
        <section class = "box" v-if = "goodLanguages">
            <div v-for ="(gLanguage, index) in goodLanguages" :key = "index" class = "lang">
                <img :src="require('@/assets/img/Languages/'+gLanguage.img)" class="lang__img"/>
                <p class="lang__description">{{ gLanguage.description }}</p>
            </div>
        </section>
        <p v-else>読み込み中</p>

        <snow/>
        <link-button prev = "blog" next = "works"/>
    </div>
</template>

<script>
    import LinkButton from '@/components/link-button';
    import snow from "@/components/snow.vue"

    export default {
        name: "dAbout",

        data() {
            return {
                goodLanguages: []
            }
        },
        components: {
            LinkButton,
            snow
        },
        async mounted() {
            const fetchData = await require('@/assets/data/goodLanguages.json')
            this.goodLanguages = fetchData.goodLanguages
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/mixins";

    span {
        color: lightblue;
    }

    .profile {
        display: flex;
        flex-wrap: nowrap;
        @include smartphone(){
            display: flex;
            flex-direction: column;
        }
        &__img {
            margin-right: 30px;
            @include smartphone(){
                width: 150px;
                height: auto;
                margin: 0 auto;
                margin-bottom: 30px;
            }
        }
        &__description {
            @include text(left);
            @include smartphone() {
                margin: 0 auto;
                font-size: 8px;
            }
        }
    }

    .d-about {
        @include text(left);
        width: 60%;
        margin: 0 auto;
        &__Lang {
            margin-top: 50px;
            margin-bottom: 30px;
            font-size: 25px;
        }
    }

    .box {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
    }

    .lang {
        width: 30%;
        text-align: center;
        margin: 0px 10px 30px;
        max-width: 300px;
        &__img {
            width: 100%;
            height: auto;
        }
        &__description {
            overflow-wrap: break-word;
            word-wrap: break-word;
            @include smartphone() {
                font-size: 8px;
                line-height: 15px;
                letter-spacing: 5px;
            }
        }
    }
</style>
