(window.webpackJsonp=window.webpackJsonp||[]).push([[67,9,17],{363:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0573e392",content,!0,{sourceMap:!1})},364:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("01ab0d9a",content,!0,{sourceMap:!1})},365:function(t,e,n){"use strict";n(363)},366:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),o.locals={},t.exports=o},367:function(t,e,n){"use strict";n(364)},368:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,"h1[data-v-0172f94a]{color:#f3cc39}",""]),o.locals={},t.exports=o},369:function(t,e,n){"use strict";n.r(e);var o={name:"CoreH1",props:{title:{type:String,required:!0}},computed:{langSpacing:function(){return"en-us"===this.$i18n.locale?"tracking-wider":"tracking-widest"}}},r=(n(367),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:"py-2 font-semibold leading-loose text-lg mb-3 "+t.langSpacing+" md:text-2xl lg:text-2xl md:mb-9 lg:mb-9"},[t._v("\n        "+t._s(t.title)+"\n    ")])])}),[],!1,null,"0172f94a",null);e.default=component.exports},370:function(t,e,n){"use strict";n.r(e);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},r=(n(365),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classObject},[t._t("default")],2)}),[],!1,null,"fb2b20a4",null);e.default=component.exports},576:function(t,e,n){"use strict";n.r(e);var o=n(370),r=n(369),c=n(101),l=n(76),m=n(63),f={i18n:Object(m.a)({"en-us":{title:"Why Sponsorship",intro:["PyCon Taiwan is driven by our members and, YOU, our awesome sponsor partners! Your generous support is the helping us to move forward.","PyCon Taiwan calls for your sponsorship in order to enlarging our community.","Our sponsorship packages includes items that:"],services:["Increase Visibility on Python Community","Recruitment in the conference","Promote your Brand","Connections with Strong Talent"],summary:"Please see our {prospectus} for sponsorship packages. Or {contact} for more details or customized sponsorship packages.",terms:{prospectus:"full prospectus",contact:"contact us"},og:{title:"Sponsor page",description:"PyCon Taiwan is driven by our members and, YOU, our awesome sponsor partners! Your generous support is the helping us to move forward.PyCon Taiwan calls for your sponsorship in order to enlarging our community."}},"zh-hant":{title:"贊助召集令",intro:["「您」的支持是推進 PyCon Taiwan 的強大動力！","PyCon Taiwan 在此召集「您」的加入，透過贊助以具體行動支持 python 社群的成長！","透過參與 PyCon Taiwan ，我們也提供贊助廠商以下的服務："],services:["近距離接觸專業人士","標地明確與順暢的徵才場合","提升品牌曝光率","為企業建立人才網絡"],summary:"歡迎參考 2021 PyCon Taiwan {prospectus}，以了解 2021 PyCon Taiwan 贊助方案，或是{contact}，讓我們了解貴單位的需求！",terms:{prospectus:"贊助書",contact:"聯絡我們"},og:{title:"贊助召集令",description:"「您」的支持是推進 PyCon Taiwan 的強大動力！PyCon Taiwan 在此召集「您」的加入，透過贊助以具體行動支持 python 社群的成長！"}}}),name:"PageSponsor",components:{I18nPageWrapper:o.default,CoreH1:r.default,ExtLink:l.default,LocaleLink:c.default},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")}]}}},d=n(5),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i18n-page-wrapper",[n("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),n("i18n",{attrs:{path:"intro.0",tag:"p"}}),t._v(" "),n("i18n",{attrs:{path:"intro.1",tag:"p"}}),t._v(" "),n("i18n",{attrs:{path:"intro.2",tag:"p"}}),t._v(" "),n("ul",{staticClass:"list-disc"},t._l(t.$t("services"),(function(e,i){return n("li",{key:"sponsor_services_"+i},[t._v("\n            "+t._s(e)+"\n        ")])})),0),t._v(" "),n("i18n",{attrs:{path:"summary",tag:"p"},scopedSlots:t._u([{key:"prospectus",fn:function(){return[n("locale-link",{attrs:{to:"/sponsor/prospectus",highlight:""}},[t._v(t._s(t.$t("terms.prospectus")))])]},proxy:!0},{key:"contact",fn:function(){return[n("ext-link",{attrs:{href:"mailto:sponsorship@pycon.tw",highlight:""}},[t._v(t._s(t.$t("terms.contact")))])]},proxy:!0}])})],1)}),[],!1,null,"0044b654",null);e.default=component.exports}}]);