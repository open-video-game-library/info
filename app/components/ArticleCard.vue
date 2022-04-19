<template>
     <el-card :body-style="{padding: '0px', position: 'relative'}" shadow="hover">
        <div class="article-container">
            <div style="height: 140px;">
                <img v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
            </div>
            <div style="flex-basis: auto; padding: 8px;">
                <h3 class="title">{{ title }}</h3>
                <div class="article-link">
                    <a :href="url" 
                        target="_blank"
                        rel="noreferrer noopener"
                        style="margin-top: 8px;">
                        <span>{{ name }}を見る</span>
                        <span class="material-icons">trending_flat</span>
                    </a>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    props: {
        title: String,
        name: String,
        img: String,
        url: String
    }
}
</script>

<style scoped>
.article-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0px;
    width: 100%;
}

.image {
    height: 140px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}
</style>
