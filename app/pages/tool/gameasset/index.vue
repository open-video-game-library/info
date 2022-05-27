<template>
    <section class="container">
        <Heading :breadcrumb="breadcrumb" />

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
                    url: "/tool/gameasset/development"
                },
                {
                    name: "3Dモデル",
                    img: "asset/Genre/3dmodel.png",
                    url: "/tool/gameasset/3dmodel"
                },
                {
                    name: "サウンド",
                    img: "asset/Genre/sound.png",
                    url: "/tool/gameasset/sound"
                },
                // {
                //     title: "エフェクト",
                //     img: "asset/Genre/effect.png",
                //     to: "/tool/gameasset/effect"
                // },
                {
                    name: "UI/グラフィック",
                    img: "asset/Genre/ui.jpeg",
                    url: "/tool/gameasset/interface"
                },
                // {
                //     title: "教育/学習",
                //     img: "asset/Genre/education.png",
                //     to: "/tool/gameasset/education"
                // },
                // {
                //     title: "その他",
                //     img: "",
                //     to: "/tool/gameasset/other"
                // }
            ],
            breadcrumb: [
                {
                    path: '/tool',
                    name: '研究利用できるツール'
                },
                {
                    path: '/tool/gameasset',
                    name: 'ゲームアセット'
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
