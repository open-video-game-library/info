<template>
    <!--  -->
    <el-card :body-style="{'position': 'relative'}" shadow="hover">
        <a :href="url"
            class="hover-pointer full-link"
            target="_blank"
            rel="noopener noreferrer">
        </a>
        <div>
            <img v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
        </div>
        <h3 class="title">{{ name }}</h3>
        <p>{{ desc }}</p>
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
    width: 100%;
    border-radius: 2px;
}
</style>
