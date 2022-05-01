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
                <h2 class="text-center page-subheading">アセット一覧</h2>
                <p class="text-center page-subdesc">このページでは、ゲーム開発に使えるアセットを紹介します。</p>
                <el-row :gutter="30">
                    <el-col :span="12" v-for="asset in assets" :key="asset.name">
                        <PageCard
                            style="margin-bottom: 30px;"
                            :name="asset.name"
                            :img="asset.img"
                            :url="asset.url"
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
                    name: "開発言語/フレームワーク",
                    img: "asset/Genre/development.png",
                    url: "/game/gameasset/development"
                },
                {
                    name: "3Dモデル",
                    img: "asset/Genre/3dmodel.png",
                    url: "/game/gameasset/3dmodel"
                },
                {
                    name: "サウンド",
                    img: "asset/Genre/sound.png",
                    url: "/game/gameasset/sound"
                },
                // {
                //     title: "エフェクト",
                //     img: "asset/Genre/effect.png",
                //     to: "gameasset/effect"
                // },
                // {
                //     title: "UI/インタフェース",
                //     img: "asset/Genre/ui.png",
                //     to: "gameasset/ui"
                // },
                // {
                //     title: "教育/学習",
                //     img: "asset/Genre/education.png",
                //     to: "gameasset/education"
                // },
                // {
                //     title: "その他",
                //     img: "",
                //     to: "gameasset/other"
                // }
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
