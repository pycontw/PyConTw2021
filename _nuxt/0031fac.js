(window.webpackJsonp=window.webpackJsonp||[]).push([[55,7,9,17,26,27,28,29],{363:function(t,e,o){var content=o(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("0573e392",content,!0,{sourceMap:!1})},364:function(t,e,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("01ab0d9a",content,!0,{sourceMap:!1})},365:function(t,e,o){"use strict";o(363)},366:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),n.locals={},t.exports=n},367:function(t,e,o){"use strict";o(364)},368:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,"h1[data-v-0172f94a]{color:#f3cc39}",""]),n.locals={},t.exports=n},369:function(t,e,o){"use strict";o.r(e);var n={name:"CoreH1",props:{title:{type:String,required:!0}},computed:{langSpacing:function(){return"en-us"===this.$i18n.locale?"tracking-wider":"tracking-widest"}}},r=(o(367),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center font-serif"},[o("h1",{class:"py-2 font-semibold leading-loose text-lg mb-3 "+t.langSpacing+" md:text-2xl lg:text-2xl md:mb-9 lg:mb-9"},[t._v("\n        "+t._s(t.title)+"\n    ")])])}),[],!1,null,"0172f94a",null);e.default=component.exports},370:function(t,e,o){"use strict";o.r(e);var n={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},r=(o(365),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classObject},[t._t("default")],2)}),[],!1,null,"fb2b20a4",null);e.default=component.exports},371:function(t,e,o){var content=o(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("6c4e3de6",content,!0,{sourceMap:!1})},372:function(t,e,o){"use strict";var n=o(3),r=o(373);n({target:"String",proto:!0,forced:o(374)("small")},{small:function(){return r(this,"small","","")}})},373:function(t,e,o){var n=o(35),r=/"/g;t.exports=function(t,e,o,l){var c=String(n(t)),d="<"+e;return""!==o&&(d+=" "+o+'="'+String(l).replace(r,"&quot;")+'"'),d+">"+c+"</"+e+">"}},374:function(t,e,o){var n=o(6);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},375:function(t,e,o){"use strict";o.r(e);o(372);var n=o(28),r={name:"CoreTextButton",components:{ExtLink:n.ExtLink,LocaleLink:n.LocaleLink},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--large":this.large,"--medium":this.medium,"--small":this.small,"--rounded":this.rounded,"--block":this.block,"--is-link":this.isLink}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},l=(o(376),o(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.coreButtonClasses},[t.href?o("ext-link",{attrs:{href:t.href}},[t._t("default")],2):t.to?o("locale-link",{attrs:{to:t.to,customized:""}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"1a299152",null);e.default=component.exports},376:function(t,e,o){"use strict";o(371)},377:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".core-button[data-v-1a299152]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:none;background-color:transparent}.core-button.--is-link>a[data-v-1a299152],.core-button[data-v-1a299152]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;line-height:1.25rem;border-radius:5px;text-transform:uppercase;outline:none}.core-button.--large.--is-link>a[data-v-1a299152], .core-button.--large[data-v-1a299152]:not(.--is-link){height:5rem;border-width:4px;padding-left:4rem;padding-right:4rem;padding-top:1.25rem;padding-bottom:1.25rem;font-size:1.5rem;line-height:2rem;font-weight:700}.core-button.--large.--is-link>a[data-v-1a299152],.core-button.--large[data-v-1a299152]:not(.--is-link){min-width:128px}.core-button.--medium.--is-link>a[data-v-1a299152], .core-button.--medium[data-v-1a299152]:not(.--is-link){height:3rem;border-width:4px;padding-left:1.75rem;padding-right:1.75rem;padding-top:0.875rem;padding-bottom:0.875rem;font-size:1rem;line-height:1.5rem;font-weight:700}.core-button.--medium.--is-link>a[data-v-1a299152],.core-button.--medium[data-v-1a299152]:not(.--is-link){min-width:108px}.core-button.--small.--is-link>a[data-v-1a299152], .core-button.--small[data-v-1a299152]:not(.--is-link){height:2.5rem;padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.75rem;line-height:1rem}.core-button.--small.--is-link>a[data-v-1a299152],.core-button.--small[data-v-1a299152]:not(.--is-link){min-width:80px;border-width:3px}.core-button.--rounded.--is-link>a[data-v-1a299152],.core-button.--rounded[data-v-1a299152]:not(.--is-link){border-radius:9999px}.core-button.--primary.--is-link>a[data-v-1a299152],.core-button.--primary[data-v-1a299152]:not(.--is-link){color:#c2a53a;border-color:currentColor}.core-button.--secondary.--is-link>a[data-v-1a299152],.core-button.--secondary[data-v-1a299152]:not(.--is-link){color:#c7c7c7;border-color:currentColor}.core-button.--is-link>a[data-v-1a299152]:hover,.core-button[data-v-1a299152]:not(.--is-link):hover{color:#7568f6;border-color:#7568f6}",""]),n.locals={},t.exports=n},389:function(t,e,o){var content=o(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("c0e72cfc",content,!0,{sourceMap:!1})},390:function(t,e,o){var content=o(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("5e857192",content,!0,{sourceMap:!1})},391:function(t,e,o){var content=o(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3f95cc36",content,!0,{sourceMap:!1})},399:function(t,e,o){"use strict";o.r(e);var n={name:"JobsCard",props:{logoUrl:{type:String,default:""},active:{type:Boolean,default:!1}},computed:{classObject:function(){return{jobsCard:!0,"w-24":!0,"h-20":!0,"m-1":!0,"cursor-pointer":!this.active,"md:w-40":!0,"md:h-32":!0,"md:m-3":!0,"-active":this.active}}},methods:{onClick:function(t){this.$emit("click",t)}}},r=(o(487),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.classObject,on:{click:t.onClick}},[o("img",{attrs:{src:t.logoUrl,alt:""}})])}),[],!1,null,"378ca9db",null);e.default=component.exports},400:function(t,e,o){"use strict";o.r(e);var n={name:"JobsCardCollection"},r=(o(489),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"jobsCardCollection"},[t._t("default")],2)}),[],!1,null,"2c72b5b4",null);e.default=component.exports},401:function(t,e,o){"use strict";o.r(e);var n={name:"JobsPanel",components:{CoreTextButton:o(375).default},props:{jobs:{type:Array,default:function(){return[]}},ctaLabel:{type:String,default:""},emptyMessage:{type:String,default:""}},computed:{locale:function(){return{"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]}}},r=(o(491),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jobsPanel"},[t._l(t.jobs,(function(e,i){return o("div",{key:t.$makeKey(i,"jobs_panel_job"),staticClass:"jobsPanelJob"},[o("div",{staticClass:"jobsPanelJob__title"},[t._v("\n            "+t._s(e[t.$makeKey(t.locale,"job_name")]||"-")+"\n        ")]),t._v(" "),o("div",{staticClass:"jobsPanelJob__description"},[t._v("\n            "+t._s(e[t.$makeKey(t.locale,"job_description")]||"-")+"\n        ")]),t._v(" "),o("div",{staticClass:"jobsPanelJob__requirements"},[t._v("\n            "+t._s(e[t.$makeKey(t.locale,"job_requirements")]||"-")+"\n        ")]),t._v(" "),o("core-text-button",{staticClass:"mt-4 mb-8",attrs:{href:e.job_url}},[t._v("\n            "+t._s(t.ctaLabel)+"\n        ")])],1)})),t._v(" "),t.jobs.length?t._e():o("div",{staticClass:"jobsPanelEmpty"},[o("div",{staticClass:"jobsPanelJob__description"},[t._v(t._s(t.emptyMessage))])])],2)}),[],!1,null,"7e98ee1a",null);e.default=component.exports},487:function(t,e,o){"use strict";o(389)},488:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".jobsCard[data-v-378ca9db]{display:flex;border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));opacity:.2}.jobsCard.-active[data-v-378ca9db],.jobsCard[data-v-378ca9db]:hover{opacity:1}.jobsCard>img[data-v-378ca9db]{width:100%;-o-object-fit:contain;object-fit:contain;border-radius:inherit}",""]),n.locals={},t.exports=n},489:function(t,e,o){"use strict";o(390)},490:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".jobsCardCollection[data-v-2c72b5b4]{position:sticky;z-index:50;display:flex;width:100%;flex-wrap:wrap;align-items:center;justify-content:center;padding-left:0px;padding-right:0px;padding-top:1rem;padding-bottom:1rem;top:48px;background-color:#212121}",""]),n.locals={},t.exports=n},491:function(t,e,o){"use strict";o(391)},492:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".jobsPanel[data-v-7e98ee1a]{position:relative;margin-bottom:3rem;border-radius:1rem;padding:2rem;background-color:#1d1a37}.jobsPanelJob__title[data-v-7e98ee1a]{margin-bottom:1rem;font-size:1.5rem;line-height:2rem;font-weight:700;color:#c2a53a}.jobsPanelJob__description[data-v-7e98ee1a], .jobsPanelJob__requirements[data-v-7e98ee1a]{white-space:pre-line}.jobsPanelJob__description[data-v-7e98ee1a],.jobsPanelJob__requirements[data-v-7e98ee1a]{color:#fff}",""]),n.locals={},t.exports=n},530:function(t,e,o){"use strict";o.r(e);var n=o(399);o.d(e,"JobsCard",(function(){return n.default}));var r=o(400);o.d(e,"JobsCardCollection",(function(){return r.default}));var l=o(401);o.d(e,"JobsPanel",(function(){return l.default}))},583:function(t,e,o){"use strict";o.r(e);var n=o(16),r=o(4),l=(o(40),o(37),o(39),o(38),o(44),o(57),o(27),o(58),o(63)),c=Object(l.a)({"en-us":{jobListing:"Job Listing",applyNow:"Apply Now",noJobs:"No Jobs"},"zh-hant":{jobListing:"徵才資訊",applyNow:"前往應徵",noJobs:"尚無資訊"}}),d=o(369),f=o(370),m=o(530);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={i18n:c,fetchOnServer:!1,name:"PageEventsJobs",components:{CoreH1:d.default,I18nPageWrapper:f.default,JobsCard:m.JobsCard,JobsCardCollection:m.JobsCardCollection,JobsPanel:m.JobsPanel},data:function(){return{selectedSponsor:{},jobsData:[],pivot:0}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("$getJobsData");case 2:t.jobsData=t.$store.state.jobsData.map((function(e){return h(h({},e),{},{id:t.$makeId()})})),t.setSelectedSponsor(t.jobsData[0]),t.setPivot();case 5:case"end":return e.stop()}}),e)})))()},methods:{setSelectedSponsor:function(t){this.selectedSponsor=t,window.scrollTo({top:this.pivot,behavior:"smooth"})},setPivot:function(){this.pivot=this.$refs.jobsCardCollection.$el.offsetTop}}},j=o(5),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("core-h1",{staticClass:"mt-24",attrs:{title:t.$t("jobListing")}}),t._v(" "),o("jobs-card-collection",{ref:"jobsCardCollection"},t._l(t.jobsData,(function(e){return o("jobs-card",{key:e.id,attrs:{"logo-url":e.sponsor_logo_url,active:t.selectedSponsor.id===e.id},on:{click:function(o){return t.setSelectedSponsor(e)}}})})),1),t._v(" "),o("i18n-page-wrapper",{staticClass:"pt-8 pb-12",attrs:{"custom-y":""}},[o("jobs-panel",{ref:"jobsPanel",attrs:{jobs:t.selectedSponsor.jobs,"cta-label":t.$t("applyNow"),"empty-message":t.$t("noJobs")}})],1)],1)}),[],!1,null,"76747fa4",null);e.default=component.exports;installComponents(component,{JobsCard:o(399).default,JobsCardCollection:o(400).default,JobsPanel:o(401).default})}}]);