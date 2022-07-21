<template>
    <div>
        <header class="header-wrapper" style="background-color: #04062D;">
            <div class="header-icon">
                <img height="40" v-bind:src="require('@/assets/image/logo/logo_white.png')" />
            </div>
            
            <div id="toggle-menu" class="header-icon" @click="toggleMenu">
                <span v-if="!isOpened" style="display: inline-block;" class="material-icons">menu_open</span>
                <span v-else style="display: inline-block;" class="material-icons">close</span>
            </div>

            <el-menu mode="horizontal" :router="true"
                class="global-navigation"
                style="float: right;"
                :default-active="activeIndex"
                background-color="#04062D"
                text-color="#fff"
                active-text-color="#fff">

                <el-menu-item index="1" :route="{ path: '/about/' }">
                    <span class="material-icons">info</span>
                    <span>About</span>
                </el-menu-item>

                <el-menu-item index="2" :route="{ path: '/openvideogame/' }">
                    <span class="material-icons">sports_esports</span>
                    <span>Open Video Game</span>
                </el-menu-item>
                
                <el-menu-item index="3" :route="{ path: '/tool/'}">
                    <span class="material-icons">science</span>
                    <span>Tool</span>
                </el-menu-item>
                
                <el-menu-item index="4" :route="{ path: '/article/'}">
                    <span class="material-icons">description</span>
                    <span>Article</span>
                </el-menu-item>

                <el-menu-item index="5" :route="{ path: '/contact/'}">
                    <span class="material-icons">email</span>
                    <span>Contact</span>
                </el-menu-item>
                
            </el-menu>
        </header>

        <el-menu :router="true"
            :class="{ 'global-navigation-mobile': true, '_isOpened': isOpened }"
            :default-active="activeIndex"
            background-color="#04062D"
            text-color="#fff"
            active-text-color="#fff">

            <el-menu-item index="1" :route="{ path: '/about/' }">
                <span class="material-icons">info</span>
                <span>About</span>
            </el-menu-item>

            <el-menu-item index="2" :route="{ path: '/openvideogame/' }">
                <span class="material-icons">sports_esports</span>
                <span>Open Video Game</span>
            </el-menu-item>
            
            <el-menu-item index="3" :route="{ path: '/tool/'}">
                <span class="material-icons">science</span>
                <span>Tool</span>
            </el-menu-item>
            
            <el-menu-item index="4" :route="{ path: '/article/'}">
                <span class="material-icons">description</span>
                <span>Article</span>
            </el-menu-item>

            <el-menu-item index="5" :route="{ path: '/contact/'}">
                <span class="material-icons">email</span>
                <span>Contact</span>
            </el-menu-item>
            
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            isOpened: false
        }
    },
    created() {
        if(this.$route.name.includes("about")) this.activeIndex = '1'
        else if(this.$route.name.includes("openvideogame")) this.activeIndex = '2'
        else if(this.$route.name.includes("tool")) this.activeIndex = '3'
        else if(this.$route.name.includes("article")) this.activeIndex = '4'
        else if(this.$route.name.includes("contact")) this.activeIndex = '5'
    },
    mounted(){
    },
    methods: {
        toggleMenu(){
            this.isOpened = !this.isOpened
        }
    }
}
</script>

<style scoped>
.header-wrapper {
    border: none;
    box-shadow: 0 0 4px #04062D;
}

.header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-left: 16px;
}

.material-icons {
    font-size: 24px;
    color: #fff;
}
#toggle-menu{
    display: none;
    float: right;
    padding-right: 16px;
}

.global-navigation-mobile {
    display: none;
    position: fixed;
    top: 60px;
    right: 0;
    width: 0px;
    transition: .5s;
}

@media screen and (max-width: 780px) {
    .global-navigation {
        display: none;
    }
    .global-navigation-mobile {
        display: block;
        visibility: hidden;
    }
    ._isOpened {
        visibility: visible;
        width: 200px;
    }

    #toggle-menu{
        display: inline-flex;
    }
}

</style>