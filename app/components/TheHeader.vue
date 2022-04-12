<template>
    <el-menu mode="horizontal" :router="{ path: '/about/' }"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">

        <el-menu-item index="5" style="float: right;" :route="{ path: '/contact/'}">
            <img src="@/assets/image/logo/Contact_logo_only.png" />
            <span>Contact</span>
        </el-menu-item>
        <el-menu-item index="4" style="float: right;" :route="{ path: '/article/'}">
            <img src="@/assets/image/logo/Article_logo_only.png" />
            <span>Article</span>
        </el-menu-item>
        <el-menu-item index="3" style="float: right;" :route="{ path: '/tool/'}">
            <img src="@/assets/image/logo/Tool_logo_only.png" />
            <span>Tool</span>
        </el-menu-item>
        <el-menu-item index="2" style="float: right;" :route="{ path: '/game/' }">
            <img src="@/assets/image/logo/Game_logo_only.png" />
            <span>Game</span>
        </el-menu-item>
        <el-menu-item index="1" style="float: right;" :route="{ path: '/about/' }">
            <img src="@/assets/image/logo/About_logo_only.png"  />
            <span>About</span>
        </el-menu-item>

    </el-menu>
</template>

<style scoped>
el-menu {
    background-color: black;
}
img { height: 38px; }
</style>>