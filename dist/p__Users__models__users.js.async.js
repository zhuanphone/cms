(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{tkEC:function(e,a,t){"use strict";t.r(a);var n=t("p0pE"),r=t.n(n),c=t("d6i3"),s=t.n(c),u=t("dCQc");a["default"]={namespace:"users",state:{data:{list:[],pagination:{}}},effects:{fetch:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,c=t.put,e.next=4,r(u["l"],n);case 4:return p=e.sent,p.status,l=p.result,e.next=8,c({type:"save",payload:l});case 8:case"end":return e.stop()}},e)}),add:s.a.mark(function e(a,t){var n,r,c,u,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,u=t.put,e.next=4,c(addRule,n);case 4:return p=e.sent,e.next=7,u({type:"save",payload:p});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),remove:s.a.mark(function e(a,t){var n,r,c,u,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,u=t.put,e.next=4,c(removeRule,n);case 4:return p=e.sent,e.next=7,u({type:"save",payload:p});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),update:s.a.mark(function e(a,t){var n,r,c,u,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,u=t.put,e.next=4,c(updateRule,n);case 4:return p=e.sent,e.next=7,u({type:"save",payload:p});case 7:r&&r();case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return r()({},e,{data:a.payload})}}}}}]);