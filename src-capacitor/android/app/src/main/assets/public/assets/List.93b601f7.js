import{Q as w,a as $}from"./QTable.c2054143.js";import{_ as C,d as N,j as g,I as V,l as q,o as c,c as m,w as o,e as _,a as s,K as i,aK as h,aH as y}from"./index.d7174012.js";import{Q as v}from"./QTooltip.bed4ab08.js";import{Q as B}from"./QTd.966ae22d.js";import{Q as E}from"./QPageSticky.30c0f773.js";import{Q as R}from"./QPage.9f684324.js";import{u as T}from"./UseApi.a2b77885.js";import{u as L}from"./UseNotify.a6c7e20c.js";import{u as S}from"./use-quasar.123b33d8.js";import"./QList.9641f842.js";import"./QSelect.305f4da8.js";import"./QMenu.d5988db2.js";import"./format.93d0c760.js";import"./use-fullscreen.3cb924bc.js";const z=[{name:"nome",align:"left",label:"Nome",field:"nome",sortable:!0},{name:"actions",align:"right",label:"Presen\xE7a",field:"actions",sortable:!1}],A=N({name:"PageProfessorList",setup(){const e=g([]),t=g(!0),d=V(),l="Professor",f=S(),{list:u,remove:r}=T(),{notifyError:n,notifySuccess:Q}=L(),p=async()=>{try{t.value=!0,e.value=await u(l),t.value=!1}catch(a){n(a.message)}},k=a=>{d.push({name:"form-professor",params:{id:a.id}})},P=async a=>{try{f.dialog({title:"Confirma",message:`Voc\xEA est\xE1 certo de deletar ${a.value.nome} ?`,cancel:!0,persistent:!0}).onOk(async()=>{await r(l,a.value.id),Q("Delete com sucesso"),p()})}catch(b){n(b.message)}};return q(()=>{p()}),{columnsProfessor:z,professor:e,loading:t,handleEdit:k,handleRemoveProfessor:P}}}),K={class:"rows"},j=_("span",{class:"text-h6"}," Professor ",-1);function D(e,t,d,l,f,u){return c(),m(R,{padding:""},{default:o(()=>[_("div",K,[s($,{rows:e.professor,columns:e.columnsProfessor,"row-key":"id",class:"col-12",loading:e.loading},{top:o(()=>[j,s(w),e.$q.platform.is.desktop?(c(),m(i,{key:0,label:"Adicionar",color:"secondary",icon:"mdi-plus",dense:"",to:{name:"form-professor"}})):h("",!0)]),"body-cell-actions":o(r=>[s(B,{props:r,class:"q-gutter-x-sm"},{default:o(()=>[s(i,{icon:"mdi-pencil-outline",color:"info",dense:"",size:"sm",onClick:n=>e.handleEdit(r.row)},{default:o(()=>[s(v,null,{default:o(()=>[y(" Edit ")]),_:1})]),_:2},1032,["onClick"]),s(i,{icon:"mdi-delete-outline",color:"negative",dense:"",size:"sm",onClick:n=>e.handleRemoveProfessor(r.row)},{default:o(()=>[s(v,null,{default:o(()=>[y(" Remove ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),s(E,{position:"bottom-right",offset:[18,18]},{default:o(()=>[e.$q.platform.is.mobile?(c(),m(i,{key:0,fab:"",icon:"mdi-plus",color:"secondary",to:{name:"form-professor"}})):h("",!0)]),_:1})]),_:1})}var oe=C(A,[["render",D]]);export{oe as default};
