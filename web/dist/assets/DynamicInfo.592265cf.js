import{j as t,bq as a,bt as e,K as s,o as i,m as r,P as n,n as o,X as m,q as d,N as l}from"./vendor.0af35baf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as u}from"./data.8ddc77c3.js";import{h as c}from"./header.d801b988.js";import{_ as p}from"./index.b0556464.js";var f=t({components:{Card:a,List:e,ListItem:e.Item,ListItemMeta:e.Item.Meta,Icon:p},setup:()=>({items:u,headerImg:c})});const I=m("更多");f.render=function(t,a,e,u,c,p){const f=s("a-button"),j=s("Icon"),b=s("ListItemMeta"),L=s("ListItem"),x=s("List"),_=s("Card");return i(),r(_,l({title:"最新动态"},t.$attrs),{extra:n((()=>[o(f,{type:"link",size:"small"},{default:n((()=>[I])),_:1})])),default:n((()=>[o(x,{"item-layout":"horizontal","data-source":t.items},{renderItem:n((({item:t})=>[o(L,null,{default:n((()=>[o(b,null,{description:n((()=>[m(d(t.date),1)])),title:n((()=>[m(d(t.name)+" ",1),o("span",{innerHTML:t.desc},null,8,["innerHTML"])])),avatar:n((()=>[o(j,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default f;
