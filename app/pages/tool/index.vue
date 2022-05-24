<template>
    <section class="container">
        <Heading />

        <section id="Experiment" class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center page-subheading">ツール一覧</h2>
                <p class="text-center page-subdesc">ゲーム体験を評価する実験やゲーム開発に役立つツールを紹介します。</p>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="tool in tools" :key="tool.name">
                        <SiteCard
                            style="margin-bottom: 30px;"
                            :name="tool.name"
                            :desc="tool.desc"
                            :img="tool.img"
                            :url="tool.url"
                            :isOurs="tool.isOurs"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>

    </section>
</template>

<script>
import SiteCard from '~/components/SiteCard.vue'
import Heading from '~/components/Heading.vue'

export default {
    components: {
        SiteCard,
        Heading
    },
    asyncData() {
        return {
            tools: [
                {
                    name: 'Multi View Recorder',
                    desc: 'Multi View RecorderはWeb上で録画と動画の保存ができるツールです。Webカメラを複数台接続し、他視点を同時に録画することができます。',
                    img: 'Tool_multi_view_recorder.png',
                    url: 'https://open-video-game-library.github.io/multi-view-recorder/',
                    isOurs: true
                },
                {
                    name: 'JumpLab',
                    desc: 'プラットフォームゲーム（ジャンプアクションゲーム）のジャンプ処理やカメラ移動処理にまつわる、諸パラメタを可変にした実験用ソフトウェアです。',
                    img: 'Tool_jumplab.png',
                    url: 'https://fukuchi.org/works/jumplab/index.html',
                    isOurs: false
                },
                {
                    name: 'Game Controllerizer',
                    desc: 'Game Controllerizerはディジタルゲーム拡張のためのミドルウェアです。多様な機器および情報源を既存ゲームへの入力として扱うことができます。',
                    img: 'Tool_game_controllerizer.png',
                    url: 'https://sites.google.com/view/gamecontrollerizer',
                    isOurs: false
                }
            ]
        }
    }
}
</script>

<style scoped>
.bg-heading {
    background-image: url("~@/assets/image/background/heading_tool.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
</style>