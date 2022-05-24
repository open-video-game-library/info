<template>
    <section class="container">
        <section class="content-wrapper bg-heading">
            <div class="content-container">
                <h1 class="page-heading">
                    <!-- <img class="logo" src="@/assets/image/logo/Game_logo_black.png" /> -->
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Open Video Game</span>
                    <span class="sub-headline">
                        <nuxt-link class="breadcrumb" :to="'/openvideogame'">オープンビデオゲーム</nuxt-link>
                        ＞
                        <strong>ガイドライン</strong>
                    </span>
                </h1>
            </div>
        </section>

        <section id="Guideline" class="content-wrapper">
            <div class="content-container">
                <!-- <h2 class="text-center page-subheading">ガイドライン</h2> -->
                <p class="text-center page-subdesc">このガイドラインでは、オープンビデオゲームを研究にご活用いただく際のルールと推奨事項についてご説明いたします。</p>
                <h3 class="text-center page-subsubheading">ご利用OK/NG例</h3>
                <el-row class="mb-60" :gutter="30">
                    <el-col class="mb-30" :span="12">
                        <h4 class="text-center mb-15">OK</h4>
                        <el-card>
                            <p class="text-center mb-10">営利を目的としない以下のような利用</p>
                            <el-card class="mb-10">
                                <h5 class="text-center mb-10">研究や創作活動での利用</h5>
                                <ul>
                                    <li>オープンビデオゲームで取得した体験データを用いて評価実験を行い、その内容を論文に掲載する</li>
                                    <li>学術会議や展示会にてオープンビデオゲームをデモンストレーション発表に使用する</li>
                                    <li>オンライン会議や配信サービスにて、プレイしている様子を共有する</li>
                                </ul>
                            </el-card>
                            <el-card class="el-card">
                                <h5 class="text-center mb-10">個人利用</h5>
                                <ul>
                                    <li>友人や家族と本ゲームをプレイする。また、その様子をSNSなどでシェアをする</li>
                                    <li>本ゲームのソースコードを改変し、ゲームを自作する</li>
                                </ul>
                            </el-card>
                        </el-card>
                    </el-col>

                    <el-col :span="12">
                        <h4 class="text-center mb-15">NG</h4>
                        <el-card>
                            <p class="text-center">営利を目的とする利用</p>
                        </el-card>
                    </el-col>
                </el-row>

                <h3 class="text-center mb-30">研究利用時の推奨事項</h3>
                <el-row :gutter="30">
                    <el-col :span="24">
                        <el-card>
                            <el-row :gutter="30">
                                <el-col :span="24">
                                    <el-card class="mb-10">
                                        <h5 class="text-center mb-10">引用</h5>
                                        <p>
                                            本ライブラリのゲームまたは、機能を研究利用する場合、各ゲームページで指定された論文を引用し、本ゲームライブラリを利用した旨を明記してください。
                                        </p>
                                    </el-card>
                                </el-col>
                                <el-col :span="24">
                                    <el-card>
                                        <h5 class="text-center mb-10">設定パラメータの明示</h5>
                                        <p>
                                            本ゲームは、利用条件に合わせてゲーム内パラメータを変更できることができます。それに伴い、同一のゲームで難易度や体験が変化します。研究の公平性、再現性を保つために、設定したパラメータの値を明示するようにしてください。
                                        </p>
                                    </el-card>
                                 </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </section>
    </section>
</template>

<style scoped>
.bg-heading {
    background-image: url("~@/assets/image/background/heading_game.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
</style>