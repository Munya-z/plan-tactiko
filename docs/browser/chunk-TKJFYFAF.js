import{d as T}from"./chunk-U2VYYZPV.js";import{$ as d,Aa as v,Ka as x,Ta as C,Va as h,Wa as S,Xa as r,Ya as i,Za as s,_a as g,ab as k,bb as m,da as _,ea as u,gb as p,hb as y,lb as G,wa as f,za as l}from"./chunk-3FOZQQLO.js";var E=(e,t)=>t.id;function F(e,t){if(e&1){let c=g();r(0,"button",3),k("click",function(){_(c);let o=m().$implicit,a=m();return u(a.completeGrocery(o))}),s(1,"i",4),i()}}function D(e,t){e&1&&(r(0,"p",5),s(1,"i",6),i())}function b(e,t){if(e&1&&(r(0,"li")(1,"div")(2,"p",1),p(3),i()(),x(4,F,2,0,"button",2)(5,D,2,0),i()),e&2){let c=t.$implicit;l(3),y(c.name),l(),C(4,c.status==="pending"?4:5)}}function w(e,t){e&1&&(r(0,"P"),p(1,"groceries list usually come here"),i())}var P=(()=>{let t=class t{constructor(n){this.toDoService=n,this.groceries=f(()=>this.toDoService.groceries())}completeGrocery(n){this.toDoService.completeGroceries(n)}};t.\u0275fac=function(o){return new(o||t)(v(T))},t.\u0275cmp=d({type:t,selectors:[["app-groceries"]],standalone:!0,features:[G],decls:5,vars:1,consts:[[1,"listy","needs-center"],[1,"header-text","small","sec-header"],["class","btn-main"],[1,"btn-main",3,"click"],[1,"lni","lni-checkmark"],[1,"done"],[1,"lni","lni-checkmark-circle"]],template:function(o,a){o&1&&(r(0,"div",0)(1,"ul"),h(2,b,6,2,"li",null,E,!1,w,2,0,"P"),i()()),o&2&&(l(2),S(a.groceries()))}});let e=t;return e})();export{P as a};