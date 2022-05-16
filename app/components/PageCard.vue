<template>
    <div style="position: relative;">
        <div v-if="isOurs" class="ovgl-line-horizontal"></div>
        <div v-if="isOurs" class="ovgl-line-vertical"></div>
        <div v-if="isOurs" class="ovgl-mark">
            <span>Presented by</span>
            <span>OVGL</span>
        </div>
        <el-card class="card-wrapper" :body-style="{padding: '0px'}" shadow="hover">
            <nuxt-link :to="url" class="hover-pointer full-link"></nuxt-link>
            <img v-if="img===''" v-bind:src="require('@/assets/image/thumbnail/no_image.png')" class="image" />
            <img v-else v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
            <div class="hover-elems">
                <div>
                    <h2 class="name text-center"><span>{{ name }}</span></h2>
                    <p class="desc" v-if="desc !== ''">
                        {{ desc }}
                    </p>
                </div>
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
        url: String,
        isOurs: Boolean
    }
}
</script>


<style lang="scss" scoped>
.card-wrapper {
    position: relative;
    // width: 448px;
    // height: 252px;
}
.hover-elems {
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 5;
    padding: 30px;
}

.name > span {
    display: inline-block;
    border-bottom: 1px black solid;
}
.desc {
    margin-top: 15px;
}

.image {
    display: block;
    width: 100%;
    // height: 100%;
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
.hover-elems {
    display: flex;
    justify-content: center;
    align-items: center;
}
.full-link:hover~.hover-elems{
    opacity: 1;
    transition: .2s ease-in-out;
}
</style>