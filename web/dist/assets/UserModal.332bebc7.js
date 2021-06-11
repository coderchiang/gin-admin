var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,l=(e,t,o)=>new Promise(((a,r)=>{var l=e=>{try{i(o.next(e))}catch(t){r(t)}},n=e=>{try{i(o.throw(e))}catch(t){r(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,n);i((o=o.apply(e,t)).next())}));import{_ as n,b as i}from"./useModal.195fb168.js";import{f as s,g as d}from"./useForm.7863dcf9.js";import{g as p}from"./role.5894dfab.js";import{a as c,e as m}from"./user.91d7e9c0.js";import{g as u}from"./dept.4c94e5cb.js";import{j as f,r as b,u as h,i as g,K as y,o as w,m as v,P as I,n as P,N as j}from"./vendor.0af35baf.js";const x=[{title:"用户名",dataIndex:"username",width:120},{title:"手机号",dataIndex:"phone",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"roleName",width:200},{title:"备注",dataIndex:"remark"}],F=[{field:"username",label:"用户名",component:"Input",colProps:{span:8}},{field:"phone",label:"手机号",component:"Input",colProps:{span:8}}],O=[{field:"id",label:"id",component:"Input",show:!1},{field:"username",label:"用户名",component:"Input",required:!0},{field:"pwd",label:"密码",component:"InputPassword",required:!0,show:!1},{field:"role_id",label:"role_id",component:"Input",show:!1},{label:"角色",field:"roleName",component:"ApiSelect",componentProps:{api:p,labelField:"roleName",valueField:"id"},required:!0},{field:"deptName",label:"所属部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"phone",label:"手机号",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}];var M=f({name:"AccountModal",components:{BasicModal:n,BasicForm:s},emits:["success","register"],setup(e,{emit:n}){const s=b(!0),[p,{setFieldsValue:f,updateSchema:y,resetFields:w,validate:v}]=d({labelWidth:100,schemas:O,showActionButtonGroup:!1,actionColOptions:{span:23}}),[I,{setModalProps:P,closeModal:j}]=i((e=>l(this,null,(function*(){w(),P({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),h(s)&&f(((e,l)=>{for(var n in l||(l={}))o.call(l,n)&&r(e,n,l[n]);if(t)for(var n of t(l))a.call(l,n)&&r(e,n,l[n]);return e})({},e.record));const l=(yield u()).items;y([{field:"pwd",show:!h(s)},{field:"deptName",componentProps:{treeData:l}}])}))));return{registerModal:I,registerForm:p,getTitle:g((()=>h(s)?"编辑账号":"新增账号")),handleSubmit:function(){return l(this,null,(function*(){try{const t=yield v();if(P({confirmLoading:!0}),0!=t.id&&null!=typeof t.id&&t.id)e=yield m(t);else var e=yield c(t);e&&(j(),n("success"))}finally{P({confirmLoading:!1})}}))}}}});M.render=function(e,t,o,a,r,l){const n=y("BasicForm"),i=y("BasicModal");return w(),v(i,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:I((()=>[P(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});export{_ as U,M as _,x as c,F as s};
