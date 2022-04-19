<template>
    <el-card :body-style="{padding: '0px', position: 'relative'}" shadow="hover">
        <nuxt-link :to="'/' + to" class="hover-pointer full-link"></nuxt-link>
        <h2 class="title">{{ title }}</h2>
        <img v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
    </el-card>
</template>

<script>
export default {
    props: {
        title: String,
        img: String,
        to: String
    }
}
</script>


<style scoped>
.title {
    position: absolute;
    top: 0; left: 0;
    padding: 4px 8px;
    background-color: rgba(255, 255, 255, 0.9);
    border-top-left-radius: 2px;
    border-bottom-right-radius: 2px;
}
.image {
    display: block;
    width: 100%;
    height: 100%;
}
</style>