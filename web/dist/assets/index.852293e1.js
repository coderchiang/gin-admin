import{L as e}from"./index.ddba9b88.js";import{e as o,j as t,a$ as s,g as a,k as i,A as r,aB as n,bp as d,e2 as l,e3 as p,r as c,o as u,m,n as f,p as b,L as j,aA as _}from"./index.4d27a91d.js";import{D as C,G as F,S as x}from"./siteSetting.c485f07c.js";import{G as L}from"./GithubFilled.bc864c72.js";import"./createAsyncComponent.f9010e57.js";import"./RedoOutlined.29dcc5cf.js";import"./_baseIteratee.370a9985.js";import"./get.b9cb18d5.js";import"./FullscreenOutlined.db4f21f5.js";import"./index.245348f2.js";import"./useWindowSizeFn.7824eed0.js";import"./vendor.afa0338c.js";import"./usePageContext.ab260ab5.js";import"./index.c0a46484.js";import"./index.d640caef.js";import"./UpOutlined.bc93ab47.js";import"./useSortable.8e73d10d.js";var g=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:L},setup(){const{t:e}=t(),{getShowFooter:o}=d(),{currentRoute:l}=s(),{prefixCls:p}=a("layout-footer");return{getShowLayoutFooter:i((()=>{var e;return r(o)&&!(null==(e=r(l).meta)?void 0:e.hiddenFooter)})),prefixCls:p,t:e,DOC_URL:C,GITHUB_URL:F,SITE_URL:x,openWindow:n}}});const h=_();l("data-v-183dcd01");const v=f("div",null,"Copyright ©2020 Vben Admin",-1);p();const w=h(((e,o,t,s,a,i)=>{const r=c("GithubFilled"),n=c("Footer");return e.getShowLayoutFooter?(u(),m(n,{key:0,class:e.prefixCls},{default:h((()=>[f("div",{class:`${e.prefixCls}__links`},[f("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},b(e.t("layout.footer.onlinePreview")),1),f(r,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),f("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},b(e.t("layout.footer.onlineDocument")),1)],2),v])),_:1},8,["class"])):j("",!0)}));g.render=w,g.__scopeId="data-v-183dcd01";export default g;