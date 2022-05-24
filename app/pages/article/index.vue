<template>
    <section class="container">
        <Heading :breadcrumb="breadcrumb" />
    </section>
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
    head() {
        return {
            title: 'Article'
        }
    },
    components: {
        Heading
    },
    asyncData() {
        return {
            breadcrumb: [
                {
                    path: '/article',
                    name: '準備中...'
                }
            ]
        }
    }
}
</script>


<style scoped>
</style>