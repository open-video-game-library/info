(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{420:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("38dbf5fa",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n.r(e);var r={props:{name:String,desc:String,img:String,url:String}},o=(n(524),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{attrs:{"body-style":{position:"relative",height:"336px"},shadow:"hover"}},[r("a",{staticClass:"hover-pointer",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}}),t._v(" "),r("div",{staticClass:"text-center",staticStyle:{"background-color":"#F5F5F5",height:"156px"}},[""==t.img?r("img",{staticClass:"image",attrs:{src:n(419)}}):r("img",{staticClass:"image",attrs:{src:n(421)("./"+t.img)}})]),t._v(" "),r("div",[r("h3",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.name))]),t._v(" "),r("p",[t._v(t._s(t.desc))])])])}),[],!1,null,"69d4758f",null);e.default=component.exports},524:function(t,e,n){"use strict";n(420)},525:function(t,e,n){var r=n(55)(!1);r.push([t.i,".image[data-v-69d4758f]{max-width:100%;height:156px;border-radius:2px}.scroll-box>p[data-v-69d4758f]{color:#555c64}a[data-v-69d4758f]{position:absolute;top:0;left:0;right:0;bottom:124px}",""]),t.exports=r},558:function(t,e,n){var content=n(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("6a1dd3d0",content,!0,{sourceMap:!1})},598:function(t,e,n){"use strict";n(558)},599:function(t,e,n){var r=n(55),o=n(195),c=n(529),l=r(!1),d=o(c);l.push([t.i,".bg-heading[data-v-8e95c9fe]{background-image:url("+d+");background-repeat:no-repeat;background-size:100%;background-position:50%}",""]),t.exports=l},621:function(t,e,n){"use strict";n.r(e);var r=n(422),o=n(533),c={components:{SiteCard:r.default},asyncData:function(){return{gameasset:o.gameasset}}},l=(n(598),n(26)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[t._m(0),t._v(" "),n("section",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-container"},[n("h2",{staticClass:"text-center page-subheading"},[t._v("3Dモデル")]),t._v(" "),n("el-row",{staticStyle:{width:"100%"},attrs:{gutter:30}},t._l(t.gameasset,(function(e){return n("el-col",{key:e.name,attrs:{span:8}},["3dmodel"===e.genre?n("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1)],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper bg-heading"},[n("div",{staticClass:"content-container"},[n("h1",{staticClass:"page-heading"},[n("span",{staticClass:"material-icons"},[t._v("sports_esports")]),t._v(" "),n("span",{staticStyle:{"font-size":"48px"}},[t._v("Game")]),t._v(" "),n("span",{staticClass:"sub-headline"},[t._v("ゲームアセット｜3Dモデル")])])])])}],!1,null,"8e95c9fe",null);e.default=component.exports;installComponents(component,{SiteCard:n(422).default})}}]);