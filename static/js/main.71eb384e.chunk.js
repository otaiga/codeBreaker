(this.webpackJsonpcodebreaker=this.webpackJsonpcodebreaker||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),l=c.n(n),s=c(7),a=c.n(s),d=(c(13),c(6)),o=c(2),b=[null,"bg-red-500","bg-green-500","bg-yellow-500","bg-orange-500","bg-black","bg-white"],i=function(e){var t=e.currentRow,c=e.rowIndex,l=e.pegIndex,s=e.handlePegColor,a=Object(n.useState)(0),d=Object(o.a)(a,2),i=d[0],j=d[1];return Object(r.jsx)("div",{className:"border mx-2 border-black rounded-full ".concat(b[i]," sm:h-12 sm:w-12 h-10 w-10"),onClick:function(){if(t===c){var e=i+1;e>b.length-1&&(e=1),s(l,e),j(e)}}})},j=function(e){var t=e.keyPegColorIndex,c=[null,"bg-black","bg-green-500"];return Object(r.jsxs)("div",{className:"border rounded border-black p-2",children:[Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)("div",{className:"border border-black rounded-full h-2 w-2 ".concat(c[t?t[0]:null])}),Object(r.jsx)("div",{className:"border border-black rounded-full h-2 w-2 ".concat(c[t?t[1]:null])})]}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)("div",{className:"border border-black rounded-full h-2 w-2 ".concat(c[t?t[2]:null])}),Object(r.jsx)("div",{className:"border border-black rounded-full h-2 w-2 ".concat(c[t?t[3]:null])})]})]})},u=function(){var e=function(){return Math.floor(Math.random()*(b.length-1)+1)},t=function(){return[e(),e(),e(),e()]},c=Object(n.useState)(9),l=Object(o.a)(c,2),s=l[0],a=l[1],u=Object(n.useState)([0,0,0,0]),x=Object(o.a)(u,2),h=x[0],f=x[1],O=Object(n.useState)(t()),g=Object(o.a)(O,2),m=g[0],v=g[1],p=Object(n.useState)([]),w=Object(o.a)(p,2),N=w[0],k=w[1],y=function(){f([0,0,0,0]),v(t()),a(9)},I=function(e,t){var c=Object(d.a)(h);c[e]=t,f(c)};return Object(r.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(r.jsx)("div",{className:"flex-none",children:Object(r.jsx)("div",{className:"bg-gray-500",children:Object(r.jsx)("p",{className:"text-2xl text-white p-4 text-center",children:"Code Breaker!"})})}),Object(r.jsx)("div",{className:"bg-gray-300 p-8 h-full",children:new Array(10).fill(void 0).map((function(e,t){return Object(r.jsxs)("div",{className:"flex justify-center p-2 items-center",children:[Object(r.jsx)(j,{keyPegColorIndex:N[9-t]}),Object(r.jsxs)("div",{className:"flex justify-center",children:[Object(r.jsx)(i,{pegIndex:0,currentRow:s,rowIndex:t,handlePegColor:I}),Object(r.jsx)(i,{pegIndex:1,currentRow:s,rowIndex:t,handlePegColor:I}),Object(r.jsx)(i,{pegIndex:2,currentRow:s,rowIndex:t,handlePegColor:I}),Object(r.jsx)(i,{pegIndex:3,currentRow:s,rowIndex:t,handlePegColor:I})]}),Object(r.jsx)("div",{className:"p-3",children:s===t?Object(r.jsx)("button",{className:"bg-green-500 rounded text-white items-center p-2",onClick:function(){h.some((function(e){return 0===e}))||function(){if(JSON.stringify(m)===JSON.stringify(h))return alert("Game End! You Cracked the code!"),void y();if(0===s)return alert("No luck - Game End!"),void y();var e=s-1;alert("No luck, try again");for(var t=[],c=[],r=0;r<h.length;r++)m[r]!==h[r]?!m.includes(h[r])||c.includes(r)?t.push(0):(t.push(1),c.push(r)):(t.push(2),c.push(r));var n=Object(d.a)(N);n.push(t),k(n),f([0,0,0,0]),a(e)}()},children:"Go"}):null})]},t)}))}),Object(r.jsx)("div",{className:"flex-none",children:Object(r.jsx)("footer",{className:"flex flex-col items-center pb-4 text-white bg-gray-700 ",children:Object(r.jsx)("div",{className:"flex justify-between pt-2 text-xs",children:Object(r.jsx)("p",{children:"\xa9 2020\xa0Otaiga"})})})})]})};a.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.71eb384e.chunk.js.map