import{_ as e}from"./index.vue_vue&type=style&index=0&lang.816f7b17.js";import{e as t,v as a,w as r,dG as n,r as s,o,m as i,n as c}from"./index.5da963b2.js";import"./Tree.44ce5ced.js";import"./useExpose.0682e64c.js";import"./index.4f8a523c.js";import"./get.6b33f9f0.js";import"./vendor.afa0338c.js";var l=t({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:t}){const s=a([]);function o(){return e=this,t=null,a=function*(){const e=yield n();s.value=e.items},new Promise(((r,n)=>{var s=e=>{try{i(a.next(e))}catch(t){n(t)}},o=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,o);i((a=a.apply(e,t)).next())}));var e,t,a}return r((()=>{o()})),{treeData:s,handleSelect:function(e,a){t("select",e[0])}}}});const d={class:"m-4 mr-0 overflow-hidden bg-white"};l.render=function(e,t,a,r,n,l){const m=s("BasicTree");return o(),i("div",d,[c(m,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;