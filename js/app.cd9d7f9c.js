(function(e){function n(n){for(var r,a,i=n[0],u=n[1],s=n[2],f=0,l=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(n);while(l.length)l.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0bfd6f99":"7b94ce22","chunk-2413c7ca":"95db7410","chunk-38fd7917":"97fa19f2","chunk-4c1c7530":"acb26237","chunk-638cb79e":"fb700129","chunk-6390f1e6":"710337b3","chunk-b05d6814":"17d4b07a","chunk-f8e93404":"0d4669ea","chunk-5aec742c":"f4ba5d90"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-0bfd6f99":1,"chunk-2413c7ca":1,"chunk-38fd7917":1,"chunk-4c1c7530":1,"chunk-638cb79e":1,"chunk-6390f1e6":1,"chunk-b05d6814":1,"chunk-f8e93404":1,"chunk-5aec742c":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0bfd6f99":"9dbc77ab","chunk-2413c7ca":"a6e60115","chunk-38fd7917":"70f3f159","chunk-4c1c7530":"eec9f091","chunk-638cb79e":"ca24133f","chunk-6390f1e6":"e3648b72","chunk-b05d6814":"de5827b7","chunk-f8e93404":"1713d046","chunk-5aec742c":"25f5f31d"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return n()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var l=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/Vue-Dcard/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3c3f":function(e,n,t){"use strict";var r=t("7ecd"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("96cf");var r=t("1da1"),a=t("5530"),o=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),c=(t("b0c0"),t("8c4f")),i=(t("d3b7"),[{path:"/login",name:"login",component:function(){return t.e("chunk-5aec742c").then(t.bind(null,"9ed6"))}},{path:"/function/user",name:"user",component:function(){return Promise.all([t.e("chunk-4c1c7530"),t.e("chunk-6390f1e6")]).then(t.bind(null,"5a39"))}},{path:"/function/new-post",name:"new-post",component:function(){return t.e("chunk-38fd7917").then(t.bind(null,"c4a1"))}},{path:"/",component:function(){return t.e("chunk-0bfd6f99").then(t.bind(null,"726d"))},children:[{path:"",name:"home",component:function(){return Promise.all([t.e("chunk-4c1c7530"),t.e("chunk-b05d6814")]).then(t.bind(null,"9960"))}},{path:"search",name:"search",component:function(){return Promise.all([t.e("chunk-4c1c7530"),t.e("chunk-f8e93404")]).then(t.bind(null,"74dd"))}},{path:"all",name:"all",component:function(){return t.e("chunk-2413c7ca").then(t.bind(null,"1e88"))}},{path:"/kanban/:kanban",name:"kanban",component:function(){return Promise.all([t.e("chunk-4c1c7530"),t.e("chunk-638cb79e")]).then(t.bind(null,"71be"))}}]}]);o["a"].use(c["a"]);var u=new c["a"]({mode:"history",base:"/Vue-Dcard/",routes:i}),s=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.app.$root;case 2:if(a=u.app.$root.$store.state.userInfo,"login"!==n.name){e.next=5;break}return e.abrupt("return",r());case 5:null===a?r({name:"login"}):null===n.name?r({name:"home"}):r();case 6:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}();u.beforeEach((function(e,n,t){s(e,n,t)}));var f=u,l=(t("4160"),t("159b"),t("2f62"));o["a"].use(l["a"]);var d=new l["a"].Store({strict:!0,state:{userInfo:null,tabList:[],kanbanList:[]},getters:{kanbanObject:function(e){return function(n){var t={};return e.kanbanList.forEach((function(e){return t[e.code]=e})),t[n]}}},mutations:{SET_USER_INFO:function(e,n){e.userInfo=n,window.localStorage.setItem("userInfo",JSON.stringify(n))},SET_TAB_LIST:function(e,n){e.tabList=n},SET_KANBAN_LIST:function(e,n){e.kanbanList=n}},actions:{setUserInfo:function(e,n){var t=e.commit;t("SET_USER_INFO",n)},setTabList:function(e,n){var t=e.commit;t("SET_TAB_LIST",n)},setKanbanList:function(e,n){var t=e.commit;t("SET_KANBAN_LIST",n)}}}),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("headerBar"),t("transition",{attrs:{name:"router"}},[t("router-view")],1)],1)},p=[],m=t("5ac7"),b={name:"app",components:{headerBar:m["a"]}},v=b,g=t("2877"),w=Object(g["a"])(v,h,p,!1,null,null,null),k=w.exports,y=o["a"].extend(t("7adb").default),x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",t={content:e,type:n},r=new y({data:t});return r.vm=r.$mount(),r.vm.isDisplay=!0,document.getElementById("app").appendChild(r.vm.$el),r},O=x,C=o["a"].extend(t("7ac2").default),j={bind:function(e,n){return Object(r["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={isLoading:!!n.value},a=new C({data:r}),t.next=4,o["a"].nextTick();case 4:e.style.position="relative",e.loading=a.$mount(),e.appendChild(e.loading.$el);case 7:case"end":return t.stop()}}),t)})))()},update:function(e,n){e.loading.isLoading=n.value},unbind:function(e){e.removeChild(e.loading.$el),e.loading.$destroy()}},_=j,$=t("d443"),E=(t("99af"),t("7db0"),t("c740"),t("b64b"),t("25f0"),t("59ca")),R=t.n(E),I=(t("66ce"),t("ea7b"),{apiKey:"AIzaSyCUnhsY-Ve-fJb0lNlqYNkfUqqvK2jcz-g",authDomain:"dcard-database.firebaseapp.com",databaseURL:"https://dcard-database.firebaseio.com",projectId:"dcard-database",storageBucket:"dcard-database.appspot.com"});R.a.initializeApp(I);var S={get:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.a.database().ref(n).once("value").then((function(e){return e.val()})).catch((function(e){return e}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),set:function(e,n){return R.a.database().ref(e).set(n).catch((function(e){return e}))},getUser:function(e){var n="user/".concat(e);return R.a.database().ref(n).once("value").then((function(e){return e.val()})).catch((function(e){return e}))},setUser:function(e){var n="user/".concat(e.uid);return R.a.database().ref(n).set(e).catch((function(e){return e}))},getArticle:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="data/".concat(n),e.next=3,R.a.database().ref(t).once("value").then((function(e){return e.val()})).catch((function(e){return e}));case 3:return r=e.sent,e.abrupt("return",r?r.reverse():[]);case 5:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),setArticle:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="data/".concat(n.kanbanCode),e.next=3,R.a.database().ref(t).once("value").then((function(e){var n,t;return null!==(n=null===e||void 0===e||null===(t=e.val())||void 0===t?void 0:t.length)&&void 0!==n?n:0}));case 3:return r=e.sent,e.abrupt("return",R.a.database().ref("".concat(t,"/").concat(r)).set(Object(a["a"])(Object(a["a"])({},n),{},{id:r})).then((function(){return{id:r,status:!0}})).catch((function(e){return e})));case 5:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),setReaction:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t,r){var o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="data/".concat(n,"/").concat(t,"/reaction"),e.next=3,R.a.database().ref(o).once("value").then((function(e){var n,t;return null!==(n=null===e||void 0===e||null===(t=e.val())||void 0===t?void 0:t.length)&&void 0!==n?n:0}));case 3:return c=e.sent,e.abrupt("return",R.a.database().ref("".concat(o,"/").concat(c)).set(Object(a["a"])(Object(a["a"])({},r),{},{id:c})).then((function(){return{id:c,status:!0}})).catch((function(e){return e})));case 5:case"end":return e.stop()}}),e)})));function n(n,t,r){return e.apply(this,arguments)}return n}(),hasCollect:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="user/".concat(t,"/collect"),e.next=3,R.a.database().ref(r).once("value").then((function(e){return e.val()}));case 3:if(a=e.sent,a){e.next=8;break}return e.abrupt("return",!1);case 8:return"[object Object]"===Object.prototype.toString.call(a)&&(o=[],Object.keys(a).forEach((function(e){return o[e]=a[e]})),a=o),c=a.find((function(e){if(e)return e.id===n.id&&e.kanban===n.kanban})),e.abrupt("return",void 0!==c);case 11:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}(),addCollect:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="user/".concat(t,"/collect"),e.next=3,R.a.database().ref(r).once("value").then((function(e){var n,t;return null!==(n=null===e||void 0===e||null===(t=e.val())||void 0===t?void 0:t.length)&&void 0!==n?n:0}));case 3:return a=e.sent,e.abrupt("return",R.a.database().ref("".concat(r,"/").concat(a)).set(n).then((function(){return{id:a,status:!0}})).catch((function(e){return e})));case 5:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}(),subCollect:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="user/".concat(t,"/collect"),e.next=3,R.a.database().ref(r).once("value").then((function(e){return e.val()}));case 3:return a=e.sent,"[object Object]"===Object.prototype.toString.call(a)&&(o=[],Object.keys(a).forEach((function(e){return o[e]=a[e]})),a=o),c=a.findIndex((function(e){if(e)return e.id===n.id&&e.kanban===n.kanban})),e.abrupt("return",R.a.database().ref("".concat(r,"/").concat(c)).remove().then((function(){return!0})).catch((function(e){return e})));case 7:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}(),hasMood:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="data/".concat(n.kanbanCode,"/").concat(n.id,"/mood"),e.next=3,R.a.database().ref(r).once("value").then((function(e){return e.val()}));case 3:if(a=e.sent,null!==a){e.next=6;break}return e.abrupt("return",!1);case 6:return o=a.find((function(e){if(e)return e.name===t})),e.abrupt("return",void 0!==o);case 8:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}(),addMood:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="data/".concat(n.kanbanCode,"/").concat(n.id,"/mood"),e.next=3,R.a.database().ref(r).once("value").then((function(e){var n,t;return null!==(n=null===e||void 0===e||null===(t=e.val())||void 0===t?void 0:t.length)&&void 0!==n?n:0}));case 3:return a=e.sent,e.abrupt("return",R.a.database().ref("".concat(r,"/").concat(a)).set({name:t,id:a}).then((function(){return{id:n.id,status:!0}})).catch((function(e){return e})));case 5:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}(),subMood:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="data/".concat(n.kanbanCode,"/").concat(n.id,"/mood"),e.next=3,R.a.database().ref(r).once("value").then((function(e){return e.val()}));case 3:return a=e.sent,o=a.find((function(e){if(e)return e.name===t})),e.abrupt("return",R.a.database().ref("".concat(r,"/").concat(o.id)).remove().then((function(){return!0})).catch((function(e){return e})));case 6:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}()},L=R.a.auth(),T=t("ecee"),D=t("ad3d"),A=t("c074");T["c"].add(A["a"]),o["a"].config.productionTip=!1,o["a"].prototype.$message=O,o["a"].prototype.$database=S,o["a"].prototype.$auth=L,o["a"].component("awesome-icon",D["a"]),o["a"].directive("loading",_),new o["a"]({router:f,store:d,render:function(e){return e(k)},created:function(){this.getGlobalData(),this.getUserInfo()},methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])(["setUserInfo","setKanbanList","setTabList"])),{},{getGlobalData:function(){this.setKanbanList($["c"].data),this.setTabList($["d"])},getUserInfo:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t=JSON.parse(window.localStorage.getItem("userInfo")),!t){n.next=7;break}return e.setUserInfo(t),n.next=5,e.$database.getUser(t.uid);case 5:r=n.sent,e.setUserInfo(r);case 7:case"end":return n.stop()}}),n)})))()}})}).$mount("#app")},"5ac7":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header-bar"},[t("div",{staticClass:"header"},[t("h1",{on:{click:function(n){return e.goHomePage()}}},[e._v("Dcard")]),t("searchInput",{staticClass:"search"}),t("functionBar")],1)])},a=[],o=(t("b0c0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"search-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],attrs:{type:"search",placeholder:"搜尋"},domProps:{value:e.searchKey},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.search()},input:function(n){n.target.composing||(e.searchKey=n.target.value)}}}),t("button",{staticClass:"search__icon",attrs:{type:"button"},on:{click:function(n){return e.search()}}},[t("awesome-icon",{attrs:{icon:["fas","search"]}})],1)])}),c=[],i=(t("ac1f"),t("841c"),{name:"search-input",data:function(){return{searchKey:""}},watch:{"$route.query":{deep:!0,handler:function(){this.getQuery()}}},methods:{getQuery:function(){void 0!==this.$route.query.search&&(this.searchKey=this.$route.query.search)},search:function(){this.$router.push({name:"search",query:{search:this.searchKey}}).catch((function(){}))}}}),u=i,s=(t("786e"),t("2877")),f=Object(s["a"])(u,o,c,!1,null,"5dbba137",null),l=f.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"function-bar"},e._l(e.functionList,(function(n){return t("div",{key:n.id,class:{active:e.isActive(n.id)},on:{click:function(t){return e.getEvent(n.id)}}},[t("awesome-icon",{staticClass:"icon",attrs:{icon:n.icon}}),"dropdown"===n.id?[t("transition",{attrs:{name:"dropdown"}},[t("popover",{directives:[{name:"show",rawName:"v-show",value:e.openDropDown,expression:"openDropDown"}]},[t("div",{on:{click:function(n){return e.logOut()}}},[t("span",[e._v("登出")])])])],1)]:e._e()],2)})),0)},h=[],p=(t("caad"),t("96cf"),t("1da1")),m=t("5530"),b=t("2f62"),v=t("d443"),g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"popover"},[t("div",{staticClass:"drop-down"},[t("div",[e._t("default")],2)])])},w=[],k={name:"popover"},y=k,x=(t("9c6b"),Object(s["a"])(y,g,w,!1,null,"44de0147",null)),O=x.exports,C={name:"function-bar",components:{popover:O},data:function(){return{functionList:v["b"],openDropDown:!1,active:null}},methods:Object(m["a"])(Object(m["a"])({},Object(b["b"])(["setUserInfo"])),{},{isActive:function(e){return this.active===e},getEvent:function(e){return"dropdown"===e?this.openDropDown=!this.openDropDown:["notify","lottery","e-mail"].includes(e)?this.$message("尚未開放此功能"):(this.active=e,void this.$router.push({name:e}).catch((function(){})))},logOut:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$router.push({name:"login"});case 2:e.setUserInfo(null),e.$message("成功登出");case 4:case"end":return n.stop()}}),n)})))()}})},j=C,_=(t("3c3f"),Object(s["a"])(j,d,h,!1,null,"48f0ee96",null)),$=_.exports,E={name:"header-bar",components:{searchInput:l,functionBar:$},methods:{goHomePage:function(){if("home"===this.$route.name||"login"===this.$route.name)return location.reload();this.$router.push({name:"home"})}}},R=E,I=(t("6ba9"),Object(s["a"])(R,r,a,!1,null,"bcb35582",null));n["a"]=I.exports},"5ea1":function(e,n,t){},"6ba9":function(e,n,t){"use strict";var r=t("5ea1"),a=t.n(r);a.a},"786e":function(e,n,t){"use strict";var r=t("e6d1"),a=t.n(r);a.a},"7ac2":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"loading"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],attrs:{id:"loading"}},[t("div",{staticClass:"text"},[t("span",[e._v(e._s(e.text)+" "+e._s(e.dots))])]),t("div",{staticClass:"shadow"},[t("div",{staticClass:"bounce"})])])])},a=[],o={name:"loading",data:function(){return{isLoading:!1,text:"載入中",dots:"...",timer:null}},created:function(){this.setTimer()},beforeDestroy:function(){clearInterval(this.timer)},methods:{setTimer:function(){var e=this;this.timer=setInterval((function(){5===e.dots.length?e.dots="":e.dots+="."}),500)}}},c=o,i=(t("9845"),t("2877")),u=Object(i["a"])(c,r,a,!1,null,"3fee32cc",null);n["default"]=u.exports},"7adb":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"message-box"},[t("transition",{attrs:{name:"message"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isDisplay,expression:"isDisplay"}],staticClass:"message",class:e.type},[t("awesome-icon",{attrs:{icon:["fas","exclamation-circle"]}}),t("span",[e._v(" "+e._s(e.content))])],1)])],1)},a=[],o={name:"message-box",data:function(){return{isDisplay:!1,content:"",type:"success"}},watch:{isDisplay:function(e){var n=this;e&&setTimeout((function(){n.isDisplay=!1,n.destroyMessage()}),2e3)}},methods:{destroyMessage:function(){var e=this;setTimeout((function(){e.$destroy(!0),e.$el.parentNode.removeChild(e.$el)}),500)}}},c=o,i=(t("f688"),t("2877")),u=Object(i["a"])(c,r,a,!1,null,"415b1856",null);n["default"]=u.exports},"7ecd":function(e,n,t){},9845:function(e,n,t){"use strict";var r=t("f2ed"),a=t.n(r);a.a},"9c6b":function(e,n,t){"use strict";var r=t("fdc4"),a=t.n(r);a.a},c01a:function(e,n,t){},d443:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"d",(function(){return a})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"e",(function(){return i}));var r=[{id:"new-post",name:"發文",icon:["fas","pen"]},{id:"notify",name:"通知",icon:["fas","bell"]},{id:"lottery",name:"抽卡",icon:["fas","dice-d6"]},{id:"e-mail",name:"個人信箱",icon:["fas","envelope"]},{id:"user",name:"個人資料",icon:["fas","user"]},{id:"dropdown",name:"下拉選單",icon:["fas","caret-down"]}],a=["全部","追蹤","熱門","即時","😍 愛心","😡 森77","😢 嗚嗚","🤣 哈哈","😲 驚訝","🙇 跪"],o={title:"",data:[{name:"所有看板",icon:["fas","list"],code:"all",color:"#006aa6",fontColor:"#fff"}]},c={title:"Dacrd 精選看板",data:[{name:"穿搭",icon:["fas","tshirt"],code:"wear",color:"#34A7E6",fontColor:"#eee"},{name:"成長",icon:["fas","shoe-prints"],code:"grow",color:"#7e511b",fontColor:"#000"},{name:"程式語言",icon:["fas","bug"],code:"program",color:"#3c4e60",fontColor:"#ee3a42"},{name:"運動",icon:["fas","running"],code:"sport",color:"#01e4ea",fontColor:"#020003"},{name:"理財",icon:["fas","dollar-sign"],code:"financial",color:"#000",fontColor:"#e9c01f"},{name:"食物",icon:["fas","hamburger"],code:"food",color:"#2a7544",fontColor:"#dcbc89"},{name:"西斯",icon:["fas","car"],code:"sex",color:"#f90000",fontColor:"#fff"},{name:"Apple",icon:["fas","apple-alt"],code:"apple",color:"#000",fontColor:"#fff"},{name:"疫情",icon:["fas","biohazard"],code:"covid19",color:"#444",fontColor:"#ff0000"},{name:"Podcast",icon:["fas","microphone"],code:"podcast",color:"#8338bf",fontColor:"#fff"},{name:"居家生活",icon:["fas","home"],code:"house",color:"#73b537",fontColor:"#683a0e"},{name:"追星",icon:["fas","star"],code:"star",color:"#00324e",fontColor:"#f4b400"},{name:"閒聊",icon:["fas","comment"],code:"talk",color:"#41c206",fontColor:"#fff"},{name:"有趣",icon:["fas","grin-alt"],code:"interest",color:"#6e6d69",fontColor:"#f7cf48"},{name:"感情",icon:["fas","heart"],code:"love",color:"#00588a",fontColor:"#f90707"},{name:"廣告",icon:["fas","ad"],code:"ad",color:"#f5ac3a",fontColor:"#000"},{name:"攝影",icon:["fas","camera"],code:"photograph",color:"#4b4b49",fontColor:"#059de2"}]},i=[{name:"我的收藏",icon:["fas","bookmark"],code:"collect",color:"#00324e",fontColor:"#ee7832"},{name:"我追蹤的看板",icon:["fas","heart"],code:"follow",color:"#00324e",fontColor:"#c84865"},{name:"我發表的文章",icon:["fas","pencil-alt"],code:"post",color:"#00324e",fontColor:"#f6bf02"}]},e6d1:function(e,n,t){},f2ed:function(e,n,t){},f688:function(e,n,t){"use strict";var r=t("c01a"),a=t.n(r);a.a},fdc4:function(e,n,t){}});
//# sourceMappingURL=app.cd9d7f9c.js.map