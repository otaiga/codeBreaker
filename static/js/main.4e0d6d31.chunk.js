(this.webpackJsonpcodebreaker=this.webpackJsonpcodebreaker||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(7),l=c.n(a),i=(c(13),c(5)),o=c(2),d=[null,"bg-red-500","bg-green-500","bg-yellow-500","bg-orange-500","bg-black","bg-white"],b=function(){return Math.floor(Math.random()*(d.length-1)+1)},j=function(e){var t=e.currentRow,c=e.rowIndex,r=e.pegIndex,s=e.handlePegColor,a=e.colorsSet,l=a?a[r]:0;return Object(n.jsx)("div",{className:"border mx-2 border-black rounded-full ".concat(d[l]," sm:h-12 sm:w-12 h-8 w-8"),onClick:function(){if(t===c){var e=l+1;e>d.length-1&&(e=1),s(r,e)}}})},u=function(e){var t=e.keyPegColorIndex,c=[null,"bg-black","bg-green-500"];return Object(n.jsxs)("div",{className:"border rounded border-black p-2 mr-2",children:[Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("div",{className:"border border-black rounded-full h-2 w-2 ".concat(c[t?t[0]:null])}),Object(n.jsx)("div",{className:"border border-black rounded-full h-2 w-2 ".concat(c[t?t[1]:null])})]}),Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("div",{className:"border border-black rounded-full h-2 w-2 ".concat(c[t?t[2]:null])}),Object(n.jsx)("div",{className:"border border-black rounded-full h-2 w-2 ".concat(c[t?t[3]:null])})]})]})},x=function(e){var t=e.title,c=e.message,r=e.handleOkClick;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"fixed inset-0 max-w-screen-lg mx-auto bg-gray-800 opacity-75 pointer-events-none"}),Object(n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center",children:Object(n.jsx)("div",{className:"z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg sm:max-w-sm",children:Object(n.jsxs)("div",{className:"px-6 py-4 text-left modal-content",children:[Object(n.jsx)("div",{className:"flex items-center justify-between pb-3",children:Object(n.jsx)("p",{className:"text-lg font-bold text-gray-900",children:t})}),Object(n.jsx)("div",{className:"py-2 text-gray-800",children:c}),Object(n.jsx)("div",{className:"flex justify-end pt-2",children:Object(n.jsx)("button",{className:"px-4 py-1 bg-green-500 text-white rounded outline-none focus:outline-none",onClick:r,children:"OK"})})]})})})]})},f=function(){var e=function(){return new Array(4).fill(void 0).map(b)},t=Object(r.useState)(9),c=Object(o.a)(t,2),s=c[0],a=c[1],l=Object(r.useState)([0,0,0,0]),f=Object(o.a)(l,2),h=f[0],m=f[1],O=Object(r.useState)(e()),g=Object(o.a)(O,2),v=g[0],p=g[1],w=Object(r.useState)([]),N=Object(o.a)(w,2),y=N[0],k=N[1],C=Object(r.useState)([]),S=Object(o.a)(C,2),I=S[0],P=S[1],A=Object(r.useState)({show:!1}),J=Object(o.a)(A,2),M=J[0],z=J[1],B=Object(r.useState)(!1),E=Object(o.a)(B,2),G=E[0],R=E[1],T=function(){if(JSON.stringify(v)===JSON.stringify(h))return R(!0),void z({title:"Congratulations!",message:"You have cracked the code. Try again?",show:!0,reset:!0});if(0===s)return R(!0),void z({title:"Game End!",message:"You have failed to crack the code. Try again?",show:!0,reset:!0});var e=s-1;z({title:"Incorrect!",message:"Please try again",show:!0});var t=function(){var e=[],t=[];return function(){for(var c=0;c<h.length;c++)v[c]===h[c]&&(e[c]=2,t.push(h[c]))}(),function(){for(var c=function(c){if(v.includes(h[c])){var n=t.filter((function(e){return e===h[c]})),r=v.filter((function(e){return e===h[c]}));n.length<r.length&&2!==e[c]&&(e[c]=1,t.push(h[c]))}},n=0;n<h.length;n++)c(n)}(),e.sort()}(),c=Object(i.a)(y);c.push(t),k(c),m([0,0,0,0]),a(e)},Y=function(e,t){var c=Object(i.a)(h),n=Object(i.a)(I);c[e]=t,n[s]=c,m(c),P(n)};return Object(n.jsxs)("div",{className:"max-w-screen-lg mx-auto",children:[Object(n.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(n.jsx)("div",{className:"flex-none",children:Object(n.jsx)("div",{className:"bg-gray-500",children:Object(n.jsx)("p",{className:"text-2xl text-white p-2 text-center",children:"Code Breaker!"})})}),Object(n.jsxs)("main",{className:"container flex-auto mx-auto bg-gray-300",children:[Object(n.jsx)("div",{className:"p-2 sm:p-8",children:Object(n.jsxs)("div",{className:"flex flex-col justify-center items-center font-bold",children:[Object(n.jsx)("p",{className:"pb-2",children:"Crack the code"}),Object(n.jsx)("div",{className:"flex mr-5 ".concat(G?"z-50":null),children:new Array(4).fill(void 0).map((function(e,t){return Object(n.jsx)("div",{className:"border mx-2 border-black rounded-full ".concat(G?d[v[t]]:"bg-gray-500"," sm:h-12 sm:w-12 h-8 w-8")},t)}))})]})}),Object(n.jsx)("div",{className:"bg-gray-300 pb-2",children:Object(n.jsx)("div",{children:new Array(10).fill(void 0).map((function(e,t){return Object(n.jsxs)("div",{className:"flex items-center justify-center",children:[Object(n.jsx)(u,{keyPegColorIndex:y[9-t]}),Object(n.jsx)("div",{className:"flex justify-center",children:new Array(4).fill(void 0).map((function(e,c){return Object(n.jsx)(j,{pegIndex:c,currentRow:s,rowIndex:t,handlePegColor:Y,colorsSet:I[t]},c)}))}),Object(n.jsx)("div",{className:"px-2 py-0 sm:py-3",children:Object(n.jsx)("button",{className:"bg-green-500 hover:bg-green-700 rounded text-white items-center p-2 ".concat(s===t?null:"disabled opacity-0 cursor-default"),onClick:function(){s===t&&(h.some((function(e){return 0===e}))||T())},children:"Go!"})})]},t)}))})})]}),Object(n.jsx)("div",{className:"flex-none",children:Object(n.jsx)("footer",{className:"flex flex-col items-center pb-2 text-white bg-gray-700 ",children:Object(n.jsx)("div",{className:"flex justify-between pt-2 text-xs",children:Object(n.jsx)("p",{children:"\xa9 2020\xa0Otaiga"})})})})]}),M&&M.show&&Object(n.jsx)(x,{title:M.title,message:M.message,handleOkClick:function(){M.reset&&(R(!1),m([0,0,0,0]),p(e()),a(9),k([]),P([])),z({show:!1})}})]})};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4e0d6d31.chunk.js.map