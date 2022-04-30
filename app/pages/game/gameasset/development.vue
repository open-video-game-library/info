<template>
    <section class="container">
        <section class="content-wrapper bg-white">
            <div class="content-container">
                <h1 class="page-heading">
                    <!-- <img class="logo" src="@/assets/image/logo/Game_logo_black.png" /> -->
                    <span class="material-icons" style="">sports_esports</span>
                    <span style="font-size: 48px;">Game</span>
                    <span class="sub-headline">ゲームアセット</span>
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <h2 class="text-center">開発言語/フレームワーク</h2>
                <el-row :gutter="30" style="width: 100%;">
                    <el-col :span="8" v-for="dev in development" :key="dev.name">
                        <SiteCard
                            style="margin-bottom: 30px;"
                            :name="dev.name"
                            :desc="dev.desc"
                            :img="dev.img"
                            :url="dev.url"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>
    </section>
</template>

<script>
import SiteCard from '~/components/SiteCard.vue'

export default {
    components: {
        SiteCard
    },
    asyncData() {
        return {
            development: [
                {
                    name: 'Kaboom.js',
                    desc: 'HTML5とJavaScriptを用いた2Dゲーム開発に特化したフレームワーク。',
                    img: 'asset/development/kaboom.png',
                    url: 'https://kaboomjs.com/'
                },
                {
                    name: 'Cocos Creator',
                    desc: 'JavaScriptベース。Web上で動くゲームや、2Dゲーム開発が向いている。',
                    img: 'asset/development/cocos2d.png',
                    url: 'https://cocos2d-x.org/'
                },
                {
                    name: 'CryEngine',
                    desc: '3DゲームやVRコンテンツの開発が向いている。C#・C++でのコーディングに加え、ビジュアルスクリプティングもできる。',
                    img: 'asset/development/cryengine.png',
                    url: 'https://www.cryengine.com/'
                },
                {
                    name: 'enchant.js',
                    desc: 'HTML5とJavaScriptを用いた2Dゲーム開発に特化したフレームワーク。かなり古い。',
                    img: '',
                    url: 'http://enchantjs.com/'
                },
                {
                    name: 'Phaser',
                    desc: 'HTML5とJavaScriptを用いた2Dゲーム開発に特化したフレームワーク。WebGLでの動作や物理エンジンに対応。',
                    img: 'asset/development/phaser.png',
                    url: 'https://phaser.io/'
                },
                {
                    name: 'melonJS',
                    desc: 'HTML5とJavaScriptを用いた2Dゲーム開発に特化したフレームワーク。',
                    img: 'asset/development/melonJS.jpeg',
                    url: 'https://www.melonjs.org/'
                },
                {
                    name: 'PixiJS',
                    desc: 'JavaScriptを用いた2Dゲーム開発に特化したフレームワーク。',
                    img: 'asset/development/PixiJS.png',
                    url: 'https://pixijs.com/'
                },
                {
                    name: 'PlayCanvas',
                    desc: 'WebGLとHTML5対応のゲームエンジン。3D描画を軽量かつ高速に行える。',
                    img: 'asset/development/PlayCanvas.png',
                    url: 'https://playcanvas.jp/'
                },
                {
                    name: 'PLiCy',
                    desc: 'アクションゲームやノベルゲームの開発がしやすい。Web上で動作する。コードを書く必要がない。PCでもスマホでも開発できる。',
                    img: 'asset/development/PLiCy.gif',
                    url: 'https://plicy.net/'
                },
                {
                    name: 'WiMi5',
                    desc: 'コーディング不要のHTML5のゲームエンジン。JavaScriptでコーディングすれば、開発の幅が広がる。',
                    img: 'asset/development/WiMi5.webp',
                    url: 'http://wimi5.com/'
                },
                {
                    name: 'CONSTRUCT 3',
                    desc: 'Web上で動作する。コーディング不要のゲームエンジン。JavaScriptでコーディングすれば、開発の幅が広がる。2Dゲーム・3Dゲームに対応。',
                    img: 'asset/development/construct.webp',
                    url: 'https://www.construct.net/en'
                }
            ]
        }
    }
}
</script>
