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
                <p style="margin-bottom: 0;">大海原を突き進め！</p>
                <h2 class="page-heading" style="padding: 0;">
                    <span style="font-size: 48px;">Escape fish</span>
                    <span class="sub-headline">エスケープフィッシュ</span>
                </h2>
                <div class="unity-wrapper text-center">
                    <iframe
                        src="https://keitalab.github.io/escape_fish/"
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
                    海流に流されて網に捕われないように魚をコントロールし、できるだけ移動距離を伸ばしましょう。<br />
                    上下移動や加速を使い、障害物や襲ってくる鳥や魚を避けましょう。<br />
                    仲間の魚をゲットすると、残機が増えます。<br />
                    残機がない状態で障害物や敵に当たるか、後ろから迫ってくる網に捕まってしまうとゲームオーバーです。<br />
                </p>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h3 class="text-center page-subheading">操作方法</h3>
                <p>
                    上下キー→ 上下の移動<br />
                    スペース → 加速
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
                            <li>上下移動感度</li>
                            <li>推進力</li>
                            <li>海流の力</li>
                        </ul>
                    </el-col>
                    <el-col :span="12">
                        <h4>取得可能パラメータ</h4>
                        <ul>
                            <li>スコア</li>
                            <li>生存時間</li>
                            <li>ゲットした魚の数</li>
                            <li>前への加速を入力した回数</li>
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
