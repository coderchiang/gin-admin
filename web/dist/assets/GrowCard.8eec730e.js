var t=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(e,a,o)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o;import{af as n,w as r,_ as s}from"./index.55b83891.js";import{j as i,r as u,bo as d,i as c,u as p,a4 as f,C as m,I as b,bp as y,o as v,m as g,q as x,bi as V,bq as j,K as w,S,ag as C,P as O,n as h,X as N}from"./vendor.0af35baf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */var T=i({name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator:t=>t>=0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(t,{emit:r}){const s=u(t.startVal),i=u(!1);let v=d(s);const g=c((()=>function(e){if(!e)return"";const{decimals:a,decimal:o,separator:l,suffix:r,prefix:s}=t;e=Number(e).toFixed(a);const i=(e+="").split(".");let u=i[0];const d=i.length>1?o+i[1]:"",c=/(\d+)(\d{3})/;if(l&&!n(l))for(;c.test(u);)u=u.replace(c,"$1"+l+"$2");return s+u+d+r}(p(v))));function x(){V(),s.value=t.endVal}function V(){v=d(s,((t,n)=>{for(var r in n||(n={}))a.call(n,r)&&l(t,r,n[r]);if(e)for(var r of e(n))o.call(n,r)&&l(t,r,n[r]);return t})({disabled:i,duration:t.duration,onFinished:()=>r("onFinished"),onStarted:()=>r("onStarted")},t.useEasing?{transition:y[t.transition]}:{}))}return f((()=>{s.value=t.startVal})),m([()=>t.startVal,()=>t.endVal],(()=>{t.autoplay&&x()})),b((()=>{t.autoplay&&x()})),{value:g,start:x,reset:function(){s.value=t.startVal,V()}}}});T.render=function(t,e,a,o,l,n){return v(),g("span",{style:{color:t.color}},x(t.value),5)};const $=r(T),E=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var F=i({components:{CountTo:$,Tag:V,Card:j,Icon:s},setup:()=>({growCardList:E})});const I={class:"md:flex"},P={class:"py-4 px-4 flex justify-between"},_={class:"p-2 px-4 flex justify-between"};F.render=function(t,e,a,o,l,n){const r=w("Tag"),s=w("CountTo"),i=w("Icon"),u=w("Card");return v(),g("div",I,[(v(!0),g(S,null,C(t.growCardList,((e,a)=>(v(),g(u,{key:e.title,size:"small",loading:t.$attrs.loading,title:e.title,class:["md:w-1/4 w-full !md:mt-0 !mt-4",[a+1<4&&"!md:mr-4"]],canExpan:!1},{extra:O((()=>[h(r,{color:e.color},{default:O((()=>[N(x(e.action),1)])),_:2},1032,["color"])])),default:O((()=>[h("div",P,[h(s,{prefix:"$",startVal:1,endVal:e.value,class:"text-2xl"},null,8,["endVal"]),h(i,{icon:e.icon,size:40},null,8,["icon"])]),h("div",_,[h("span",null,"总"+x(e.title),1),h(s,{prefix:"$",startVal:1,endVal:e.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export default F;