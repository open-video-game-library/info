<template>
    <section class="container">
        <Heading :breadcrumb="breadcrumb" />

        <section class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center page-subheading">ゲーム一覧</h2>
                <p class="text-center page-subdesc">営利以外の目的であれば自由にお使いいただけます。詳しいガイドラインは<nuxt-link class="general-link" to="/openvideogame/guideline">こちら</nuxt-link>。</p>
                <el-row :gutter="30">
                    <el-col :span="12" v-for="game in openvideogame" :key="game.name">
                        <PageCard
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                    <el-col :span="12">
                        <PageCard
                            style="margin-bottom: 30px;"
                            :name="'こういうゲームがほしい！'"
                            :desc="'研究利用したいジャンルのゲームがありましたら、ぜひご連絡ください。'"
                            :img="'more.png'"
                            :url="'/contact'"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h2 class="text-center page-subheading">パラメータの調整・取得</h2>
                <p class="text-center page-subdesc">オープンビデオゲームでは、コードを書くことなくパラメータを調整・取得することができます。</p>
                <h3 class="text-center page-subsubheading">パラメータの調整</h3>
                <p class="page-subsubdesc">パラメータ調整によって、実験環境などの都合に合わせてゲームの難易度や仕様を手軽に調整することができます。数値調整だけでなく、画像差し替えによるビジュアルの調整も可能です。</p>
                <div class="text-center">
                    <img v-bind:src="require('@/assets/image/thumbnail/openvideogame/parameter_input.png')" style="width: 80%;" />
                </div>
                <h3 style="margin-top: 60px;" class="text-center page-subsubheading">パラメータの取得</h3>
                <p class="page-subsubdesc">観察だけでは把握しきれない、ゲームの内部データを取得することができます。ゲーム体験やコントローラデバイスの評価分析に活用できます。</p>
                <div class="text-center">
                    <img v-bind:src="require('@/assets/image/thumbnail/openvideogame/parameter_output.png')" style="width: 80%;" />
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import PageCard from '@/components/PageCard.vue'
import Heading from '@/components/Heading.vue'
import games from '@/assets/json/games.json'

export default {
    components: {
        PageCard,
        Heading
    },
    asyncData() {
        return {
            openvideogame: games.openvideogame,
            breadcrumb: [
                {
                    path: '/openvideogame',
                    name: 'オープンビデオゲーム'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
li {
    margin-left: -20px;
}
</style>
