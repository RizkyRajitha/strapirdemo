(self.webpackChunkrbfx=self.webpackChunkrbfx||[]).push([[92],{69666:function(L,E,t){(function(e,c){L.exports=c(t(67294))})(this,function(e){return function(c){var o={};function s(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return c[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=c,s.c=o,s.d=function(n,i,d){s.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:d})},s.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,i){if(1&i&&(n=s(n)),8&i||4&i&&typeof n=="object"&&n&&n.__esModule)return n;var d=Object.create(null);if(s.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:n}),2&i&&typeof n!="string")for(var m in n)s.d(d,m,function(y){return n[y]}.bind(null,m));return d},s.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(i,"a",i),i},s.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},s.p="",s(s.s=100)}({0:function(c,o){c.exports=e},100:function(c,o,s){"use strict";s.r(o);var n=s(0);function i(){return(i=Object.assign||function(d){for(var m=1;m<arguments.length;m++){var y=arguments[m];for(var T in y)Object.prototype.hasOwnProperty.call(y,T)&&(d[T]=y[T])}return d}).apply(this,arguments)}o.default=function(d){return n.createElement("svg",i({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),n.createElement("path",{d:"M17 14h-4.34a6 6 0 110-4H23v4h-2v4h-4v-4zM7 14a2 2 0 100-4 2 2 0 000 4z",fill:"#8E8EA9"}))}}})})},88449:(L,E,t)=>{"use strict";t.d(E,{Z:()=>re});var e=t(67294),c=t(97132),o=t(68547),s=t(78862),n=t(62031),i=t(19408),d=t(84734),m=t.n(d),y=t(68717),T=t.n(y),Z=t(80831),K=t(9008),z=t(5493),H=t(49425),O=t(34626),$=t(55967),Q=t(59626),B=t(43808),X=t(27361),J=t.n(X),N=t(49656),Y=t(23724),w=t(8610),b=t(23998),x=t(53209);const q=x.Ry().shape({name:x.Z_(o.translatedErrors.string).required(o.translatedErrors.required),type:x.Z_(o.translatedErrors.string).oneOf(["read-only","full-access"]).required(o.translatedErrors.required),description:x.Z_().nullable()});var _=t(45697),U=t.n(_);const D=({apiTokenName:u})=>{const{formatMessage:a}=(0,c.useIntl)();return(0,o.useFocusWhenNavigate)(),e.createElement(n.Main,{"aria-busy":"true"},e.createElement(o.SettingsPageTitle,{name:"API Tokens"}),e.createElement(s.HeaderLayout,{primaryAction:e.createElement(i.Button,{disabled:!0,startIcon:e.createElement(m(),null),type:"button",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:u||a({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),e.createElement(s.ContentLayout,null,e.createElement(o.LoadingIndicatorPage,null)))};D.defaultProps={apiTokenName:null},D.propTypes={apiTokenName:U().string};const ee=D;var te=t(30741),ne=t(67483),ae=t.n(ne),oe=t(74855),se=t(69666),ie=t.n(se);const R=({apiToken:u})=>{const{formatMessage:a}=(0,c.useIntl)(),l=(0,o.useNotification)(),{trackUsage:h}=(0,o.useTracking)(),v=(0,e.useRef)(h);return e.createElement(o.ContentBox,{endAction:u&&e.createElement("span",{style:{alignSelf:"start"}},e.createElement(oe.CopyToClipboard,{onCopy:()=>{v.current("didCopyTokenKey"),l({type:"success",message:{id:"Settings.apiTokens.notification.copied"}})},text:u},e.createElement(te.IconButton,{label:a({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:e.createElement(ae(),null),style:{padding:0,height:"1rem"}}))),title:u||a({id:"Settings.apiTokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:a(u?{id:"Settings.apiTokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.apiTokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:e.createElement(ie(),null),iconBackground:"neutral100"})};R.defaultProps={apiToken:null},R.propTypes={apiToken:U().string};const le=R;var j=(u,a,l)=>new Promise((h,v)=>{var M=p=>{try{C(l.next(p))}catch(P){v(P)}},k=p=>{try{C(l.throw(p))}catch(P){v(P)}},C=p=>p.done?h(p.value):Promise.resolve(p.value).then(M,k);C((l=l.apply(u,a)).next())});const re=()=>{var u;let a;(0,o.useFocusWhenNavigate)();const{formatMessage:l}=(0,c.useIntl)(),{lockApp:h,unlockApp:v}=(0,o.useOverlayBlocker)(),M=(0,o.useNotification)(),k=(0,N.useHistory)(),{trackUsage:C}=(0,o.useTracking)(),p=(0,e.useRef)(C),{setCurrentStep:P}=(0,o.useGuidedTour)(),{params:{id:I}}=(0,N.useRouteMatch)("/settings/api-tokens/:id"),f=I==="create";(0,e.useEffect)(()=>{p.current(f?"didAddTokenFromList":"didEditTokenFromList")},[f]),(u=k.location.state)!=null&&u.apiToken.accessKey&&(a=k.location.state.apiToken);const{status:de,data:F}=(0,Y.useQuery)(["api-token",I],()=>j(void 0,null,function*(){const{data:{data:r}}=yield b.be.get(`/admin/api-tokens/${I}`);return r}),{enabled:!f&&!a,onError(){M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}});F&&(a=F);const ce=(r,S)=>j(void 0,null,function*(){p.current(f?"willCreateToken":"willEditToken"),h();try{const{data:{data:g}}=f?yield b.be.post("/admin/api-tokens",r):yield b.be.put(`/admin/api-tokens/${I}`,r);a=g,M({type:"success",message:l({id:"notification.success.saved",defaultMessage:"Saved"})}),p.current(f?"didCreateToken":"didEditToken",{type:a.type}),f&&(k.replace(`/settings/api-tokens/${g.id}`,{apiToken:g}),P("apiTokens.success"))}catch(g){const A=(0,w.Iz)(g.response.data);S.setErrors(A),M({type:"warning",message:J()(g,"response.data.message","notification.error")})}v()});return!f&&!a&&de!=="success"?e.createElement(ee,{apiTokenName:a==null?void 0:a.name}):e.createElement(n.Main,null,e.createElement(o.SettingsPageTitle,{name:"API Tokens"}),e.createElement(Z.Formik,{validationSchema:q,validateOnChange:!1,initialValues:{name:(a==null?void 0:a.name)||"",description:(a==null?void 0:a.description)||"",type:(a==null?void 0:a.type)||"read-only"},onSubmit:ce},({errors:r,handleChange:S,isSubmitting:g,values:A})=>{var V,W,G;return e.createElement(o.Form,null,e.createElement(s.HeaderLayout,{title:(a==null?void 0:a.name)||l({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"}),primaryAction:e.createElement(i.Button,{disabled:g,loading:g,startIcon:e.createElement(m(),null),type:"submit",size:"L"},l({id:"global.save",defaultMessage:"Save"})),navigationAction:e.createElement(o.Link,{startIcon:e.createElement(T(),null),to:"/settings/api-tokens"},l({id:"global.back",defaultMessage:"Back"}))}),e.createElement(s.ContentLayout,null,e.createElement(K.Stack,{spacing:6},Boolean(a==null?void 0:a.name)&&e.createElement(le,{apiToken:a.accessKey}),e.createElement(z.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(K.Stack,{spacing:4},e.createElement(H.Typography,{variant:"delta",as:"h2"},l({id:"global.details",defaultMessage:"Details"})),e.createElement(O.Grid,{gap:5},e.createElement(O.GridItem,{key:"name",col:6,xs:12},e.createElement($.TextInput,{name:"name",error:r.name?l((V=r.name)!=null&&V.id?r.name:{id:r.name,defaultMessage:r.name}):null,label:l({id:"Settings.apiTokens.form.name",defaultMessage:"Name"}),onChange:S,value:A.name,required:!0})),e.createElement(O.GridItem,{key:"description",col:6,xs:12},e.createElement(Q.Textarea,{label:l({id:"Settings.apiTokens.form.description",defaultMessage:"Description"}),name:"description",error:r.description?l((W=r.description)!=null&&W.id?r.description:{id:r.description,defaultMessage:r.description}):null,onChange:S},A.description)),e.createElement(O.GridItem,{key:"type",col:6,xs:12},e.createElement(B.Select,{name:"type",label:l({id:"Settings.apiTokens.form.type",defaultMessage:"Token type"}),value:A.type,error:r.type?l((G=r.type)!=null&&G.id?r.type:{id:r.type,defaultMessage:r.type}):null,onChange:ue=>{S({target:{name:"type",value:ue}})}},e.createElement(B.Option,{value:"read-only"},l({id:"Settings.apiTokens.types.read-only",defaultMessage:"Read-only"})),e.createElement(B.Option,{value:"full-access"},l({id:"Settings.apiTokens.types.full-access",defaultMessage:"Full access"}))))))))))}))}},28465:(L,E,t)=>{"use strict";t.r(E),t.d(E,{default:()=>d});var e=t(67294),c=t(68547),o=t.n(c),s=t(87751),n=t(88449);const d=()=>e.createElement(c.CheckPagePermissions,{permissions:s.Z.settings["api-tokens"].update},e.createElement(n.Z,null))}}]);
