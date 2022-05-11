<template>
    <section class="container">
        <section id="Abstract" class="content-wrapper" style="position: relative; color: white;">
            <div class="video-wrapper text-center">
                <video autoplay muted loop playsinline>
                    <source v-bind:src="require('@/assets/image/background/Abst_movie.mp4')" />
                </video>
            </div>
            <div class="content-container"
                style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
                <h1 class="page-heading" style="top: 0;">
                    <span class="material-icons">info</span>
                    <span style="font-size: 48px;">About</span>
                    <span class="sub-headline">このサービスについて</span>
                </h1>
                <div style="padding-bottom: 120px; position: absolute; bottom: 0;">
                    <h2 style="margin-bottom: 30px;">
                        Open Video Game Libraryはゲーム研究を行いやすくし、
                        <br />ゲーム研究の発展に貢献することを目的としたゲーム研究者のためのライブラリです。
                    </h2>
                    <p style="margin: 0;">
                        市販ビデオゲームの編集可能性が低い点や、ゲームを自作する際の開発コスト、他研究との比較のしやすさなどを問題視し、
                        <br />研究に使いやすいオープンなビデオゲームを提供しています。
                    </p>
                </div>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h2 class="text-center page-subheading">Open Video Game Libraryでできること</h2>

                <el-row :gutter="30">
                    <el-col :span="8">
                        <div class="text-center">
                            <img style="width: 80%;" v-bind:src="require('@/assets/image/logo/can1.png')" />
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="text-center">
                            <img style="width: 80%;" v-bind:src="require('@/assets/image/logo/can2.png')" />
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="text-center">
                            <img style="width: 80%;" v-bind:src="require('@/assets/image/logo/can3.png')" />
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="30" style="margin-top: 10px;">
                    <el-col :span="8" class="flex-center">
                        <h3 class="text-center">研究で使えるゲームを見つける</h3>
                    </el-col>
                    <el-col :span="8" class="flex-center">
                        <h3 class="text-center">研究で使えるツールを見つける</h3>
                    </el-col>
                    <el-col :span="8" class="flex-center">
                        <h3 class="text-center">ゲーム研究の知見を深める</h3>
                    </el-col>
                </el-row>
                <el-row :gutter="30">
                    <el-col :span="8">
                        <p>
                            研究で利用されることを前提に、作成されたオープンビデオゲームや、ソースコードが公開され、研究に合わせて修正できるオープンソースゲームを見つけ、利用することができます。
                        </p>
                    </el-col>
                    <el-col :span="8">
                        <p>
                            ゲームを用いた体験やデバイスの評価実験を行う際に有益な録画機能や、アンケートを見つけ、利用することができます。
                        </p>
                    </el-col>
                    <el-col :span="8">
                        <p>
                            ゲーム開発をする上でためになる情報や、ゲーム研究をする上で抑えておくべきポイントを知ることができます。
                        </p>
                    </el-col>
                </el-row>
                <el-row :gutter="30" style="margin-top: 30px;">
                    <el-col :span="8">
                        <button class="btn-page" @click="$router.push('/game')">
                            <span class="text">ゲームを見つける</span>
                        </button>
                    </el-col>
                    <el-col :span="8">
                        <button class="btn-page" @click="$router.push('/tool')">
                            <span class="text">ツールを見つける</span>
                        </button>
                    </el-col>
                    <el-col :span="8">
                        <button class="btn-page" @click="$router.push('/article')">
                            <span class="text">記事を読む</span>
                        </button>
                    </el-col>
                </el-row>
            </div>
        </section>

        <section id="Member" class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center page-subheading">メンバー</h2>
                <p class="page-subdesc">
                    明治大学渡邊恵太研究室のメンバーが中心となり運営。さらに、ゲーム開発・研究に関する幅広い知見を有した外部メンバーを迎えプロジェクト推進中。
                </p>
                <el-row :gutter="8" style="width: 100%;">
                    <el-col :span="8" v-for="mem in member" :key="mem.name_short">
                        <MemberCard
                            class="grid-content"
                            :name="mem.name"
                            :name_en="mem.name_en"
                            :name_short="mem.name_short"
                            :grade="mem.grade"
                            :homepage="mem.homepage"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>

        <section id="Publication" class="content-wrapper bg-white">
            <div class="content-container">
                <h2 class="text-center page-subheading">出版</h2>
                <ul style="list-style: none; padding-left: 0;"
                    v-for="pub in publication"
                    :key="pub.title" >
                    <li>
                        <a :href="pub.url" target="_blank" rel="noopener noreferrer"
                            style="text-decoration: none; color: black;">
                            {{ pub.author }}．"{{ pub.title }}"，{{ pub.journal }}，vol．{{ pub.volume }}，pp．{{ pub.pages }}，{{ pub.date }}．
                        </a>
                    </li>
                </ul>
            </div>
        </section>

    </section>
</template>

<script>
import MemberCard from '~/components/MemberCard.vue'

export default {
    components: {
        MemberCard
    },
    asyncData() {
        return {
            gameBtnSrc: null,
            toolBtnSrc: null,
            articleBtnSrc: null,
            gameBtnSrc0: require('@/assets/image/button/Button_0_game.png'),
            toolBtnSrc0: require('@/assets/image/button/Button_0_tool.png'),
            articleBtnSrc0: require('@/assets/image/button/Button_0_article.png'),
            gameBtnSrc1: require('@/assets/image/button/Button_1_game.png'),
            toolBtnSrc1: require('@/assets/image/button/Button_1_tool.png'),
            articleBtnSrc1: require('@/assets/image/button/Button_1_article.png'),
            member: [
                {
                    name: '渡邊 恵太',
                    name_en: 'Watanabe Keita',
                    name_short: '100kw',
                    grade: '',
                    homepage: 'https://keitawatanabe.jp/'
                },
                {
                    name: '𥱋瀨 洋平',
                    name_en: 'Yanase Yohei',
                    name_short: 'yanace',
                    grade: '',
                    homepage: 'https://sites.google.com/site/yoh7686/'
                },
                {
                    name: '岡 拓也',
                    name_en: 'Oka Takuya',
                    name_short: 'okataku',
                    grade: 'M2',
                    homepage: 'https://takuyaoka.studio.site/'
                },
                {
                    name: '川島 拓也',
                    name_en: 'Kawashima Takuya',
                    name_short: 'takuya',
                    grade: 'M2',
                    homepage: 'https://tea-kawashima.herokuapp.com/'
                },
                {
                    name: '伊奈 佑馬',
                    name_en: 'Ina Yuma',
                    name_short: 'yuma',
                    grade: 'M1',
                    homepage: ''
                },
                {
                    name: '林 大智',
                    name_en: 'Hayashi Daichi',
                    name_short: 'hayashi',
                    grade: 'B4',
                    homepage: ''
                },
                {
                    name: '飯田 和也',
                    name_en: 'Iida Kazuya',
                    name_short: 'iida',
                    grade: 'B3',
                    homepage: ''
                },
            ],
            publication: [
                {
                    title: '研究利用しやすく標準性を目指したビデオゲームの設計と開発',
                    author: '岡 拓也，川島 拓也，林 大智，渡邊 恵太',
                    journal: 'エンタテインメントコンピューティングシンポジウム論文集',
                    volume: '2021',
                    pages: '181-186',
                    date: 'Aug．2021',
                    url: 'http://id.nii.ac.jp/1001/00212465/'
                },
                {
                    title: 'HCI研究における評価実験用ビデオゲームの要件探究とオープンビデオゲームライブラリを用いたケーススタディ',
                    author: '岡 拓也，川島 拓也，簗瀬 洋平，渡邊 恵太',
                    journal: '研究報告ヒューマンコンピュータインタラクション（HCI）',
                    volume: '2022-HCI-196(11)',
                    pages: '1-8',
                    date: 'Jan．2022',
                    url: 'http://id.nii.ac.jp/1001/00214482/'
                },
                {
                    title: '日本のHCI分野におけるビデオゲームを使った評価に関するサーベイ',
                    author: '川島 拓也，岡 拓也，簗瀬 洋平，渡邊 恵太',
                    journal: '研究報告ヒューマンコンピュータインタラクション（HCI）',
                    volume: '2022-HCI-196(12)',
                    pages: '1-8',
                    date: 'Jan．2022',
                    url: 'http://id.nii.ac.jp/1001/00214481/'
                },
                {
                    title: '研究者が利用しやすいオープンなスポーツゲームの試作',
                    author: '飯田 和也，岡 拓也，川島 拓也，簗瀬 洋平，渡邊 恵太',
                    journal: 'インタラクション2022予稿集',
                    volume: '2022',
                    pages: '589-591',
                    date: 'Feb．2022',
                    url: 'http://www.interaction-ipsj.org/proceedings/2022/data/pdf/4D18.pdf'
                },
                {
                    title: 'FPSゲームの要素分析とそれに基づくオープンなFPSゲームの開発',
                    author: '林 大智，岡 拓也，川島 拓也，簗瀬 洋平，渡邊 恵太',
                    journal: '研究報告ゲーム情報学（GI）',
                    volume: '2022-GI-47(11)',
                    pages: '1-6',
                    date: 'Mar．2022',
                    url: 'http://id.nii.ac.jp/1001/00217406/'
                },
            ]
        }
    },
    created() {
        this.gameBtnSrc = this.gameBtnSrc0;
        this.toolBtnSrc = this.toolBtnSrc0;
        this.articleBtnSrc = this.articleBtnSrc0;
    }
}
</script>

<style scoped>
li {
    margin: 20px 0;
}
.flex-center {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-wrapper {
	position: relative;
	width: 100%;
    height: calc(100vh - 61px);
	overflow: hidden;
}
.video-wrapper video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
}
.video-wrapper::after {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	right: 0;
    left: 0;
	width: 100%;
    height: calc(100vh - 61px);
	background-color: rgba(0,0,0,0.3);
	background-image: radial-gradient(#111 30%, transparent 31%), radial-gradient(#111 30%, transparent 31%);
	background-size: 4px 4px;
	background-position: 0 0, 2px 2px;
}

.bg-heading {
    background-image: url("~@/assets/image/background/heading_about.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center top;
}
</style>