(this.webpackJsonpcodebreaker=this.webpackJsonpcodebreaker||[]).push([[0],{13:function(e,r,t){},14:function(e,r,t){"use strict";t.r(r);var c=t(0),n=t(1),l=t.n(n),s=t(6),a=t.n(s),d=(t(13),t(7)),o=t(2),i=[null,"bg-red-500","bg-green-500","bg-yellow-500","bg-orange-500","bg-black","bg-white"],b=function(e){var r=e.currentRow,t=e.rowIndex,l=e.pegIndex,s=e.handlePegColor,a=Object(n.useState)(0),d=Object(o.a)(a,2),b=d[0],j=d[1];return Object(c.jsx)("div",{className:"border mx-2 border-black rounded-full ".concat(i[b]," sm:h-12 sm:w-12 h-10 w-10"),onClick:function(){if(r===t){var e=b+1;e>i.length-1&&(e=1),s(l,e),j(e)}}})},j=function(){return Object(c.jsxs)("div",{className:"border rounded border-black p-2",children:[Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("div",{className:"border border-black rounded-full h-2 w-2"}),Object(c.jsx)("div",{className:"border border-black rounded-full h-2 w-2"})]}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("div",{className:"border border-black rounded-full h-2 w-2"}),Object(c.jsx)("div",{className:"border border-black rounded-full h-2 w-2"})]})]})},x=function(){var e=function(){return Math.floor(Math.random()*(i.length-1)+1)},r=function(){return[e(),e(),e(),e()]},t=Object(n.useState)(9),l=Object(o.a)(t,2),s=l[0],a=l[1],x=Object(n.useState)([0,0,0,0]),u=Object(o.a)(x,2),f=u[0],h=u[1],O=Object(n.useState)(r()),g=Object(o.a)(O,2),m=g[0],v=g[1],w=function(){h([0,0,0,0]),v(r()),a(9)},N=function(e,r){var t=Object(d.a)(f);t[e]=r,h(t)};return Object(c.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(c.jsx)("div",{className:"flex-none",children:Object(c.jsx)("div",{className:"bg-gray-500",children:Object(c.jsx)("p",{className:"text-2xl text-white p-4 text-center",children:"Code Breaker!"})})}),Object(c.jsx)("div",{className:"bg-gray-300 p-8 h-full",children:new Array(10).fill(void 0).map((function(e,r){return Object(c.jsxs)("div",{className:"flex justify-center p-2 items-center",children:[Object(c.jsx)(j,{}),Object(c.jsxs)("div",{className:"flex justify-center",children:[Object(c.jsx)(b,{pegIndex:0,currentRow:s,rowIndex:r,handlePegColor:N}),Object(c.jsx)(b,{pegIndex:1,currentRow:s,rowIndex:r,handlePegColor:N}),Object(c.jsx)(b,{pegIndex:2,currentRow:s,rowIndex:r,handlePegColor:N}),Object(c.jsx)(b,{pegIndex:3,currentRow:s,rowIndex:r,handlePegColor:N})]}),Object(c.jsx)("div",{className:"p-3",children:s===r?Object(c.jsx)("button",{className:"bg-green-500 rounded text-white items-center p-2",onClick:function(){f.some((function(e){return 0===e}))||function(){if(JSON.stringify(m)===JSON.stringify(f))return alert("Game End! You Cracked the code!"),void w();if(0===s)return alert("No luck - Game End!"),void w();var e=s-1;alert("No luck, try again"),h([0,0,0,0]),a(e)}()},children:"Go"}):null})]},r)}))}),Object(c.jsx)("div",{className:"flex-none",children:Object(c.jsx)("footer",{className:"flex flex-col items-center pb-4 text-white bg-gray-700 ",children:Object(c.jsx)("div",{className:"flex justify-between pt-2 text-xs",children:Object(c.jsx)("p",{children:"\xa9 2020\xa0Otaiga"})})})})]})};a.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f86f1eae.chunk.js.map