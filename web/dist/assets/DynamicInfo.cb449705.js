import{C as t}from"./index.3abbe753.js";import{L as e}from"./index.1fd36c68.js";import{e as a,aW as s,r as i,o as r,m as n,G as o,n as m,H as d,p as c,q as l}from"./index.5da963b2.js";import"./index.c0d37451.js";import"./index.184fa1e2.js";import{d as p}from"./data.8ddc77c3.js";import{h as u}from"./header.d801b988.js";import"./index.25809687.js";import"./vendor.afa0338c.js";import"./UpOutlined.f6a5c259.js";import"./responsiveObserve.c545f1cc.js";var f=a({components:{Card:t,List:e,ListItem:e.Item,ListItemMeta:e.Item.Meta,Icon:s},setup:()=>({items:p,headerImg:u})});const j=d("更多");f.render=function(t,e,a,s,p,u){const f=i("a-button"),I=i("Icon"),L=i("ListItemMeta"),x=i("ListItem"),b=i("List"),v=i("Card");return r(),n(v,l({title:"最新动态"},t.$attrs),{extra:o((()=>[m(f,{type:"link",size:"small"},{default:o((()=>[j])),_:1})])),default:o((()=>[m(b,{"item-layout":"horizontal","data-source":t.items},{renderItem:o((({item:t})=>[m(x,null,{default:o((()=>[m(L,null,{description:o((()=>[d(c(t.date),1)])),title:o((()=>[d(c(t.name)+" ",1),m("span",{innerHTML:t.desc},null,8,["innerHTML"])])),avatar:o((()=>[m(I,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default f;