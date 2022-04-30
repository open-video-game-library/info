<template>
    <el-menu mode="horizontal" :router="true"
        background-color="#04062D"
        text-color="#fff"
        active-text-color="#fff">

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
        <el-menu-item index="2" style="float: right;" :route="{ path: '/game/' }">
            <span class="material-icons" style="">sports_esports</span>
            <span>Game</span>
        </el-menu-item>
        <el-menu-item index="1" style="float: right;" :route="{ path: '/about/' }">
            <span class="material-icons">info</span>
            <span>About</span>
        </el-menu-item>

    </el-menu>
</template>

<style scoped>
.material-icons { font-size: 24px; }
.e:hover{
    background-color: #fff;
}
</style>>