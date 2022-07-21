export default async ({ app }) => {
    app.router.afterEach((to, from) => {
        if (typeof window !== 'undefined') {
            const ua = navigator.userAgent
            if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || ua.indexOf('Mobile') > 0) {
                if (to.name.includes("openvideogame-")) {
                    alert("スマートフォンおよびタブレットでは、ブラウザ上でオープンビデオゲームをプレイできません")
                }
            }
        }
  });
};