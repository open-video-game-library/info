(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{420:function(t,e,r){var content=r(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("f0a1af14",content,!0,{sourceMap:!1})},422:function(t,e,r){"use strict";r.r(e);var n={props:{name:String,desc:String,img:String,url:String}},o=(r(525),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{attrs:{"body-style":{position:"relative",height:"360px"},shadow:"hover"}},[n("a",{staticClass:"hover-pointer",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}}),t._v(" "),n("div",{staticClass:"text-center img-wrapper"},[""==t.img?n("img",{staticClass:"image",attrs:{src:r(419)}}):n("img",{staticClass:"image",attrs:{src:r(421)("./"+t.img)}})]),t._v(" "),n("div",[n("h3",{staticClass:"text-center",staticStyle:{"margin-top":"15px"}},[t._v(t._s(t.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.desc))])])])}),[],!1,null,"ea4467be",null);e.default=component.exports},525:function(t,e,r){"use strict";r(420)},526:function(t,e,r){var n=r(55)(!1);n.push([t.i,".scroll-box>p[data-v-ea4467be]{color:#555c64}a[data-v-ea4467be]{position:absolute;top:0;left:0;right:0;bottom:0}.img-wrapper[data-v-ea4467be]{background-color:#f5f5f5;width:100%;aspect-ratio:16/9;border-radius:2px}.img-wrapper .image[data-v-ea4467be]{border-radius:2px;vertical-align:top;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.desc[data-v-ea4467be]{line-height:28px}",""]),t.exports=n},560:function(t,e,r){var content=r(602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("1acf3fb6",content,!0,{sourceMap:!1})},601:function(t,e,r){"use strict";r(560)},602:function(t,e,r){var n=r(55),o=r(195),c=r(530),l=n(!1),d=o(c);l.push([t.i,".bg-heading[data-v-af5f2fe2]{background-image:url("+d+");background-repeat:no-repeat;background-size:100%;background-position:50%}",""]),t.exports=l},623:function(t,e,r){"use strict";r.r(e);var n=r(422),o=r(534),c={components:{SiteCard:n.default},asyncData:function(){return{gameasset:o.gameasset}}},l=(r(601),r(26)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[t._m(0),t._v(" "),r("section",{staticClass:"content-wrapper"},[r("div",{staticClass:"content-container"},[r("h2",{staticClass:"text-center page-subheading"},[t._v("開発言語/フレームワーク")]),t._v(" "),r("el-row",{staticStyle:{width:"100%"},attrs:{gutter:30}},t._l(t.gameasset,(function(e){return r("el-col",{key:e.name,attrs:{span:8}},["development"===e.genre?r("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1)],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content-wrapper bg-heading"},[r("div",{staticClass:"content-container"},[r("h1",{staticClass:"page-heading"},[r("span",{staticClass:"material-icons"},[t._v("sports_esports")]),t._v(" "),r("span",{staticStyle:{"font-size":"48px"}},[t._v("Game")]),t._v(" "),r("span",{staticClass:"sub-headline"},[t._v("ゲームアセット｜開発言語/フレームワーク")])])])])}],!1,null,"af5f2fe2",null);e.default=component.exports;installComponents(component,{SiteCard:r(422).default})}}]);