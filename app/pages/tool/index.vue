<template>
    <section class="container">
        <Heading :breadcrumb="breadcrumb" />

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <!-- <h2 class="text-center page-subheading">ツール一覧</h2> -->
                <p class="text-center page-subdesc">ゲーム研究の実験や評価に利用できるツールを提供しています。</p>
                <div class="flex-box">
                    <div class="flex-item" v-for="tool in tools" :key="tool.name" v-if="tool.isOurs">
                        <ArticleCard
                            style="margin-bottom: 30px;"
                            :name="tool.name"
                            :desc="tool.desc"
                            :img="tool.img"
                            :url="tool.url"
                            :img_span="8"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="Others" class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center page-subheading">その他ツール一覧</h2>
                <p class="text-center page-subdesc">他の研究者やゲーム開発者が提供している、評価・実験・開発に役立つツールやゲームも紹介します。</p>
                <div class="flex-box" style="margin-bottom: 60px;">
                    <div class="flex-item" v-for="tool in tools" :key="tool.name" v-if="!tool.isOurs">
                        <ArticleCard
                            style="margin-bottom: 30px;"
                            :name="tool.name"
                            :desc="tool.desc"
                            :img="tool.img"
                            :url="tool.url"
                            :img_span="12"
                        />
                    </div>
                </div>

                <div class="flex-box">
                    <div class="flex-item" v-for="game in games" :key="game.name">
                        <PageCard
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                            :isOurs="game.isOurs"
                        />
                    </div>
                </div>
            </div>
        </section>

    </section>
</template>

<script>
import SiteCard from '~/components/SiteCard.vue'
import PageCard from '~/components/PageCard.vue'
import Heading from '~/components/Heading.vue'
import tools from '@/assets/json/tools.json'

export default {
    components: {
        SiteCard,
        PageCard,
        Heading
    },
    asyncData() {
        return {
            tools: tools.tool,
            breadcrumb: [
                {
                    path: '/tool',
                    name: '研究利用できるツール'
                }
            ],
            games: [
                {
                    name: 'オープンソースゲーム',
                    desc: 'ソースコードが公開されているゲーム集です。一から作ることなく手軽にゲームを利用したいが、研究に適応させるため編集を必要としている方におすすめです。',
                    img: 'Game_opensourse.png',
                    url: '/tool/opensoursegame',
                    isOurs: false
                },
                {
                    name: 'ゲームアセット',
                    desc: '準備なくブラウザ上でプレイ可能なゲーム集です。マウス・キーボードで操作できるゲームを探している人におすすめです。',
                    img: 'Game_asset.png',
                    url: '/tool/gameasset',
                    isOurs: false
                },
                {
                    name: 'ブラウザゲーム',
                    desc: 'ゲームを自作・編集する際必要になる3Dモデルやサウンドなどのアセット集です。手軽にゲームを自作したい方におすすめです。',
                    img: 'Game_browser.png',
                    url: '/tool/browsergame',
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

.flex-item {
    flex-basis: 100%;
}
#Others .flex-item {
    flex-basis: 40%;
}

@media screen and (max-width: 780px) {
    #Others .flex-item {
        flex-basis: 100%;
    }
}

</style>