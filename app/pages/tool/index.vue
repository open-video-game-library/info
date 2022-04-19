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
                    <el-col :span="24" v-for="exp in experiment" :key="exp.name">
                        <ArticleCard
                            style="margin-bottom: 24px;"
                            :title="exp.title"
                            :name="exp.name"
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
                    <el-col :span="24" v-for="dev in development" :key="dev.name">
                        <ArticleCard
                            style="margin-bottom: 24px;"
                            :title="dev.title"
                            :name="dev.name"
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
                    title: '複数視点をWeb上で録画できるMulti View Recorderを使って体験評価しよう',
                    name: 'Multi View Recorder',
                    img: 'Tool_multi_view_recorder.png',
                    url: 'https://open-video-game-library.github.io/multi-view-recorder/'
                }
            ],
            development: [
                {
                    title: 'Game Controllerizerを使って市販ゲームを自作コントローラでプレイしよう',
                    name: 'Game Controllerizer',
                    img: 'Tool_game_controllerizer.png',
                    url: 'https://sites.google.com/view/gamecontrollerizer'
                }
            ]
        }
    }
}
</script>
