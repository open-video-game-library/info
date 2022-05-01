<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <!-- <img class="logo" src="@/assets/image/logo/Game_logo_black.png" /> -->
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">オープンソースゲーム</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center page-subheading">ゲーム一覧</h2>
                <p class="text-center page-subdesc">このページでは、コードが公開されているオープンソースのゲームを紹介します。研究に合ったゲームを探してみましょう。</p>

                <h3 class="text-center page-subsubheading">スポーツ</h3>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in opensoursegame" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='sports'"
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                </el-row>

                <h3 class="text-center page-subsubheading">シューティング</h3>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in opensoursegame" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='shooting'"
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                </el-row>

                <h3 class="text-center page-subsubheading">プラットフォーム</h3>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in opensoursegame" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='platform'"
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                </el-row>

                <h3 class="text-center page-subsubheading">レース/ドライビング</h3>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in opensoursegame" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='driving'"
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                </el-row>

                <h3 class="text-center page-subsubheading">アクション</h3>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in opensoursegame" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='action'"
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                </el-row>

                <h3 class="text-center page-subsubheading">格闘</h3>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in opensoursegame" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='fighting'"
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                </el-row>

                <h3 class="text-center page-subsubheading">パズル</h3>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in opensoursegame" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='puzzle'"
                            style="margin-bottom: 30px;"
                            :name="game.name"
                            :desc="game.desc"
                            :img="game.img"
                            :url="game.url"
                        />
                    </el-col>
                </el-row>

                <h3 class="text-center page-subsubheading">その他</h3>
                <el-row :gutter="30">
                    <el-col :span="8" v-for="game in opensoursegame" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='other'"
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
import SiteCard from '~/components/SiteCard.vue'
import games from '@/assets/json/games.json'

export default {
    components: {
        SiteCard
    },
    asyncData({ $axios }) {
        return {
            opensoursegame: games.opensoursegame
        }
    }
}
</script>

<style scoped>
</style>
