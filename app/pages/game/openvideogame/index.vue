<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <!-- <img class="logo" src="@/assets/image/logo/Game_logo_black.png" /> -->
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">オープンビデオゲーム</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center">ガイドライン</h2>
                <p>このガイドラインでは、オープンビデオゲームを研究にご活用いただく際のルールやFAQなどについて、ご説明いたします。</p>
                <h3 class="text-center">ご利用OK/NG例</h3>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <h4 class="text-center">OK</h4>
                        <el-card class="el-card">
                            <p class="text-center">営利を目的としない以下のような利用</p>
                            <el-card class="el-card">
                                <h5>オープンビデオゲームを用いて研究を行う</h5>
                                ・オープンビデオゲームで取得した体験データを用いて評価実験を行い、その内容を論文に掲載する。
                            </el-card>
                            <el-card class="el-card">
                                <h5>学会のデモ発表に利用する</h5>
                                ・オープンビデオゲームをプレイできるブースにて参加者にプレイしてもらう。<br/>
                                ・オンライン会議や配信サービスにて、プレイしている様子を共有する。
                            </el-card>
                        </el-card>
                    </el-col>

                    <el-col :span="12">
                        <h4 class="text-center">NG</h4>
                        <el-card class="el-card">
                            <p class="text-center">営利を目的とした利用</p>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h2 class="text-center">ゲーム一覧</h2>
                <el-row :gutter="24">
                    <el-col :span="12" v-for="gm in game" :key="gm.name_short">
                        <GenreCard
                            :name="gm.name"
                            :img="gm.img"
                            :to="gm.to"
                            style="margin-bottom: 24px;"
                        />
                    </el-col>
                    <el-col :span="12">
                        <el-card :body-style="{padding: '0px', position: 'relative'}"
                            style="margin-top: 30.5px;">
                            <nuxt-link to="/contact" class="hover-pointer full-link"></nuxt-link>
                            <img v-bind:src="require(`@/assets/image/thumbnail/more.png`)"
                                style="display: block; width: 100%; height: 100%;" />
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center">パラメータの調整・取得</h2>
                <p>オープンビデオゲームでは、コードを書くことなくパラメータを調整・取得することができます。</p>
                <h3 style="margin-top: 60px;" class="text-center">パラメータの調整</h3>
                <p>パラメータ調整によって、実験環境などの都合に合わせてゲームの難易度や仕様を手軽に調整することができます。数値調整だけでなく、画像差し替えによるビジュアルの調整も可能です。</p>
                <div class="text-center">
                    <img v-bind:src="require(`@/assets/image/thumbnail/parameter_input.png`)" style="width: 80%;" />
                </div>
                <h3 style="margin-top: 60px;" class="text-center">パラメータの取得</h3>
                <p>観察だけでは把握しきれない、ゲームの内部データを取得することができます。ゲーム体験やコントローラデバイスの評価分析に活用できます。</p>
                <div class="text-center">
                    <img v-bind:src="require(`@/assets/image/thumbnail/parameter_output.png`)" style="width: 80%;" />
                </div>
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
                    name: "Hunter-Chameleon",
                    img: "no_image.png",
                    to: "openvideogame/hunter_chameleon"
                },
                {
                    name: "Escape fish",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "Sliding peuguin",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "Minimum tennis",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "Open FPS",
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
