import{e,cR as t,g as s,k as i,r as a,o as n,m as r,n as o,p as d,q as l,aA as p}from"./index.5da963b2.js";import{b as m}from"./index.54de8f10.js";import"./vendor.afa0338c.js";import"./useDrawer.b89d9ac7.js";import"./index.9b98d5bd.js";import"./ArrowLeftOutlined.3c31c900.js";import"./index.4f8a523c.js";import"./createAsyncComponent.b49d40c6.js";import"./index.fbc8ef9b.js";import"./RedoOutlined.6b053df0.js";import"./_baseIteratee.ead3a974.js";import"./get.6b33f9f0.js";import"./FullscreenOutlined.154838b3.js";import"./index.c84b70cd.js";import"./useWindowSizeFn.ed38b6f3.js";import"./usePageContext.16f1954c.js";import"./index.c0d37451.js";import"./UpOutlined.f6a5c259.js";import"./useSortable.143bde05.js";var c=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=s("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:i((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=p()(((e,t,s,i,p,m)=>{const c=a("Select");return n(),r("div",{class:e.prefixCls},[o("span",null,d(e.title),1),o(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));c.render=u,c.__scopeId="data-v-e2504774";export default c;