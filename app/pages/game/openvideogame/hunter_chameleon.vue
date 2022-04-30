<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">オープンビデオゲーム</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <p style="margin-bottom: 0;">日没までに食べ尽くせ！</p>
                <h2 class="page-heading" style="padding: 0;">
                    <span style="font-size: 48px;">Hunter-Chameleon</span>
                    <span class="sub-headline">ハンターカメレオン</span>
                </h2>
                <div class="unity-wrapper">
                    <iframe
                        src="https://keitalab.github.io/hunter_chameleon/"
                        width="768" height="480"
                        scrolling="no" frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="dl-btns">
                    <div class="btn-icon">
                        <a href="" style="background-color: #4AC44C;">
                            <span class="material-icons">file_download</span>
                            <span>Download</span>
                        </a>
                    </div>
                    <div class="btn-icon">
                        <a href="" class="btn-icon" style="background-color: white; color: black;">
                            <span class="material-icons">code</span>
                            <span>Sourse code</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h3 class="text-center">ルール</h3>
                <p>
                    制限時間内に、できるだけ多くのハエを捕ってスコアを伸ばしましょう。<br />
                    ハエを捕った位置が、トリガーを引いた照準の位置と近いほど、スコアが大きいです。<br />
                    降ってくるりんごや襲ってくる蜂がカメレオンの身体に当たるとダメージを受けてしまうので、その前に舌で撃ち落としましょう。<br />
                    3回ダメージを受けてしまうと、ゲームオーバーとなります。<br />
                    りんごや蜂を撃ち落としつつハエを捕り、ハイスコアを目指して頑張ってください。
                </p>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h3 class="text-center">操作方法</h3>
                <p>
                    左クリック → トリガーを引く<br />
                    マウス移動 or トラックパッドの移動 → 照準の移動
                </p>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h3 class="text-center">パラメータ</h3>
                <el-row :gutter="30">
                    <el-col :span="12">
                        <h4>調整可能パラメータ</h4>
                        <ul>
                            <li>制限時間</li>
                            <li>各ターゲットの出現頻度</li>
                            <li>各ターゲットの移動速度</li>
                        </ul>
                    </el-col>
                    <el-col :span="12">
                        <h4>取得可能パラメータ</h4>
                        <ul>
                            <li>スコア</li>
                            <li>ターゲットへのヒット数</li>
                            <li>ターゲットへのヒット率</li>
                            <li>生存時間</li>
                        </ul>
                    </el-col>
                </el-row>
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
                    name: "3Dモデル",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "サウンド",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "エフェクト",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "UI/インタフェース",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "ライブラリ/開発言語",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "教育/学習",
                    img: "no_image.png",
                    to: ""
                },
                {
                    name: "その他",
                    img: "no_image.png",
                    to: ""
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>
