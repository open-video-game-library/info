<template>
    <el-card :body-style="{'position': 'relative', 'height': '336px'}" shadow="hover">
        <a :href="url"
            class="hover-pointer"
            target="_blank"
            rel="noopener noreferrer">
        </a>
        <div class="text-center" style="background-color: #F5F5F5; height: 156px;">
            <img v-if="img==''" v-bind:src="require('@/assets/image/thumbnail/no_image.png')" class="image" />
            <img v-else v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
        </div>
        <div class="scroll-box">
            <h3 style="margin-top: 10px;">{{ name }}</h3>
            <p>{{ desc }}</p>
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
.image {
    /* width: 100%; */
    max-width: 100%;
    height: 156px;
    border-radius: 2px;
}
.scroll-box {
    /* width: 200px;; */
    height: 138px;
    overflow-y: scroll; 
}
.scroll-box > p {
    color: #555C64;
}

a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 124px;
}
</style>
