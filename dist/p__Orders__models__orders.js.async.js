(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{hHm5:function(e,a,t){"use strict";t.r(a);var r=t("p0pE"),n=t.n(r),c=t("d6i3"),s=t.n(c),u=t("dCQc");a["default"]={namespace:"orders",state:{data:{list:[],pagination:{},order:{}}},effects:{fetch:s.a.mark(function e(a,t){var r,n,c,p,o;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,c=t.put,e.next=4,n(u["k"],r);case 4:return p=e.sent,console.log("fetch orders: ",p),p.status,o=p.result,e.next=9,c({type:"save",payload:o});case 9:case"end":return e.stop()}},e)}),add:s.a.mark(function e(a,t){var r,n,c,u,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,c=t.call,u=t.put,e.next=4,c(addRule,r);case 4:return p=e.sent,e.next=7,u({type:"save",payload:p});case 7:n&&n();case 8:case"end":return e.stop()}},e)}),remove:s.a.mark(function e(a,t){var r,n,c,u,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,c=t.call,u=t.put,e.next=4,c(removeRule,r);case 4:return p=e.sent,e.next=7,u({type:"save",payload:p});case 7:n&&n();case 8:case"end":return e.stop()}},e)}),update:s.a.mark(function e(a,t){var r,n,c,u,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,c=t.call,u=t.put,e.next=4,c(updateRule,r);case 4:return p=e.sent,e.next=7,u({type:"save",payload:p});case 7:n&&n();case 8:case"end":return e.stop()}},e)}),fetchOrder:s.a.mark(function e(a,t){var r,n,c,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,a.callback,n=t.call,c=t.put,e.next=4,n(u["t"],r);case 4:return p=e.sent,e.next=7,c({type:"save",payload:{order:p.result}});case 7:return console.log("fetch order ====>",p),e.abrupt("return",p);case 9:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return n()({},e,{data:a.payload})}}}}}]);