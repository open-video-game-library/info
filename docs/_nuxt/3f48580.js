(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5],{423:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("08961cb3",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";n.r(e);n(41),n(273),n(274);var o={props:{breadcrumb:Array},asyncData:function(){return{paths:[],root:"",material_icons:"",title:"",subtitle:""}},created:function(){switch(this.paths=this.$route.path.split("/"),this.root=this.paths[1],this.paths.splice(0,2),this.root){case"game":case"openvideogame":this.material_icons="sports_esports",this.title="Open Video Game",this.subtitle="研究利用できるゲーム";break;case"tool":this.material_icons="science",this.title="Tool",this.subtitle="研究利用できるツール";break;case"article":this.material_icons="description",this.title="Article",this.subtitle="準備中...";break;case"contact":this.material_icons="email",this.title="Contact",this.subtitle=""}}},r=(n(431),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"content-wrapper",style:{"background-image":"url("+n(428)("./heading_"+t.root+".jpg")+")"}},[o("div",{staticClass:"content-container"},[o("h1",{staticClass:"page-heading"},[o("span",{staticClass:"material-icons"},[t._v(t._s(t.material_icons))]),t._v(" "),o("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("span",{staticClass:"sub-headline"},t._l(t.breadcrumb,(function(e,n){return o("span",{key:e.name},[n!==t.breadcrumb.length-1?o("span",[o("nuxt-link",{staticClass:"breadcrumb",attrs:{to:e.path}},[t._v(t._s(e.name))]),t._v("\n                        ＞\n                    ")],1):o("span",[o("strong",[t._v(t._s(e.name))])])])})),0)])])])}),[],!1,null,"20fd045b",null);e.default=component.exports},425:function(t,e,n){t.exports=n.p+"img/heading_contact.b70cba9.jpg"},426:function(t,e,n){t.exports=n.p+"img/heading_about.dc2c5ff.jpg"},427:function(t,e,n){t.exports=n.p+"img/heading_tool.7185156.jpg"},428:function(t,e,n){var map={"./heading_about.jpg":426,"./heading_article.jpg":429,"./heading_contact.jpg":425,"./heading_game.jpg":433,"./heading_openvideogame.jpg":430,"./heading_tool.jpg":427};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=428},429:function(t,e,n){t.exports=n.p+"img/heading_article.f866745.jpg"},430:function(t,e,n){t.exports=n.p+"img/heading_openvideogame.29fe44e.jpg"},431:function(t,e,n){"use strict";n(423)},432:function(t,e,n){var o=n(45)(!1);o.push([t.i,".content-wrapper[data-v-20fd045b]{background-repeat:no-repeat;background-size:100%;background-position:50%}.title[data-v-20fd045b]{font-size:48px}@media screen and (max-width:780px){.title[data-v-20fd045b]{font-size:32px}}@media screen and (max-width:570px){.content-wrapper[data-v-20fd045b]{background-size:auto 100%}}",""]),t.exports=o},433:function(t,e,n){t.exports=n.p+"img/heading_game.29fe44e.jpg"},632:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"Article"}},components:{Heading:n(424).default},asyncData:function(){return{breadcrumb:[{path:"/article",name:"準備中..."}]}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("Heading",{attrs:{breadcrumb:t.breadcrumb}})],1)}),[],!1,null,"5afb60fa",null);e.default=component.exports;installComponents(component,{Heading:n(424).default})}}]);