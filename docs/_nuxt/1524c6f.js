(window.webpackJsonp=window.webpackJsonp||[]).push([[26,4,6],{420:function(t,e,n){t.exports=n.p+"img/heading_game.29fe44e.jpg"},421:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("26ea0fd6",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n.r(e);n(41),n(272),n(273),n(33);var o={props:{breadcrumb:Array},asyncData:function(){return{paths:[],root:"",material_icons:"",title:"",subtitle:""}},created:function(){switch(this.paths=this.$route.path.split("/"),this.root=this.paths[1],this.paths.splice(0,2),this.root){case"game":case"openvideogame":this.material_icons="sports_esports",this.title="Open Video Game",this.subtitle="研究利用できるゲーム";break;case"tool":this.material_icons="science",this.title="Tool",this.subtitle="研究利用できるツール";break;case"article":this.material_icons="description",this.title="Article",this.subtitle="準備中...";break;case"contact":this.material_icons="email",this.title="Contact",this.subtitle=""}console.log(this.$route.name)}},r=(n(433),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"content-wrapper",style:{"background-image":"url("+n(430)("./heading_"+t.root+".jpg")+")"}},[o("div",{staticClass:"content-container"},[o("h1",{staticClass:"page-heading"},[o("span",{staticClass:"material-icons"},[t._v(t._s(t.material_icons))]),t._v(" "),o("span",{staticStyle:{"font-size":"48px"}},[t._v(t._s(t.title))]),t._v(" "),o("span",{staticClass:"sub-headline"},t._l(t.breadcrumb,(function(e,n){return o("span",{key:e.name},[n!==t.breadcrumb.length-1?o("span",[o("nuxt-link",{staticClass:"breadcrumb",attrs:{to:e.path}},[t._v(t._s(e.name))]),t._v("\n                        ＞\n                    ")],1):o("span",[o("strong",[t._v(t._s(e.name))])])])})),0)])])])}),[],!1,null,"f25605d0",null);e.default=component.exports},425:function(t,e,n){t.exports=n.p+"img/heading_contact.b70cba9.jpg"},426:function(t,e,n){t.exports=n.p+"img/heading_about.dc2c5ff.jpg"},428:function(t,e,n){t.exports=n.p+"img/heading_tool.7185156.jpg"},430:function(t,e,n){var map={"./heading_about.jpg":426,"./heading_article.jpg":431,"./heading_contact.jpg":425,"./heading_game.jpg":420,"./heading_openvideogame.jpg":432,"./heading_tool.jpg":428};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=430},431:function(t,e,n){t.exports=n.p+"img/heading_article.f866745.jpg"},432:function(t,e,n){t.exports=n.p+"img/heading_openvideogame.29fe44e.jpg"},433:function(t,e,n){"use strict";n(421)},434:function(t,e,n){var o=n(55)(!1);o.push([t.i,".content-wrapper[data-v-f25605d0]{background-repeat:no-repeat;background-size:100%;background-position:50%}",""]),t.exports=o},435:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("790937d4",content,!0,{sourceMap:!1})},438:function(t,e,n){t.exports=n.p+"img/manual_fish.ff4cfed.png"},446:function(t,e,n){"use strict";n.r(e);var o={props:{url_download:String,url_code:String},methods:{toDownload:function(){window.open(this.url_download,"_blank")},toCode:function(){window.open(this.url_code,"_blank")}}},r=(n(550),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"color-green",staticStyle:{"margin-right":"40px"},attrs:{disabled:""===t.url_download},on:{click:t.toDownload}},[t._m(0)]),t._v(" "),n("button",{attrs:{disabled:""===t.url_code},on:{click:t.toCode}},[t._m(1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"material-icons"},[t._v("file_download")]),t._v("\n                Download\n            ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{staticClass:"material-icons"},[t._v("code")]),t._v("\n                Sourse code\n            ")])}],!1,null,"6109933c",null);e.default=component.exports},550:function(t,e,n){"use strict";n(435)},551:function(t,e,n){var o=n(55)(!1);o.push([t.i,'.material-icons[data-v-6109933c]{padding:0}button[data-v-6109933c]{cursor:pointer;width:200px;position:relative;font-family:inherit;font-weight:500;font-size:18px;letter-spacing:.05em;border-radius:4px;border:none;background:linear-gradient(90deg,#8e2de2,#4a00e0);color:#f8f8ff;overflow:hidden}.color-green[data-v-6109933c]{background:linear-gradient(90deg,#4ac44c,#4d9453)}button svg[data-v-6109933c]{width:1.2em;height:1.2em;margin-right:.5em}button span[data-v-6109933c]{position:relative;z-index:10;transition:color .4s;display:inline-flex;align-items:center;padding:.8em 0}button[data-v-6109933c]:after,button[data-v-6109933c]:before{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}button[data-v-6109933c]:before{content:"";background:#000;width:120%;left:-10%;transform:skew(30deg);transition:transform .4s cubic-bezier(.3,1,.8,1)}button[data-v-6109933c]:hover:before{transform:translate3d(100%,0,0)}button[data-v-6109933c]:active{transform:scale(.95)}button[data-v-6109933c]:disabled{cursor:not-allowed}',""]),t.exports=o},649:function(t,e,n){"use strict";n.r(e);var o=n(446),r=n(422),c={head:function(){return{title:"Escape fish"}},components:{OpenVideoGameBtns:o.default,Heading:r.default},asyncData:function(){return{url_download:"",url_code:"",breadcrumb:[{path:"/openvideogame",name:"オープンビデオゲーム"},{path:"/openvideogame/escape_fish",name:"Escape fish"}]}}},l=n(26),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("Heading",{attrs:{breadcrumb:t.breadcrumb}}),t._v(" "),o("section",{staticClass:"content-wrapper"},[o("div",{staticClass:"content-container"},[o("p",{staticStyle:{"margin-bottom":"0"}},[t._v("大海原を突き進め！")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("OpenVideoGameBtns",{attrs:{url_download:t.url_download,url_code:t.url_code}})],1)]),t._v(" "),t._m(2),t._v(" "),o("section",{staticClass:"content-wrapper"},[o("div",{staticClass:"content-container"},[o("h3",{staticClass:"text-center page-subheading"},[t._v("操作方法")]),t._v(" "),o("div",{staticClass:"text-center"},[o("img",{staticStyle:{width:"80%"},attrs:{src:n(438)}})])])]),t._v(" "),o("section",{staticClass:"content-wrapper bg-white"},[o("div",{staticClass:"content-container"},[o("h3",{staticClass:"text-center page-subheading"},[t._v("パラメータ")]),t._v(" "),o("el-row",{attrs:{gutter:30}},[o("el-col",{attrs:{span:12}},[o("h4",[t._v("調整可能パラメータ")]),t._v(" "),o("ul",[o("li",[t._v("上下移動感度")]),t._v(" "),o("li",[t._v("推進力")]),t._v(" "),o("li",[t._v("海流の力")])])]),t._v(" "),o("el-col",{attrs:{span:12}},[o("h4",[t._v("取得可能パラメータ")]),t._v(" "),o("ul",[o("li",[t._v("スコア")]),t._v(" "),o("li",[t._v("生存時間")]),t._v(" "),o("li",[t._v("ゲットした魚の数")]),t._v(" "),o("li",[t._v("前への加速を入力した回数")])])])],1)],1)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"page-heading",staticStyle:{padding:"0"}},[n("span",{staticStyle:{"font-size":"48px"}},[t._v("Escape fish")]),t._v(" "),n("span",{staticClass:"sub-headline"},[t._v("エスケープフィッシュ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"unity-wrapper text-center"},[e("iframe",{attrs:{src:"https://keitalab.github.io/escape_fish/",width:"960",height:"650",scrolling:"no",frameborder:"0",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper bg-white"},[n("div",{staticClass:"content-container"},[n("h3",{staticClass:"text-center page-subheading"},[t._v("ルール")]),t._v(" "),n("p",[t._v("\n                海流に流されて網に捕われないように魚をコントロールし、できるだけ移動距離を伸ばしましょう。"),n("br"),t._v("\n                上下移動や加速を使い、障害物や襲ってくる鳥や魚を避けましょう。"),n("br"),t._v("\n                仲間の魚をゲットすると、残機が増えます。"),n("br"),t._v("\n                残機がない状態で障害物や敵に当たるか、後ろから迫ってくる網に捕まってしまうとゲームオーバーです。"),n("br")])])])}],!1,null,"53baf9be",null);e.default=component.exports;installComponents(component,{Heading:n(422).default,OpenVideoGameBtns:n(446).default})}}]);