(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"5WY0":function(e,t,r){e.exports={main:"antd-pro-pages-user-register-main",getCaptcha:"antd-pro-pages-user-register-getCaptcha",submit:"antd-pro-pages-user-register-submit",login:"antd-pro-pages-user-register-login",error:"antd-pro-pages-user-register-error",success:"antd-pro-pages-user-register-success",warning:"antd-pro-pages-user-register-warning","progress-pass":"antd-pro-pages-user-register-progress-pass",progress:"antd-pro-pages-user-register-progress"}},UADf:function(e,t,r){e.exports={"ant-popover":"ant-popover","ant-popover-hidden":"ant-popover-hidden","ant-popover-placement-top":"ant-popover-placement-top","ant-popover-placement-topLeft":"ant-popover-placement-topLeft","ant-popover-placement-topRight":"ant-popover-placement-topRight","ant-popover-placement-right":"ant-popover-placement-right","ant-popover-placement-rightBottom":"ant-popover-placement-rightBottom","ant-popover-placement-rightTop":"ant-popover-placement-rightTop","ant-popover-placement-bottom":"ant-popover-placement-bottom","ant-popover-placement-bottomLeft":"ant-popover-placement-bottomLeft","ant-popover-placement-bottomRight":"ant-popover-placement-bottomRight","ant-popover-placement-left":"ant-popover-placement-left","ant-popover-placement-leftBottom":"ant-popover-placement-leftBottom","ant-popover-placement-leftTop":"ant-popover-placement-leftTop","ant-popover-inner":"ant-popover-inner","ant-popover-title":"ant-popover-title","ant-popover-inner-content":"ant-popover-inner-content","ant-popover-message":"ant-popover-message",anticon:"anticon","ant-popover-message-title":"ant-popover-message-title","ant-popover-buttons":"ant-popover-buttons","ant-popover-arrow":"ant-popover-arrow","ant-popover-content":"ant-popover-content"}},cq3J:function(e,t,r){"use strict";r.r(t);r("14J3");var a=r("BMrR"),o=(r("+L6B"),r("2/Rp")),n=(r("jCWc"),r("kPKH")),s=(r("cIOH"),r("UADf"),r("q1tI")),i=r.n(s),p=r("3S7+"),l=r("wEI+"),c=r("6CfX");function m(e){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function v(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}var E=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r},O=function(e){function t(){var e;return d(this,t),e=v(this,b(t).apply(this,arguments)),e.saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var r=t.getPrefixCls,a=e.props,o=a.prefixCls,n=E(a,["prefixCls"]);delete n.title;var i=r("popover",o);return s["createElement"](p["a"],u({},n,{prefixCls:i,ref:e.saveTooltip,overlay:e.getOverlay(i)}))},e}return y(t,e),g(t,[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,r=t.title,a=t.content;return Object(c["a"])(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),s["createElement"]("div",null,r&&s["createElement"]("div",{className:"".concat(e,"-title")},r),s["createElement"]("div",{className:"".concat(e,"-inner-content")},a))}},{key:"render",value:function(){return s["createElement"](l["a"],null,this.renderPopover)}}]),t}(s["Component"]);O.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};r("MXD1");var P,j,M,S,C=r("CFYs"),k=r("p0pE"),x=r.n(k),N=r("2Taf"),D=r.n(N),F=r("vZ4D"),q=r.n(F),T=r("l4Ni"),z=r.n(T),L=r("ujKo"),I=r.n(L),_=r("MhPg"),B=r.n(_),R=(r("5NDa"),r("5rEg")),U=(r("OaEy"),r("2fM7")),V=(r("y8nQ"),r("Vl3Y")),W=r("MuoO"),J=r("LLXN"),Y=r("mOP9"),A=r("usdK"),G=r("5WY0"),K=r.n(G),X=V["a"].Item,H=U["a"].Option,Q=R["a"].Group,Z={ok:i.a.createElement("div",{className:K.a.success},i.a.createElement(J["FormattedMessage"],{id:"validation.password.strength.strong"})),pass:i.a.createElement("div",{className:K.a.warning},i.a.createElement(J["FormattedMessage"],{id:"validation.password.strength.medium"})),poor:i.a.createElement("div",{className:K.a.error},i.a.createElement(J["FormattedMessage"],{id:"validation.password.strength.short"}))},$={ok:"success",pass:"normal",poor:"exception"},ee=(P=Object(W["connect"])(function(e){var t=e.register,r=e.loading;return{register:t,submitting:r.effects["register/submit"]}}),j=V["a"].create(),P(M=j((S=function(e){function t(){var e,r;D()(this,t);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return r=z()(this,(e=I()(t)).call.apply(e,[this].concat(o))),r.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},r.onGetCaptcha=function(){var e=59;r.setState({count:e}),r.interval=setInterval(function(){e-=1,r.setState({count:e}),0===e&&clearInterval(r.interval)},1e3)},r.getPasswordStatus=function(){var e=r.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},r.handleSubmit=function(e){e.preventDefault();var t=r.props,a=t.form,o=t.dispatch;a.validateFields({force:!0},function(e,t){if(!e){var a=r.state.prefix;o({type:"register/submit",payload:x()({},t,{prefix:a})})}})},r.handleConfirmBlur=function(e){var t=e.target.value,a=r.state.confirmDirty;r.setState({confirmDirty:a||!!t})},r.checkConfirm=function(e,t,a){var o=r.props.form;t&&t!==o.getFieldValue("password")?a(Object(J["formatMessage"])({id:"validation.password.twice"})):a()},r.checkPassword=function(e,t,a){var o=r.state,n=o.visible,s=o.confirmDirty;if(t)if(r.setState({help:""}),n||r.setState({visible:!!t}),t.length<6)a("error");else{var i=r.props.form;t&&s&&i.validateFields(["confirm"],{force:!0}),a()}else r.setState({help:Object(J["formatMessage"])({id:"validation.password.required"}),visible:!!t}),a("error")},r.changePrefix=function(e){r.setState({prefix:e})},r.renderPasswordProgress=function(){var e=r.props.form,t=e.getFieldValue("password"),a=r.getPasswordStatus();return t&&t.length?i.a.createElement("div",{className:K.a["progress-".concat(a)]},i.a.createElement(C["a"],{status:$[a],className:K.a.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},r}return B()(t,e),q()(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.form,r=e.register,a=t.getFieldValue("mail");"ok"===r.status&&A["a"].push({pathname:"/user/register-result",state:{account:a}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.submitting,s=t.getFieldDecorator,p=this.state,l=p.count,c=p.prefix,m=p.help,u=p.visible;return i.a.createElement("div",{className:K.a.main},i.a.createElement("h3",null,i.a.createElement(J["FormattedMessage"],{id:"app.register.register"})),i.a.createElement(V["a"],{onSubmit:this.handleSubmit},i.a.createElement(X,null,s("mail",{rules:[{required:!0,message:Object(J["formatMessage"])({id:"validation.email.required"})},{type:"email",message:Object(J["formatMessage"])({id:"validation.email.wrong-format"})}]})(i.a.createElement(R["a"],{size:"large",placeholder:Object(J["formatMessage"])({id:"form.email.placeholder"})}))),i.a.createElement(X,{help:m},i.a.createElement(O,{getPopupContainer:function(e){return e.parentNode},content:i.a.createElement("div",{style:{padding:"4px 0"}},Z[this.getPasswordStatus()],this.renderPasswordProgress(),i.a.createElement("div",{style:{marginTop:10}},i.a.createElement(J["FormattedMessage"],{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:u},s("password",{rules:[{validator:this.checkPassword}]})(i.a.createElement(R["a"],{size:"large",type:"password",placeholder:Object(J["formatMessage"])({id:"form.password.placeholder"})})))),i.a.createElement(X,null,s("confirm",{rules:[{required:!0,message:Object(J["formatMessage"])({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(i.a.createElement(R["a"],{size:"large",type:"password",placeholder:Object(J["formatMessage"])({id:"form.confirm-password.placeholder"})}))),i.a.createElement(X,null,i.a.createElement(Q,{compact:!0},i.a.createElement(U["a"],{size:"large",value:c,onChange:this.changePrefix,style:{width:"20%"}},i.a.createElement(H,{value:"86"},"+86"),i.a.createElement(H,{value:"87"},"+87")),s("mobile",{rules:[{required:!0,message:Object(J["formatMessage"])({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(J["formatMessage"])({id:"validation.phone-number.wrong-format"})}]})(i.a.createElement(R["a"],{size:"large",style:{width:"80%"},placeholder:Object(J["formatMessage"])({id:"form.phone-number.placeholder"})})))),i.a.createElement(X,null,i.a.createElement(a["a"],{gutter:8},i.a.createElement(n["a"],{span:16},s("captcha",{rules:[{required:!0,message:Object(J["formatMessage"])({id:"validation.verification-code.required"})}]})(i.a.createElement(R["a"],{size:"large",placeholder:Object(J["formatMessage"])({id:"form.verification-code.placeholder"})}))),i.a.createElement(n["a"],{span:8},i.a.createElement(o["a"],{size:"large",disabled:l,className:K.a.getCaptcha,onClick:this.onGetCaptcha},l?"".concat(l," s"):Object(J["formatMessage"])({id:"app.register.get-verification-code"}))))),i.a.createElement(X,null,i.a.createElement(o["a"],{size:"large",loading:r,className:K.a.submit,type:"primary",htmlType:"submit"},i.a.createElement(J["FormattedMessage"],{id:"app.register.register"})),i.a.createElement(Y["a"],{className:K.a.login,to:"/User/Login"},i.a.createElement(J["FormattedMessage"],{id:"app.register.sign-in"})))))}}]),t}(s["Component"]),M=S))||M)||M);t["default"]=ee}}]);