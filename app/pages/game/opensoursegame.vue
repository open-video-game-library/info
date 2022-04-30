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
                <p>このページでは、コードが公開されているオープンソースのゲームを紹介します。研究に合ったゲームを探してみましょう。</p>
                <h2 class="text-center">ゲームジャンル</h2>
                <el-row :gutter="30">
                    <el-col :span="12" v-for="gm in game" :key="gm.name_short">
                        <GenreCard
                            :name="gm.name"
                            :img="gm.img"
                            :to="gm.to"
                            style="margin-bottom: 24px;"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>
    </section>
</template>

<script>
import GenreCard from '~/components/GenreCard.vue'

export default {
    components: {
        GenreCard
    },
    asyncData() {
        return {
            game: [
                {
                    name: "アクション",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "スポーツ",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "レース/ドライビング",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "パズル",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "シューティング",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "プラットフォーム",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "格闘",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "その他",
                    img: "no_image.png",
                    to: ""
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
