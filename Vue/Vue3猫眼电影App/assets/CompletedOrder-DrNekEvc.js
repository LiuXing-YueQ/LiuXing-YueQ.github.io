import{d as D,M as V,x as j,c as h,r as w,a as u,b as v,e,f as r,k as g,p as s,t as n,F as z,i as R,Y as S,g as q,O as _,a3 as m,h as B,l as N,u as P,m as p,_ as F}from"./index-uDmW0p6U.js";const I={class:"public"},A={class:"vote"},E={class:"vote-info"},L={class:"nm"},M={class:"time"},Q={class:"cinema"},U={style:{display:"flex","justify-content":"space-between"}},Y={style:{width:"30vw"}},$={style:{display:"flex","justify-content":"space-between","font-size":"14rem",color:"#333"}},G={class:"Seat",style:{width:"30vw"}},H={class:"vote",style:{"justify-content":"space-between"}},J={class:"service"},K={class:"detail"},W={class:"detail-info"},X={class:"detail-info-content"},Z={class:"detail-info"},ee={class:"detail-info-content"},se={key:0,class:"public"},te={class:"rate"},oe={style:{display:"flex","justify-content":"space-between","align-items":"center"}},ne=D({__name:"CompletedOrder",setup(ae){const f=N(),d=P(),b=V(),{CurrentOrders:o}=j(b);console.log("CurrentOrders",o.value);const k=h(()=>o.value.dateinfo.substr(14,4)),y=w(3),C=()=>{d.query.Tip=="支付成功"?f.go(-2):f.back()};let a=w(!1);const T=h(()=>{var i,c;return new Date(((i=o.value)==null?void 0:i.TicketDate)+" "+((c=o.value)==null?void 0:c.Playtime.slice(-5)))-new Date<=0});return(x,t)=>{const i=p("van-icon"),c=p("van-image"),O=p("van-rate");return u(),v("div",{class:g(["order",s(d).query.Tip=="支付成功"?"order-pay":""])},[e("header",null,[r(i,{name:"arrow-left",color:"#000",size:"24",onClick:C}),e("div",{class:g(["title",s(d).query.Tip=="支付成功"?"pay":""])},n(s(d).query.Tip),3)]),e("div",I,[e("div",A,[e("div",E,[e("div",L,n(s(o).name),1),e("div",M,n(k.value),1),e("div",Q,[e("div",U,[e("span",null,n(s(o).TicketDate),1),e("span",Y,n(s(o).lobbySeats),1)]),e("div",$,[e("span",null,n(s(o).Playtime),1),e("div",G,[(u(!0),v(z,null,R(s(o).Seat,l=>(u(),v("span",{key:l},n(l)+" ",1))),128))])])])]),e("div",null,[r(c,{width:"60rem",height:"80rem",fit:"cover",radius:"8rem",src:s(o).img},null,8,["src"])])]),e("div",H,[e("div",J,[e("span",{style:{"margin-right":"4rem"},onClick:t[0]||(t[0]=l=>S(a)?a.value=!s(a):a=!s(a))},[t[2]||(t[2]=q("展开取票码 ")),_(r(i,{name:"arrow-down"},null,512),[[m,s(a)]]),_(r(i,{name:"arrow-up"},null,512),[[m,!s(a)]])]),_(e("div",K,[e("div",W,[t[3]||(t[3]=e("div",{class:"detail-info-title"},"取票码",-1)),e("div",X,n(s(o).movieId),1)]),e("div",Z,[t[4]||(t[4]=e("div",{class:"detail-info-title"},"取票号",-1)),e("div",ee,n(s(o).PlaceAnOrderTime),1)])],512),[[m,s(a)]])])])]),T.value?(u(),v("div",se,[e("div",te,[t[6]||(t[6]=e("p",null,"评价电影",-1)),e("div",oe,[r(O,{modelValue:y.value,"onUpdate:modelValue":t[1]||(t[1]=l=>y.value=l),size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee"},null,8,["modelValue"]),t[5]||(t[5]=e("span",{style:{"font-size":"12rem",color:"#333"}},"可以拖动星星评分",-1))])])])):B("",!0)],2)}}}),le=F(ne,[["__scopeId","data-v-0c53f6e8"]]);export{le as default};
