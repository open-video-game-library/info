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
                <h2 class="text-center">サウンド</h2>
                <el-row :gutter="30" style="width: 100%;">
                    <el-col :span="8" v-for="snd in sound" :key="snd.name">
                        <SiteCard
                            style="margin-bottom: 30px;"
                            :name="snd.name"
                            :desc="snd.desc"
                            :img="snd.img"
                            :url="snd.url"
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
            sound: [
                {
                    name: 'Audiostock',
                    desc: '曲のアレンジOK (音量調節、テンポ変更、ピッチ変更、エコライジング処理、フェードイン・フェードアウト、ループ処理、カットその他音響効果制作に通常伴う加工以外はこの限りではない)。二次配布は禁止。基本的に有料だが、期間限定で無料DLできる曲がある。BGM・SE・ボイス・歌を提供。',
                    img: 'asset/sound/audiostock.png',
                    url: 'https://audiostock.jp/'
                },
                {
                    name: 'Dova-Syndrome',
                    desc: 'クレジット表記してくれると嬉しい。曲のアレンジOK。二次配布は禁止。様々なプロダクトで使えるBGMやSEを提供。',
                    img: 'asset/sound/dova.png',
                    url: 'https://dova-s.jp/'
                },
                {
                    name: '甘茶の音楽工房',
                    desc: 'クレジット表記してくれると嬉しい。曲のアレンジOK。二次配布は禁止。BGMを提供。',
                    img: 'asset/sound/amacha.png',
                    url: 'https://amachamusic.chagasi.com/'
                },
                {
                    name: 'フリーBGM・音楽素材 MusMus',
                    desc: 'クレジット表記必須。曲のアレンジOK。二次配布は禁止。BGMを提供。',
                    img: 'asset/sound/musmus.png',
                    url: 'https://musmus.main.jp/'
                },
                {
                    name: '魔王魂',
                    desc: '可能な限りクレジット表記する。曲のアレンジOK。二次配布する場合は、著作表記と魔王魂へのリンクかURLの記載が必須。歌もの・BGM・SEを提供。',
                    img: 'asset/sound/maodamashi.png',
                    url: 'https://maou.audio/'
                },
                {
                    name: 'フリー音源・無料BGM「BGMer(ビージーエマー)」',
                    desc: '可能な限りクレジット表記する。曲のアレンジOK。偽称しての二次配布は禁止。BGMを提供。',
                    img: 'asset/sound/bgmer.png',
                    url: 'https://bgmer.net/'
                },
                {
                    name: 'OtoLogic',
                    desc: 'クレジット表記必須。曲のアレンジOK。BGM・ジングル・SEを提供。',
                    img: 'asset/sound/otologic.png',
                    url: 'https://otologic.jp/'
                },
                {
                    name: 'PeriTune',
                    desc: 'クレジット表記してくれると嬉しい。曲のアレンジOK。二次配布は禁止。BGMを提供。',
                    img: 'asset/sound/peritune.png',
                    url: 'https://peritune.com/'
                },
                {
                    name: 'H/MIX GALLERY',
                    desc: 'クレジット表記(リンク表記)してくれると嬉しい。曲のアレンジ可否については記載なし。二次配布は禁止。BGM・SEを提供。',
                    img: 'asset/sound/hmix.png',
                    url: 'http://www.hmix.net/'
                },
                {
                    name: 'Music-Note.jp',
                    desc: 'クレジット表記必須。曲のアレンジOK。二次配布は禁止。BGM・ボーカル素材・SEを提供。',
                    img: 'asset/sound/musicnote.png',
                    url: 'https://www.music-note.jp/'
                },
                {
                    name: 'zukisuzuki BGM',
                    desc: 'クレジット表記は任意。曲の長さを調整するなどの編集OK。二次配布は禁止。BGMを提供。',
                    img: '',
                    url: 'https://zukisuzukibgm.com/'
                },
                {
                    name: 'かまタマゴ',
                    desc: 'クレジット表記してくれると嬉しい。曲のアレンジOK。無許可での二次配布は禁止。歌・BGMを提供。',
                    img: 'asset/sound/kamatamago.png',
                    url: 'https://kamatamago.com/'
                },
                {
                    name: 'Hurt Record',
                    desc: '可能な限りクレジット表記する。曲のアレンジ可否については記載なし。二次配布は禁止。BGM・SEを提供。',
                    img: 'asset/sound/hurtrecord.png',
                    url: 'https://www.hurtrecord.com/'
                },
                {
                    name: 'D-elf',
                    desc: 'クレジット表記してくれると嬉しい。曲のアレンジOK。二次配布は禁止。BGM・歌・ボカロ曲を提供。',
                    img: 'asset/sound/delf.png',
                    url: 'https://www.d-elf.com/'
                },
                {
                    name: 'Senses Circuit',
                    desc: 'リンクと著作権表記必須。編曲OKだが、原型を損なう改変はNG。二次配布は禁止。BGM・SE・ボイスを提供。',
                    img: 'asset/sound/senses_circuit.png',
                    url: 'https://www.senses-circuit.com/'
                },
                {
                    name: 'OTO STA.',
                    desc: '会員制で商品は有料。クレジット表記や曲のアレンジについての記載なし。二次配布は禁止。BGM・SEを提供。',
                    img: 'asset/sound/otosta.png',
                    url: 'https://www.bgm.ne.jp/'
                },
                {
                    name: '近未来的音楽素材屋3104式',
                    desc: 'クレジット表記してくれると嬉しい。曲のアレンジOK。二次配布の可否についての記載なし。BGMを提供。',
                    img: 'asset/sound/3104.png',
                    url: 'https://cyber-rainforce.net/'
                },
                {
                    name: 'ノスタルジア',
                    desc: 'クレジット表記してくれると嬉しい。曲のアレンジOK。二次配布は禁止（Q:Scratchなどのオープンソースで楽曲を利用できますか？ —— A:利用可能です。オープンソース内であれば、楽曲を使用した作品の再配布・再利用もＯＫです）。BGMを提供。',
                    img: 'asset/sound/nostalgia.png',
                    url: 'http://nostalgiamusic.info/index.html'
                },
                {
                    name: 'フリー音楽素材 花鳥風月',
                    desc: 'クレジット表記必須（ゲームやソフトウェア内での利用の場合は、その限りではない(無償配布の場合)）。素材の編集は自由だが、アレンジして公開する場合は、利用報告必須。特質的な指導を持つ宗教団体、犯罪系・自殺系サイトの音楽素材の販売・再配布、転載複製は禁止。BGMを提供。',
                    img: 'asset/sound/kachohugetsu.png',
                    url: 'https://music-kachofugetsu.com/'
                },
                {
                    name: '騒音のない世界',
                    desc: 'クレジット表記してくれると嬉しい。曲のアレンジOK。楽曲そのものの配布はNG。BGMを提供。',
                    img: 'asset/sound/soon.png',
                    url: 'https://noiselessworld.net/'
                },
                {
                    name: 'VSQ plus+',
                    desc: 'クレジット表記してくれると嬉しい。規約範囲以内で、曲の加工・編集OK。販売、賃貸、寄与、インターネットメディアでの再配信を含む、オリジナルの状態での各種効果音および楽曲の頒布は禁止。BGM・SEを提供。',
                    img: 'asset/sound/vsq.png',
                    url: 'https://vsq.co.jp/plus/'
                },
                {
                    name: 'DUST-SOUNDS',
                    desc: 'クレジット表記や曲のアレンジ可否についての記載なし。二次配布は禁止。BGM・SEを提供。',
                    img: 'asset/sound/dust.png',
                    url: 'http://dust-sounds.com/'
                },
                {
                    name: 'こんとどぅふぇ',
                    desc: 'クレジット表記必須。曲のアレンジOK。教育目的の場合に限り、二次配布OK。BGMを提供。',
                    img: 'asset/sound/kontodofe.png',
                    url: 'https://conte-de-fees.com/'
                }
            ]
        }
    }
}
</script>
