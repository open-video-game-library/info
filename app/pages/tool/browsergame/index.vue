<template>
    <section class="container">
        <Heading :breadcrumb="breadcrumb" />

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
    asyncData() {
        return {
            browsergame: games.browsergame,
            breadcrumb: [
                {
                    path: '/tool',
                    name: '研究利用できるツール'
                },
                {
                    path: '/tool/browsergame',
                    name: 'ブラウザゲーム'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>
