(window.webpackJsonp=window.webpackJsonp||[]).push([[24,4],{496:function(t,e,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("41d12494",content,!0,{sourceMap:!1})},497:function(t,e,n){"use strict";n.r(e);var r={props:{url_download:String,url_code:String},methods:{toDownload:function(){window.location.href=this.url_download},toCode:function(){window.location.href=this.url_code}}},o=(n(502),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticStyle:{"margin-right":"40px"},attrs:{href:t.url_download,target:"_blank",rel:"noopener noreferrer"}},[n("button",{staticClass:"color-green",on:{click:t.toDownload}},[t._m(0)])]),t._v(" "),n("a",{attrs:{href:t.url_code,target:"_blank",rel:"noopener noreferrer"}},[n("button",{on:{click:t.toCode}},[t._m(1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"material-icons"},[t._v("file_download")]),t._v("\n                Download\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"material-icons"},[t._v("code")]),t._v("\n                Sourse code\n            ")])}],!1,null,"555a0d1a",null);e.default=component.exports},502:function(t,e,n){"use strict";n(496)},503:function(t,e,n){var r=n(55)(!1);r.push([t.i,'.material-icons[data-v-555a0d1a]{padding:0}button[data-v-555a0d1a]{cursor:pointer;width:200px;position:relative;font-family:inherit;font-weight:500;font-size:18px;letter-spacing:.05em;border-radius:4px;border:none;background:linear-gradient(90deg,#8e2de2,#4a00e0);color:#f8f8ff;overflow:hidden}.color-green[data-v-555a0d1a]{background:linear-gradient(90deg,#4ac44c,#4d9453)}button svg[data-v-555a0d1a]{width:1.2em;height:1.2em;margin-right:.5em}button span[data-v-555a0d1a]{position:relative;z-index:10;transition:color .4s;display:inline-flex;align-items:center;padding:.8em 0}button[data-v-555a0d1a]:after,button[data-v-555a0d1a]:before{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}button[data-v-555a0d1a]:before{content:"";background:#000;width:120%;left:-10%;transform:skew(30deg);transition:transform .4s cubic-bezier(.3,1,.8,1)}button[data-v-555a0d1a]:hover:before{transform:translate3d(100%,0,0)}button[data-v-555a0d1a]:active{transform:scale(.95)}',""]),t.exports=r},568:function(t,e,n){"use strict";n.r(e);var r={components:{OpenVideoGameBtns:n(497).default},asyncData:function(){return{url_download:"",url_code:""}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[t._m(0),t._v(" "),n("section",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-container"},[n("p",{staticStyle:{"margin-bottom":"0"}},[t._v("相手の隙を狙い打て！")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("OpenVideoGameBtns",{attrs:{url_download:t.url_download,url_code:t.url_code}})],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("section",{staticClass:"content-wrapper bg-white"},[n("div",{staticClass:"content-container"},[n("h3",{staticClass:"text-center"},[t._v("パラメータ")]),t._v(" "),n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{span:12}},[n("h4",[t._v("調整可能パラメータ")]),t._v(" "),n("ul",[n("li",[t._v("プレイヤと対戦相手の移動速度")]),t._v(" "),n("li",[t._v("プレイヤと対戦相手の打つボールの速度")]),t._v(" "),n("li",[t._v("対戦相手の反応速度")]),t._v(" "),n("li",[t._v("対戦相手のショットに辿り着くまでの移動距離")]),t._v(" "),n("li",[t._v("プレイスタイル")]),t._v(" "),n("li",[t._v("試合終了条件")])])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("h4",[t._v("取得可能パラメータ")]),t._v(" "),n("ul",[n("li",[t._v("勝敗")]),t._v(" "),n("li",[t._v("プレイヤが勝ち取ったゲーム数")]),t._v(" "),n("li",[t._v("対戦相手が勝ち取ったゲーム数")]),t._v(" "),n("li",[t._v("プレイヤのネットした回数")]),t._v(" "),n("li",[t._v("プレイヤのアウトした回数")]),t._v(" "),n("li",[t._v("プレイヤの2バウンドした回数")]),t._v(" "),n("li",[t._v("プレイヤのダブルフォルトした回数")]),t._v(" "),n("li",[t._v("最大ラリー回数")])])])],1)],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper bg-white"},[n("div",{staticClass:"content-container"},[n("h1",{staticClass:"page-heading"},[n("span",{staticClass:"material-icons"},[t._v("sports_esports")]),t._v(" "),n("span",{staticStyle:{"font-size":"48px"}},[t._v("Game")]),t._v(" "),n("span",{staticClass:"sub-headline"},[t._v("オープンビデオゲーム")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"page-heading",staticStyle:{padding:"0"}},[n("span",{staticStyle:{"font-size":"48px"}},[t._v("Minimum tennis")]),t._v(" "),n("span",{staticClass:"sub-headline"},[t._v("ミニマムテニス")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"unity-wrapper"},[e("iframe",{attrs:{src:"https://kazuyaiida.github.io/MinimumTennis/",width:"960",height:"650",scrolling:"no",frameborder:"0",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper bg-white"},[n("div",{staticClass:"content-container"},[n("h3",{staticClass:"text-center"},[t._v("ルール")]),t._v(" "),n("p",[t._v("\n                ボールの左右への打ち分けと、4種類のショットを駆使して、対戦相手の意表の突く場所へボールを打ち、得点しましょう。ゲームが始まる前に設定したゲーム数を先に勝ち取った方が勝者となります。"),n("br"),t._v("\n                基本的なルールは実際のテニスと同じで、ボールがネットを越えなかったり、コートの外へと落ちたり、ボールを2回以上バウンドさせてしまうと失点になります。"),n("br"),t._v("\n                対戦相手の位置やボールの軌道を考えながら、勝利を目指して頑張ってください。\n            ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-container"},[n("h3",{staticClass:"text-center"},[t._v("操作方法")]),t._v(" "),n("p",[t._v("\n                キーボード"),n("br"),t._v("\n                WASD → プレイヤの移動"),n("br"),t._v("\n                IJKL →ボールの打ち分け"),n("br"),t._v(" "),n("br"),t._v("\n                Nintendo Switch Proコントローラ"),n("br"),t._v("\n                WASD → プレイヤの移動"),n("br"),t._v("\n                IJKL →ボールの打ち分け\n            ")])])])}],!1,null,"69719d06",null);e.default=component.exports;installComponents(component,{OpenVideoGameBtns:n(497).default})}}]);