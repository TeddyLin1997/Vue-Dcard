(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aec742c"],{"384f":function(e,t,r){},"9ed6":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login"},[e._m(0),r("div",{staticClass:"tabs"},e._l(e.pageList,(function(t){return r("div",{key:t.id,staticClass:"tab",class:{active:e.activePage[t.code]},on:{click:function(r){return e.changePage(t.code)}}},[r("awesome-icon",{attrs:{icon:t.icon}}),r("span",[e._v(" "+e._s(t.label))])],1)})),0),r("div",{staticClass:"window"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.activePage.register,expression:"activePage.register"}]},[r("span",[e._v("名稱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm[e.active].name,expression:"userForm[active].name"}],attrs:{type:"text",placeholder:"請輸入名稱"},domProps:{value:e.userForm[e.active].name},on:{input:function(t){t.target.composing||e.$set(e.userForm[e.active],"name",t.target.value)}}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.activePage.register,expression:"activePage.register"}]},[r("span",[e._v("學校")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm[e.active].school,expression:"userForm[active].school"}],attrs:{type:"text",placeholder:"請輸入學校"},domProps:{value:e.userForm[e.active].school},on:{input:function(t){t.target.composing||e.$set(e.userForm[e.active],"school",t.target.value)}}})]),r("div",[r("span",[e._v("信箱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm[e.active].account,expression:"userForm[active].account"}],attrs:{type:"text",placeholder:"請輸入信箱"},domProps:{value:e.userForm[e.active].account},on:{input:function(t){t.target.composing||e.$set(e.userForm[e.active],"account",t.target.value)}}})]),r("div",[r("span",[e._v("密碼")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm[e.active].password,expression:"userForm[active].password"}],attrs:{type:"password",placeholder:" 請輸入密碼"},domProps:{value:e.userForm[e.active].password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(e.active)},input:function(t){t.target.composing||e.$set(e.userForm[e.active],"password",t.target.value)}}})]),r("button",{on:{click:function(t){return e.submit(e.active)}}},[e._v("送出")])]),r("br"),e._m(1)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title"},[r("h1",[e._v("註冊/\b登入")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"test"},[r("div",[e._v("測試帳號")]),r("div",[e._v("信箱: test@gmail.com")]),r("div",[e._v("密碼: qwe123")])])}],n=(r("b0c0"),r("96cf"),r("1da1")),i=r("5530"),o=r("2f62"),c={name:"login",data:function(){return{loading:!1,active:"login",pageList:[{id:0,label:"登入",code:"login",icon:["fas","user-friends"]},{id:1,label:"註冊",code:"register",icon:["fas","user-plus"]}],userForm:{login:{account:"",password:""},register:{account:"",password:"",name:"",school:""}}}},computed:{activePage:function(){return{login:this.active===this.pageList[0].code,register:this.active===this.pageList[1].code}}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["setUserInfo"])),{},{clearRegisterForm:function(){this.userForm.register.account="",this.userForm.register.password="",this.userForm.register.name="",this.userForm.register.school=""},submit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.loading=!0,"login"!==e){r.next=4;break}return r.next=4,t.$auth.signInWithEmailAndPassword(t.userForm.login.account,t.userForm.login.password).then((function(){return t.saveUserInfo()})).then((function(){return t.$router.push({name:"home"})})).then((function(){return t.$message("成功")})).catch((function(e){return t.$message(e.message,"error")}));case 4:if("register"!==e){r.next=8;break}return a=Object(i["a"])({},t.userForm.register),r.next=8,t.$auth.createUserWithEmailAndPassword(t.userForm.register.account,t.userForm.register.password).then((function(e){t.$database.setUser(Object(i["a"])(Object(i["a"])({},a),{},{uid:e.user.uid}))})).then((function(){t.$message("成功"),t.active="login",t.clearRegisterForm(),t.userForm.login.account=a.account,t.userForm.login.password=a.password})).catch((function(e){return t.$message(e.message,"error")}));case 8:t.loading=!1;case 9:case"end":return r.stop()}}),r)})))()},changePage:function(e){this.active=e},saveUserInfo:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$auth.currentUser,!r){t.next=6;break}return t.next=4,e.$database.getUser(r.uid);case 4:a=t.sent,e.setUserInfo(a);case 6:case"end":return t.stop()}}),t)})))()}})},u=c,m=(r("e2fa"),r("2877")),v=Object(m["a"])(u,a,s,!1,null,"e15598a4",null);t["default"]=v.exports},e2fa:function(e,t,r){"use strict";var a=r("384f"),s=r.n(a);s.a}}]);
//# sourceMappingURL=chunk-5aec742c.f4ba5d90.js.map