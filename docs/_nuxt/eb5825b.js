(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{425:function(t,e,r){var content=r(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("f36bd176",content,!0,{sourceMap:!1})},429:function(t,e,r){"use strict";r.r(e);var n={props:{name:String,desc:String,img:String,url:String}},o=(r(546),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("el-card",{attrs:{"body-style":{position:"relative",height:"380px"},shadow:"hover"}},[""!==t.url?n("a",{staticClass:"hover-pointer",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}}):t._e(),t._v(" "),n("div",{staticClass:"text-center img-wrapper"},[""==t.img?n("img",{staticClass:"image",attrs:{src:r(421)}}):n("img",{staticClass:"image",attrs:{src:r(424)("./"+t.img)}})]),t._v(" "),n("div",[n("h3",{staticClass:"text-center",staticStyle:{"margin-top":"15px"}},[t._v(t._s(t.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.desc))])])])],1)}),[],!1,null,"7767a232",null);e.default=component.exports},546:function(t,e,r){"use strict";r(425)},547:function(t,e,r){var n=r(55)(!1);n.push([t.i,".scroll-box>p[data-v-7767a232]{color:#555c64}a[data-v-7767a232]{position:absolute;top:0;left:0;right:0;bottom:0}.img-wrapper[data-v-7767a232]{width:100%;aspect-ratio:16/9;border-radius:2px;display:flex;justify-content:center;align-items:center}.img-wrapper .image[data-v-7767a232]{border-radius:2px;vertical-align:middle;max-width:100%;max-height:100%}.desc[data-v-7767a232]{margin-top:5px;line-height:28px}",""]),t.exports=n},584:function(t,e,r){var content=r(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("726ab894",content,!0,{sourceMap:!1})},625:function(t,e,r){"use strict";r(584)},626:function(t,e,r){var n=r(55),o=r(195),c=r(420),l=n(!1),d=o(c);l.push([t.i,".bg-heading[data-v-561135d9]{background-image:url("+d+");background-repeat:no-repeat;background-size:100%;background-position:50%}",""]),t.exports=l},660:function(t,e,r){"use strict";r.r(e);var n=r(429),o=r(554),c={components:{SiteCard:n.default},asyncData:function(t){t.$axios;return{browsergame:o.browsergame}}},l=(r(625),r(26)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("section",{staticClass:"content-wrapper bg-heading"},[r("div",{staticClass:"content-container"},[r("h1",{staticClass:"page-heading"},[r("span",{staticClass:"material-icons"},[t._v("sports_esports")]),t._v(" "),r("span",{staticStyle:{"font-size":"48px"}},[t._v("Game")]),t._v(" "),r("span",{staticClass:"sub-headline"},[r("nuxt-link",{staticClass:"breadcrumb",attrs:{to:"/game"}},[t._v("研究利用できるゲーム")]),t._v("\n                    ＞\n                    "),r("strong",[t._v("ブラウザゲーム")])],1)])])]),t._v(" "),r("section",{staticClass:"content-wrapper"},[r("div",{staticClass:"content-container"},[r("h2",{staticClass:"text-center page-subheading"},[t._v("ゲーム一覧")]),t._v(" "),r("p",{staticClass:"text-center page-subdesc"},[t._v("このページでは、ブラウザ上で遊べるゲームを紹介します。研究に合ったゲームを探してみましょう。")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.browsergame,(function(t){return r("el-col",{key:t.name,attrs:{span:8}},[r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:t.name,desc:t.desc,img:t.img,url:t.url}})],1)})),1)],1)])])}),[],!1,null,"561135d9",null);e.default=component.exports;installComponents(component,{SiteCard:r(429).default})}}]);