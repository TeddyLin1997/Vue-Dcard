(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2413c7ca"],{"0d07":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"circle",staticClass:"circle-icon",class:{border__line:e.border}},[n("awesome-icon",{ref:"icon",staticClass:"icon",attrs:{icon:e.icon}})],1)},a=[],o=(n("a9e3"),{name:"circle-icon",props:{icon:{type:Array,require:!0},iconSize:{type:Number,default:16},border:{type:Boolean,default:!1},borderSize:{type:Number,default:30},color:{type:String,default:"#000"},backgroundColor:{type:String,default:"#fff"}},watch:{icon:{deep:!0,handler:function(){this.$refs.circle.style.width=this.borderSize+"px",this.$refs.circle.style.height=this.borderSize+"px",this.$refs.circle.style.lineHeight=this.borderSize+"px",this.$refs.circle.style.backgroundColor=this.backgroundColor,this.$refs.icon.style.fontSize=this.iconSize+"px",this.$refs.icon.style.color=this.color}}},mounted:function(){this.$refs.circle.style.width=this.borderSize+"px",this.$refs.circle.style.height=this.borderSize+"px",this.$refs.circle.style.lineHeight=this.borderSize+"px",this.$refs.circle.style.backgroundColor=this.backgroundColor,this.$refs.icon.style.fontSize=this.iconSize+"px",this.$refs.icon.style.color=this.color}}),c=o,i=(n("c530"),n("2877")),s=Object(i["a"])(c,r,a,!1,null,"603d664a",null);t["a"]=s.exports},"1e88":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"all"}},[n("div",{staticClass:"section"},e._l(e.kanbanList,(function(e){return n("kanban-title",{key:e.code,attrs:{kanban:e,border:""}})})),1)])},a=[],o=n("5530"),c=n("0d07"),i=n("5e13"),s=n("2f62"),l={name:"all",components:{kanbanTitle:i["a"],circleIcon:c["a"]},computed:Object(o["a"])({},Object(s["d"])(["kanbanList"]))},f=l,u=(n("c1eb"),n("2877")),d=Object(u["a"])(f,r,a,!1,null,"819d05fe",null);t["default"]=d.exports},"1f9a":function(e,t,n){},2532:function(e,t,n){"use strict";var r=n("23e7"),a=n("5a34"),o=n("1d80"),c=n("ab13");r({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~String(o(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),o=n("b622"),c=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==a(e))}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("5899"),o="["+a+"]",c=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),s=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5e13":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kanban__header__title",class:{border:e.border}},[n("div",{staticClass:"kanban__name"},[n("circle-icon",{attrs:{icon:e.kanban.icon,"icon-size":20,"border-size":40,color:e.kanban.fontColor,"background-color":e.kanban.color}}),n("span",[e._v(e._s(e.kanban.name))])],1),n("div",{staticClass:"kanban__follow"},[e.hasFollowed?n("button",{staticClass:"followed",on:{click:function(t){return e.removeKanban(e.kanban.code)}}},[e._v("追蹤中")]):n("button",{on:{click:function(t){return e.followKanban(e.kanban.code)}}},[e._v("追蹤")])])])},a=[],o=(n("c740"),n("caad"),n("a434"),n("2532"),n("5530")),c=n("2f62"),i=n("9a7a"),s=n("0d07"),l={name:"kanabn-title",components:{circleIcon:s["a"]},props:{kanban:Object,border:Boolean},computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])(["userInfo"])),{},{userFollowList:function(){return this.userInfo.kanban||[]},hasFollowed:function(){return this.userFollowList.includes(this.kanban.code)}}),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["setUserInfo"])),{},{followKanban:function(e){var t=Object(i["a"])(this.userInfo);t.kanban?t.kanban.push(e):t.kanban=[e],this.setUserInfo(t),this.$database.setUser(t)},removeKanban:function(e){var t=Object(i["a"])(this.userInfo),n=t.kanban.findIndex((function(t){return t===e}));t.kanban.splice(n,1),this.setUserInfo(t),this.$database.setUser(t)}})},f=l,u=(n("e68c"),n("2877")),d=Object(u["a"])(f,r,a,!1,null,"34557fd1",null);t["a"]=d.exports},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var o,c;return a&&"function"==typeof(o=t.constructor)&&o!==n&&r(c=o.prototype)&&c!==n.prototype&&a(e,c),e}},"8bf1":function(e,t,n){},"9a7a":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));n("99af"),n("d3b7");var r=function(e){var t=JSON.parse(JSON.stringify(e));return t},a=function(){var e=new Date,t="".concat(e.getMonth()+1,"月").concat(e.getDate(),"日 ").concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds());return t}},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),o=n("a691"),c=n("50c4"),i=n("7b0b"),s=n("65f0"),l=n("8418"),f=n("1dde"),u=n("ae40"),d=f("splice"),b=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,p=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!b},{splice:function(e,t){var n,r,f,u,d,b,k=i(this),y=c(k.length),m=a(e,y),I=arguments.length;if(0===I?n=r=0:1===I?(n=0,r=y-m):(n=I-2,r=p(h(o(t),0),y-m)),y+n-r>v)throw TypeError(g);for(f=s(k,r),u=0;u<r;u++)d=m+u,d in k&&l(f,u,k[d]);if(f.length=r,n<r){for(u=m;u<y-r;u++)d=u+r,b=u+n,d in k?k[b]=k[d]:delete k[b];for(u=y;u>y-r+n;u--)delete k[u-1]}else if(n>r)for(u=y-r;u>m;u--)d=u+r-1,b=u+n-1,d in k?k[b]=k[d]:delete k[b];for(u=0;u<n;u++)k[u+m]=arguments[u+2];return k.length=y-r+n,f}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),c=n("6eeb"),i=n("5135"),s=n("c6b6"),l=n("7156"),f=n("c04e"),u=n("d039"),d=n("7c73"),b=n("241c").f,h=n("06cf").f,p=n("9bf2").f,v=n("58a8").trim,g="Number",k=a[g],y=k.prototype,m=s(d(y))==g,I=function(e){var t,n,r,a,o,c,i,s,l=f(e,!1);if("string"==typeof l&&l.length>2)if(l=v(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(o=l.slice(2),c=o.length,i=0;i<c;i++)if(s=o.charCodeAt(i),s<48||s>a)return NaN;return parseInt(o,r)}return+l};if(o(g,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var _,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(m?u((function(){y.valueOf.call(n)})):s(n)!=g)?l(new k(I(t)),n,S):I(t)},x=r?b(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)i(k,_=x[w])&&!i(S,_)&&p(S,_,h(k,_));S.prototype=y,y.constructor=S,c(a,g,S)}},ab13:function(e,t,n){var r=n("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},c1eb:function(e,t,n){"use strict";var r=n("1f9a"),a=n.n(r);a.a},c530:function(e,t,n){"use strict";var r=n("8bf1"),a=n.n(r);a.a},e68c:function(e,t,n){"use strict";var r=n("ef1d"),a=n.n(r);a.a},ef1d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2413c7ca.95db7410.js.map