(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5],{423:function(t,e,n){var content=n(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("790937d4",content,!0,{sourceMap:!1})},425:function(t,e,n){"use strict";n.r(e);var o={props:{url_download:String,url_code:String},methods:{toDownload:function(){window.open(this.url_download,"_blank")},toCode:function(){window.open(this.url_code,"_blank")}}},r=(n(530),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"color-green",staticStyle:{"margin-right":"40px"},attrs:{disabled:""===t.url_download},on:{click:t.toDownload}},[t._m(0)]),t._v(" "),n("button",{attrs:{disabled:""===t.url_code},on:{click:t.toCode}},[t._m(1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"material-icons"},[t._v("file_download")]),t._v("\n                Download\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"material-icons"},[t._v("code")]),t._v("\n                Sourse code\n            ")])}],!1,null,"6109933c",null);e.default=component.exports},530:function(t,e,n){"use strict";n(423)},531:function(t,e,n){var o=n(55)(!1);o.push([t.i,'.material-icons[data-v-6109933c]{padding:0}button[data-v-6109933c]{cursor:pointer;width:200px;position:relative;font-family:inherit;font-weight:500;font-size:18px;letter-spacing:.05em;border-radius:4px;border:none;background:linear-gradient(90deg,#8e2de2,#4a00e0);color:#f8f8ff;overflow:hidden}.color-green[data-v-6109933c]{background:linear-gradient(90deg,#4ac44c,#4d9453)}button svg[data-v-6109933c]{width:1.2em;height:1.2em;margin-right:.5em}button span[data-v-6109933c]{position:relative;z-index:10;transition:color .4s;display:inline-flex;align-items:center;padding:.8em 0}button[data-v-6109933c]:after,button[data-v-6109933c]:before{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}button[data-v-6109933c]:before{content:"";background:#000;width:120%;left:-10%;transform:skew(30deg);transition:transform .4s cubic-bezier(.3,1,.8,1)}button[data-v-6109933c]:hover:before{transform:translate3d(100%,0,0)}button[data-v-6109933c]:active{transform:scale(.95)}button[data-v-6109933c]:disabled{cursor:not-allowed}',""]),t.exports=o},627:function(t,e,n){"use strict";n.r(e);var o={components:{OpenVideoGameBtns:n(425).default},asyncData:function(){return{url_download:"",url_code:""}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[t._m(0),t._v(" "),n("section",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-container"},[n("p",{staticStyle:{"margin-bottom":"0"}},[t._v("大海原を突き進め！")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("OpenVideoGameBtns",{attrs:{url_download:t.url_download,url_code:t.url_code}})],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("section",{staticClass:"content-wrapper bg-white"},[n("div",{staticClass:"content-container"},[n("h3",{staticClass:"text-center page-subheading"},[t._v("パラメータ")]),t._v(" "),n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{span:12}},[n("h4",[t._v("調整可能パラメータ")]),t._v(" "),n("ul",[n("li",[t._v("上下移動感度")]),t._v(" "),n("li",[t._v("推進力")]),t._v(" "),n("li",[t._v("海流の力")])])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("h4",[t._v("取得可能パラメータ")]),t._v(" "),n("ul",[n("li",[t._v("スコア")]),t._v(" "),n("li",[t._v("生存時間")]),t._v(" "),n("li",[t._v("ゲットした魚の数")]),t._v(" "),n("li",[t._v("前への加速を入力した回数")])])])],1)],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper bg-white"},[n("div",{staticClass:"content-container"},[n("h1",{staticClass:"page-heading"},[n("span",{staticClass:"material-icons"},[t._v("sports_esports")]),t._v(" "),n("span",{staticStyle:{"font-size":"48px"}},[t._v("Game")]),t._v(" "),n("span",{staticClass:"sub-headline"},[t._v("オープンビデオゲーム")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"page-heading",staticStyle:{padding:"0"}},[n("span",{staticStyle:{"font-size":"48px"}},[t._v("Escape fish")]),t._v(" "),n("span",{staticClass:"sub-headline"},[t._v("エスケープフィッシュ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"unity-wrapper text-center"},[e("iframe",{attrs:{src:"https://keitalab.github.io/escape_fish/",width:"960",height:"650",scrolling:"no",frameborder:"0",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper bg-white"},[n("div",{staticClass:"content-container"},[n("h3",{staticClass:"text-center page-subheading"},[t._v("ルール")]),t._v(" "),n("p",[t._v("\n                海流に流されて網に捕われないように魚をコントロールし、できるだけ移動距離を伸ばしましょう。"),n("br"),t._v("\n                上下移動や加速を使い、障害物や襲ってくる鳥や魚を避けましょう。"),n("br"),t._v("\n                仲間の魚をゲットすると、残機が増えます。"),n("br"),t._v("\n                残機がない状態で障害物や敵に当たるか、後ろから迫ってくる網に捕まってしまうとゲームオーバーです。"),n("br")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-container"},[n("h3",{staticClass:"text-center page-subheading"},[t._v("操作方法")]),t._v(" "),n("p",[t._v("\n                上下キー→ 上下の移動"),n("br"),t._v("\n                スペース → 加速\n            ")])])])}],!1,null,"9d79a09c",null);e.default=component.exports;installComponents(component,{OpenVideoGameBtns:n(425).default})}}]);