(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-109e0929"],{"087f":function(e,t,n){"use strict";n("c63a")},"0ad3":function(e,t,n){"use strict";n("2314")},2314:function(e,t,n){},"25f0":function(e,t,n){"use strict";var i=n("6eeb"),a=n("825a"),s=n("d039"),r=n("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=o;(u||f)&&i(RegExp.prototype,o,(function(){var e=a(this),t=String(e.source),n=e.flags,i=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?r.call(e):n);return"/"+t+"/"+i}),{unsafe:!0})},"2e28":function(e,t,n){"use strict";n("6d93")},"44e7":function(e,t,n){var i=n("861d"),a=n("c6b6"),s=n("b622"),r=s("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==a(e))}},"4b86":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn",class:{primary:"primary"==e.type,danger:"danger"==e.type},on:{click:e.handler}},[e._t("default")],2)},a=[],s={props:{type:{type:String}},methods:{handler:function(e){this.$emit("click",e)}}},r=s,o=(n("087f"),n("2877")),c=Object(o["a"])(r,i,a,!1,null,"7fb701c6",null);t["a"]=c.exports},"4d63":function(e,t,n){var i=n("83ab"),a=n("da84"),s=n("94ca"),r=n("7156"),o=n("9bf2").f,c=n("241c").f,l=n("44e7"),u=n("ad6d"),f=n("9f7f"),d=n("6eeb"),p=n("d039"),g=n("69f3").set,v=n("2626"),h=n("b622"),m=h("match"),y=a.RegExp,b=y.prototype,x=/a/g,k=/a/g,E=new y(x)!==x,C=f.UNSUPPORTED_Y,O=i&&s("RegExp",!E||C||p((function(){return k[m]=!1,y(x)!=x||y(k)==k||"/a/i"!=y(x,"i")})));if(O){var $=function(e,t){var n,i=this instanceof $,a=l(e),s=void 0===t;if(!i&&a&&e.constructor===$&&s)return e;E?a&&!s&&(e=e.source):e instanceof $&&(s&&(t=u.call(e)),e=e.source),C&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var o=r(E?new y(e,t):y(e,t),i?this:b,$);return C&&n&&g(o,{sticky:n}),o},_=function(e){e in $||o($,e,{configurable:!0,get:function(){return y[e]},set:function(t){y[e]=t}})},w=c(y),R=0;while(w.length>R)_(w[R++]);b.constructor=$,$.prototype=b,d(a,"RegExp",$)}v("RegExp")},"4e36":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{staticClass:"my_input",class:{success:e.flag,error:!e.flag},attrs:{type:"text"},on:{input:e.handlerInput,blur:e.handlerChange}})},a=[],s=(n("4d63"),n("ac1f"),n("25f0"),n("e7e5"),n("d399")),r={props:{rules:{type:RegExp},msg:{type:String,default:"输入错误，请重新输入"}},data:function(){return{flag:!0}},methods:{handlerInput:function(e){var t=e.target.value;this.$emit("input",t),this.rules&&(this.rules.test(t)?(console.log("格式正确"),this.flag=!0):this.flag=!1)},handlerChange:function(e){this.rules&&(this.rules.test(e.target.value)||s["a"].fail({message:this.msg,duration:3e3,position:"top"}))}}},o=r,c=(n("2e28"),n("2877")),l=Object(c["a"])(o,i,a,!1,null,"fafd9ea4",null);t["a"]=l.exports},"6d93":function(e,t,n){},7156:function(e,t,n){var i=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var s,r;return a&&"function"==typeof(s=t.constructor)&&s!==n&&i(r=s.prototype)&&r!==n.prototype&&a(e,r),e}},7803:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),e._m(1),n("div",{staticClass:"inputs"},[n("MyInput",{attrs:{rules:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,msg:"手机号错误，请重新输入",placeholder:"用户名/手机号"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),n("MyInput",{attrs:{placeholder:"密码"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),n("MyInput",{attrs:{placeholder:"昵称"},model:{value:e.user.nickname,callback:function(t){e.$set(e.user,"nickname",t)},expression:"user.nickname"}})],1),e._m(2),n("MyButton",{attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"close"},[n("span",{staticClass:"iconfont iconicon-test"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("span",{staticClass:"iconfont iconnew"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tips"},[e._v("已有帐号?"),n("a",{attrs:{href:"#/login"}},[e._v("去登录")])])}],s=(n("e7e5"),n("d399")),r=(n("96cf"),n("1da1")),o=n("4b86"),c=n("4e36"),l=n("1602"),u={components:{MyButton:o["a"],MyInput:c["a"]},data:function(){return{user:{username:"",password:"",nickname:""}}},methods:{register:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])(e.user);case 2:n=t.sent,console.log(n),"注册成功"==n.data.message?(s["a"].success(n.data.message),e.$router.push({name:"login"})):s["a"].fail("注册失败，请重试！");case 5:case"end":return t.stop()}}),t)})))()}}},f=u,d=(n("0ad3"),n("2877")),p=Object(d["a"])(f,i,a,!1,null,"2655a898",null);t["default"]=p.exports},9263:function(e,t,n){"use strict";var i=n("ad6d"),a=n("9f7f"),s=RegExp.prototype.exec,r=String.prototype.replace,o=s,c=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=c||u||l;f&&(o=function(e){var t,n,a,o,f=this,d=l&&f.sticky,p=i.call(f),g=f.source,v=0,h=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",p)),u&&(n=new RegExp("^"+g+"$(?!\\s)",p)),c&&(t=f.lastIndex),a=s.call(d?n:f,h),d?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:c&&a&&(f.lastIndex=f.global?a.index+a[0].length:t),u&&a&&a.length>1&&r.call(a[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),e.exports=o},"9f7f":function(e,t,n){"use strict";var i=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=i((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=i((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var i=n("23e7"),a=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var i=n("825a");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b258:function(e,t,n){},c63a:function(e,t,n){},d399:function(e,t,n){"use strict";var i=n("c31d"),a=n("2b0e"),s=n("d282"),r=n("a142"),o=0;function c(e){e?(o||document.body.classList.add("van-toast--unclickable"),o++):(o--,o||document.body.classList.remove("van-toast--unclickable"))}var l=n("6605"),u=n("ad06"),f=n("543e"),d=Object(s["a"])("toast"),p=d[0],g=d[1],v=p({mixins:[Object(l["a"])()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var e=this.value&&this.forbidClick;this.clickable!==e&&(this.clickable=e,c(e))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var e=this.$createElement,t=this.icon,n=this.type,i=this.iconPrefix,a=this.loadingType,s=t||"success"===n||"fail"===n;return s?e(u["a"],{class:g("icon"),attrs:{classPrefix:i,name:t||n}}):"loading"===n?e(f["a"],{class:g("loading"),attrs:{type:a}}):void 0},genMessage:function(){var e=this.$createElement,t=this.type,n=this.message;if(Object(r["c"])(n)&&""!==n)return"html"===t?e("div",{class:g("text"),domProps:{innerHTML:n}}):e("div",{class:g("text")},[n])}},render:function(){var e,t=arguments[0];return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[t("div",{directives:[{name:"show",value:this.value}],class:[g([this.position,(e={},e[this.type]=!this.icon,e)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),h=n("092d"),m={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},y={},b=[],x=!1,k=Object(i["a"])({},m);function E(e){return Object(r["e"])(e)?e:{message:e}}function C(e){return document.body.contains(e)}function O(){if(r["g"])return{};if(b=b.filter((function(e){return!e.$el.parentNode||C(e.$el)})),!b.length||x){var e=new(a["a"].extend(v))({el:document.createElement("div")});e.$on("input",(function(t){e.value=t})),b.push(e)}return b[b.length-1]}function $(e){return Object(i["a"])({},e,{overlay:e.mask||e.overlay,mask:void 0,duration:void 0})}function _(e){void 0===e&&(e={});var t=O();return t.value&&t.updateZIndex(),e=E(e),e=Object(i["a"])({},k,y[e.type||k.type],e),e.clear=function(){t.value=!1,e.onClose&&(e.onClose(),e.onClose=null),x&&!r["g"]&&t.$on("closed",(function(){clearTimeout(t.timer),b=b.filter((function(e){return e!==t})),Object(h["a"])(t.$el),t.$destroy()}))},Object(i["a"])(t,$(e)),clearTimeout(t.timer),e.duration>0&&(t.timer=setTimeout((function(){t.clear()}),e.duration)),t}var w=function(e){return function(t){return _(Object(i["a"])({type:e},E(t)))}};["loading","success","fail"].forEach((function(e){_[e]=w(e)})),_.clear=function(e){b.length&&(e?(b.forEach((function(e){e.clear()})),b=[]):x?b.shift().clear():b[0].clear())},_.setDefaultOptions=function(e,t){"string"===typeof e?y[e]=t:Object(i["a"])(k,e)},_.resetDefaultOptions=function(e){"string"===typeof e?y[e]=null:(k=Object(i["a"])({},m),y={})},_.allowMultiple=function(e){void 0===e&&(e=!0),x=e},_.install=function(){a["a"].use(v)},a["a"].prototype.$toast=_;t["a"]=_},e7e5:function(e,t,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("b258")}}]);
//# sourceMappingURL=chunk-109e0929.02b8cf77.js.map