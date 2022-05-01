<template>
    <el-card class="card-wrapper" :body-style="{padding: '0px'}" shadow="hover">
        <nuxt-link :to="url" class="hover-pointer full-link"></nuxt-link>
        <img v-if="img===''" v-bind:src="require('@/assets/image/thumbnail/no_image.png')" class="image" />
        <img v-else v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
        <div class="hover-elems">
            <h2 class="title text-center">{{ name }}</h2>
        </div>
    </el-card>
</template>

<script>
export default {
    props: {
        name: String,
        desc: String,
        img: String,
        url: String
    }
}
</script>


<style scoped>
.card-wrapper {
    position: relative;
    width: 448px;
    height: 252px;
}
.hover-elems {
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 5;
}
.title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 252px;
}
.image {
    display: block;
    width: 448px;
    height: 252px;
    z-index: 1;
}

.full-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
}

.full-link:hover~.hover-elems{
    opacity: 1;
    transition: .2s ease-in-out;
}
</style>