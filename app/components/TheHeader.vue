<template>
    <el-menu mode="horizontal" :router="true"
        :default-active="'1'"
        class="header-wrapper"
        background-color="#04062D"
        text-color="#fff"
        active-text-color="#fff">

        <el-menu-item index="0" :route="{ path: '/' }">
            <img height="40" v-bind:src="require('@/assets/image/logo/logo_white.png')" />
        </el-menu-item>
        <el-menu-item index="5" style="float: right;" :route="{ path: '/contact/'}">
            <span class="material-icons">email</span>
            <span>Contact</span>
        </el-menu-item>
        <el-menu-item index="4" style="float: right;" :route="{ path: '/article/'}">
            <span class="material-icons">description</span>
            <span>Article</span>
        </el-menu-item>
        <el-menu-item index="3" style="float: right;" :route="{ path: '/tool/'}">
            <span class="material-icons">science</span>
            <span>Tool</span>
        </el-menu-item>
        <el-menu-item index="2" style="float: right;" :route="{ path: '/openvideogame/' }">
            <span class="material-icons" style="">sports_esports</span>
            <span>Open Video Game</span>
        </el-menu-item>
        <el-menu-item index="1" style="float: right;" :route="{ path: '/about/' }">
            <span class="material-icons">info</span>
            <span>About</span>
        </el-menu-item>

    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1'
        }
    },
    mounted() {
        // 読み込まれたページをアクティブ
        this.activeIndex = this.$route.name;
        console.log(this.$route.name)
    }
}
</script>

<style scoped>
.header-wrapper {
    border: none;
    box-shadow: 0 0 4px #04062D;
}

.material-icons { font-size: 24px; }
.e:hover{
    background-color: #fff;
}
</style>>