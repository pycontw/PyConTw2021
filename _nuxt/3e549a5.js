(window.webpackJsonp=window.webpackJsonp||[]).push([[58,9,10,16,17,18],{468:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("534a74d2",content,!0,{sourceMap:!1})},469:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("3e0ee7a2",content,!0,{sourceMap:!1})},470:function(t,e,n){"use strict";n(468)},471:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),r.locals={},t.exports=r},472:function(t,e,n){"use strict";n.r(e);var r={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},o=(n(470),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classObject},[t._t("default")],2)}),[],!1,null,"fb2b20a4",null);e.default=component.exports},473:function(t,e,n){"use strict";n(469)},474:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,"h1[data-v-12ca906b]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:600;line-height:2;margin-bottom:0.75rem}@media (min-width: 768px){h1[data-v-12ca906b]{margin-bottom:2.25rem}h1[data-v-12ca906b]{font-size:1.5rem;line-height:2rem}}h1[data-v-12ca906b]{color:#f3cc39}",""]),r.locals={},t.exports=r},475:function(t,e,n){"use strict";n.r(e);var r={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(n(473),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"12ca906b",null);e.default=component.exports},481:function(t,e,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("3f36c8fb",content,!0,{sourceMap:!1})},489:function(t,e,n){"use strict";n(481)},490:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".tabs__headers[data-v-2b3d5d56]{margin-left:0.75rem;font-family:Noto Serif TC, -apple-system, serif}.tabs__headers>.header[data-v-2b3d5d56]{margin-left:0.25rem;display:inline-block;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:900}@media (min-width: 768px){.tabs__headers>.header[data-v-2b3d5d56]{font-size:1rem;line-height:1.5rem}}.tabs__headers>.header[data-v-2b3d5d56]{cursor:pointer;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-width:1px;background-color:transparent;color:#e6ba17;border-color:#c2a53a;min-width:20%}@media (min-width:767px){.tabs__headers>.header[data-v-2b3d5d56]{min-width:110px}}.tabs__headers>.header.-selected[data-v-2b3d5d56]{background:#e6ba17;color:#121023}.tab[data-v-2b3d5d56]{display:inline-block;width:100%;border-radius:1rem;border-width:2px;--tw-bg-opacity:0;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.tab[data-v-2b3d5d56]{font-size:0.875rem;line-height:1.25rem}}.tab[data-v-2b3d5d56]{line-height:29px;color:#c7c7c7;border-color:#c2a53a;box-shadow:6px 6px 0 #c2a53a;padding:20px}",""]),r.locals={},t.exports=r},491:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"tab"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},492:function(t,e,n){"use strict";n.r(e);n(28);var r={data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){var t=this;this.selectTab(0),this.$root.$on("initTabs",(function(){t.selectTab(0)}))},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(t,e){t.isActive=e===i}))},isSelectedIndex:function(i){return i===this.selectedIndex}}},o=(n(489),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"tabs__headers"},t._l(t.tabs,(function(e,r){return n("li",{key:e.title,class:{header:!0,"-selected":t.isSelectedIndex(r)},on:{click:function(e){return t.selectTab(r)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"2b3d5d56",null);e.default=component.exports},508:function(t,e,n){"use strict";n.r(e);var r={props:{videoId:{type:String,required:!0}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aspect-w-16 aspect-h-9"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/"+t.videoId,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=component.exports},696:function(t,e,n){var content=n(877);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("41c4ae74",content,!0,{sourceMap:!1})},876:function(t,e,n){"use strict";n(696)},877:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".intro[data-v-46595462]{font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.intro[data-v-46595462]{font-size:0.875rem;line-height:1.25rem}}.intro[data-v-46595462]{line-height:33px}.keynote__photo[data-v-46595462]{margin-left:auto;margin-right:auto;margin-top:1.5rem;margin-bottom:1.5rem;height:8rem;width:8rem}.keynote__photo img[data-v-46595462]{border-radius:9999px;-o-object-fit:cover;object-fit:cover;height:100%}.keynote__name[data-v-46595462], .keynote__title[data-v-46595462]{padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-size:1rem;line-height:1.5rem;font-weight:900}.keynote__name[data-v-46595462],.keynote__title[data-v-46595462]{color:#c2a53a}.keynote__tabs[data-v-46595462]{margin-top:2.5rem;margin-bottom:2.5rem}.keynote__hackmd[data-v-46595462], .keynote__slido[data-v-46595462]{height:24rem;width:100%}.keynote__extLink[data-v-46595462]{font-weight:700;color:#e6ba17}.keynote__extLink[data-v-46595462]:hover{color:#9387ff}",""]),r.locals={},t.exports=r},975:function(t,e,n){"use strict";n.r(e);n(32),n(31),n(51),n(59),n(28),n(60);var r=n(16),o=n(3),c=(n(44),n(43),n(108),n(38),n(87),n(30),n(64)),l=Object(c.a)({"en-us":{title:"Keynote Speech",intro:"PyCon Taiwan invites three speakers to give keynote speeches during the two-day conference. Each keynote speaker is considered one of the most important figures in their respective fields. They share their professional experience and the image of their domain’s future.",terms:{bio:"Bio",intro:"Intro",note:"Note"}},"zh-hant":{title:"主題演講",intro:"為期兩天的議程中，將有三位講者於不同場次進行主題演講（Keynote）。主題演講講者都是在全球而言各領域非常頂尖的人士；他們將帶來對自己的領域、專案的經驗分享，或者對於未來數年發展的方向與想像。",terms:{bio:"講者",intro:"介紹",note:"共筆"}}}),d=n(472),m=n(475),h=n(491),f=n(492),_=n(76),v=n(508);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={i18n:l,name:"PageConferenceKeynotes",components:{I18nPageWrapper:d.default,CoreH1:m.default,Tab:h.default,Tabs:f.default,ExtLink:_.default,Youtube:v.default},data:function(){return{keynotesData:[]}},computed:{locale:function(){return{"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("$getKeynotesData");case 2:t.keynotesData=t.$store.state.keynotesData.map((function(e){return k(k({},e),{},{id:t.$makeId()})}));case 3:case"end":return e.stop()}}),e)})))()},methods:{getKeynoteId:function(t){return t.speaker.name_en_us.split(" ").join("_")},getAttributeByLocale:function(data,t){return data["".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale])]}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("intro")},{hid:"description",name:"description",content:this.$i18n.t("intro")}]}}},w=(n(876),n(6)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i18n-page-wrapper",{staticClass:"px-8 sm:px-10 md:px-32 lg:px-60",attrs:{"custom-x":""}},[n("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),n("i18n",{staticClass:"intro",attrs:{path:"intro",tag:"p"}}),t._v(" "),t._l(t.keynotesData,(function(e){return n("div",{key:e.id,attrs:{id:t.getKeynoteId(e)}},[n("div",{staticClass:"keynote__photo"},[n("img",{attrs:{src:e.speaker.photo,alt:e.speaker[t.$makeKey(t.locale,"name")]}})]),t._v(" "),n("div",{staticClass:"keynote__name"},[t._v("\n            "+t._s(e.speaker[t.$makeKey(t.locale,"name")])+"\n        ")]),t._v(" "),n("div",{staticClass:"keynote__title"},[t._v("\n            "+t._s(e.session[t.$makeKey(t.locale,"title")])+"\n        ")]),t._v(" "),n("tabs",{staticClass:"keynote__tabs"},[n("tab",{attrs:{title:t.$t("terms.bio")}},[n("div",{staticClass:"pb-4 whitespace-pre-line"},[t._v("\n                    "+t._s(e.speaker[t.$makeKey(t.locale,"bio")])+"\n                    "),n("div",{staticClass:"flex pt-4"},[n("div",{staticClass:"keynote__extLink"},[e.social_item.github.length?n("ext-link",{attrs:{href:e.social_item.github}},[n("fa",{staticClass:"mr-2",attrs:{icon:["fab","github-square"],"aria-hidden":"true"}})],1):t._e()],1),t._v(" "),n("div",{staticClass:"keynote__extLink"},[e.social_item.linkedin.length?n("ext-link",{attrs:{href:e.social_item.linkedin}},[n("fa",{staticClass:"mr-2",attrs:{icon:["fab","linkedin"],"aria-hidden":"true"}})],1):t._e()],1),t._v(" "),n("div",{staticClass:"keynote__extLink"},[e.social_item.twitter.length?n("ext-link",{attrs:{href:e.social_item.twitter}},[n("fa",{staticClass:"mr-2",attrs:{icon:["fab","twitter-square"],"aria-hidden":"true"}})],1):t._e()],1)])])]),t._v(" "),n("tab",{attrs:{title:t.$t("terms.intro")}},[n("div",{staticClass:"pb-4 whitespace-pre-line"},[t._v("\n                    "+t._s(e.session[t.$makeKey(t.locale,"description")])+"\n                    "),e.session.slides.length?n("div",{staticClass:"keynote__extLink pt-4"},[n("ext-link",{attrs:{href:e.session.slides}},[n("fa",{staticClass:"mr-2",attrs:{icon:["fa","link"],"aria-hidden":"true"}}),t._v("Slides\n                        ")],1)],1):t._e()]),t._v(" "),e.youtube_id.length?n("youtube",{attrs:{"video-id":e.youtube_id}}):t._e()],1),t._v(" "),e.slido.length?n("tab",{attrs:{title:"Slido"}},[n("iframe",{staticClass:"keynote__slido",attrs:{src:e.slido}})]):t._e(),t._v(" "),e.hackmd_embed_link.length?n("tab",{attrs:{title:t.$t("terms.note")}},[n("iframe",{staticClass:"keynote__hackmd",attrs:{src:e.hackmd_embed_link}})]):t._e()],1)],1)}))],2)}),[],!1,null,"46595462",null);e.default=component.exports}}]);