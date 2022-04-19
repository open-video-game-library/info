<template>
    <section class="content-wrapper">
        <div class="content-container">
            <ul>
                <span>オープンビデオゲームライブラリを知る</span>
                <li><nuxt-link to="/about#Abstract">概要</nuxt-link></li>
                <li><nuxt-link to="/about#Member">メンバー</nuxt-link></li>
                <li><nuxt-link to="/game">ゲーム</nuxt-link></li>
                <li><nuxt-link to="/about#Publication">出版</nuxt-link></li>
            </ul>

            <ul>
                <span>ゲームを見つける</span>
                <li><nuxt-link to="/game/openvideogame">オープンビデオゲーム</nuxt-link></li>
                <li><nuxt-link to="/game/opensoursegame">オープンソースゲーム</nuxt-link></li>
                <li><nuxt-link to="/game/asset">アセット</nuxt-link></li>
            </ul>

            <ul>
                <span>実験ツール</span>
                <li><a href="https://open-video-game-library.github.io/multi-view-recorder/" target="_blank" rel="noopener noreferrer">Multi View Recorder</a></li>
                <li><nuxt-link to="/tool#Experiment">評価実験ツール</nuxt-link></li>
                <li><nuxt-link to="/tool#Development">ゲーム開発ツール</nuxt-link></li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.content-wrapper {
    background-color: #E6E6E6;
}
.content-container {
    display: flex;
    justify-content: space-between;
}
ul > span {
    margin-left: -40px;
}
nuxt-link, a {
    text-decoration: none;
    color: #555C64;
}
</style>>