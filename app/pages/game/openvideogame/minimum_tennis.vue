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
                    ボールの左右への打ち分けと、4種類のショットを駆使して、対戦相手の意表の突く場所へボールを打ち、得点しましょう。ゲームが始まる前に設定したゲーム数を先に勝ち取った方が勝者となります。<br />
                    基本的なルールは実際のテニスと同じで、ボールがネットを越えなかったり、コートの外へと落ちたり、ボールを2回以上バウンドさせてしまうと失点になります。<br />
                    対戦相手の位置やボールの軌道を考えながら、勝利を目指して頑張ってください。
                </p>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h3 class="text-center">操作方法</h3>
                <p>
                    キーボード<br />
                    WASD → プレイヤの移動<br />
                    IJKL →ボールの打ち分け<br />
                    <br />
                    Nintendo Switch Proコントローラ<br />
                    WASD → プレイヤの移動<br />
                    IJKL →ボールの打ち分け
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
</script>

<style scoped>
</style>
