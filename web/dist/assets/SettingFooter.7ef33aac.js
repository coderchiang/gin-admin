import{I as e,c as t,e as a,Y as s,f as o,U as n,b0 as l,a6 as r,aV as c,aW as i,h as d}from"./index.3d8324dd.js";import{j as u,c2 as f,bf as g,u as p,K as C,o as y,m,n as S,X as k,q as h,x as b}from"./vendor.0af35baf.js";var x=u({name:"SettingFooter",components:{CopyOutlined:f,RedoOutlined:g},setup(){const u=e(),{prefixCls:f}=t("setting-footer"),{t:g}=a(),{createSuccessModal:C,createMessage:y}=d(),m=s(),S=o(),k=n();return{prefixCls:f,t:g,handleCopy:function(){const{isSuccessRef:e}=l(JSON.stringify(p(k.getProjectConfig),null,2));p(e)&&C({title:g("layout.setting.operatingTitle"),content:g("layout.setting.operatingContent")})},handleResetSetting:function(){try{k.setProjectConfig(r);const{colorWeak:e,grayMode:t}=r;c(e),i(t),y.success(g("layout.setting.resetSuccess"))}catch(e){y.error(e)}},handleClearAndRedo:function(){localStorage.clear(),k.resetAllState(),u.resetState(),m.resetState(),S.resetState(),location.reload()}}}});const R=b(),j=R(((e,t,a,s,o,n)=>{const l=C("CopyOutlined"),r=C("a-button"),c=C("RedoOutlined");return y(),m("div",{class:e.prefixCls},[S(r,{type:"primary",block:"",onClick:e.handleCopy},{default:R((()=>[S(l,{class:"mr-2"}),k(" "+h(e.t("layout.setting.copyBtn")),1)])),_:1},8,["onClick"]),S(r,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:R((()=>[S(c,{class:"mr-2"}),k(" "+h(e.t("common.resetText")),1)])),_:1},8,["onClick"]),S(r,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:R((()=>[S(c,{class:"mr-2"}),k(" "+h(e.t("layout.setting.clearBtn")),1)])),_:1},8,["onClick"])],2)}));x.render=j,x.__scopeId="data-v-c36cd858";export default x;