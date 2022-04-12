<template>
    <div class="top-wrapper">
        <div class="top-container" style="color: white;">
            <div class="title text-center" style="padding-bottom: 80px;">
                <div style="font-size: 120px; font-weight: 900;">OVGL</div>
                <div style="font-size: 40px; font-weight: 600;">Open Video Game Library</div>
            </div>

            <el-row class="rect" :gutter="40" style="margin: 0 auto;">
                <el-col :span="17">
                    <p style="padding: 0; height: 48px;">
                        このサイトではゲーム研究に使えるゲームのダウンロード<br />や研究を進める上でのヒントを知ることができます。
                    </p>
                </el-col>
                <el-col :span="7" class="text-center"
                    style="height: 48px; border-left: 1px white solid;">
                    <nuxt-link
                        to="/about"
                        class="hover-pointer"
                        tag="img" 
                        :src="playBtnSrc"
                        style="height: 48px;"
                        @mouseover.native="playBtnSrc = playBtnSrc1"
                        @mouseleave.native="playBtnSrc = playBtnSrc0"
                    ></nuxt-link>
                </el-col>
            </el-row>
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
    background-image: url(@/assets/image/background/Top.png);
}
</style>
