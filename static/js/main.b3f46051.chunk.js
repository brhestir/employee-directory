(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(13),a=n.n(r),i=n(4),l=n(14),o=n(15),j=n(18),d=n(17),b=n(16),h=n.n(b),u=n(0),m=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("thead",{className:"bg-secondary bg-gradient",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Photo"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-dark",onClick:e.handleBtnClick,children:"Name"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Phone"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Email"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"DOB"})})]})})})},O=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{className:"bg-light",children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.picture.thumbnail,alt:e.name.last})}),Object(u.jsx)("td",{children:e.name.last+", "+e.name.first}),Object(u.jsx)("td",{children:e.cell}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.dob.date.substr(0,10)})]})})},x=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"bg-success bg-gradient",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("h1",{className:"justify-content-center",children:"Employee Directory"})})})})})})},p=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("form",{className:"bg-success p-2",children:Object(u.jsx)("input",{type:"text",className:"form-control",id:"searchByName",placeholder:"Enter last name to search...",onChange:e.onChange})})})},g=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={sims:[],simsSorted:[],simsFiltered:[],direction:1},e.handleInputChange=function(t){var n=t.target.value,c=e.state.sims.filter((function(e){return e.name.last.toLowerCase().includes(n.toLowerCase())}));e.setState({simsFiltered:c})},e.handleBtnClick=function(t){console.log("Sorting");var n=e.state.simsFiltered.sort((function(t,n){var c=t.name.last.toUpperCase(),s=n.name.last.toUpperCase(),r=1,a=-1*e.state.direction;return e.setState({direction:a}),c>s?r=1*a:c<s&&(r=-1*a),r}));e.setState({simsFiltered:n})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;return h.a.get("https://randomuser.me/api/?results=25&nat=us").then((function(t){console.log(t),e.setState({sims:t.data.results}),e.setState({simsFiltered:e.state.sims}),console.log(e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(p,{onChange:this.handleInputChange}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)(m,{handleBtnClick:this.handleBtnClick}),Object(u.jsx)("tbody",{children:this.state.simsFiltered.map((function(e,t){return Object(c.createElement)(O,Object(i.a)(Object(i.a)({},e),{},{key:t}))}))})]})]})}}]),n}(c.Component);var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(g,{})})};n(42);a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b3f46051.chunk.js.map