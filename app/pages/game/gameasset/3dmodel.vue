<template>
    <section class="container">
        <section class="content-wrapper bg-heading">
            <div class="content-container">
                <h1 class="page-heading">
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">ゲームアセット｜3Dモデル</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center page-subheading">3Dモデル</h2>
                <el-row :gutter="30" style="width: 100%;">
                    <el-col :span="8" v-for="game in gameasset" :key="game.name">
                        <SiteCard
                            v-if="game.genre==='3dmodel'"
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
    asyncData() {
        return {
            gameasset: games.gameasset
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
</style>>