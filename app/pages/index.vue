<template>
    <div class="top-wrapper">
        <div class="top-container" style="color: white;">
            <div class="title text-center" style="padding-bottom: 80px;">
                <div style="font-size: 120px; font-weight: 900;">OVGL</div>
                <div style="font-size: 40px; font-weight: 600;">Open Video Game Library</div>
            </div>

            <p style="padding: 0; height: 48px;">
                このサイトではゲーム研究に使えるゲームのダウンロードや研究を進める上でのヒントを知ることができます。
            </p>
            <div class="text-center" style="margin-top: 15px">
                <button>Play</button>
            </div>

            <!-- <el-row class="rect" :gutter="40" style="margin: 0 auto;">
                <el-col :span="17">
                    
                </el-col>
                <el-col :span="7" class="text-center"
                    style="height: 48px; border-left: 1px white solid;">
                    <nuxt-link
                        to="/about"
                        class="hover-pointer"
                        tag="img" 
                        v-bind:src="playBtnSrc"
                        style="height: 48px;"
                        @mouseover.native="playBtnSrc = playBtnSrc1"
                        @mouseleave.native="playBtnSrc = playBtnSrc0"
                    ></nuxt-link>
                </el-col>
            </el-row> -->
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
}
.rect {
    width: 660px;
    border: 1px white solid;
    border-radius: 20px;
    padding: 15px 0;
}

/* From uiverse.io by @barisdogansutcu */
button {
    padding: 17px 40px;
    border-radius: 50px;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all .5s ease;
}

button:hover {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
    cursor: pointer;
}

button:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
}
</style>
