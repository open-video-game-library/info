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
                <p class="text-center">このページでは、ゲーム開発に使えるアセットを紹介します。</p>
                <h2 class="text-center">アセット</h2>
                <el-row :gutter="30">
                    <el-col :span="12" v-for="asset in assets" :key="asset.name">
                        <PageCard
                            style="margin-bottom: 30px;"
                            :title="asset.title"
                            :img="asset.img"
                            :to="asset.to"
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
            assets: [
                {
                    title: "開発言語/フレームワーク",
                    img: "asset/Genre/development.png",
                    to: "gameasset/development"
                },
                {
                    title: "3Dモデル",
                    img: "asset/Genre/3dmodel.png",
                    to: "gameasset/3dmodel"
                },
                {
                    title: "サウンド",
                    img: "asset/Genre/sound.png",
                    to: "gameasset/sound"
                },
                {
                    title: "エフェクト",
                    img: "asset/Genre/effect.png",
                    to: "gameasset/effect"
                },
                {
                    title: "UI/インタフェース",
                    img: "asset/Genre/ui.png",
                    to: "gameasset/ui"
                },
                {
                    title: "教育/学習",
                    img: "asset/Genre/education.png",
                    to: "gameasset/education"
                },
                {
                    title: "その他",
                    img: "",
                    to: "gameasset/other"
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
