<template>
    <div class="text-center">
        <img v-bind:src="require(`@/assets/image/member/${name_short}.jpg`)" />
        <p style="font-size: 24px; margin-bottom: 30px;">{{ name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        name_en: String,
        name_short: String,
        grade: String,
        twitter: String,
        homepage: String
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
    width: 100%;
}
</style>