<template>
    <section class="container">
        <section class="content-wrapper bg-heading">
            <div class="content-container">
                <h1 class="page-heading">
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
                    url: '/game/openvideogame'
                },
                {
                    name: 'オープンソースゲーム',
                    img: 'Game_opensourse.png',
                    url: '/game/opensoursegame'
                },
                {
                    name: 'ゲームアセット',
                    img: 'Game_asset.png',
                    url: '/game/gameasset'
                },
                {
                    name: 'ブラウザゲーム',
                    img: 'Game_browser.png',
                    url: '/game/browsergame'
                }
            ]
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
