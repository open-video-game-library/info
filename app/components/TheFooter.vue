<template>
    <section class="content-wrapper">
        <div class="content-container">
            <div class="text-center">
            <img v-bind:src="require('@/assets/image/logo/logo.png')"
                style="width: 50%; margin-bottom: 40px" />
            </div>
            <div class="flex-box">
                <div class="flex-item">
                    <ul>
                        <span>この取り組みを知る</span>
                        <li><nuxt-link to="/about#Abstract">概要</nuxt-link></li>
                        <li><nuxt-link to="/about#Member">メンバー</nuxt-link></li>
                        <!-- <li><nuxt-link to="/game">ゲーム</nuxt-link></li> -->
                        <li><nuxt-link to="/about#Publication">出版</nuxt-link></li>
                    </ul>
                </div>
                <div class="flex-item">
                    <ul>
                        <span>ゲームを見つける</span>
                        <li><nuxt-link to="/openvideogame">オープンビデオゲーム</nuxt-link></li>
                        <li><nuxt-link to="/tool/opensoursegame">オープンソースゲーム</nuxt-link></li>
                        <li><nuxt-link to="/tool/gameasset">アセット</nuxt-link></li>
                        <li><nuxt-link to="/tool/browsergame">ブラウザゲーム</nuxt-link></li>
                    </ul>
                </div>
                <div class="flex-item">
                    <ul>
                        <span>実験ツールを見つける</span>
                        <li><a href="https://open-video-game-library.github.io/multi-view-recorder/" target="_blank" rel="noopener noreferrer">Multi View Recorder</a></li>
                        <li><nuxt-link to="/tool#Others">その他ツール</nuxt-link></li>
                    </ul>
                </div>
                <!-- <ul>
                    <span>管理者向け</span>
                    <li>準備中</li>
                    <li><nuxt-link to="/anmin/new">記事を投稿する</nuxt-link></li>
                    <li><nuxt-link to="/admin">記事を管理する</nuxt-link></li>
                </ul> -->
            </div>

            <div class="text-center" style="margin-top: 40px">
                <el-button type="primary" class="btn-to-contact" @click="$router.push('/contact')">
                    <p style="display: flex; align-items: center;">
                        <span class="material-icons">email</span>
                        <span style="margin-left: 4px;">お問い合わせフォームへ</span>
                    </p>
                </el-button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.content-wrapper {
    background-color: #E6E6E6;
}


ul > span {
    display: inline-block;
    margin-left: -40px;
    border-bottom: dashed 2px #A4A4A4;
    margin-bottom: 10px;
}
ul > li {
    margin-left: -40px;
    margin-bottom: 7px;
    font-size: 14px;
    list-style: none;
}

nuxt-link, a {
    text-decoration: none;
    color: #555C64;
    &:hover {
        transition: 0.1s;
        border-bottom: 1px solid #555C64;
    }
}

/* .btn-to-contact {
    background-color: black;
    color: white;
}
.btn-to-contact:hover {
    transition : .3s;
    background-color: #444444;
} */

.flex-item {
    flex-basis: 30%;
    text-align: center;
}
ul {
    display: inline-block;
    text-align: left;
}

</style>>