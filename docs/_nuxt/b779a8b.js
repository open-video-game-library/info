(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{423:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("08961cb3",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";n.r(e);n(41),n(273),n(274);var r={props:{breadcrumb:Array},asyncData:function(){return{paths:[],root:"",material_icons:"",title:"",subtitle:""}},created:function(){switch(this.paths=this.$route.path.split("/"),this.root=this.paths[1],this.paths.splice(0,2),this.root){case"game":case"openvideogame":this.material_icons="sports_esports",this.title="Open Video Game",this.subtitle="研究利用できるゲーム";break;case"tool":this.material_icons="science",this.title="Tool",this.subtitle="研究利用できるツール";break;case"article":this.material_icons="description",this.title="Article",this.subtitle="準備中...";break;case"contact":this.material_icons="email",this.title="Contact",this.subtitle=""}}},o=(n(431),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content-wrapper",style:{"background-image":"url("+n(428)("./heading_"+t.root+".jpg")+")"}},[r("div",{staticClass:"content-container"},[r("h1",{staticClass:"page-heading"},[r("span",{staticClass:"material-icons"},[t._v(t._s(t.material_icons))]),t._v(" "),r("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("span",{staticClass:"sub-headline"},t._l(t.breadcrumb,(function(e,n){return r("span",{key:e.name},[n!==t.breadcrumb.length-1?r("span",[r("nuxt-link",{staticClass:"breadcrumb",attrs:{to:e.path}},[t._v(t._s(e.name))]),t._v("\n                        ＞\n                    ")],1):r("span",[r("strong",[t._v(t._s(e.name))])])])})),0)])])])}),[],!1,null,"20fd045b",null);e.default=component.exports},425:function(t,e,n){t.exports=n.p+"img/heading_contact.b70cba9.jpg"},426:function(t,e,n){t.exports=n.p+"img/heading_about.dc2c5ff.jpg"},427:function(t,e,n){t.exports=n.p+"img/heading_tool.7185156.jpg"},428:function(t,e,n){var map={"./heading_about.jpg":426,"./heading_article.jpg":429,"./heading_contact.jpg":425,"./heading_game.jpg":433,"./heading_openvideogame.jpg":430,"./heading_tool.jpg":427};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=428},429:function(t,e,n){t.exports=n.p+"img/heading_article.f866745.jpg"},430:function(t,e,n){t.exports=n.p+"img/heading_openvideogame.29fe44e.jpg"},431:function(t,e,n){"use strict";n(423)},432:function(t,e,n){var r=n(45)(!1);r.push([t.i,".content-wrapper[data-v-20fd045b]{background-repeat:no-repeat;background-size:100%;background-position:50%}.title[data-v-20fd045b]{font-size:48px}@media screen and (max-width:780px){.title[data-v-20fd045b]{font-size:32px}}@media screen and (max-width:570px){.content-wrapper[data-v-20fd045b]{background-size:auto 100%}}",""]),t.exports=r},436:function(t,e,n){var content=n(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("f36bd176",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";n.r(e);var r={props:{name:String,desc:String,img:String,url:String}},o=(n(549),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"}},[r("el-card",{attrs:{"body-style":{position:"relative",height:"380px"},shadow:"hover"}},[""!==t.url?r("a",{staticClass:"hover-pointer",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}}):t._e(),t._v(" "),r("div",{staticClass:"text-center img-wrapper"},[""==t.img?r("img",{staticClass:"image",attrs:{src:n(434)}}):r("img",{staticClass:"image",attrs:{src:n(435)("./"+t.img)}})]),t._v(" "),r("div",[r("h3",{staticClass:"text-center",staticStyle:{"margin-top":"15px"}},[t._v(t._s(t.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(t.desc))])])])],1)}),[],!1,null,"7767a232",null);e.default=component.exports},549:function(t,e,n){"use strict";n(436)},550:function(t,e,n){var r=n(45)(!1);r.push([t.i,".scroll-box>p[data-v-7767a232]{color:#555c64}a[data-v-7767a232]{position:absolute;top:0;left:0;right:0;bottom:0}.img-wrapper[data-v-7767a232]{width:100%;aspect-ratio:16/9;border-radius:2px;display:flex;justify-content:center;align-items:center}.img-wrapper .image[data-v-7767a232]{border-radius:2px;vertical-align:middle;max-width:100%;max-height:100%}.desc[data-v-7767a232]{margin-top:5px;line-height:28px}",""]),t.exports=r},646:function(t,e,n){"use strict";n.r(e);var r=n(437),o=n(557),c={components:{SiteCard:r.default},asyncData:function(){return{browsergame:o.browsergame,breadcrumb:[{path:"/tool",name:"研究利用できるツール"},{path:"/tool/browsergame",name:"ブラウザゲーム"}]}}},l=n(26),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("Heading",{attrs:{breadcrumb:t.breadcrumb}}),t._v(" "),n("section",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-container"},[n("h2",{staticClass:"text-center page-subheading"},[t._v("ゲーム一覧")]),t._v(" "),n("p",{staticClass:"text-center page-subdesc"},[t._v("このページでは、ブラウザ上で遊べるゲームを紹介します。研究に合ったゲームを探してみましょう。")]),t._v(" "),n("el-row",{attrs:{gutter:30}},t._l(t.browsergame,(function(t){return n("el-col",{key:t.name,attrs:{span:8,xs:24}},[n("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:t.name,desc:t.desc,img:t.img,url:t.url}})],1)})),1)],1)])],1)}),[],!1,null,"7fad98c6",null);e.default=component.exports;installComponents(component,{Heading:n(424).default,SiteCard:n(437).default})}}]);