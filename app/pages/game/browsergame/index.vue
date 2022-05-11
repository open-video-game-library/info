<template>
    <section class="container">
        <section class="content-wrapper bg-heading">
            <div class="content-container">
                <h1 class="page-heading">
                    <!-- <img class="logo" src="@/assets/image/logo/Game_logo_black.png" /> -->
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">
                        <nuxt-link class="breadcrumb" :to="'/game'">研究利用できるゲーム</nuxt-link>
                        ＞
                        <strong>ブラウザゲーム</strong>
                    </span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center page-subheading">ゲーム一覧</h2>
                <p class="text-center page-subdesc">このページでは、ブラウザ上で遊べるゲームを紹介します。研究に合ったゲームを探してみましょう。</p>

                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in browsergame" :key="game.name">
                        <SiteCard
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>
    </section>
</template>

<script>
import SiteCard from '~/components/SiteCard.vue'
import games from '@/assets/json/games.json'

export default {
    components: {
        SiteCard
    },
    asyncData({ $axios }) {
        return {
            browsergame: games.browsergame
        }
    }
}
</script>

<style scoped>
.bg-heading {
    background-image: url("~@/assets/image/background/heading_game.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
</style>
