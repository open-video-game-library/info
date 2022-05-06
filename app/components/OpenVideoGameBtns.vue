<template>
    <div>
        <!-- <a :href="url_download" target="_blank" rel="noopener noreferrer" style="margin-right: 40px;"> -->
            <button @click="toDownload"  v-bind:disabled="url_download===''"
                class="color-green" style="margin-right: 40px;">
                <span>
                    <span class="material-icons">file_download</span>
                    Download
                </span>
            </button>
        <!-- </a> -->
        <!-- <a class="to-code" :href="url_code" target="_blank" rel="noopener noreferrer"> -->
            <button @click="toCode" v-bind:disabled="url_code===''">
                <span>
                    <span class="material-icons">code</span>
                    Sourse code
                </span>
            </button>
        <!-- </a> -->
    </div>
</template>

<script>
export default {
    props: {
        url_download: String,
        url_code: String
    },
    methods: {
        toDownload() {
            // window.location.href = this.url_download
            window.open(this.url_download, '_blank')
        },
        toCode() {
            // window.location.href = this.url_code
            window.open(this.url_code, '_blank')
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
.color-green { background: linear-gradient(to right, #4AC44C, #4D9453); }
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

button:disabled {
    cursor: not-allowed;
}
</style>