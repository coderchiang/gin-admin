import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.b84363f0.js";import{g as t}from"./dept.582a1883.js";import{j as a,r,I as n,K as s,o,m as l,n as i}from"./vendor.0af35baf.js";import"./index.36aa7878.js";/* empty css              */import"./useExpose.615d046e.js";var c=a({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:a}){const s=r([]);function o(){return e=this,a=null,r=function*(){const e=yield t();s.value=e.items},new Promise(((t,n)=>{var s=e=>{try{l(r.next(e))}catch(t){n(t)}},o=e=>{try{l(r.throw(e))}catch(t){n(t)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);l((r=r.apply(e,a)).next())}));var e,a,r}return n((()=>{o()})),{treeData:s,handleSelect:function(e,t){a("select",e[0])}}}});const d={class:"m-4 mr-0 overflow-hidden bg-white"};c.render=function(e,t,a,r,n,c){const m=s("BasicTree");return o(),l("div",d,[i(m,{title:"部门列表",treeData:e.treeData,toolbar:"",search:"",clickRowToExpand:!0,replaceFields:{key:"id",title:"deptName"},defaultExpandAll:"",onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default c;