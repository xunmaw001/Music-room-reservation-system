(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"39c6":function(t,e,n){"use strict";n.r(e);var r=n("6ead"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},"4fa4":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},5694:function(t,e,n){"use strict";var r=n("f895"),u=n.n(r);u.a},"6ead":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,u,a,i){try{var s=t[a](i),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(r,u)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var i=t.apply(e,n);function s(t){a(i,r,u,s,o,"next",t)}function o(t){a(i,r,u,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{ruleForm:{},tableName:""}},onLoad:function(){var e=t.getStorageSync("loginTable");this.tableName=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuming||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=12;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 12:return t.next=14,this.$api.register("".concat(this.tableName),this.ruleForm);case 14:this.$utils.msgBack("注册成功");case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("543d")["default"])},"7a1e":function(t,e,n){"use strict";(function(t){n("d5b1"),n("921b");r(n("66fd"));var e=r(n("daa8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},daa8:function(t,e,n){"use strict";n.r(e);var r=n("4fa4"),u=n("39c6");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("5694");var i,s=n("f0c5"),o=Object(s["a"])(u["default"],r["b"],r["c"],!1,null,"1d2ce758",null,!1,r["a"],i);e["default"]=o.exports},f895:function(t,e,n){}},[["7a1e","common/runtime","common/vendor"]]]);