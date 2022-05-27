<template>
    <div style="position: relative;">
        <el-card :body-style="{position: 'relative'}" shadow="hover">
            <a v-if="url!==''" 
                :href="url"
                class="hover-pointer"
                target="_blank"
                rel="noopener noreferrer">
            </a>
            <el-row :gutter="30" type="flex">
                <el-col :span="img_span" class="text-center img-wrapper">
                    <img v-if="img==''" v-bind:src="require('@/assets/image/thumbnail/no_image.png')" class="image" />
                    <img v-else v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
                </el-col>
                <el-col :span="24-img_span">
                    <h3 style="margin-top: 15px;">{{ name }}</h3>
                    <p class="desc">{{ desc }}</p>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        desc: String,
        img: String,
        url: String,
        img_span: Number
    }
}
</script>

<style lang="scss" scoped>

.scroll-box > p {
    color: #555C64;
}

a {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.img-wrapper {
    // background-color: #F5F5F5;
    aspect-ratio: 16 / 9;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
        border-radius: 2px;
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        // object-fit: cover;
    }
}
.desc {
    margin-top: 5px;
    line-height: 28px;
}
</style>
