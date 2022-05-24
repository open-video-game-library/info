<template>
    <section class="container">
        <Heading :breadcrumb="breadcrumb" />

        <section class="content-wrapper">
            <div class="content-container">
                <p style="margin-bottom: 0;">相手の隙を狙い打て！</p>
                <h2 class="page-heading" style="padding: 0;">
                    <span style="font-size: 48px;">Minimum tennis</span>
                    <span class="sub-headline">ミニマムテニス</span>
                </h2>
                <div class="unity-wrapper">
                    <iframe
                        src="https://kazuyaiida.github.io/MinimumTennis/"
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
                    ボールの左右への打ち分けと、4種類のショットを駆使して、対戦相手の意表の突く場所へボールを打ち、得点しましょう。ゲームが始まる前に設定したゲーム数を先に勝ち取った方が勝者となります。<br />
                    基本的なルールは実際のテニスと同じで、ボールがネットを越えなかったり、コートの外へと落ちたり、ボールを2回以上バウンドさせてしまうと失点になります。<br />
                    対戦相手の位置やボールの軌道を考えながら、勝利を目指して頑張ってください。
                </p>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h3 class="text-center page-subheading">操作方法</h3>
                <div class="text-center">
                    <img v-bind:src="require('@/assets/image/thumbnail/openvideogame/manual_tennis.png')" style="width: 80%;" />
                </div>
                <!-- <p>
                    キーボード<br />
                    WASD → プレイヤの移動<br />
                    IJKL →ボールの打ち分け<br />
                    <br />
                    Nintendo Switch Proコントローラ<br />
                    WASD → プレイヤの移動<br />
                    IJKL →ボールの打ち分け
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
                            <li>プレイヤと対戦相手の移動速度</li>
                            <li>プレイヤと対戦相手の打つボールの速度</li>
                            <li>対戦相手の反応速度</li>
                            <li>対戦相手のショットに辿り着くまでの移動距離</li>
                            <li>プレイスタイル</li>
                            <li>試合終了条件</li>
                        </ul>
                    </el-col>
                    <el-col :span="12">
                        <h4>取得可能パラメータ</h4>
                        <ul>
                            <li>勝敗</li>
                            <li>プレイヤが勝ち取ったゲーム数</li>
                            <li>対戦相手が勝ち取ったゲーム数</li>
                            <li>プレイヤのネットした回数</li>
                            <li>プレイヤのアウトした回数</li>
                            <li>プレイヤの2バウンドした回数</li>
                            <li>プレイヤのダブルフォルトした回数</li>
                            <li>最大ラリー回数</li>
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
            title: 'Minimum tennis',
        }
    },
    components: {
        OpenVideoGameBtns,
        Heading
    },
    asyncData() {
        return {
            url_download: "https://drive.google.com/file/d/1MqepNQJyqSGWYCunM4aZPqPGDHO3xjHs/view",
            url_code: "",
            breadcrumb: [
                {
                    path: '/openvideogame',
                    name: 'オープンビデオゲーム'
                },
                {
                    path: '/openvideogame/minimum_tennis',
                    name: 'Minimum tennis'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>
