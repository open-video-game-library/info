(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{420:function(t,e,r){var content=r(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("170027a5",content,!0,{sourceMap:!1})},422:function(t,e,r){"use strict";r.r(e);var n={props:{name:String,desc:String,img:String,url:String}},o=(r(521),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{"body-style":{position:"relative",height:"336px"},shadow:"hover"}},[n("a",{staticClass:"hover-pointer",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}}),t._v(" "),n("div",{staticClass:"text-center",staticStyle:{"background-color":"#F5F5F5",height:"156px"}},[""==t.img?n("img",{staticClass:"image",attrs:{src:r(419)}}):n("img",{staticClass:"image",attrs:{src:r(421)("./"+t.img)}})]),t._v(" "),n("div",{staticClass:"scroll-box"},[n("h3",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.name))]),t._v(" "),n("p",[t._v(t._s(t.desc))])])])}),[],!1,null,"24d1410e",null);e.default=component.exports},521:function(t,e,r){"use strict";r(420)},522:function(t,e,r){var n=r(55)(!1);n.push([t.i,".image[data-v-24d1410e]{max-width:100%;height:156px;border-radius:2px}.scroll-box[data-v-24d1410e]{height:138px;overflow-y:scroll}.scroll-box>p[data-v-24d1410e]{color:#555c64}a[data-v-24d1410e]{position:absolute;top:0;left:0;right:0;bottom:124px}",""]),t.exports=n},581:function(t,e,r){"use strict";r.r(e);var n=r(422),o=r(529),l={components:{SiteCard:n.default},asyncData:function(){return{opensoursegame:o.opensoursegame}}},c=r(26),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[t._m(0),t._v(" "),r("section",{staticClass:"content-wrapper"},[r("div",{staticClass:"content-container"},[r("h2",{staticClass:"text-center page-subheading"},[t._v("ゲーム一覧")]),t._v(" "),r("p",{staticClass:"text-center page-subdesc"},[t._v("このページでは、コードが公開されているオープンソースのゲームを紹介します。研究に合ったゲームを探してみましょう。")]),t._v(" "),r("h3",{staticClass:"text-center page-subsubheading"},[t._v("スポーツ")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.opensoursegame,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["sports"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1),t._v(" "),r("h3",{staticClass:"text-center page-subsubheading"},[t._v("シューティング")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.opensoursegame,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["shooting"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1),t._v(" "),r("h3",{staticClass:"text-center page-subsubheading"},[t._v("プラットフォーム")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.opensoursegame,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["platform"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1),t._v(" "),r("h3",{staticClass:"text-center page-subsubheading"},[t._v("レース/ドライビング")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.opensoursegame,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["driving"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1),t._v(" "),r("h3",{staticClass:"text-center page-subsubheading"},[t._v("アクション")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.opensoursegame,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["action"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1),t._v(" "),r("h3",{staticClass:"text-center page-subsubheading"},[t._v("格闘")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.opensoursegame,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["fighting"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1),t._v(" "),r("h3",{staticClass:"text-center page-subsubheading"},[t._v("パズル")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.opensoursegame,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["puzzle"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1),t._v(" "),r("h3",{staticClass:"text-center page-subsubheading"},[t._v("その他")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.opensoursegame,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["other"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1)],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content-wrapper bg-white"},[r("div",{staticClass:"content-container"},[r("h1",{staticClass:"page-heading"},[r("span",{staticClass:"material-icons"},[t._v("sports_esports")]),t._v(" "),r("span",{staticStyle:{"font-size":"48px"}},[t._v("Game")]),t._v(" "),r("span",{staticClass:"sub-headline"},[t._v("オープンソースゲーム")])])])])}],!1,null,"32283a2a",null);e.default=component.exports;installComponents(component,{SiteCard:r(422).default})}}]);