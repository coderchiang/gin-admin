var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,n=(e,t,o)=>new Promise(((a,l)=>{var n=e=>{try{i(o.next(e))}catch(t){l(t)}},r=e=>{try{i(o.throw(e))}catch(t){l(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,r);i((o=o.apply(e,t)).next())}));import{f as r,g as i}from"./useForm.846cb87f.js";import{a0 as s,bi as u,j as p,r as d,i as c,u as m,K as b,o as f,m as v,P as h,n as w,N as y}from"./vendor.0af35baf.js";/* empty css              */import{_ as P,aF as g,aH as I,aI as x}from"./index.55b83891.js";import{_ as N,a as j}from"./useDrawer.27864d86.js";const D=[{title:"菜单名",dataIndex:"menuName",width:200,align:"left"},{title:"图标",dataIndex:"icon",width:50,customRender:({record:e})=>s(P,{icon:e.icon})},{title:"Api路由",dataIndex:"apiPath"},{title:"组件",dataIndex:"component"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,o=t?"启用":"停用";return s(u,{color:t?"green":"red"},(()=>o))}},{title:"创建时间",dataIndex:"createTime",width:180}],R=e=>"2"===e,B=[{field:"menuName",label:"菜单名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]},colProps:{span:8}}],F=[{field:"type",label:"菜单类型",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"目录",value:"0"},{label:"菜单",value:"1"},{label:"按钮",value:"2"}]},colProps:{lg:24,md:24}},{field:"id",label:"ID",component:"InputNumber",show:!1},{field:"pid",label:"pid",component:"InputNumber",show:!1},{field:"menuName",label:"菜单名称",component:"Input",required:!0},{field:"pMenuName",label:"上级菜单",component:"TreeSelect",componentProps:{replaceFields:{title:"menuName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"icon",label:"图标",component:"IconPicker",show:({values:e})=>!R(e.type)},{field:"apiPath",label:"apiPath",component:"Input",show:({values:e})=>R(e.type)},{field:"apiMethod",label:"ApiMethod",component:"RadioButtonGroup",defaultValue:"1",required:!0,componentProps:{options:[{label:"GET",value:"1"},{label:"POST",value:"2"},{label:"PUT",value:"3"},{label:"DELETE",value:"4"}]},show:({values:e})=>R(e.type)},{field:"component",label:"组件路径",component:"Input",show:({values:e})=>"1"===e.type},{field:"path",label:"请求路径",component:"Input",show:({values:e})=>!R(e.type)},{field:"isExt",label:"是否外链",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},show:({values:e})=>!R(e.type)},{field:"extUrl",label:"外链地址",component:"Input",show:({values:e})=>"1"===e.isExt},{field:"keepalive",label:"是否缓存",component:"RadioButtonGroup",defaultValue:"1",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},show:({values:e})=>!R(e.type)},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"1",componentProps:{options:[{label:"启用",value:"1"},{label:"禁用",value:"0"}]}}];var O=p({name:"MenuDrawer",components:{BasicDrawer:N,BasicForm:r},emits:["success","register"],setup(e,{emit:r}){const s=d(!0),[u,{resetFields:p,setFieldsValue:b,updateSchema:f,validate:v}]=i({labelWidth:100,schemas:F,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[h,{setDrawerProps:w,closeDrawer:y}]=j((e=>n(this,null,(function*(){p(),w({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),m(s)&&b(((e,n)=>{for(var r in n||(n={}))o.call(n,r)&&l(e,r,n[r]);if(t)for(var r of t(n))a.call(n,r)&&l(e,r,n[r]);return e})({},e.record));const n=yield g();f({field:"pMenuName",componentProps:{treeData:n}})}))));return{registerDrawer:h,registerForm:u,getTitle:c((()=>m(s)?"编辑菜单":"新增菜单")),handleSubmit:function(){return n(this,null,(function*(){try{const t=yield v();if(w({confirmLoading:!0}),0!=t.id&&null!=typeof t.id&&t.id)e=yield x(t);else var e=yield I(t);e&&(y(),r("success"))}finally{w({confirmLoading:!1})}}))}}}});O.render=function(e,t,o,a,l,n){const r=b("BasicForm"),i=b("BasicDrawer");return f(),v(i,y(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:h((()=>[w(r,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});export{S as M,O as _,D as c,B as s};