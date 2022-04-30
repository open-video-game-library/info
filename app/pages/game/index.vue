<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <!-- <img class="logo" src="@/assets/image/logo/Game_logo_black.png" /> -->
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">研究利用できるゲーム</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <el-row :gutter="30" style="width: 100%;">
                    <el-col :span="12" v-for="gm in game" :key="gm.title">
                        <GameCard
                            style="margin-bottom: 24px;"
                            class="grid-content"
                            :title="gm.title"
                            :img="gm.img"
                            :to="gm.to"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>
    </section>
</template>

<script>
import GameCard from '~/components/GameCard.vue'

export default {
    components: {
        GameCard
    },
    asyncData() {
        return {
            game: [
                {
                    title: 'オープンビデオゲーム',
                    img: 'Game_openvideogame.gif',
                    to: 'game/openvideogame'
                },
                {
                    title: 'ブラウザゲーム',
                    img: 'Game_browser.png',
                    to: 'game/browsergame'
                },
                {
                    title: 'オープンソースゲーム',
                    img: 'Game_opensourse.png',
                    to: 'game/opensoursegame'
                },
                {
                    title: 'ゲームアセット',
                    img: 'Game_asset.png',
                    to: 'game/gameasset'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
