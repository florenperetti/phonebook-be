(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(20),t(2)),l=t(3),i=t.n(l),f="/api/persons",m=function(){return i.a.get(f).then(function(e){return e.data})},d=function(e){return i.a.post(f,e).then(function(e){return e.data})},s=function(e,n){return i.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},b=function(e){return i.a.delete("".concat(f,"/").concat(e))},v=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},h=function(e){var n=e.numbers,t=e.handleDelete;return n.map(function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return t(e)}},"delete"))})},p=function(e){var n=e.label,t=e.value,a=e.onChange;return r.a.createElement("div",null,n,": ",r.a.createElement("input",{value:t,onChange:a}))},E=function(e){var n=e.onSubmit,t=e.inputs;return r.a.createElement("form",{onSubmit:n},t.map(function(e){var n=e.label,t=e.value,a=e.onChange;return r.a.createElement(p,{key:n,label:n,value:t,onChange:a})}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.message,t=e.successful;if(null===n)return null;var a="message "+(t?"":"red");return r.a.createElement("div",{className:a},n)},w=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(null),l=Object(o.a)(c,2),i=l[0],f=l[1],p=Object(a.useState)(null),w=Object(o.a)(p,2),O=w[0],j=w[1];Object(a.useEffect)(function(){m().then(function(e){u(e)})},[]);var C=Object(a.useState)(""),S=Object(o.a)(C,2),y=S[0],k=S[1],D=Object(a.useState)(""),I=Object(o.a)(D,2),x=I[0],J=I[1],L=Object(a.useState)(""),N=Object(o.a)(L,2),A=N[0],B=N[1],P=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f(e),j(n),setTimeout(function(){f(null)},4e3)},T=[{label:"name",value:y,onChange:function(e){k(e.target.value)}},{label:"number",value:x,onChange:function(e){J(e.target.value)}}],U=A?t.filter(function(e){return e.name.toLowerCase().indexOf(A.toLowerCase())>=0}):t;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:i,successful:O}),r.a.createElement(v,{value:A,onChange:function(e){B(e.target.value)}}),r.a.createElement(E,{onSubmit:function(e){e.preventDefault();var n=t.find(function(e){return e.name===y});if(n&&n.id){if(!window.confirm("".concat(n.name," is already added in the phonebook, replace the old number with a new one?")))return;var a={number:x};return s(n.id,a).then(function(e){u(t.map(function(t){return t.id===n.id?e:t})),P("Updated ".concat(n.name))}),k(""),void J("")}var r={name:y,number:x};d(r).then(function(e){u(t.concat(e)),P("Added ".concat(r.name))}).catch(function(e){P(e.response.data.error||"Information of ".concat(y," has already been removed from server"),!1)}),k(""),J("")},inputs:T}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(h,{numbers:U,handleDelete:function(e){var n=e.name,a=(e.number,e.id);window.confirm("Delete ".concat(n,"?"))&&b(a).catch(function(e){P("Information of ".concat(n," has already been removed from server"),!1)}).finally(function(){u(t.filter(function(e){return e.id!==a}))})}}))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9a264f70.chunk.js.map