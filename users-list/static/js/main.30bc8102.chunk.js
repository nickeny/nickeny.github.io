(this.webpackJsonptz2=this.webpackJsonptz2||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(8),i=a.n(r),s=a(3),o=a(4),c=a(2),l=a(6),u=a(5),h=function(t,e){switch(e){case"id":return t.sort((function(t,e){return t.id>e.id?1:t.id<e.id?-1:0}));case"firstName":return t.sort((function(t,e){return t.firstName>e.firstName?1:t.firstName<e.firstName?-1:0}));case"lastName":return t.sort((function(t,e){return t.lastName>e.lastName?1:t.lastName<e.lastName?-1:0}));case"email":return t.sort((function(t,e){return t.email>e.email?1:t.email<e.email?-1:0}));case"phone":return t.sort((function(t,e){return t.phone>e.phone?1:t.phone<e.phone?-1:0}));default:return 0}},d=function(t,e){switch(e){case"id":return t.sort((function(t,e){return t.id>e.id?-1:t.id<e.id?1:0}));case"firstName":return t.sort((function(t,e){return t.firstName>e.firstName?-1:t.firstName<e.firstName?1:0}));case"lastName":return t.sort((function(t,e){return t.lastName>e.lastName?-1:t.lastName<e.lastName?1:0}));case"email":return t.sort((function(t,e){return t.email>e.email?-1:t.email<e.email?1:0}));case"phone":return t.sort((function(t,e){return t.phone>e.phone?-1:t.phone<e.phone?1:0}));default:return 0}},f=a(0),p=function(){return Object(f.jsx)("span",{className:"arrows",children:"\u25b2"})},j=function(){return Object(f.jsx)("span",{className:"arrows",children:"\u25bc"})},b=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={sort:"",users:n.props.data},n.headClick=n.headClick.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"headClick",value:function(t){var e=this.props.data,a=t.target.dataset.sort;a&&(a===this.state.sort?this.setState({sort:"",users:d(e,a)}):this.setState({sort:a,users:h(e,a)}))}},{key:"renderTbody",value:function(){return this.props.data.map((function(t){var e=Math.floor(1e5*Math.random());return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"row",children:t.id}),Object(f.jsx)("td",{children:t.firstName}),Object(f.jsx)("td",{children:t.lastName}),Object(f.jsx)("td",{children:t.email}),Object(f.jsx)("td",{children:t.phone})]},t.id+"-"+e)}))}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("table",{className:"table table-striped table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{onClick:this.headClick,children:[Object(f.jsxs)("th",{"data-sort":"id",children:["#","id"===this.state.sort?Object(f.jsx)(j,{}):Object(f.jsx)(p,{})]}),Object(f.jsxs)("th",{"data-sort":"firstName",children:["firstname","firstName"===this.state.sort?Object(f.jsx)(j,{}):Object(f.jsx)(p,{})]}),Object(f.jsxs)("th",{"data-sort":"lastName",children:["lastname","lastName"===this.state.sort?Object(f.jsx)(j,{}):Object(f.jsx)(p,{})]}),Object(f.jsxs)("th",{"data-sort":"email",children:["email","email"===this.state.sort?Object(f.jsx)(j,{}):Object(f.jsx)(p,{})]}),Object(f.jsxs)("th",{"data-sort":"phone",children:["phone","phone"===this.state.sort?Object(f.jsx)(j,{}):Object(f.jsx)(p,{})]})]})}),Object(f.jsx)("tbody",{children:this.renderTbody()})]})})}}]),a}(n.Component),m=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={},n.dataSplit=n.dataSplit.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.dataSplit(this.props.data,this.props.count)}},{key:"dataSplit",value:function(t,e){e=Number(e);for(var a=Math.ceil(t.length/e),n=0,r=e,i=[];n<t.length;)i.push(t.slice(n,r)),n+=e,r+=e;this.setState({pagesCount:a,paginateData:i}),this.props.pagerDefault(i[0],this.dataSplit)}},{key:"renderButtons",value:function(t){for(var e=this,a=[],n=function(t){a.push(Object(f.jsx)("li",{className:e.props.pagerCount===t+1?"page-item active":"page-item",children:Object(f.jsx)("button",{onClick:function(a){return e.props.pagerClick(e.state.paginateData[t],t+1)},className:"page-link",children:t+1})},t))},r=0;r<t;r++)n(r);return a}},{key:"render",value:function(){return Object(f.jsx)("ul",{className:"pagination pag",children:this.renderButtons(this.state.pagesCount)})}}]),a}(n.Component),g=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(t){this.props.filterOnChange(t.target.value)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"input-group row",children:Object(f.jsx)("div",{className:"col-12 input-group input-group-lg",children:Object(f.jsx)("input",{value:this.props.filterValue,onChange:this.handleChange,className:"form-control",placeholder:"Search",type:"text"})})})}}]),a}(n.Component),O=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a),(t=e.call(this)).state={isLoaded:!1,data:[],filterValue:"",pagerCount:1},t.pagerClick=t.pagerClick.bind(Object(c.a)(t)),t.pagerDefault=t.pagerDefault.bind(Object(c.a)(t)),t.filterOnChange=t.filterOnChange.bind(Object(c.a)(t));return window.onload=function(){fetch("http://www.filltext.com/?rows=500&id={number|500}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}").then((function(t){return t.json()})).then((function(e){t.setState({data:e,isLoaded:!0}),t.state.dataSplit(e,50)}))},t}return Object(o.a)(a,[{key:"pagerDefault",value:function(t,e){this.setState({tableData:t,dataSplit:e}),this.setState({saveTableData:t})}},{key:"pagerClick",value:function(t,e){this.setState({tableData:t,pagerCount:e})}},{key:"filterOnChange",value:function(t){this.setState({filterValue:t});var e=this.filterData(this.state.data,t);t.length<1?this.pagerDefault(this.state.saveTableData,this.state.dataSplit):this.setState({tableData:e})}},{key:"filterData",value:function(t,e){if(!e)return[];var a=[];return t.forEach((function(t){for(var n in t)"string"==typeof t[n]&&t[n].includes(e)&&a.push(t)})),a}},{key:"renderTable",value:function(){return this.state.tableData?Object(f.jsx)(b,{data:this.state.tableData}):Object(f.jsx)("div",{className:"spinner-border loading"})}},{key:"renderPager",value:function(){return this.state.data?Object(f.jsx)(m,{data:this.state.data,count:"50",pagerClick:this.pagerClick,pagerDefault:this.pagerDefault,pagerCount:this.state.pagerCount}):Object(f.jsx)("b",{children:"Pager Loading..."})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App container",children:[Object(f.jsx)("h1",{className:"text-center",children:"Users List"}),Object(f.jsx)(g,{data:this.state.data,filterValue:this.state.filterValue,filterOnChange:this.filterOnChange}),this.renderTable(),this.renderPager()]})}}]),a}(n.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}a(14);i.a.render(Object(f.jsx)(O,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");v?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):x(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):x(t)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.30bc8102.chunk.js.map