(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(t,e,c){"use strict";c.r(e);var n=c(2),s=c.n(n),l=c(13),r=c.n(l),i=c(4),a=c(14),o=c(15),j=c(18),b=c(17),d=c(16),h=c.n(d),u=c(0),m=function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:t.handleBtnClick,children:"#"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:t.handleBtnClick,children:"Photo"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:t.handleBtnClick,children:"Name"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:t.handleBtnClick,children:"Phone"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:t.handleBtnClick,children:"Email"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:t.handleBtnClick,children:"DOB"})})]})})})},O=function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:t.index}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:t.picture.thumbnail,alt:t.name.last})}),Object(u.jsx)("td",{children:t.name.first+" "+t.name.last}),Object(u.jsx)("td",{children:t.cell}),Object(u.jsx)("td",{children:t.email}),Object(u.jsx)("td",{children:t.dob.date.substr(0,10)})]})})},x=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"bg-primary bg-gradient",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("h1",{className:"justify-content-center",children:"Employee Directory"})})})})})})},p=function(t){Object(j.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=e.call.apply(e,[this].concat(s))).state={sims:[],simsSorted:[]},t.handleBtnClick=function(e){console.log("clicked"),t.setState({simsSorted:t.state.sims.sort((function(t,e){return t.email-e.value}))})},t.compare=function(t,e){},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;return h.a.get("https://randomuser.me/api/?results=10&nat=us").then((function(e){console.log(e),t.setState({sims:e.data.results}),console.log(t.state)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)(m,{handleBtnClick:this.handleBtnClick}),Object(u.jsx)("tbody",{children:this.state.sims.map((function(t,e){return Object(n.createElement)(O,Object(i.a)(Object(i.a)({},t),{},{key:e,index:e}))}))})]})]})}}]),c}(n.Component);var y=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(p,{})})};c(42);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7be422fa.chunk.js.map