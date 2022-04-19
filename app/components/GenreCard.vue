<template>
    <div>
        <h3 class="text-center">{{ name }}</h3>
        <el-card :body-style="{padding: '0px', position: 'relative'}">
            <img v-bind:src="require(`@/assets/image/thumbnail/${img}`)" class="image" />
            <nuxt-link
                :to="to"
                class="hover-pointer article-link"
            >
                <span>{{ name }}を見る</span>
                <span class="material-icons">trending_flat</span>
            </nuxt-link>
        </el-card>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        img: String,
        to: String
    }
}
</script>

<style scoped>
h3 {
    margin-bottom: 8px;
}
.image {
    display: block;
    width: 100%;
    height: 100%;
}
.article-link {
    position: absolute;
    bottom: 8px; right: 8px;
    text-decoration: none;
    color: #555C64;

    display: inline-block;
    padding: 2px 16px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    border-radius: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.material-icons {
    background-color: white;
    border-radius: 50%;
    color: blue;
    font-size: 1em;
    margin-left: 4px;
}
</style>