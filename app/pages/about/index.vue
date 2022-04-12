<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <img class="logo" :src="require('@/assets/image/logo/About_logo_black.png')" />
                    <span style="font-size: 38px;">About</span>
                    <span class="sub-headline">このサービスについて</span>
                </h1>
            </div>
        </section>

        <section id="Abstract" class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center">Open Video Game Libraryとは</h2>
                <p>
                    Open Video Game Libraryはゲーム研究を行いやすくし、ゲーム研究の発展に貢献することを目的としたゲーム研究者支援ツールです。主に以下の2点から研究者を支援します。
                </p>
                <ul>
                    <li>ゲーム研究者が研究のために用意するゲームの準備コストを削減する</li>
                    <li>評価実験を手軽で正しく行うためのツールを提供・紹介する</li>
                </ul>
            </div>
        </section>

        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h2 class="text-center">Open Video Game Libraryでできること</h2>

                <h3 class="text-center">ゲームを見つけ、利用できる</h3>
                <p>
                    研究で利用されることを前提に、作成されたオープンビデオゲームや、ソースコードが公開され、研究に合わせて修正できるオープンソースゲームを見つけ、利用することができます。
                </p>
                <p class="text-center" style="padding-top: 0;">
                    <nuxt-link
                        to="/game"
                        class="hover-pointer"
                        tag="img" 
                        :src="gameBtnSrc"
                        style="height: 48px;"
                        @mouseover.native="gameBtnSrc = gameBtnSrc1"
                        @mouseleave.native="gameBtnSrc = gameBtnSrc0"
                    ></nuxt-link>
                </p>

                <h3 class="text-center">評価実験を手軽に正しく行える</h3>
                <p>
                    ゲームを用いた体験やデバイスの評価実験を行う際に有益な録画機能や、アンケートを見つけ、利用することができます。
                </p>
                <p class="text-center" style="padding-top: 0;">
                    <nuxt-link
                        to="/tool"
                        class="hover-pointer"
                        tag="img" 
                        :src="toolBtnSrc"
                        style="height: 48px;"
                        @mouseover.native="toolBtnSrc = toolBtnSrc1"
                        @mouseleave.native="toolBtnSrc = toolBtnSrc0"
                    ></nuxt-link>
                </p>

                <h3 class="text-center">ゲーム開発・ゲーム研究に有益な情報を取得できる</h3>
                <p>
                    ゲーム開発をする上でためになる情報や、ゲーム研究をする上で抑えておくべきポイントを知ることができます。
                </p>
                <p class="text-center" style="padding-top: 0;">
                    <nuxt-link
                        to="/article"
                        class="hover-pointer"
                        tag="img" 
                        :src="articleBtnSrc"
                        style="height: 48px;"
                        @mouseover.native="articleBtnSrc = articleBtnSrc1"
                        @mouseleave.native="articleBtnSrc = articleBtnSrc0"
                    ></nuxt-link>
                </p>
            </div>
        </section>

        <section id="Member" class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center">メンバー</h2>
                <p>
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
                <h2 class="text-center">出版</h2>
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
</style>