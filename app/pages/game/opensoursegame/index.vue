<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <!-- <img class="logo" src="@/assets/image/logo/Game_logo_black.png" /> -->
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">オープンソースゲーム</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <p class="text-center">このページでは、コードが公開されているオープンソースのゲームを紹介します。研究に合ったゲームを探してみましょう。</p>
                <h2 class="text-center">ゲームジャンル</h2>
                <el-row :gutter="30">
                    <el-col :span="12" v-for="game in games" :key="game.title">
                        <PageCard
                            :title="game.title"
                            :img="game.img"
                            :to="game.to"
                            style="margin-bottom: 24px;"
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
            games: [
                {
                    title: "アクション",
                    img: "opensoursegame/action.png",
                    to: "opensoursegame/action"
                },
                {
                    title: "スポーツ",
                    img: "opensoursegame/sports.png",
                    to: "opensoursegame/sports"
                },
                {
                    title: "レース/ドライビング",
                    img: "opensoursegame/racing.png",
                    to: "opensoursegame/racing"
                },
                {
                    title: "パズル",
                    img: "opensoursegame/puzzle.png",
                    to: "opensoursegame/puzzle"
                },
                {
                    title: "シューティング",
                    img: "opensoursegame/shooting.png",
                    to: "opensoursegame/shooting"
                },
                {
                    title: "プラットフォーム",
                    img: "opensoursegame/platform.png",
                    to: "opensoursegame/platform"
                },
                {
                    title: "格闘",
                    img: "opensoursegame/fighting.png",
                    to: "opensoursegame/fighting"
                },
                {
                    title: "その他",
                    img: "opensoursegame/other.png",
                    to: "opensoursegame/other"
                }
            ]
        }
    }
}
</script>

<style scoped>
.el-card {
    margin: 20px 0;
}
</style>
