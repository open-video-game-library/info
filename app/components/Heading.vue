<template>
    <section class="content-wrapper"
        :style="{'background-image': 'url(' + require(`@/assets/image/background/heading_${root}.jpg`) + ')'}">
        <div class="content-container">
            <h1 class="page-heading">
                <span class="material-icons">{{ material_icons }}</span>

                <span class="title">{{ title }}</span>
                <span class="sub-headline">
                    <span v-for="(item, index) in breadcrumb" :key="item.name">
                        <span v-if="index !== breadcrumb.length - 1">
                            <nuxt-link class="breadcrumb" :to="item.path">{{ item.name }}</nuxt-link>
                            ＞
                        </span>
                        <span v-else>
                            <strong>{{ item.name }}</strong>
                        </span>
                    </span>
                </span>
            </h1>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        breadcrumb: Array
    },
    asyncData() {
        return {
            paths: [],
            root: '',
            material_icons: '',
            title: '',
            subtitle: ''
        }
    },
    created(){
        this.paths = this.$route.path.split('/');
        this.root = this.paths[1];
        this.paths.splice(0, 2);
        
        switch(this.root) {
            case 'game':
            case 'openvideogame':
                this.material_icons = 'sports_esports';
                this.title = 'Open Video Game';
                this.subtitle = '研究利用できるゲーム';
                break;
            case 'tool':
                this.material_icons = 'science';
                this.title = 'Tool';
                this.subtitle = '研究利用できるツール';
                break;
            case 'article':
                this.material_icons = 'description';
                this.title = 'Article';
                this.subtitle = '準備中...';
                break;
            case 'contact':
                this.material_icons = 'email';
                this.title = 'Contact';
                this.subtitle = '';
                break;
        }
        // console.log(this.$route.name);
    }
}
</script>

<style scoped lang="scss">
.content-wrapper {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}

.title {
    font-size: 48px;
}

@media screen and (max-width: 780px) {
    .title {
        font-size: 32px;
    }
}

@media screen and (max-width: 570px) {
    .content-wrapper {
        background-size: auto 100%;
    }
}
</style>