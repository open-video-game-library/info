<template>
    <section class="container">
        <Heading />

        <section class="content-wrapper">
            <div class="content-container">
                <p class="page-subdesc">
                    オープンビデオゲームライブラリに興味を持っていただきありがとうございます。今後、研究者にとってより良いものに改良していくために、ご意見・ご要望をお聞かせください。共同研究、依頼などについてのご連絡も承っております。
                </p>

                <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScpDBuQV0ca-PTrxrzm4QniH_u5_wF-3SGEHx1FT3SVJGbpqg/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe> -->

                <p style="color: red;" class="page-subsubdesc">{{ error_msg }}</p>
                
                <el-form ref="form" :model="form" label-width="120px"
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScpDBuQV0ca-PTrxrzm4QniH_u5_wF-3SGEHx1FT3SVJGbpqg/formResponse">
                    <el-form-item label="お名前">
                        <el-input v-model="form.name"
                            placeholder="山田 太郎"
                            type="text"
                            required="required"></el-input>
                    </el-form-item>
                    <el-form-item label="メールアドレス">
                        <el-input v-model="form.email"
                            placeholder="opengame@example.com"></el-input>
                    </el-form-item>
                    <el-form-item label="メッセージ">
                        <el-input type="textarea" :rows="8" v-model="form.message"
                            placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" :loading="isSending">{{ submit_msg }}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </section>
    </section>
</template>

<script>
import axios from 'axios'
import Heading from '~/components/Heading.vue'

export default {
    components: {
        Heading
    },
    asyncData() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            formInfo: {
                action: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScpDBuQV0ca-PTrxrzm4QniH_u5_wF-3SGEHx1FT3SVJGbpqg/formResponse',
                name: 'entry.1143921380',
                email: 'entry.1555803700',
                message: 'entry.752954745',
            },
            error_msg: '',
            isSending: false,
            submit_msg: '送信'
        }
    },
    methods: {
        onSubmit() {
            if (this.form.name && this.form.email && this.form.message) {
                this.isSending = true
                this.submit_msg = '送信中'
                const submitParams = new FormData()
                const CORS_PROXY = 'https://cors-anywhere-keitalab.herokuapp.com/'
                const GOOGLE_FORM_ACTION = this.formInfo.action
                Object.keys(this.form).forEach((key) => {
                    submitParams.append(this.formInfo[key], this.form[key])
                })
        
                this.$axios
                    .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
                    .then(() => {
                        this.error_msg = ''
                        this.$router.push({
                            path: '/contact/thanks',
                            query: {
                                name: this.form.name,
                                email: this.form.email,
                                message: this.form.message
                            }
                        })
                    })
                    .catch((e) => {
                        console.log(e)
                        this.error_msg = '送信中にエラーが発生しました。恐れ入りますが、時間をおいて再度送信するか、TwitterのDMに連絡をいただけると幸いです。'
                    })
            } else {
                this.error_msg = '全項目入力してください。'
            }
        }
    }
}
</script>

<style scoped>
.bg-heading {
    background-image: url("~@/assets/image/background/heading_contact.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
</style>