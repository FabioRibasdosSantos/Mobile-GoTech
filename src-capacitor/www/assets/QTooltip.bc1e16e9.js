import{f as ee,ar as te,as as ae,at as oe,j as O,g as f,au as ne,av as ie,aw as le,ax as se,ay as re,x,m as C,ao as E,an as k,B as ue,h as H,aE as ce,q as de,i as fe,P as ve}from"./index.90546432.js";import{u as he,v as q,d as ge,p as A,e as me,f as ye,r as j,s as Te,c as D,g as pe}from"./QMenu.b9563a48.js";var Se=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:q},self:{type:String,default:"top middle",validator:q},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...oe],setup(e,{slots:M,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>A(e.anchor,o.lang.rtl)),Q=f(()=>A(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:B,removeTick:N}=ne(),{registerTimeout:d}=ie(),{transitionProps:R,transitionStyle:_}=le(e),{localScrollTarget:T,changeScrollEvent:I,unconfigureScrollTarget:U}=me(e,S),{anchorEl:a,canShow:V,anchorEvents:r}=ye({showing:c,configureAnchorEl:X}),{show:$,hide:g}=se({showing:c,canShow:V,handleShow:F,handleHide:G,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:p,hidePortal:b,renderPortal:z}=re(h,s,Z,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);x(m,n=>{(n===!0?pe:j)(t)}),C(()=>{j(t)})}function F(t){p(),B(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),S()}),i===void 0&&(i=x(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function G(t){N(),b(),P(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function P(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),U(),E(r,"tooltipTemp")}function u(){const t=s.value;a.value===null||!t||Te({el:t,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(o.platform.is.mobile===!0){D(),document.body.classList.add("non-selectable");const m=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);k(r,"tooltipTemp",n)}d(()=>{$(t)},e.delay)}function K(t){o.platform.is.mobile===!0&&(E(r,"tooltipTemp"),D(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];k(r,"anchor",t)}function S(){if(a.value!==null||e.scrollTarget!==void 0){T.value=ue(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;I(T.value,t)}}function Y(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,_.value],role:"tooltip"},fe(M.default)):null}function Z(){return H(ce,R.value,Y)}return C(P),Object.assign(h.proxy,{updatePosition:u}),z}});export{Se as Q};
