(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),c=t.n(r),o=(t(21),t(14)),l=t(2),i=t(3),m=t.n(i),f="/api/persons",d=function(){return m.a.get(f).then(function(e){return e.data})},s=function(e){return m.a.post(f,e).then(function(e){return e.data})},b=function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},v=function(e){return m.a.delete("".concat(f,"/").concat(e))},h=function(e){var n=e.value,t=e.onChange;return u.a.createElement("div",null,"filter shown with ",u.a.createElement("input",{value:n,onChange:t}))},p=function(e){var n=e.numbers,t=e.handleDelete;return n.map(function(e){return u.a.createElement("p",{key:e.id},e.name," ",e.number," ",u.a.createElement("button",{onClick:function(){return t(e)}},"delete"))})},E=function(e){var n=e.label,t=e.value,a=e.onChange;return u.a.createElement("div",null,n,": ",u.a.createElement("input",{value:t,onChange:a}))},g=function(e){var n=e.onSubmit,t=e.inputs;return u.a.createElement("form",{onSubmit:n},t.map(function(e){var n=e.label,t=e.value,a=e.onChange;return u.a.createElement(E,{key:n,label:n,value:t,onChange:a})}),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.message,t=e.successful;if(null===n)return null;var a="message "+(t?"":"red");return u.a.createElement("div",{className:a},n)},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(null),i=Object(l.a)(c,2),m=i[0],f=i[1],E=Object(a.useState)(null),O=Object(l.a)(E,2),j=O[0],C=O[1];Object(a.useEffect)(function(){d().then(function(e){r(e)})},[]);var S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],D=k[1],x=Object(a.useState)(""),I=Object(l.a)(x,2),J=I[0],L=I[1],N=Object(a.useState)(""),A=Object(l.a)(N,2),B=A[0],P=A[1],T=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f(e),C(n),setTimeout(function(){f(null)},4e3)},U=[{label:"name",value:y,onChange:function(e){D(e.target.value)}},{label:"number",value:J,onChange:function(e){L(e.target.value)}}],q=B?t.filter(function(e){return e.name.toLowerCase().indexOf(B.toLowerCase())>=0}):t;return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(w,{message:m,successful:j}),u.a.createElement(h,{value:B,onChange:function(e){P(e.target.value)}}),u.a.createElement(g,{onSubmit:function(e){e.preventDefault();var n=t.find(function(e){return e.name===y});if(n&&n.id){if(!window.confirm("".concat(n.name," is already added in the phonebook, replace the old number with a new one?")))return;var a=Object(o.a)({},n,{number:J});return b(n.id,a).then(function(e){r(t.map(function(t){return t.id===n.id?e:t})),T("Updated ".concat(n.name))}),D(""),void L("")}var u={name:y,number:J};s(u).then(function(e){r(t.concat(e)),T("Added ".concat(u.name))}),D(""),L("")},inputs:U}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(p,{numbers:q,handleDelete:function(e){var n=e.name,a=(e.number,e.id);window.confirm("Delete ".concat(n,"?"))&&v(a).catch(function(e){T("Information of ".concat(n," has already been removed from server"),!1)}).finally(function(){r(t.filter(function(e){return e.id!==a}))})}}))};c.a.render(u.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0baae7cd.chunk.js.map