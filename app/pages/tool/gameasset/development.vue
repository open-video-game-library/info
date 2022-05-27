<template>
    <section class="container">
        <Heading :breadcrumb="breadcrumb" />

        <section class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center page-subheading">開発言語/フレームワーク</h2>
                <el-row :gutter="30" style="width: 100%;">
                    <el-col :span="8" v-for="game in gameasset" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='development'"
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
            gameasset: games.gameasset,
            breadcrumb: [
                {
                    path: '/tool',
                    name: '研究利用できるツール'
                },
                {
                    path: '/tool/gameasset',
                    name: 'ゲームアセット'
                },
                {
                    path: '/tool/gameasset/development',
                    name: '開発言語/フレームワーク'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>