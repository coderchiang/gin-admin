import r from"./DetailModal.e404a6d6.js";import{_ as e,u as o}from"./useTable.2a09052f.js";import{_ as t}from"./useForm.846cb87f.js";import{u as i}from"./useModal.dcdf213c.js";import{e as a,ai as s}from"./index.55b83891.js";import{getColumns as n}from"./data.c1942f20.js";import{j as l,r as c,C as d,J as f,al as m,K as u,o as p,m as j,S as b,ag as g,w as x,v as y,n as v,P as E,X as h,q as w}from"./vendor.0af35baf.js";import"./useDescription.262e121a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.2da1ca2c.js";import"./onMountedOrActivated.28436c92.js";/* empty css              */import"./useSortable.0f55f0a0.js";import"./useExpose.615d046e.js";/* empty css              *//* empty css              *//* empty css              */import"./index.a6f068af.js";import"./download.95bd8f97.js";import"./StrengthMeter.d536ccd9.js";var C=l({name:"ErrorHandler",components:{DetailModal:r,BasicTable:e,TableAction:t},setup(){const r=c(),e=c([]),{t:t}=a(),l=s(),[u,{setTableData:p}]=o({title:t("sys.errorLog.tableTitle"),columns:n(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[j,{openModal:b}]=i();return d((()=>l.getErrorLogInfoList),(r=>{f((()=>{p(m(r))}))}),{immediate:!0}),{register:u,registerModal:j,handleDetail:function(e){r.value=e,b(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){e.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return r=this,e=null,o=function*(){},new Promise(((t,i)=>{var a=r=>{try{n(o.next(r))}catch(e){i(e)}},s=r=>{try{n(o.throw(r))}catch(e){i(e)}},n=r=>r.done?t(r.value):Promise.resolve(r.value).then(a,s);n((o=o.apply(r,e)).next())}));var r,e,o},imgList:e,rowInfo:r,t:t}}});const D={class:"p-4"};C.render=function(r,e,o,t,i,a){const s=u("DetailModal"),n=u("a-button"),l=u("TableAction"),c=u("BasicTable");return p(),j("div",D,[(p(!0),j(b,null,g(r.imgList,(r=>x((p(),j("img",{key:r,src:r},null,8,["src"])),[[y,!1]]))),128)),v(s,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),v(c,{onRegister:r.register,class:"error-handle-table"},{toolbar:E((()=>[v(n,{onClick:r.fireVueError,type:"primary"},{default:E((()=>[h(w(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),v(n,{onClick:r.fireResourceError,type:"primary"},{default:E((()=>[h(w(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),v(n,{onClick:r.fireAjaxError,type:"primary"},{default:E((()=>[h(w(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:e})=>[v(l,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default C;