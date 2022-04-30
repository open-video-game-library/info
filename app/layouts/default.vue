<template>
    <div>
        <TheHeader style="position: fixed; width: 100%; z-index: 100;" />
        <main class="wrapper" style="padding-top: 61px;">
            <nuxt class="container" />
        </main>
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import '@/assets/css/common.scss'

export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>
