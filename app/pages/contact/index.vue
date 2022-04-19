<template>
    <section class="container">
        <section class="content-wrapper bg-white">
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
                <p>
                    オープンビデオゲームライブラリに興味を持っていただきありがとうございます。今後、研究者にとってより良いものに改良していくために、ご意見・ご要望をお聞かせください！共同研究、依頼などについてのご連絡も承っております。
                </p>
                <p style="color: red;">{{ error_msg }}</p>
                
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
                        <el-input type="textarea" v-model="form.message"
                            placeholder="オープンビデオゲーム楽しい！"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">送信</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </section>
      </section>
</template>

<script>
import axios from 'axios'

export default {
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
            error_msg: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.form.name && this.form.email && this.form.message) {
                const submitParams = new FormData()
                const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
                const GOOGLE_FORM_ACTION = this.formInfo.action
                Object.keys(this.form).forEach((key) => {
                    submitParams.append(this.formInfo[key], this.form[key])
                })
        
                this.$axios
                    .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
                    .then(() => {
                        error_msg = ''
                        this.$router.push({
                            path: 'thanks',
                            query: {
                                name: this.form.name,
                                email: this.form.email,
                                message: this.form.message
                            }
                        })
                    })
                    .catch((e) => {
                        console.log(e)
                        error_msg = '送信中にエラーが発生しました。恐れ入りますが、時間をおいて再度送信するか、TwitterのDMに連絡をいただけると幸いです。'
                    })
            }
        }
    }
}
</script>