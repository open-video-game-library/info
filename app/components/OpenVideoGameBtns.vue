<template>
    <el-row type="flex" justify="space-around">
        <el-col :span="12" class="text-center">
            <a :href="url_download" target="_blank" rel="noopener noreferrer">
                <button @click="toDownload">
                    <span>
                        <span class="material-icons">file_download</span>
                        Download
                    </span>
                </button>
            </a>
        </el-col>

        <el-col :span="12" class="text-center">
            <a :href="url_code" target="_blank" rel="noopener noreferrer">
                <button @click="toCode">
                    <span>
                        <span class="material-icons">code</span>
                        Sourse code
                    </span>
                </button>
            </a>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        url_download: String,
        url_code: String
    },
    methods: {
        toDownload() {
            window.location.href = this.url_download
        },
        toCode() {
            window.location.href = this.url_code
        }
    }
}
</script>

<style scoped>
.material-icons {
    padding: 0;
}

button {
    cursor: pointer;
    width: 200px;
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    border-radius: 4px;
    border: none;
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: ghostwhite;
    overflow: hidden;
}
button svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
}
button span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.8em 0;
}
button::before,
button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
button::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}
button:hover::before {
    transform: translate3d(100%, 0, 0);
}
button:active {
    transform: scale(0.95);
}

</style>