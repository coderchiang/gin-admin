import{_ as e,u as o}from"./useTable.987c3b87.js";import{_ as t}from"./useForm.675e3b3a.js";import{e as r,dS as i,dT as n,r as s,o as a,m as d,n as l,G as c,H as m}from"./index.5da963b2.js";import{u as p}from"./useDrawer.b89d9ac7.js";import{_ as u,c as f,s as b}from"./RoleDrawer.8e79a0db.js";import"./get.6b33f9f0.js";import"./index.0471517d.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.b03f3a83.js";import"./useExpose.0682e64c.js";import"./index.def285ad.js";import"./UpOutlined.f6a5c259.js";import"./index.0720f544.js";import"./useWindowSizeFn.ed38b6f3.js";import"./useModal.e9f696f2.js";import"./FullscreenOutlined.154838b3.js";import"./index.4f8a523c.js";import"./useSortable.143bde05.js";import"./RedoOutlined.6b053df0.js";import"./_baseIteratee.ead3a974.js";import"./index.f8af06a3.js";import"./index.184fa1e2.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./index.25809687.js";import"./index.954e8ab9.js";import"./Tree.44ce5ced.js";import"./CountdownInput.48c66347.js";import"./download.b91e24b5.js";import"./index.9e073956.js";import"./index.9b98d5bd.js";import"./ArrowLeftOutlined.3c31c900.js";import"./index.vue_vue&type=style&index=0&lang.816f7b17.js";var j=r({name:"RoleManagement",components:{BasicTable:e,RoleDrawer:u,TableAction:t},setup(){const[e,{openDrawer:t}]=p(),[r,{reload:s}]=o({title:"角色列表",api:i,columns:f,formConfig:{labelWidth:120,schemas:b},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return o=this,t=null,r=function*(){(yield n({id:e.id}))&&s()},new Promise(((e,i)=>{var n=e=>{try{a(r.next(e))}catch(o){i(o)}},s=e=>{try{a(r.throw(e))}catch(o){i(o)}},a=o=>o.done?e(o.value):Promise.resolve(o.value).then(n,s);a((r=r.apply(o,t)).next())}));var o,t,r},handleSuccess:function(){s()}}}});const x=m(" 新增角色 ");j.render=function(e,o,t,r,i,n){const m=s("a-button"),p=s("TableAction"),u=s("BasicTable"),f=s("RoleDrawer");return a(),d("div",null,[l(u,{onRegister:e.registerTable},{toolbar:c((()=>[l(m,{type:"primary",onClick:e.handleCreate},{default:c((()=>[x])),_:1},8,["onClick"])])),action:c((({record:o})=>[l(p,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),l(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;