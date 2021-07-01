(this.webpackJsonpwindbnb=this.webpackJsonpwindbnb||[]).push([[0],{25:function(t){t.exports=JSON.parse('[{"city":"Helsinki","country":"Finland","superHost":false,"title":"Stylist apartment in center of the city","rating":4.4,"maxGuests":3,"type":"Entire apartment","beds":2,"photo":"https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"},{"city":"Turku","country":"Finland","superHost":false,"title":"Nice apartment in center of Helsinki","rating":4.2,"maxGuests":5,"type":"Entire apartment","beds":3,"photo":"https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},{"city":"Helsinki","country":"Finland","superHost":true,"title":"Arty interior in 1900 wooden house","rating":4.5,"maxGuests":10,"type":"Entire house","beds":6,"photo":"https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},{"city":"Helsinki","country":"Finland","superHost":false,"title":"Apartment next to market spuare","rating":4.48,"maxGuests":3,"type":"Entire apartment","beds":null,"photo":"https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},{"city":"Turku","country":"Finland","superHost":true,"title":"Villa Aurora guest-house","rating":4.75,"maxGuests":9,"type":"Entire house","beds":null,"photo":"https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"},{"city":"Vaasa","country":"Finland","superHost":true,"title":"A cosy family house","rating":4.95,"maxGuests":6,"type":"Entire house","beds":null,"photo":"https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},{"city":"Vaasa","country":"Finland","superHost":false,"title":"Lovely Studio near Railway Station","rating":4.68,"maxGuests":2,"type":"Private room","beds":null,"photo":"https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"},{"city":"Oulu","country":"Finland","superHost":false,"title":"Peaceful little home in city center","rating":4.12,"maxGuests":6,"type":"Entire house","beds":3,"photo":"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},{"city":"Oulu","country":"Finland","superHost":false,"title":"Beautiful new studio apartment nearby the center","rating":4.49,"maxGuests":2,"type":"Entire apartment","beds":1,"photo":"https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"},{"city":"Oulu","country":"Finland","superHost":true,"title":"Cozy woodhouse flat with wooden sauna","rating":4.38,"maxGuests":4,"type":"Entire house","beds":null,"photo":"https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"},{"city":"Vaasa","country":"Finland","superHost":false,"title":"Brand new studio apartment near the harbour","rating":4.89,"maxGuests":6,"type":"Entire apartment","beds":3,"photo":"https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"},{"city":"Helsinki","country":"Finland","superHost":false,"title":"Beautiful and comfortable old wooden house","rating":4.63,"maxGuests":10,"type":"Entire house","beds":null,"photo":"https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"},{"city":"Turku","country":"Finland","superHost":false,"title":"Turku Nordic Home near city center","rating":4.24,"maxGuests":5,"type":"Entire apartment","beds":3,"photo":"https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"},{"city":"Turku","country":"Finland","superHost":true,"title":"Nice 2 room apartment close to everything","rating":4.34,"maxGuests":6,"type":"Entire apartment","beds":3,"photo":"https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"}]')},36:function(t,e,s){},43:function(t,e,s){"use strict";s.r(e);var a=s(1),c=s.n(a),n=s(11),i=s.n(n),r=(s(36),s(18)),o=s(25),l=s(3),d=s(7),u=s(19),m=Object(d.b)({name:"guests",initialState:{adults:0,children:0},reducers:{incrementAdult:function(t){t.adults+=1},decrementAdult:function(t){t.adults-=1},incrementChildren:function(t){t.children+=1},decrementChildren:function(t){t.children-=1}}}),b=m.actions,x=b.incrementAdult,h=b.decrementAdult,j=b.incrementChildren,f=b.decrementChildren,p=m.reducer,y=function(t){return t.guests.adults+t.guests.children},O=Object(d.b)({name:"location",initialState:{city:"",country:"Finland"},reducers:{setLocation:function(t,e){t.city=e.payload.city,t.country=e.payload.country}}}),g=O.actions.setLocation,w=O.reducer,N=function(t){return t.location},v=function(t){return t.location.country},k=Object(d.b)({name:"stays",initialState:[],reducers:{setStays:function(t,e){return e.payload}}}),H=k.actions.setStays,S=k.reducer,E=function(t){return t.stays},C=Object(u.a)(E,N,y,(function(t,e,s){return""===e.city||""===e.country?t:null===t||void 0===t?void 0:t.filter((function(t){return t.city===e.city&&t.country===e.country&&t.maxGuests>=s}))})),B=Object(u.a)(C,(function(t){return t.length})),F=s(17),M=s.n(F),A=s(6),G=s(12),q=s(0),J=function(t){var e=t.onClick,s=t.label,a=t.text,c=t.placeholder,n=t.showPlaceholder,i=Object(G.a)(t,["onClick","label","text","placeholder","showPlaceholder"]);return Object(q.jsxs)("button",Object(A.a)(Object(A.a)({onClick:e,className:"px-6 py-3 w-full text-left rounded-2xl md:flex-1"},i),{},{children:[Object(q.jsx)("p",{className:"text-xxxs font-extrabold uppercase",children:s}),Object(q.jsx)("p",{className:"text-sm font-normal mt-1",children:n?Object(q.jsx)("span",{className:"text-gray-light",children:c}):Object(q.jsx)("span",{children:a})})]}))},I=s(26),Q=s.n(I),D=function(t){var e=t.closeModal;return Object(q.jsxs)("header",{className:"flex flex-row justify-between text-gray-darkest text-xs items-center md:hidden",children:[Object(q.jsx)("div",{className:"font-bold",children:"Edit your search"}),Object(q.jsx)("button",{"data-testid":"closeBtn",onClick:e,children:Object(q.jsx)(Q.a,{"data-testid":"closeIcon"})})]})},P=s(24),T=s.n(P),W=s(23),z=s.n(W),L=function(t){var e=t.hidden,s=Object(G.a)(t,["hidden"]),a=Object(l.c)((function(t){return t.guests.adults})),c=Object(l.c)((function(t){return t.guests.children})),n=Object(l.b)();return Object(q.jsxs)("section",Object(A.a)(Object(A.a)({className:"mx-4 font-mulish font-bold text-sm text-gray-darkest",hidden:!e},s),{},{children:[Object(q.jsxs)("div",{className:"mt-4",children:[Object(q.jsx)("div",{children:"Adults"}),Object(q.jsx)("div",{className:"text-gray-light font-normal",children:"Ages 13 or above"})]}),Object(q.jsxs)("div",{className:"text-sm mt-3 flex flex-row items-center gap-4",children:[Object(q.jsx)("button",{onClick:function(){n(h())},disabled:a<1,"data-testid":"minusBtn",className:"w-6 h-6 border rounded border-gray-g3 flex justify-center items-center",children:Object(q.jsx)(z.a,{className:"text-gray-g3",fontSize:"inherit"})}),Object(q.jsx)("span",{children:a}),Object(q.jsx)("button",{onClick:function(){n(x())},disabled:a>98,"data-testid":"addBtn",className:"w-6 h-6 border rounded border-gray-g3",children:Object(q.jsx)(T.a,{className:"text-gray-g3 w-3 h-3",fontSize:"inherit"})})]}),Object(q.jsxs)("div",{className:"mt-8",children:[Object(q.jsx)("div",{children:"Children"}),Object(q.jsx)("div",{className:"text-gray-light font-normal",children:"Ages 2-12"})]}),Object(q.jsxs)("div",{className:"text-sm mt-3 flex flex-row items-center gap-4",children:[Object(q.jsx)("button",{onClick:function(){n(f())},disabled:c<1,"data-testid":"minusBtn",className:"w-6 h-6 border rounded border-gray-g3 flex justify-center items-center",children:Object(q.jsx)(z.a,{className:"text-gray-g3",fontSize:"inherit"})}),Object(q.jsx)("span",{children:c}),Object(q.jsx)("button",{onClick:function(){n(j())},disabled:c>98,"data-testid":"addBtn",className:"w-6 h-6 border rounded border-gray-g3",children:Object(q.jsx)(T.a,{className:"text-gray-g3 w-3 h-3",fontSize:"inherit"})})]})]}))},V=s(30),R=s(27),U=s.n(R),Y=function(t){var e=t.hidden,s=Object(G.a)(t,["hidden"]),a=Object(l.c)(E),c=Object(l.b)(),n=Object(V.a)(new Set(null===a||void 0===a?void 0:a.map((function(t){return"".concat(t.city,", ").concat(t.country)})))).map((function(t){return{city:t.split(", ")[0],country:t.split(", ")[1]}}));return Object(q.jsx)("section",Object(A.a)(Object(A.a)({className:"text-gray-dark text-sm font-normal",hidden:!e},s),{},{children:null===n||void 0===n?void 0:n.map((function(t,e){return Object(q.jsxs)("button",{className:"flex flex-row gap-2 items-center p-4 w-full",onClick:function(e){return function(t,e){t.preventDefault(),c(g(e))}(e,t)},children:[Object(q.jsx)(U.a,{"data-testid":"locationIcon"}),Object(q.jsx)("p",{children:"".concat(t.city,", ").concat(t.country)})]},"".concat(t.city,", ").concat(t.country,", ").concat(e))}))}))},K=function(t){var e=t.isModalOpen,s=t.setIsModalOpen,c=Object(a.useState)(!1),n=Object(r.a)(c,2),i=n[0],o=n[1],d=Object(a.useState)(!1),u=Object(r.a)(d,2),m=u[0],b=u[1],x=Object(l.c)(y),h=Object(l.c)(N);if(!e)return null;var j=function(){s(!1)},f=function(){j()};return Object(q.jsxs)("section",{"data-testid":"drawer",className:"font-mulish fixed top-0 left-0 w-full h-screen flex flex-col",children:[Object(q.jsxs)("section",{className:"bg-white-default px-5 py-3",children:[Object(q.jsx)(D,{closeModal:j}),Object(q.jsxs)("section",{className:"my-4 shadow-default rounded-2xl text-gray-darkest md:flex",children:[Object(q.jsx)(J,{onClick:function(){o(!1),b(!0)},label:"location",text:"".concat(h.city,", ").concat(h.country),placeholder:"Add location",showPlaceholder:h.city.length<1,"data-testid":"locationSelector"}),Object(q.jsx)("div",{className:"w-full border-t border-white-milk md:h-auto md:w-auto md:border-t-0 md:border-r"}),Object(q.jsx)(J,{onClick:function(){b(!1),o(!0)},label:"guests",text:"".concat(x," guest").concat(1!==x?"s":""),placeholder:"Add guests",showPlaceholder:x<1,"data-testid":"guestsSelector"}),Object(q.jsx)("div",{className:"h-auto border-r border-white-milk hidden md:block"}),Object(q.jsx)("div",{className:"flex-1",children:Object(q.jsxs)("button",{"data-testid":"searchBtn",className:"w-max m-auto bg-red-default text-white-milk px-7 py-4 rounded-2xl opacity-90 shadow-default hidden md:block md:flex-1",onClick:f,children:[Object(q.jsx)(M.a,{}),Object(q.jsx)("span",{className:"ml-2 text-sm",children:"Search"})]})})]}),Object(q.jsxs)("section",{className:"flex",children:[Object(q.jsx)("div",{className:"hidden md:flex-1 ".concat(i?"md:block":null)}),Object(q.jsx)(Y,{hidden:m,"data-testid":"locationSelect"}),Object(q.jsx)("div",{className:"md:flex-1 md:mx-16",children:Object(q.jsx)(L,{hidden:i,"data-testid":"guestsSelect"})}),Object(q.jsx)("div",{className:"hidden md:block md:flex-1"})]}),Object(q.jsx)("div",{className:"w-full flex justify-center mt-16 mb-6",children:Object(q.jsxs)("button",{"data-testid":"searchBtn",className:"bg-red-default text-white-milk px-6 py-4 rounded-2xl opacity-90 shadow-default md:hidden",onClick:f,children:[Object(q.jsx)(M.a,{}),Object(q.jsx)("span",{className:"ml-2 text-sm",children:"Search"})]})})]}),Object(q.jsx)("div",{className:"w-screen flex-1 bg-gray-dark opacity-40"})]})},X=function(){return Object(q.jsx)("footer",{className:"mt-24 flex items-end justify-center font-montserrat text-gray-g3 text-sm",children:Object(q.jsxs)("p",{className:"py-6 h-max text-gray-text1 font-semibold text-sm",children:["created by ",Object(q.jsx)("span",{className:"font-bold underline",children:"&R"})," -"," ",Object(q.jsx)("span",{className:"font-medium",children:"devChallenges.io"})]})})},Z=s.p+"static/media/logo.beef9462.svg",$=function(t){var e=t.setIsModalOpen,s=Object(l.c)(y),a=Object(l.c)(N);return Object(q.jsxs)("header",{className:"font-mulish font-normal text-sm grid gap-5 md:grid-cols-2 md:items-center md:mt-8",children:[Object(q.jsx)("img",{src:Z,alt:"logo",className:"my-5 md:m-0"}),Object(q.jsxs)("section",{onClick:function(){return e(!0)},"data-testid":"searchBar",className:"min-w-min w-full mx-3 h-14 flex flex-row items-center rounded-2xl shadow-default md:mx-0 md:max-w-md md:justify-self-end",children:[Object(q.jsx)("button",{className:"w-6/12 h-full px-3 placeholder-gray-light text-gray-darkest text-left",children:""===a.city||""===a.country?Object(q.jsx)("span",{className:"text-gray-light",children:"Add location"}):"".concat(a.city,", ").concat(a.country)}),Object(q.jsx)("div",{className:"h-full border-r border-white-milk"}),Object(q.jsx)("button",{className:"w-5/12 h-full px-3 placeholder-gray-light text-gray-darkest text-left ",children:s>0?Object(q.jsxs)("span",{children:[s," guest",1!==s&&"s"]}):Object(q.jsx)("span",{className:"text-gray-light",children:"Add guests"})}),Object(q.jsx)("div",{className:"h-full border-r border-white-milk"}),Object(q.jsx)("button",{children:Object(q.jsx)(M.a,{"data-testid":"searchIcon",className:"w-min m-4 text-red-default"})})]})]})},_=s(28),tt=s.n(_),et=s(29),st=s.n(et),at=function(t){var e=t.location;return Object(q.jsxs)("section",{className:"font-montserrat w-full",children:[Object(q.jsx)("img",{src:e.photo,alt:e.title,"data-testid":"img",className:"h-64 w-full rounded-3xl object-cover"}),Object(q.jsxs)("section",{className:"my-3 flex flex-row items-center justify-start gap-2",children:[e.superHost&&Object(q.jsx)("div",{"data-testid":"superHost",className:"px-2 py-1 uppercase border border-gray-dark text-gray-dark rounded-xl font-bold text-xxs flex justify-items-center items-center md:text-xs",children:"SUPER HOST"}),Object(q.jsxs)("div",{className:"text-gray-g3 font-medium text-xs flex-1 md:text-sm",children:[e.type,e.beds&&Object(q.jsxs)(q.Fragment,{children:[" . ",tt()("bed",e.beds,!0)]})]}),Object(q.jsxs)("div",{className:"text-gray-dark text-xs font-medium md:text-sm",children:[Object(q.jsx)(st.a,{"data-testid":"starIcon",className:"text-red-default"}),e.rating]})]}),Object(q.jsx)("section",{className:"w-5/6 text-gray-darkest font-semibold text-sm overflow-hidden whitespace-nowrap overflow-ellipsis md:text-base ",children:e.title})]})},ct=function(){var t=Object(l.c)(C);return Object(q.jsx)("main",{"data-testid":"propertiesList",className:"w-max max-w-full m-auto mt-6 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3",children:0===t.length?Object(q.jsx)("p",{children:"There are no properties that meets the criteria."}):t.map((function(t,e){return Object(q.jsx)(at,{location:t},e)}))})},nt=function(){var t=Object(l.c)(v),e=Object(l.c)(B);return Object(q.jsxs)("section",{className:"mt-9 flex justify-between font-montserrat items-center",children:[Object(q.jsxs)("div",{className:"text-gray-darkest text-lg font-bold md:text-2xl",children:["Stays in ",t]}),Object(q.jsxs)("div",{className:"text-gray-dark text-sm font-medium",children:[e," ","1"===String(e)?"stay":"stays"]})]})},it=function(){var t=Object(l.b)(),e=Object(a.useState)(!1),s=Object(r.a)(e,2),c=s[0],n=s[1];return Object(a.useEffect)((function(){t(H(o))}),[]),Object(q.jsxs)("div",{className:"px-5 m-auto max-w-screen-xl",children:[Object(q.jsx)($,{setIsModalOpen:n}),Object(q.jsx)(nt,{}),Object(q.jsx)(ct,{}),Object(q.jsx)(X,{}),Object(q.jsx)(K,{isModalOpen:c,setIsModalOpen:n})]})},rt=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(e){var s=e.getCLS,a=e.getFID,c=e.getFCP,n=e.getLCP,i=e.getTTFB;s(t),a(t),c(t),n(t),i(t)}))},ot=Object(d.a)({reducer:{guests:p,location:w,stays:S}});i.a.render(Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(l.a,{store:ot,children:Object(q.jsx)(it,{})})}),document.getElementById("root")),rt()}},[[43,1,2]]]);
//# sourceMappingURL=main.4ca828a6.chunk.js.map