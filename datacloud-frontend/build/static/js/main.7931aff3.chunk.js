(this["webpackJsonpdatacloud-frontend"]=this["webpackJsonpdatacloud-frontend"]||[]).push([[0],{171:function(e,t,a){e.exports=a(298)},176:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(37),c=a.n(l),r=(a(176),a(71)),u=a(95),i=a(100),d=a(317),h=a(314),m=a(310),s=a(311),k=a(312),p=a(316),E=a(315),v=a(313);var b=function(){var e=Object(n.useReducer)((function(e,t){return Object(u.a)(Object(u.a)({},e),t)}),{newToken:"",key:"",newKey:"",value:"",token:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({}),b=Object(i.a)(c,2),f=b[0],y=b[1];Object(n.useEffect)((function(){fetch("https://data-clouds.herokuapp.com/api/token",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return l({newToken:e.token})}))}),[]);var w=a.newToken,j=a.token,O=a.key,g=a.value,C=a.newKey,T=function(e){l(Object(r.a)({},e.target.name,e.target.value))};return o.a.createElement("div",{style:{margin:"1em"}},o.a.createElement(d.a,{content:"Create Key and Value"}),o.a.createElement(h.a,null,o.a.createElement(h.a.Group,{widths:"equal"},o.a.createElement(h.a.Field,{value:w,name:"newToken",label:"Token",onChange:T,control:m.a,placeholder:"Enter a token"}),o.a.createElement(h.a.Field,{value:C,name:"newKey",label:"Key",onChange:T,control:m.a,placeholder:"Enter a key to identify value"})),o.a.createElement(h.a.Field,{value:g,name:"value",label:"Value",onChange:T,control:s.a,placeholder:"Enter data to be saved"}),o.a.createElement(h.a.Button,{type:"button",onClick:function(){fetch("https://data-clouds.herokuapp.com/api/value",{method:"POST",headers:{"Content-Type":"application/json",token:w},body:JSON.stringify({key:C,value:g})})},disabled:Object(E.a)(w)},"Create")),o.a.createElement(k.a,{hidden:!0}),o.a.createElement(d.a,{content:"Get Value"}),o.a.createElement(h.a,null,o.a.createElement(h.a.Group,{widths:"equal"},o.a.createElement(h.a.Field,{value:j,name:"token",label:"Token",onChange:T,control:m.a,placeholder:"Enter a token"}),o.a.createElement(h.a.Field,{value:O,name:"key",label:"Key",onChange:T,control:m.a,placeholder:"Enter a key to identify value"})),o.a.createElement(h.a.Button,{type:"button",onClick:function(){fetch("https://data-clouds.herokuapp.com/api/value/".concat(O),{method:"GET",headers:{token:j}}).then((function(e){return e.json()})).then((function(e){return y(e.value)}))},disabled:Object(E.a)(j)},"Get")),o.a.createElement(k.a,{hidden:!0}),!Object(v.a)(f)&&!Object(E.a)(f)&&o.a.createElement("span",null,"".concat(f.key,": ").concat(f.value)),Object(v.a)(f)&&o.a.createElement(p.a,{error:!0},"No value matches the provided token and key."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.7931aff3.chunk.js.map