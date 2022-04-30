<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <!-- <img class="logo" src="@/assets/image/logo/Game_logo_black.png" /> -->
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">ゲームアセット</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <p>このページでは、ゲーム開発に使えるアセットを紹介します。</p>
                <h2 class="text-center">アセット</h2>
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
                    name: "3Dモデル",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "サウンド",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "エフェクト",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "UI/インタフェース",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "ライブラリ/開発言語",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "教育/学習",
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
