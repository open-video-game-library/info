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
                <h2 class="text-center">3Dモデル</h2>
                <el-row :gutter="30" style="width: 100%;">
                    <el-col :span="8" v-for="mod in model" :key="mod.name">
                        <SiteCard
                            style="margin-bottom: 30px;"
                            :name="mod.name"
                            :desc="mod.desc"
                            :img="mod.img"
                            :url="mod.url"
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
            model: [
                {
                    name: '立体屋さん',
                    desc: 'モデルの改変OK。クレジット表記してくれると嬉しい。二次配布は禁止。ローポリゴンな3Dモデルを提供。',
                    img: 'asset/3dmodel/rittaiyasan.png',
                    url: 'https://rittaiyasan.com/'
                },
                {
                    name: '3D屋さん',
                    desc: 'モデルの改変OK。クレジット表記してくれると嬉しい。二次配布で料金が発生する場合有り。リアルなインテリアの3Dモデルを提供。',
                    img: 'asset/3dmodel/3dyasan.jpeg',
                    url: 'https://3dyasan.com/'
                },
                {
                    name: 'Three D Scans',
                    desc: '著作権の制限なしにDL可能。アートなオブジェの3Dモデルを提供。',
                    img: 'asset/3dmodel/threedscans.gif',
                    url: 'https://threedscans.com/'
                },
                {
                    name: 'Poly Haven',
                    desc: '自身を作者だと主張したり、再ライセンスしない限り自由に利用可能。二次配布が可能。ハイクオリティなテクスチャや3Dモデルを提供。',
                    img: 'asset/3dmodel/polyhaven.png',
                    url: 'https://polyhaven.com/'
                },
                {
                    name: 'Free 3D',
                    desc: 'モデルの改変NG。恐らく二次配布は禁止。メカニックな3Dモデルや、アニメーションを提供。一部有料。',
                    img: 'asset/3dmodel/free3d.jpeg',
                    url: 'https://free3d.com/'
                },
                {
                    name: 'Sketchfab',
                    desc: '二次配布は禁止。多種多様な3Dモデルを提供。有料の3Dモデルもある。',
                    img: 'asset/3dmodel/sketchfab.png',
                    url: 'https://sketchfab.com/'
                },
                {
                    name: 'ddd.pink',
                    desc: 'モデルの改変NG。二次配布は禁止。ハイクオリティでリアルな3Dモデルを提供。有料の3Dモデルもある。',
                    img: 'asset/3dmodel/ddd.png',
                    url: 'https://ddd.pink/'
                },
                {
                    name: 'Plant Models Vol 60 - Maxtree',
                    desc: '二次配布は禁止。ハイクオリティでリアルな直物の3Dモデルを提供。ほぼ全てが有料。',
                    img: 'asset/3dmodel/maxtree.png',
                    url: 'https://maxtree.org/'
                },
                {
                    name: 'CGTrader',
                    desc: '二次配布は禁止。有料のものが多い。',
                    img: 'asset/3dmodel/cgtrader.png',
                    url: 'https://www.cgtrader.com/ja'
                },
                {
                    name: 'TurboSquid',
                    desc: '恐らく二次配布は禁止。ハイクオリティでリアルな3Dモデルを提供。有料のものが多いが、無料のものも多い。',
                    img: 'asset/3dmodel/turbosquid.png',
                    url: 'https://www.turbosquid.com/ja/'
                },
                {
                    name: '3D MODEL JAPAN',
                    desc: '二次配布や改変の可否についての明確な記載なし。無料のものが多いが、有料のものある。リアルなインテリアの3Dモデルを提供。',
                    img: 'asset/3dmodel/3dmj.jpeg',
                    url: 'https://3dmj.info/'
                },
                {
                    name: 'Renderpeople',
                    desc: '二次配布は禁止。有料のものがほとんどだが、無料のものもある。ハイクオリティでリアルな人の3Dモデルを提供。',
                    img: 'asset/3dmodel/renderpeople.png',
                    url: 'https://renderpeople.com/jp/'
                },
                {
                    name: '3Dで漫画を作ろう',
                    desc: 'モデルの改変OK。二次配布は禁止。Blenderで使える、白黒3Dモデルを提供。',
                    img: 'asset/3dmodel/3dmanga.png',
                    url: 'https://3dmanga-free.poitokona.com/'
                },
                {
                    name: 'Hum3D store',
                    desc: 'モデルの改変OK。二次配布は禁止。ハイクオリティでリアルな3Dモデルを提供。有料のものがほとんどだが、無料のものもある。',
                    img: 'asset/3dmodel/hum3d.png',
                    url: 'https://hum3d.com/ja/'
                },
            ]
        }
    }
}
</script>
