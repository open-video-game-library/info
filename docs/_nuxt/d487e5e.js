(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{420:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("26ea0fd6",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n.r(e);n(41),n(272),n(273),n(33);var r={props:{breadcrumb:Array},asyncData:function(){return{paths:[],root:"",material_icons:"",title:"",subtitle:""}},created:function(){switch(this.paths=this.$route.path.split("/"),this.root=this.paths[1],this.paths.splice(0,2),this.root){case"game":case"openvideogame":this.material_icons="sports_esports",this.title="Open Video Game",this.subtitle="研究利用できるゲーム";break;case"tool":this.material_icons="science",this.title="Tool",this.subtitle="研究利用できるツール";break;case"article":this.material_icons="description",this.title="Article",this.subtitle="準備中...";break;case"contact":this.material_icons="email",this.title="Contact",this.subtitle=""}console.log(this.$route.name)}},o=(n(429),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content-wrapper",style:{"background-image":"url("+n(425)("./heading_"+t.root+".jpg")+")"}},[r("div",{staticClass:"content-container"},[r("h1",{staticClass:"page-heading"},[r("span",{staticClass:"material-icons"},[t._v(t._s(t.material_icons))]),t._v(" "),r("span",{staticStyle:{"font-size":"48px"}},[t._v(t._s(t.title))]),t._v(" "),r("span",{staticClass:"sub-headline"},t._l(t.breadcrumb,(function(e,n){return r("span",{key:e.name},[n!==t.breadcrumb.length-1?r("span",[r("nuxt-link",{staticClass:"breadcrumb",attrs:{to:e.path}},[t._v(t._s(e.name))]),t._v("\n                        ＞\n                    ")],1):r("span",[r("strong",[t._v(t._s(e.name))])])])})),0)])])])}),[],!1,null,"f25605d0",null);e.default=component.exports},422:function(t,e,n){t.exports=n.p+"img/heading_contact.b70cba9.jpg"},423:function(t,e,n){t.exports=n.p+"img/heading_about.dc2c5ff.jpg"},424:function(t,e,n){t.exports=n.p+"img/heading_tool.7185156.jpg"},425:function(t,e,n){var map={"./heading_about.jpg":423,"./heading_article.jpg":426,"./heading_contact.jpg":422,"./heading_game.jpg":427,"./heading_openvideogame.jpg":428,"./heading_tool.jpg":424};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=425},426:function(t,e,n){t.exports=n.p+"img/heading_article.f866745.jpg"},428:function(t,e,n){t.exports=n.p+"img/heading_openvideogame.29fe44e.jpg"},429:function(t,e,n){"use strict";n(420)},430:function(t,e,n){var r=n(55)(!1);r.push([t.i,".content-wrapper[data-v-f25605d0]{background-repeat:no-repeat;background-size:100%;background-position:50%}",""]),t.exports=r},433:function(t,e,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("f36bd176",content,!0,{sourceMap:!1})},434:function(t,e,n){"use strict";n.r(e);var r={props:{name:String,desc:String,img:String,url:String}},o=(n(546),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"}},[r("el-card",{attrs:{"body-style":{position:"relative",height:"380px"},shadow:"hover"}},[""!==t.url?r("a",{staticClass:"hover-pointer",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}}):t._e(),t._v(" "),r("div",{staticClass:"text-center img-wrapper"},[""==t.img?r("img",{staticClass:"image",attrs:{src:n(431)}}):r("img",{staticClass:"image",attrs:{src:n(432)("./"+t.img)}})]),t._v(" "),r("div",[r("h3",{staticClass:"text-center",staticStyle:{"margin-top":"15px"}},[t._v(t._s(t.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(t.desc))])])])],1)}),[],!1,null,"7767a232",null);e.default=component.exports},546:function(t,e,n){"use strict";n(433)},547:function(t,e,n){var r=n(55)(!1);r.push([t.i,".scroll-box>p[data-v-7767a232]{color:#555c64}a[data-v-7767a232]{position:absolute;top:0;left:0;right:0;bottom:0}.img-wrapper[data-v-7767a232]{width:100%;aspect-ratio:16/9;border-radius:2px;display:flex;justify-content:center;align-items:center}.img-wrapper .image[data-v-7767a232]{border-radius:2px;vertical-align:middle;max-width:100%;max-height:100%}.desc[data-v-7767a232]{margin-top:5px;line-height:28px}",""]),t.exports=r},647:function(t,e,n){"use strict";n.r(e);var r=n(434),o=n(554),c={components:{SiteCard:r.default},asyncData:function(){return{gameasset:o.gameasset,breadcrumb:[{path:"/tool",name:"研究利用できるツール"},{path:"/tool/gameasset",name:"ゲームアセット"},{path:"/tool/gameasset/interface",name:"UI/グラフィック"}]}}},l=n(26),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("Heading",{attrs:{breadcrumb:t.breadcrumb}}),t._v(" "),n("section",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-container"},[n("h2",{staticClass:"text-center page-subheading"},[t._v("UI/グラフィック")]),t._v(" "),n("el-row",{staticStyle:{width:"100%"},attrs:{gutter:30}},t._l(t.gameasset,(function(e){return n("el-col",{key:e.name,attrs:{span:8}},["interface"===e.genre?n("SiteCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:e.name,desc:e.desc,img:e.img,url:e.url}}):t._e()],1)})),1)],1)])],1)}),[],!1,null,"7b1ddf52",null);e.default=component.exports;installComponents(component,{Heading:n(421).default,SiteCard:n(434).default})}}]);