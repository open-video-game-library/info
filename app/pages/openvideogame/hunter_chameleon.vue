<template>
    <section class="container">
        <Heading :breadcrumb="breadcrumb" />

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
                <h3 class="text-center page-subheading">操作方法</h3>
                <div class="text-center">
                    <img v-bind:src="require('@/assets/image/thumbnail/openvideogame/manual_chameleon.png')" style="width: 80%;" />
                </div>
                <!-- <p>
                    左クリック → トリガーを引く<br />
                    マウス移動 or トラックパッドの移動 → 照準の移動
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
import OpenVideoGameBtns from '~/components/OpenVideoGameBtns.vue'
import Heading from '~/components/Heading.vue'

export default {
    head() {
        return {
            title: 'Hunter-Chameleon',
        }
    },
    components: {
        OpenVideoGameBtns,
        Heading
    },
    asyncData() {
        return {
            url_download: "https://tkystar.itch.io/hunter-chameleon",
            url_code: "",
            breadcrumb: [
                {
                    path: '/openvideogame',
                    name: 'オープンビデオゲーム'
                },
                {
                    path: '/openvideogame/hunter_chameleon',
                    name: 'Hunter-Chameleon'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>
