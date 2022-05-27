<template>
    <div style="position: relative;">
        <!-- <div v-if="isOurs" class="ovgl-line-horizontal"></div>
        <div v-if="isOurs" class="ovgl-line-vertical"></div>
        <div v-if="isOurs" class="ovgl-mark">
            <span>Presented by</span>
            <span>OVGL</span>
        </div> -->
        <el-card :body-style="{position: 'relative', height: '380px'}" shadow="hover">
            <a v-if="url!==''" 
                :href="url"
                class="hover-pointer"
                target="_blank"
                rel="noopener noreferrer">
            </a>
            <div class="text-center img-wrapper">
                <img v-if="img==''" v-bind:src="require('@/assets/image/thumbnail/no_image.png')" class="image" />
                <img v-else v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
            </div>
            <div>
                <h3 class="text-center" style="margin-top: 15px;">{{ name }}</h3>
                <p class="desc">{{ desc }}</p>
            </div>
        </el-card>
    </div>
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

<style lang="scss" scoped>

.scroll-box > p {
    color: #555C64;
}

a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.img-wrapper {
    // background-color: #F5F5F5;
    width: 100%;
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
