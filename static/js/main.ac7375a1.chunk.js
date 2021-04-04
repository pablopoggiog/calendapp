(this.webpackJsonpcalendapp=this.webpackJsonpcalendapp||[]).push([[0],{181:function(e,n,t){},182:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(67),a=t.n(i),o=t(22),d=t(79),l=t(7),s=t(6),u=t(68),b=t.n(u),j=t(1);var f=function(e){var n=e.onClick,t=e.children;return Object(j.jsx)("button",{onClick:n,children:t})};var h=function(e){var n=e.limit,t=c.a.useState(0),r=Object(s.a)(t,2),i=r[0],a=r[1],o=!!n&&i===n;return Object(j.jsxs)("div",{className:"counter",children:[Object(j.jsxs)("h3",{children:["Counter: ",i]}),Object(j.jsx)(f,{onClick:function(){o||a(i+1)},children:"Increment"}),Object(j.jsx)(f,{onClick:function(){a(i-1)},children:"Decrement"}),o&&Object(j.jsx)("span",{children:"You reached the limit!"})]})};var p=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)((function(){fetch("https://raw.githubusercontent.com/Jobsity/ReactChallenge/main/README.md",{mode:"cors"}).then((function(e){return e.text()})).then((function(e){c("".concat(e,"\n        \n## About Unit Tests:\nThe component below has a suite of tests to that could serve as guidance to unit test the calendar functionality, tests are located at `src/components/Counter.test.jsx`\n        \n"))}))}),[]),Object(j.jsxs)("div",{className:"readme",children:[Object(j.jsx)(b.a,{allowDangerousHtml:!0,children:t}),t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{limit:3}),Object(j.jsx)("h2",{children:"Use our existing route to create you calendar!"}),Object(j.jsx)(o.b,{to:"/calendar",children:"Go to Calendar page"})]})]})},x=t(3),O=t(78),g=Object(r.createContext)({}),m=function(e){var n=e.children,t=Object(r.useState)([]),c=Object(s.a)(t,2),i=c[0],a=c[1],o=Object(r.useState)(null),d=Object(s.a)(o,2),l=d[0],u=d[1],b=Object(r.useState)(null),f=Object(s.a)(b,2),h=f[0],p=f[1],x=Object(r.useState)(null),m=Object(s.a)(x,2),v=m[0],y=m[1];Object(r.useEffect)((function(){console.log({reminders:i})}),[i]);return Object(j.jsx)(g.Provider,{value:{reminders:i,addReminder:function(e,n,t){var r=Date.now();a((function(c){return[].concat(Object(O.a)(c),[{id:r,title:e,date:l,time:n,city:t}])}))},editReminder:function(e){a((function(n){return n.map((function(n){return n.id===e.id?e:n}))}))},isModalOpen:v,openModal:function(e,n,t){u(e),y(n),t&&p(t)},closeModal:function(){return y(null)},selectedDate:l,getReminders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=i.filter((function(n){return n.date===e}));return n},getReminder:function(){return i.find((function(e){return e.id===h}))},selectedReminder:h},children:n})};function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function y(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var w=r.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"});function k(e,n){var t=e.title,c=e.titleId,i=y(e,["title","titleId"]);return r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:n,"aria-labelledby":c},i),t?r.createElement("title",{id:c},t):null,w)}var C=r.forwardRef(k);t.p;function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function z(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var E=r.createElement("path",{d:"M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"});function M(e,n){var t=e.title,c=e.titleId,i=z(e,["title","titleId"]);return r.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:n,"aria-labelledby":c},i),t?r.createElement("title",{id:c},t):null,E)}var R,D,F,T,I,P,B,L,N,A,J,G,U,q,H,X,Y,K,Q,V,W,Z,$,_,ee,ne,te,re,ce,ie,ae,oe=r.forwardRef(M),de=(t.p,t(4)),le=x.b.div(R||(R=Object(de.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0.5em 1em;\n  height: 110px;\n  width: 110px;\n  margin: 0.2em;\n  background-color: ",";\n  cursor: ",";\n  transition: 0.6s;\n  border-radius: 5px;\n\n  // pseudo-selectors\n  &:hover {\n    background-color: ",";\n\n    svg {\n      fill: ",";\n    }\n\n    span {\n      color: ",";\n    }\n  }\n\n  // nested elements\n  span {\n    font-weight: 500;\n    color: ",";\n  }\n\n  svg {\n    fill: ",";\n    margin: 0;\n    width: 13px;\n    height: 12px;\n\n    &:hover {\n      transform: scale(1.2);\n      transition: 0.5s;\n    }\n  }\n"])),(function(e){var n=e.disabled,t=e.selected,r=e.current,c=e.theme;return n?"rgba(211, 211,211, 0.8)":r?"lightblue":t?"#fed8b1":c.body}),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return!e.disabled&&"#fed8b1"}),(function(e){return!e.disabled&&"#363537"}),(function(e){return!e.current&&"#363537"}),(function(e){var n=e.theme,t=e.disabled;return e.current||t?"#363537":n.text}),(function(e){return e.theme.text})),se=x.b.div(D||(D=Object(de.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n"]))),ue=x.b.div(F||(F=Object(de.a)(["\n  display: flex;\n  gap: 5px;\n  margin: 0;\n"]))),be=x.b.div(T||(T=Object(de.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  overflow: hidden;\n  width: 100%;\n"]))),je=function(e){var n=e.day,t=e.disabled,c=e.current,i=Object(r.useContext)(g),a=i.openModal,o=i.getReminders,d=Object(r.useState)([]),l=Object(s.a)(d,2),u=l[0],b=l[1];Object(r.useEffect)((function(){b(o(n))}),[o,n]);return Object(j.jsxs)(le,{disabled:t,current:c,children:[Object(j.jsxs)(se,{children:[Object(j.jsx)("span",{children:n}),!t&&Object(j.jsxs)(ue,{children:[Object(j.jsx)(C,{onClick:function(){a(n,"new")}}),u.length>0&&Object(j.jsx)(oe,{onClick:function(){a(n,"list")}})]})]}),Object(j.jsx)(be,{children:!t&&(null===u||void 0===u?void 0:u.map((function(e){return Object(j.jsx)(en,{reminder:e},e.id)})))})]})},fe=x.b.div(I||(I=Object(de.a)(["\n  display: flex;\n  width: 100%;\n  margin: 0;\n"]))),he=function(e){var n=e.days;return Object(j.jsx)(fe,{children:n.map((function(e){var n=e.date,t=e.disabled,r=e.current;return Object(j.jsx)(je,{day:n,disabled:t,current:r},n)}))})},pe=t(190),xe=t(184),Oe=t(185),ge=t(186),me=t(187),ve=t(188),ye=t(191),we=t(189),ke=function(){for(var e=new Date,n=Object(pe.a)(e,"MMMM yyyy"),t=Object(xe.a)(e),r=Object(Oe.a)(t),c=Object(ge.a)(t),i=Object(me.a)(r),a=[],o=c,d=0;o<=i;){for(var l=[],s=0;s<7;s++){var u=Object(pe.a)(o,"d"),b=Object(ve.a)(o,t);l.push({date:u,disabled:!b,current:!!Object(ye.a)(o,e)}),o=Object(we.a)(o,1)}a.push({days:l,key:d}),d++}return{currentDate:Number(Object(pe.a)(e,"dd")),weeks:a,currentMonth:n,monthEnd:Number(Object(pe.a)(r,"dd"))}},Ce=t(42),Se=t.n(Ce),ze=t(75),Ee=t(76),Me=t.n(Ee),Re=x.b.div(P||(P=Object(de.a)(["\n  padding: 1em;\n  width: 100%;\n  background-color: rgba(211, 211, 211, 0.3);\n  border-radius: 5px;\n"]))),De=function(){var e=ke().weeks;return Object(j.jsx)(Re,{children:e.map((function(e){var n=e.key,t=e.days;return Object(j.jsx)(he,{days:t},n)}))})},Fe=x.b.textarea(B||(B=Object(de.a)(["\n  text-align: center;\n  border-radius: 5px;\n  padding: 1em;\n  border: none;\n  resize: none;\n\n  &:focus {\n    outline: none;\n  }\n"]))),Te=x.b.input(L||(L=Object(de.a)(["\n  text-align: center;\n  border-radius: 5px;\n  padding: 1em;\n  border: none;\n  height: 50px;\n  flex: 1;\n\n  &:focus {\n    outline: none;\n  }\n"]))),Ie=x.b.button(N||(N=Object(de.a)(["\n  border-radius: 5px;\n  padding: 1em;\n  border: none;\n  transition: 0.5s;\n  background-color: ",";\n  color: white;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.disabled?"grey":"orange"}),(function(e){return e.disabled?"grey":"#fed8b1"})),Pe=x.b.div(A||(A=Object(de.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),Be=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(""),a=Object(s.a)(i,2),o=a[0],d=a[1],l=Object(r.useState)(""),u=Object(s.a)(l,2),b=u[0],f=u[1],h=Object(r.useContext)(g),p=h.closeModal,x=h.addReminder,O=h.selectedDate,m=function(){p(),c(""),d(""),f("")};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Fe,{placeholder:"Title",value:t,onChange:function(e){return c(e.target.value)},maxLength:"30"}),Object(j.jsxs)(Pe,{children:[Object(j.jsx)(Te,{placeholder:"City",value:o,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)(sn,{city:o,date:O})]}),Object(j.jsx)(Te,{type:"time",placeholder:"Time",value:b,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)(Ie,{disabled:!t||!o||!b,onClick:function(){t&&o&&b&&x(t,b,o),m()},children:"Add"})]})},Le=x.b.div(J||(J=Object(de.a)(["\n  display: grid;\n  box-sizing: border-box;\n  max-width: 100%;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 5px;\n"]))),Ne=function(){var e=Object(r.useContext)(g).getReminders,n=Object(r.useState)([]),t=Object(s.a)(n,2),c=t[0],i=t[1];return Object(r.useEffect)((function(){i(e())}),[e]),Object(j.jsx)(Le,{children:null===c||void 0===c?void 0:c.map((function(e){return Object(j.jsx)(en,{modal:!0,reminder:e},e.id)}))})},Ae=(x.b.div(G||(G=Object(de.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 10px;\n"]))),x.b.div(U||(U=Object(de.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin: 0;\n"])))),Je=x.b.textarea(q||(q=Object(de.a)(["\n  text-align: center;\n  border-radius: 5px;\n  padding: 1em;\n  border: none;\n  resize: none;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n"]))),Ge=x.b.input(H||(H=Object(de.a)(["\n  text-align: center;\n  border-radius: 5px;\n  padding: 1em;\n  border: none;\n  margin: 0;\n  flex: 1;\n\n  &:focus {\n    outline: none;\n  }\n"]))),Ue=x.b.button(X||(X=Object(de.a)(["\n  border-radius: 5px;\n  padding: 1em;\n  border: none;\n  transition: 0.5s;\n  background-color: ",";\n  color: white;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.disabled?"grey":"orange"}),(function(e){return e.disabled?"grey":"#fed8b1"})),qe=x.b.div(Y||(Y=Object(de.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),He=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(""),a=Object(s.a)(i,2),o=a[0],d=a[1],l=Object(r.useState)(""),u=Object(s.a)(l,2),b=u[0],f=u[1],h=Object(r.useState)(""),p=Object(s.a)(h,2),x=p[0],O=p[1],m=Object(r.useState)(""),v=Object(s.a)(m,2),y=v[0],w=v[1],k=Object(r.useContext)(g),C=k.closeModal,S=k.editReminder,z=k.getReminder,E=ke(),M=E.monthEnd,R=E.currentDate;Object(r.useEffect)((function(){var e=z(),n=e.id,t=e.title,r=e.city,i=e.date,a=e.time;c(n),d(t),f(r),O(i),w(a)}),[z,R]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Je,{placeholder:"Title",value:o,onChange:function(e){return d(e.target.value)},maxLength:"30"}),Object(j.jsxs)(qe,{children:[Object(j.jsx)(Ge,{placeholder:"City",value:b,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)(sn,{city:b,date:x})]}),Object(j.jsxs)(Ae,{children:[Object(j.jsx)(Ge,{type:"number",min:"1",max:M,placeholder:"Date",value:x,onChange:function(e){return e.target.value<=M&&O(e.target.value)}}),Object(j.jsx)(Ge,{type:"time",placeholder:"Time",value:y,onChange:function(e){return w(e.target.value)}})]}),Object(j.jsx)(Ue,{disabled:!o||!b||!x||!y,onClick:function(){S({id:t,title:o,city:b,date:x,time:y}),C()},children:"Save"})]})},Xe=Object(x.c)(K||(K=Object(de.a)(["\n  from { opacity: 0 }\n  to { opacity: 1 }\n"]))),Ye=x.b.div(Q||(Q=Object(de.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.8);\n  transition: 0.5s;\n  display: ",";\n  margin: 0;\n  animation: "," 0.1s ease 1;\n"])),(function(e){return e.isOpen?"flex":"none"}),Xe),Ke=x.b.div(V||(V=Object(de.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n  position: fixed;\n  top: 25%;\n  left: calc(50% - 280px);\n  height: 450px;\n  width: 560px;\n  animation: "," 0.5s ease 1;\n  border-radius: 5px;\n  box-shadow: 1px 1px 100px rgba(20, 20, 20, 0.9);\n\n  @media all and (max-width: 500px) {\n    height: 40%;\n    width: 70%;\n  }\n"])),(function(e){return e.theme.background}),Xe),Qe=x.b.button(W||(W=Object(de.a)(["\n  height: 40px;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: ",";\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.theme.text})),Ve=x.b.div(Z||(Z=Object(de.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  margin: 2em;\n\n  h3 {\n    font-size: 30px;\n    color: ",";\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n  }\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.text})),We=x.b.div($||($=Object(de.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  width: 65%;\n  height: 280px;\n  overflow: auto;\n  margin-bottom: 20px;\n"]))),Ze=function(){var e=Object(r.useContext)(g),n=e.isModalOpen,t=e.closeModal,c=e.selectedDate,i=ke().currentMonth;return Object(j.jsx)(Ye,{isOpen:!!n,children:Object(j.jsxs)(Ke,{children:[Object(j.jsx)(Qe,{onClick:t,children:"X"}),Object(j.jsxs)(Ve,{children:[Object(j.jsx)("h3",{children:"new"===n?"New Reminder":"edit"===n?"Edit":"Reminders"}),Object(j.jsxs)("p",{children:[c," ",i]})]}),Object(j.jsx)(We,{children:"new"===n?Object(j.jsx)(Be,{}):"edit"===n?Object(j.jsx)(He,{}):Object(j.jsx)(Ne,{})})]})})},$e=x.b.div(_||(_=Object(de.a)(["\n  background-color: ",";\n  border-radius: 5px;\n  transition: 0.5s;\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  cursor: pointer;\n  margin: 3px 0;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.selected?"white":"orange"}),(function(e){return e.selected?"orange":"white"})),_e=x.b.p(ee||(ee=Object(de.a)(["\n  border-radius: 5px;\n  padding: ",";\n  font-size: 11px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  span:first-of-type {\n    color: white;\n    border-radius: 5px;\n    padding: 2px;\n    transition: 0.5s;\n  }\n\n  &:hover {\n    span:first-of-type {\n      color: orange;\n    }\n  }\n"])),(function(e){return e.modal?"15px":"4px"})),en=function(e){var n=e.selected,t=e.reminder,c=t.id,i=t.title,a=(t.city,t.date),o=t.time,d=e.modal,l=Object(r.useContext)(g).openModal;return Object(j.jsx)($e,{selected:n,onClick:function(){l(a,"edit",c)},children:Object(j.jsxs)(_e,{modal:d,children:[Object(j.jsx)("span",{children:o})," | ",Object(j.jsx)("span",{children:i})]})})},nn=t(77),tn=t.n(nn),rn=t.p+"static/media/rain.bf3b8fbf.png",cn=t.p+"static/media/cloud.b7afb924.png",an=t.p+"static/media/sun.615ad74c.png",on=t.p+"static/media/snowflake.3fb066c1.svg",dn=x.b.div(ne||(ne=Object(de.a)(["\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n"]))),ln=x.b.img(te||(te=Object(de.a)(["\n  height: 40px;\n  width: 40px;\n"]))),sn=function(e){var n=function(e){var n=e.city,t=e.date,c=Object(r.useState)(""),i=Object(s.a)(c,2),a=i[0],o=i[1],d=ke().currentDate,l=function(){var e=Object(ze.a)(Se.a.mark((function e(n){var t,r,c,i,a,d;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.city,r=n.date,c=n.currentDate,e.prev=1,e.next=4,Me()("http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&appid=6317f8466039ff99ba277e28d3913e7a"));case 4:i=e.sent,a=8*(Number(r)-c),d=i.data.list[a].weather[0].main,o(d),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),o("");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n&&t&&d&&l({city:n,date:t,currentDate:d})}),[n,t,d]),{weather:a}}({city:e.city,date:e.date}).weather,t="rain"===n.toLowerCase()?rn:"clouds"===n.toLowerCase()?cn:"clear"===n.toLowerCase()?an:"snow"===n.toLowerCase()?on:void 0;return Object(j.jsx)(dn,{children:t?Object(j.jsx)(ln,{src:t}):Object(j.jsx)(tn.a,{size:"12px"})})},un=x.b.div(re||(re=Object(de.a)(["\n  display: flex;\n  text-align: center;\n  justify-content: flex-end;\n  width: 7em;\n"]))),bn=x.b.button(ce||(ce=Object(de.a)(["\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  background: ",";\n  border: 1px solid ",";\n  color: ",";\n  border-radius: 30px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.6rem;\n  width: 150px;\n  transition: 0.5s;\n\n  &:focus {\n    outline: 0;\n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.toggleBorder}),(function(e){return e.theme.text})),jn=function(e){var n=e.toggleTheme;return Object(j.jsx)(un,{children:Object(j.jsx)(bn,{onClick:n,children:"Switch Theme"})})},fn={body:"#FFF",text:"#363537",toggleBorder:"lightGrey",background:"#f1f1f1"},hn={body:"#363537",text:"#FFF",toggleBorder:"#6B8096",background:"#363537"},pn=x.b.div(ie||(ie=Object(de.a)(["\n  width: 800px;\n  margin: 2rem auto;\n"]))),xn=x.b.div(ae||(ae=Object(de.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  flex: 1 0;\n  max-width: 100%;\n  margin: 0;\n\n  h1 {\n    color: #505050;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 1.1em;\n    margin: 2em 0;\n  }\n"]))),On=[{path:"/",component:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(p,{})})},exact:!0},{path:"/calendar",component:function(){var e=Object(r.useState)("dark"),n=Object(s.a)(e,2),t=n[0],c=n[1],i=ke().currentMonth;return Object(j.jsx)(x.a,{theme:"light"===t?fn:hn,children:Object(j.jsx)(m,{children:Object(j.jsxs)(pn,{children:[Object(j.jsx)(jn,{toggleTheme:function(){return c("light"===t?"dark":"light")}}),Object(j.jsxs)(xn,{children:[Object(j.jsx)("h1",{children:"CalendApp"}),Object(j.jsx)("p",{children:i})]}),Object(j.jsx)(De,{}),Object(j.jsx)(Ze,{})]})})})},exact:!0}];var gn=Object(l.f)((function(){return Object(j.jsx)("div",{className:"main",children:Object(d.a)(On)})})),mn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,192)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};t(181);a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(gn,{})})}),document.getElementById("root")),mn()}},[[182,1,2]]]);
//# sourceMappingURL=main.ac7375a1.chunk.js.map