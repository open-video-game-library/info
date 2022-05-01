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
                            :name="gm.name"
                            :img="gm.img"
                            :url="gm.url"
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
                    name: 'オープンビデオゲーム',
                    img: 'Game_openvideogame.gif',
                    url: 'openvideogame'
                },
                {
                    name: 'ブラウザゲーム',
                    img: 'Game_browser.png',
                    url: 'browsergame'
                },
                {
                    name: 'オープンソースゲーム',
                    img: 'Game_opensourse.png',
                    url: 'opensoursegame'
                },
                {
                    name: 'ゲームアセット',
                    img: 'Game_asset.png',
                    url: 'gameasset'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
