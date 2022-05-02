<template>
    <section class="container">
        <section class="content-wrapper bg-heading">
            <div class="content-container">
                <h1 class="page-heading">
                    <span class="material-icons">email</span>
                    <span style="font-size: 48px;">Contact</span>
                    <!-- <span class="sub-headline"></span> -->
                </h1>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <p class="page-subheading">ご連絡ありがとうございます。以下の内容で承りました。</p>
                <div class="form-elem">
                    <span class="form-title text-right">お名前：</span>
                    <span class="form-ans text-left">{{ this.$route.query.name }}</span>
                </div>
                <div class="form-elem">
                    <span class="form-title text-right">メールアドレス：</span>
                    <span class="form-ans text-left">{{ this.$route.query.email }}</span>
                </div>
                <div class="form-elem">
                    <span class="form-title text-right">メッセージ：</span>
                    <span class="form-ans text-left">{{ this.$route.query.message }}</span>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
.form-elem {
    display:flex;
    justify-content: flex-start;
    margin: 8px 0;
}
.form-title { flex-basis: 140px; }
.form-ans  { flex-basis: 640px; }

.bg-heading {
    background-image: url("~@/assets/image/background/heading_contact.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
</style>