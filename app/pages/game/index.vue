<template>
    <section class="container">
        <section class="content-wrapper bg-heading">
            <div class="content-container">
                <h1 class="page-heading">
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">研究利用できるゲーム</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <el-row :gutter="30" style="width: 100%;">
                    <el-col :span="12" v-for="game in games" :key="game.name">
                        <PageCard
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
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
                    name: 'オープンビデオゲーム',
                    desc: '研究利用を前提に開発された、理解しやすく手軽にプレイできるゲームを収録。GUI上でパラメータの調整や実験のログの取得が可能。',
                    img: 'Game_openvideogame.gif',
                    url: '/game/openvideogame'
                },
                {
                    name: 'オープンソースゲーム',
                    desc: 'ソースコードが公開されているゲーム。一から作ることなく手軽にゲームを利用したいが、研究に適応させるため編集を必要としている方におすすめ。',
                    img: 'Game_opensourse.png',
                    url: '/game/opensoursegame'
                },
                {
                    name: 'ゲームアセット',
                    desc: '準備なくブラウザ上でプレイ可能なゲーム。マウス・キーボードで操作できるゲームを探している人におすすめ。',
                    img: 'Game_asset.png',
                    url: '/game/gameasset'
                },
                {
                    name: 'ブラウザゲーム',
                    desc: 'ゲームを自作・編集する際必要になる3Dモデルやサウンドなどのアセット集。手軽にゲームを自作したい方におすすめ。',
                    img: 'Game_browser.png',
                    url: '/game/browsergame'
                }
            ]
        }
    }
}
</script>

<style scoped>
.bg-heading {
    background-image: url("~@/assets/image/background/heading_game.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
</style>
