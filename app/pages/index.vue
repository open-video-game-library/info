<template>
    <div class="top-wrapper">
        <div class="top-container" style="color: white;">
            <div class="title text-center" style="padding-bottom: 80px;">
                <img class="logo" v-bind:src="require('@/assets/image/logo/logo_white.png')" />
            </div>

            <p class="desc">
                このサイトではゲーム研究に使えるゲームのダウンロードや研究を進める上でのヒントを知ることができます。
            </p>
            <div class="text-center" style="margin-top: 15px">
                <button @click="$router.push('/about')">
                    <span class="label">Play</span>
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                    </span>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    layout: 'top',
    asyncData() {
        return {
            playBtnSrc: null,
            playBtnSrc0: require('@/assets/image/button/Play_Button_0.png'),
            playBtnSrc1: require('@/assets/image/button/Play_Button_1.png')
        }
    },
    created() {
        this.playBtnSrc = this.playBtnSrc0
    }
}
</script>

<style scoped>
.top-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.top-container {
    width: 92%;
    margin: 0 auto;
}
.logo {
    width: 480px;
}
.desc {
    padding: 0;
    height: 48px;
    text-align: center;
}
@media screen and (max-width: 780px) {
   .logo {
        width: 320px;
    }
    .desc {
        text-align: left;
    }
}

/* From uiverse.io by @mateusneves */
button {
    position: relative;
    font-size: 14px;
    letter-spacing: 3px;
    height: 3em;
    padding: 0 3em;
    border: none;
    background-color: #c41b54;
    color: #fff;
    text-transform: uppercase;
    overflow: hidden;
    border-radius: 4px
}
button:hover {
    cursor: pointer;
}
button::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    height: 0px;
    width: 100%;
    background: rgb(196,27,84);
    background: linear-gradient(90deg, rgba(196,27,84,1) 20%, rgba(124,7,46,1) 100%);
    transition: 0.2s;
}
button .label {
    position: relative;
}
button .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: 3em;
    position: absolute;
    top: 3em;
    right: 0;
    opacity: 0;
    transition: 0.4s;
}
button:hover::before {
    height: 100%;
}
button:hover .icon {
    top: 0;
    opacity: 1;
}
</style>
