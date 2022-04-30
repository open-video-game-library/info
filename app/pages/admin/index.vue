<template>
  <div>
    <h1>Login</h1>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script>
export default {
    layout: "default",
    name: "login",
    methods: {
        signInWithGoogle() {
            this.$store
                .dispatch('signInWithGoogle')
                .then(() => {
                    this.$router.push({
                        name: 'index'
                    })
                })
                .catch((err) => {
                    this.$parent.socialLoginErrorMsg =
                        '現在Googleでのログインは使用できません。後ほどお試しください。'
                })
        }
    }
}
</script>