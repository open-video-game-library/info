<template>
    <div>
        <TheHeader />
        <main class="wrapper">
            <nuxt class="container" />
        </main>
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import '@/assets/common.css'

export default {
    components: {
        TheHeader
    }
}
</script>
