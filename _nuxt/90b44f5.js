(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{540:function(t,e,d){var content=d(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(22).default)("6272cb6d",content,!0,{sourceMap:!1})},566:function(t,e,d){"use strict";d(540)},567:function(t,e,d){var r=d(21)((function(i){return i[1]}));r.push([t.i,".tabs__headers[data-v-1585dfdd]{font-family:Noto Serif TC, -apple-system, serif}.tabs__headers>.header[data-v-1585dfdd]{display:inline-block;padding-left:22px;padding-right:22px;padding-top:13px;padding-bottom:13px;border-color:transparent;text-align:center;font-weight:900;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));cursor:pointer;border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;border-width:1px;background-color:transparent;font-size:18px;min-width:20%}@media (min-width:767px){.tabs__headers>.header[data-v-1585dfdd]{min-width:110px}}.tabs__headers>.header.-selected[data-v-1585dfdd]{--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));color:#262626}.tab[data-v-1585dfdd]{display:inline-block;width:100%;--tw-bg-opacity:0;padding:1rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}@media (min-width: 768px){.tab[data-v-1585dfdd]{font-size:0.875rem;line-height:1.25rem}}.tab[data-v-1585dfdd]{border-top-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgba(218, 139, 220, var(--tw-border-opacity));line-height:29px;font-size:16px}@media (min-width:768px){.tab[data-v-1585dfdd]{font-size:18px}}",""]),r.locals={},t.exports=r},593:function(t,e,d){"use strict";d.r(e);d(29);var r={data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){var t=this;this.selectTab(0),this.$root.$on("initTabs",(function(){t.selectTab(0)}))},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(t,e){t.isActive=e===i}))},isSelectedIndex:function(i){return i===this.selectedIndex}}},n=(d(566),d(9)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("ul",{staticClass:"tabs__headers"},t._l(t.tabs,(function(e,r){return d("li",{key:e.title,class:{header:!0,"-selected":t.isSelectedIndex(r)},on:{click:function(e){return t.selectTab(r)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"1585dfdd",null);e.default=component.exports}}]);