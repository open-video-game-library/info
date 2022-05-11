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
                <p style="margin-bottom: 0;">滑る氷のスリリング！</p>
                <h2 class="page-heading" style="padding: 0;">
                    <span style="font-size: 48px;">Sliding penguin</span>
                    <span class="sub-headline">スライディングペンギン</span>
                </h2>
                <div class="unity-wrapper">
                    <iframe
                        src="https://keitalab.github.io/OVGL-SlidingPenguin/"
                        width="960" height="650"
                        scrolling="no" frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                
                <OpenVideoGameBtns
                    :url_download="url_download"
                    :url_code="url_code"
                />
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h3 class="text-center page-subheading">ルール</h3>
                <p>
                    制限時間内に、できるだけ多くのサカナを捕ってゴールを目指しましょう。<br />
                    ステージはツルツル滑るので、スピードを出し過ぎずに調整しながら進んでください。<br />
                    海に落ちてしまうとゲームオーバーになります。<br />
                    落ちてしまいそうな時は、行きたい方向を向き加速すると、ブレーキをかけることができます。
                </p>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h3 class="text-center page-subheading">操作方法</h3>
                <div class="text-center">
                    <img v-bind:src="require('@/assets/image/thumbnail/openvideogame/manual_penguin.png')" style="width: 80%;" />
                </div>
                <!-- <p>
                    WASD or 左右上下キー→ 移動方向<br />
                    スペース → 向いている方向に加速
                </p> -->
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h3 class="text-center page-subheading">パラメータ</h3>
                <el-row :gutter="30">
                    <el-col :span="12">
                        <h4>調整可能パラメータ</h4>
                        <ul>
                            <li>移動感度</li>
                            <li>制限時間</li>
                        </ul>
                    </el-col>
                    <el-col :span="12">
                        <h4>取得可能パラメータ</h4>
                        <ul>
                            <li>成否</li>
                            <li>入手したサカナの数</li>
                            <li>クリア時間</li>
                            <li>移動距離</li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </section>
    </section>
</template>

<script>
import OpenVideoGameBtns from '~/components/OpenVideoGameBtns.vue'

export default {
    components: {
        OpenVideoGameBtns
    },
    asyncData() {
        return {
            url_download: "",
            url_code: ""
        }
    }
}
</script>

<style scoped>
</style>
