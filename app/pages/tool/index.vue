<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <span class="material-icons">science</span>
                    <span style="font-size: 48px;">Tool</span>
                    <span class="sub-headline">研究利用できるツール</span>
                </h1>
            </div>
        </section>

        <section id="Experiment" class="content-wrapper">
            <div class="content-container">
                <h3 class="text-center">ゲーム体験を評価する実験やゲーム開発に役立つツールを紹介します。</h3>
                <h2 class="text-center">評価実験</h2>
                <el-row style="width: 100%;">
                    <el-col :span="8" v-for="exp in experiment" :key="exp.name">
                        <ArticleCard
                            style="margin-bottom: 24px;"
                            :name="exp.name"
                            :desc="exp.desc"
                            :img="exp.img"
                            :url="exp.url"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>

        <section id="Development" class="content-wrapper bg-white">
            <div class="content-container">
                <h2 class="text-center">工学的ツール</h2>
                <el-row style="width: 100%;">
                    <el-col :span="8" v-for="dev in development" :key="dev.name">
                        <ArticleCard
                            style="margin-bottom: 24px;"
                            :name="dev.name"
                            :desc="dev.desc"
                            :img="dev.img"
                            :url="dev.url"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>
    </section>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

export default {
    components: {
        ArticleCard
    },
    asyncData() {
        return {
            experiment: [
                {
                    name: 'Multi View Recorder',
                    desc: 'Multi View RecorderはWeb上で録画と動画の保存ができるツールです。Webカメラを複数台接続し、他視点を同時に録画することができます。',
                    img: 'Tool_multi_view_recorder.png',
                    url: 'https://open-video-game-library.github.io/multi-view-recorder/'
                }
            ],
            development: [
                {
                    name: 'Game Controllerizer',
                    desc: '',
                    img: 'Tool_game_controllerizer.png',
                    url: 'https://sites.google.com/view/gamecontrollerizer'
                }
            ]
        }
    }
}
</script>
