import{bM as e,n,bN as o,bO as a}from"./index.ed192900.js";function s(s,t={}){const{size:i="small",delay:r=100,timeout:l=3e4,loading:d=!1,retry:m=!0}=t;return e({loader:s,loadingComponent:d?n(o,{spinning:!0,size:i},null):void 0,timeout:l,delay:r,onError:m?(e,n,o,a)=>{e.message.match(/fetch/)&&a<=3?n():o()}:a})}export{s as c};
