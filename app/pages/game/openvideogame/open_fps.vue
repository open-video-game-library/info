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
                <p style="margin-bottom: 0;">エイム力の腕試し</p>
                <h2 class="page-heading" style="padding: 0;">
                    <span style="font-size: 48px;">Opsn FPS</span>
                    <span class="sub-headline">オープンエフピーエス</span>
                </h2>
                <div class="unity-wrapper text-center">
                    <img width="960" v-bind:src="require('@/assets/image/thumbnail/openvideogame/fps.png')" />
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
                <div>
                    <h4>シューティングレンジ</h4>
                    画面上部の制限時間がなくなる前に全てのターゲットを倒しきりましょう
                    <h4>アクションフィールド</h4>
                    制限時間内により多くの敵を倒しましょう<br />
                    制限時間を超える毎に敵が追加され、倒し損ねた敵はステージに残ります
                </div>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h3 class="text-center page-subheading">操作方法</h3>
                <p>
                    WASD →移動<br />
                    LShift → ダッシュ<br />
                    Space → ジャンプ<br />
                    右クリック → エイミング<br />
                    左クリック →射撃<br />
                    Escape → 中断
                </p>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h3 class="text-center page-subheading">パラメータ</h3>
                <el-row :gutter="30">
                    <el-col :span="12">
                        <h4>調整可能パラメータ</h4>
                        <ul>
                            <li>ターゲットが追加される回数</li>
                            <li>ターゲットの数</li>
                            <li>ターゲットが追加されるまでの制限時間</li>
                            <li>プレイヤの視点の操作感度</li>
                            <li>プレイヤのエイム時の視点の操作感度</li>
                            <li>プレイヤのジャンプの高さ</li>
                            <li>プレイヤの歩くスピード</li>
                            <li>プレイヤの走るスピード</li>
                            <li>銃の弾数</li>
                            <li>銃の弾の種類</li>
                            <li>銃の弾の速度</li>
                            <li>銃を構えるまでの時間</li>
                            <li>ダッシュから銃を構えるまで時間</li>
                            <li>銃構え時の倍率(調整中)</li>
                        </ul>
                    </el-col>
                    <el-col :span="12">
                        <h4>取得可能パラメータ</h4>
                        <ul>
                            <li>ウェーブ毎の命中率</li>
                            <li>ウェーブ毎の敵の撃破数</li>
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
