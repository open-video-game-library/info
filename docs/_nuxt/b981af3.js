(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{437:function(t,e,n){var content=n(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("25d19e1e",content,!0,{sourceMap:!1})},539:function(t,e,n){"use strict";n.r(e);var c={props:{name:String,desc:String,img:String,url:String,isOurs:Boolean}},l=(n(542),n(26)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticStyle:{position:"relative"}},[t.isOurs?c("div",{staticClass:"ovgl-line-horizontal"}):t._e(),t._v(" "),t.isOurs?c("div",{staticClass:"ovgl-line-vertical"}):t._e(),t._v(" "),t.isOurs?c("div",{staticClass:"ovgl-mark"},[c("span",[t._v("Presented by")]),t._v(" "),c("span",[t._v("OVGL")])]):t._e(),t._v(" "),c("el-card",{staticClass:"card-wrapper",attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[c("nuxt-link",{staticClass:"hover-pointer full-link",attrs:{to:t.url}}),t._v(" "),""===t.img?c("img",{staticClass:"image",attrs:{src:n(420)}}):c("img",{staticClass:"image",attrs:{src:n(424)("./"+t.img)}}),t._v(" "),c("div",{staticClass:"hover-elems"},[c("div",[c("h2",{staticClass:"name text-center"},[c("span",[t._v(t._s(t.name))])]),t._v(" "),""!==t.desc?c("p",{staticClass:"desc"},[t._v("\n                    "+t._s(t.desc)+"\n                ")]):t._e()])])],1)],1)}),[],!1,null,"27df2003",null);e.default=component.exports},542:function(t,e,n){"use strict";n(437)},543:function(t,e,n){var c=n(55)(!1);c.push([t.i,".card-wrapper[data-v-27df2003]{position:relative}.hover-elems[data-v-27df2003]{background-color:hsla(0,0%,100%,.9);position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;z-index:5;padding:30px}.name>span[data-v-27df2003]{display:inline-block;border-bottom:1px solid #000}.desc[data-v-27df2003]{margin-top:15px}.image[data-v-27df2003]{display:block;width:100%;z-index:1}.full-link[data-v-27df2003]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:10}.hover-elems[data-v-27df2003]{display:flex;justify-content:center;align-items:center}.full-link:hover~.hover-elems[data-v-27df2003]{opacity:1;transition:.2s ease-in-out}",""]),t.exports=c},562:function(t,e,n){var content=n(602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("7cab08f0",content,!0,{sourceMap:!1})},601:function(t,e,n){"use strict";n(562)},602:function(t,e,n){var c=n(55),l=n(195),r=n(422),o=c(!1),v=l(r);o.push([t.i,".bg-heading[data-v-7b9e4c31]{background-image:url("+v+");background-repeat:no-repeat;background-size:100%;background-position:50%}li[data-v-7b9e4c31]{margin-left:-20px}",""]),t.exports=o},646:function(t,e,n){"use strict";n.r(e);var c=n(539),l=n(544),r={components:{PageCard:c.default},asyncData:function(){return{openvideogame:l.openvideogame}}},o=(n(601),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"container"},[t._m(0),t._v(" "),c("section",{staticClass:"content-wrapper"},[c("div",{staticClass:"content-container"},[c("h2",{staticClass:"text-center page-subheading"},[t._v("ゲーム一覧")]),t._v(" "),c("p",{staticClass:"text-center page-subdesc"},[t._v("営利以外の目的であれば自由にお使いいただけます。詳しいガイドラインは"),c("nuxt-link",{staticClass:"general-link",attrs:{to:"/openvideogame#Guideline"}},[t._v("こちら")]),t._v("。")],1),t._v(" "),c("el-row",{attrs:{gutter:30}},[t._l(t.openvideogame,(function(t){return c("el-col",{key:t.name,attrs:{span:12}},[c("PageCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:t.name,desc:t.desc,img:t.img,url:t.url}})],1)})),t._v(" "),c("el-col",{attrs:{span:12}},[c("PageCard",{staticStyle:{"margin-bottom":"30px"},attrs:{name:"こういうゲームがほしい！",desc:"研究利用したいジャンルのゲームがありましたら、ぜひご連絡ください。",img:"more.png",url:"/contact"}})],1)],2)],1)]),t._v(" "),c("section",{staticClass:"content-wrapper bg-white"},[c("div",{staticClass:"content-container"},[c("h2",{staticClass:"text-center page-subheading"},[t._v("パラメータの調整・取得")]),t._v(" "),c("p",{staticClass:"text-center page-subdesc"},[t._v("オープンビデオゲームでは、コードを書くことなくパラメータを調整・取得することができます。")]),t._v(" "),c("h3",{staticClass:"text-center page-subsubheading"},[t._v("パラメータの調整")]),t._v(" "),c("p",{staticClass:"page-subsubdesc"},[t._v("パラメータ調整によって、実験環境などの都合に合わせてゲームの難易度や仕様を手軽に調整することができます。数値調整だけでなく、画像差し替えによるビジュアルの調整も可能です。")]),t._v(" "),c("div",{staticClass:"text-center"},[c("img",{staticStyle:{width:"80%"},attrs:{src:n(432)}})]),t._v(" "),c("h3",{staticClass:"text-center page-subsubheading",staticStyle:{"margin-top":"60px"}},[t._v("パラメータの取得")]),t._v(" "),c("p",{staticClass:"page-subsubdesc"},[t._v("観察だけでは把握しきれない、ゲームの内部データを取得することができます。ゲーム体験やコントローラデバイスの評価分析に活用できます。")]),t._v(" "),c("div",{staticClass:"text-center"},[c("img",{staticStyle:{width:"80%"},attrs:{src:n(433)}})])])]),t._v(" "),c("section",{staticClass:"content-wrapper",attrs:{id:"Guideline"}},[c("div",{staticClass:"content-container"},[c("h2",{staticClass:"text-center page-subheading"},[t._v("ガイドライン")]),t._v(" "),c("p",{staticClass:"text-center page-subdesc"},[t._v("このガイドラインでは、オープンビデオゲームを研究にご活用いただく際のルールと推奨事項についてご説明いたします。")]),t._v(" "),c("h3",{staticClass:"text-center page-subsubheading"},[t._v("ご利用OK/NG例")]),t._v(" "),c("el-row",{staticClass:"mb-60",attrs:{gutter:30}},[c("el-col",{staticClass:"mb-30",attrs:{span:12}},[c("h4",{staticClass:"text-center mb-15"},[t._v("OK")]),t._v(" "),c("el-card",[c("p",{staticClass:"text-center mb-10"},[t._v("営利を目的としない以下のような利用")]),t._v(" "),c("el-card",{staticClass:"mb-10"},[c("h5",{staticClass:"text-center mb-10"},[t._v("研究や創作活動での利用")]),t._v(" "),c("ul",[c("li",[t._v("オープンビデオゲームで取得した体験データを用いて評価実験を行い、その内容を論文に掲載する")]),t._v(" "),c("li",[t._v("学術会議や展示会にてオープンビデオゲームをデモンストレーション発表に使用する")]),t._v(" "),c("li",[t._v("オンライン会議や配信サービスにて、プレイしている様子を共有する")])])]),t._v(" "),c("el-card",{staticClass:"el-card"},[c("h5",{staticClass:"text-center mb-10"},[t._v("個人利用")]),t._v(" "),c("ul",[c("li",[t._v("友人や家族と本ゲームをプレイする。また、その様子をSNSなどでシェアをする")]),t._v(" "),c("li",[t._v("本ゲームのソースコードを改変し、ゲームを自作する")])])])],1)],1),t._v(" "),c("el-col",{attrs:{span:12}},[c("h4",{staticClass:"text-center mb-15"},[t._v("NG")]),t._v(" "),c("el-card",[c("p",{staticClass:"text-center"},[t._v("営利を目的とする利用")])])],1)],1),t._v(" "),c("h3",{staticClass:"text-center mb-30"},[t._v("研究利用時の推奨事項")]),t._v(" "),c("el-row",{attrs:{gutter:30}},[c("el-col",{attrs:{span:24}},[c("el-card",[c("el-row",{attrs:{gutter:30}},[c("el-col",{attrs:{span:24}},[c("el-card",{staticClass:"mb-10"},[c("h5",{staticClass:"text-center mb-10"},[t._v("引用")]),t._v(" "),c("p",[t._v("\n                                        本ライブラリのゲームまたは、機能を研究利用する場合、各ゲームページで指定された論文を引用し、本ゲームライブラリを利用した旨を明記してください。\n                                    ")])])],1),t._v(" "),c("el-col",{attrs:{span:24}},[c("el-card",[c("h5",{staticClass:"text-center mb-10"},[t._v("設定パラメータの明示")]),t._v(" "),c("p",[t._v("\n                                        本ゲームは、利用条件に合わせてゲーム内パラメータを変更できることができます。それに伴い、同一のゲームで難易度や体験が変化します。研究の公平性、再現性を保つために、設定したパラメータの値を明示するようにしてください。\n                                    ")])])],1)],1)],1)],1)],1)],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper bg-heading"},[n("div",{staticClass:"content-container"},[n("h1",{staticClass:"page-heading"},[n("span",{staticClass:"material-icons"},[t._v("sports_esports")]),t._v(" "),n("span",{staticStyle:{"font-size":"48px"}},[t._v("Open Video Game")]),t._v(" "),n("span",{staticClass:"sub-headline"},[t._v("オープンビデオゲーム")])])])])}],!1,null,"7b9e4c31",null);e.default=component.exports;installComponents(component,{PageCard:n(539).default})}}]);