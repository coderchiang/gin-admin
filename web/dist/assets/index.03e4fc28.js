import{_ as e,u as t}from"./useTable.2f60a6cb.js";import{_ as o}from"./useForm.d045c234.js";import{e as n,dZ as r,d_ as i,r as a,o as s,m as c,G as d,n as l,H as p}from"./index.68b063a3.js";import{_ as m}from"./PageWrapper.cc97e28e.js";import u from"./DeptTree.3cbe64fc.js";import{u as f}from"./useModal.25cd8337.js";import{_ as b,c as j,s as x}from"./UserModal.6001d13a.js";import"./get.d1eb9b8c.js";import"./index.ef68a7bf.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.8e28c5e9.js";import"./useExpose.9271c60f.js";import"./index.f7ca803f.js";import"./UpOutlined.0b769dce.js";import"./index.f44ccccc.js";import"./useWindowSizeFn.6acf9c9d.js";import"./index.bd46097d.js";import"./useSortable.0aea612b.js";import"./RedoOutlined.e1c782ad.js";import"./_baseIteratee.32660cd7.js";import"./FullscreenOutlined.f927a0f3.js";import"./index.0db91591.js";import"./index.63a2b53f.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./index.5b570adf.js";import"./index.027b51e9.js";import"./Tree.ce169aac.js";import"./CountdownInput.b6b53b85.js";import"./download.d4c7a13e.js";import"./index.216e03ab.js";import"./usePageContext.b66477c8.js";import"./index.2388c631.js";import"./index.a797a4e2.js";import"./ArrowLeftOutlined.04e31db0.js";import"./index.vue_vue&type=style&index=0&lang.25ea6e7b.js";var h=n({name:"AccountManagement",components:{BasicTable:e,PageWrapper:m,DeptTree:u,AccountModal:b,TableAction:o},setup(){const[e,{openModal:o}]=f(),[n,{reload:a}]=t({title:"账号列表",api:r,columns:j,formConfig:{labelWidth:120,schemas:x},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return t=this,o=null,n=function*(){(yield i({id:e.id}))&&a()},new Promise(((e,r)=>{var i=e=>{try{s(n.next(e))}catch(t){r(t)}},a=e=>{try{s(n.throw(e))}catch(t){r(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,a);s((n=n.apply(t,o)).next())}));var t,o,n},handleSuccess:function(){a()},handleSelect:function(e=""){a({searchInfo:{deptId:e}})}}}});const g=p("新增账号");h.render=function(e,t,o,n,r,i){const p=a("DeptTree"),m=a("a-button"),u=a("TableAction"),f=a("BasicTable"),b=a("AccountModal"),j=a("PageWrapper");return s(),c(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:d((()=>[l(p,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),l(f,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:d((()=>[l(m,{type:"primary",onClick:e.handleCreate},{default:d((()=>[g])),_:1},8,["onClick"])])),action:d((({record:t})=>[l(u,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),l(b,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default h;
