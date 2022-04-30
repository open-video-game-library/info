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
            <div class="content-container" style="padding-top: 0;">
                <el-row :gutter="30" style="width: 100%;">
                    <el-col :span="12" v-for="gm in game" :key="gm.title">
                        <PageCard
                            style="margin-bottom: 30px;"
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
import PageCard from '~/components/PageCard.vue'

export default {
    components: {
        PageCard
    },
    asyncData() {
        return {
            game: [
                {
                    title: 'オープンビデオゲーム',
                    img: 'Game_openvideogame.gif',
                    to: 'openvideogame'
                },
                {
                    title: 'ブラウザゲーム',
                    img: 'Game_browser.png',
                    to: 'browsergame'
                },
                {
                    title: 'オープンソースゲーム',
                    img: 'Game_opensourse.png',
                    to: 'opensoursegame'
                },
                {
                    title: 'ゲームアセット',
                    img: 'Game_asset.png',
                    to: 'gameasset'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
