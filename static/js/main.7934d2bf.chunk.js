(this["webpackJsonpblank-bank"]=this["webpackJsonpblank-bank"]||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=r.a.createContext({}),o=i.Provider,s=function(){var e=Object(n.useContext)(i);return{state:e[0],dispatch:e[1]}},m=a(5),u=a(6),d=a.n(u),f=function e(){Object(m.a)(this,e)};f.methods={GET:"GET",POST:"POST",DELETE:"DELETE",PUT:"PUT"},f._BASE_URL="https://vast-shore-74260.herokuapp.com",f._method="GET",f.call=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=f.prepareURL(e,t);var r=t.method?t.method:f._method;fetch(e,{method:r}).then((function(e){return e.json()})).then((function(e){a&&a(e)})).catch((function(e){n&&n(e)}))},f.prepareURL=function(e,t){return e.startsWith("/")||(e="/".concat(e)),t.query&&(e+="?".concat(d.a.stringify(t.query))),f._BASE_URL+e};var E=f,p=function(e,t,a){var n={query:{city:e}};e&&E.call("/banks",n,t,a)},v=function(e){var t=e.citiesList,a=e.selectedCity,n=e.onCitySelect,l=e.searchParams;return r.a.createElement("form",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-outline-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a||"Choose city"),r.a.createElement("div",{className:"dropdown-menu"},t.map((function(e){return r.a.createElement("button",{key:e,value:e,onClick:n,className:"dropdown-item"},e)})))),r.a.createElement("input",{type:"text",value:l,onChange:e.handleSearch,onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.onSearch())},className:"form-control",placeholder:"Search"})))},h=function(e){return e.isLoading?r.a.createElement("div",{className:"container p-5 m-auto text-center"},r.a.createElement("div",{className:"spinner-grow",style:{width:"3rem",height:"3rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement(r.a.Fragment,null)},b=a(2),g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container p-5 text-center"},r.a.createElement("div",{className:"d-block"},r.a.createElement("i",{className:"fa fa-paper-plane fa-5x"})),r.a.createElement("h5",{className:"mt-4"},"Nothing to display")))},N=a(1),y=a.n(N),C=3,k=2,L=function(e){var t=function(e,t){var a=[],n=C,r=k;if(e<=1)return[];if(e<n+2*r+2)a=y.a.range(1,e+1);else if(t<n){(a=y.a.range(1,n+1)).push("...");for(var l=0;l<r;l++)a.push(e-r+(l+1))}else if(e-t<n){for(var c=0;c<r;c++)a.push(c+1);a.push(".."),a=a.concat(y.a.range(e-n,e+1))}else{for(var i=0;i<r;i++)a.push(i+1);a.push(".."),(a=(a=a.concat(y.a.range(Math.ceil(t-n/2),t))).concat(y.a.range(t,Math.ceil(t+n/2)))).push("..");for(var o=0;o<r;o++)a.push(e-r+(o+1))}return a}(Math.ceil(e.listSize/e.showSize),e.page),a=void 0;return t?(t.length>0&&(a=y.a.map(t,(function(t,a){return r.a.createElement("li",{key:a,className:(t===e.page?"active":"")+(isNaN(t)?" unavailable":"")+" page-item"},r.a.createElement("button",{className:"page-link","data-id":t.toString(),onClick:isNaN(t.toString())||t===e.page?null:function(a){return e.onPageClick(t)}},isNaN(t)?r.a.createElement("span",{className:"gap"},t.toString()):r.a.createElement("span",null,t)))}))),0===e.listSize?null:r.a.createElement("nav",{"aria-label":"card-footer-pagination Page navigation example"},r.a.createElement("ul",{className:"pagination d-flex flex-wrap"},t.length>0&&r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{className:"page-link",onClick:e.onPrevClick,"aria-label":"Previous"},r.a.createElement("span",{"aria-hidden":"true"},"\xab"),r.a.createElement("span",{className:"sr-only"},"Previous"))),a,t.length>0&&r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{className:"page-link",onClick:e.onNextClick,"aria-label":"Next"},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"),r.a.createElement("span",{className:"sr-only"},"Next")))))):""};L.defaultProps={pageSizeOptions:[10,50,100]};var S=L,w=function(e){var t=e.visible,a=e.title,n=e.children;return r.a.createElement("div",{className:"modal fade show",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":t?"false":"true",style:{display:t?"block":"none"}},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document",style:{zIndex:1e4}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title text-primary"},a),r.a.createElement("button",{type:"button",onClick:e.onClose,className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},n),e.footer&&r.a.createElement("div",{className:"modal-footer"},e.footer))),r.a.createElement("div",{className:"modal-backdrop fade show",role:"presentation",onClick:e.onClose}))};w.defaultProps={visible:!0,title:"Modal title",children:r.a.createElement("p",null,"modal is great body")};var O=w,_=function(e){var t=e.bank;return r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("h5",null,t.bank_name),r.a.createElement("small",null,t.address))},A=function(e){var t=Object(n.useState)(0),a=Object(b.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(1),o=Object(b.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)(10),d=Object(b.a)(u,1)[0],f=Object(n.useState)(!1),E=Object(b.a)(f,2),p=E[0],v=E[1],h=Object(n.useState)({}),N=Object(b.a)(h,2),y=N[0],C=N[1],k=e.bankList[l],L=d*(s-1),w=k.slice(L,L+d),A=function(t){return e.favouriteList[t]?"fa-heart":"fa-heart-o"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card shadow-sm"},r.a.createElement("div",{className:"card-header bg-white"},r.a.createElement("ul",{className:"nav nav-pills card-header-pills"},r.a.createElement("li",{className:"nav-item btn-sm"},r.a.createElement("button",{onClick:function(){return c(0)},className:"nav-link ".concat(0===l?"active":"")},r.a.createElement("i",{className:"fa fa-globe mr-2"}),"ALL")),r.a.createElement("li",{className:"nav-item btn-sm"},r.a.createElement("button",{onClick:function(){m(1),c(1)},className:"nav-link ".concat(1===l?"active":"")},r.a.createElement("i",{className:"fa fa-heart-o mr-2"}),"FAVOURITES")))),r.a.createElement("div",{className:"card-body"},k.length>d&&r.a.createElement("div",{className:"d-flex flex-row justify-content-between"},r.a.createElement("h6",{className:"mt-3 m-none"},"Showing ",d," of ",k.length),r.a.createElement(S,{listSize:k.length,showSize:d,page:s,handleSizeChange:function(){},onNextClick:function(){m(s+1)},onPrevClick:function(){m(s-1)},onPageClick:function(e){return m(e)}})),r.a.createElement("div",{className:"row mt-3"},w.length>0?w.map((function(t){return r.a.createElement("div",{key:"bank-".concat(t.bank_id,"-").concat(t.bank_name,"-").concat(t.ifsc),className:"col mb-3"},r.a.createElement("div",{onClick:function(){return function(e){C(e),v(!0)}(t)},className:"card pointer"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.bank_name),r.a.createElement("h6",{className:"card-subtitle mb-2 text-primary"},t.ifsc),r.a.createElement("small",{className:""},t.branch),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},t.state),r.a.createElement("div",{className:"d-block text-right"},r.a.createElement("button",{onClick:function(a){a.stopPropagation(),e.onFavourite(t.ifsc)},className:"border-0 bg-transparent text-danger fa ".concat(A(t.ifsc))})))))})):r.a.createElement(g,null)))))),r.a.createElement(O,{visible:p,title:y.ifsc,children:r.a.createElement(_,{bank:y}),onClose:function(){return v(!1)},footer:r.a.createElement("div",{className:"w-100 d-flex justify-content-between"},r.a.createElement("small",{className:"text-left text-muted"},"".concat(y.city," | ").concat(y.state)),r.a.createElement("i",{onClick:function(){return e.onFavourite(y.ifsc)},className:"text-danger fa ".concat(A(y.ifsc))}))}))},T=function e(t){var a=null;t.show&&(a=setTimeout((function(){t.onClose()}),t.duration));var n=function(t){if(t){if(t===e.ToastTypes.error)return"bg-danger";if(t===e.ToastTypes.info)return"bg-info"}return"bg-info"}(t.type);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"toast ".concat(t.show?"show":""),style:{position:"absolute",top:10,right:10,width:"18%"}},r.a.createElement("div",{className:"toast-header text-white ".concat(n)},r.a.createElement("span",{className:"toast-icon rounded bg-white mr-2"}),r.a.createElement("strong",{className:"mr-auto"},t.title),r.a.createElement("button",{onClick:function(e){return a&&clearTimeout(a),void t.onClose()},type:"button",className:"ml-2 text-white close","data-dismiss":"toast","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"toast-body"},t.content)))};T.defaultProps={show:!0,title:"Toast header",content:"Toast body",type:(T.ToastTypes={info:"INFO",error:"ERROR"}).error,duration:4e3};var I=T,P=function(e){console.log("Render: ",e);var t=e.state,a=t.citiesList,l=t.selectedCity,c=t.isLoading,i=t.favouriteList,o=t.searchParam,m=e.state.error;!function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=s(),t=e.state,a=e.dispatch;Object(n.useEffect)((function(){t.selectedCity||a({type:"SELECTED_CITY",value:window.localStorage.getItem("selected-city")}),t.selectedCity&&(window.localStorage.setItem("selected-city",t.selectedCity.toString()),a({type:"IS_LOADING_TRUE"})),t.cache[t.selectedCity]?(a({type:"SUCCESSFUL_BANK_FETCH",value:t.cache[t.selectedCity]}),a({type:"IS_LOADING_FALSE"})):p(t.selectedCity,(function(e){a({type:"SUCCESSFUL_BANK_FETCH",value:e}),a({type:"IS_LOADING_FALSE"})}),(function(e){a({type:"FAILED_BANK_FETCH",value:e}),a({type:"IS_LOADING_FALSE"})}));var e=window.localStorage.getItem("favourite-list");if(e){var n={},r=!0,l=!1,c=void 0;try{for(var i,o=e.split(",")[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){n[i.value]=!0}}catch(s){l=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(l)throw c}}a({type:"UPDATE_FAVOURITE_FROM_LOCAL",value:n})}}),[t.selectedCity,a,t.cache])}(l);var u=function(){var e=s().state;return[e.filteredBanks,e.filteredBanks.filter((function(t){return e.favouriteList[t.ifsc]}))]}();return r.a.createElement("div",{className:"container p-5 border-left border-right"},r.a.createElement(I,{show:m.present,title:m.info.title,type:I.ToastTypes.error,content:m.info.content,onClose:function(){return e.dispatch({type:"CLEAR_ERROR"})}}),r.a.createElement(v,{onCitySelect:function(t){t.preventDefault(),e.dispatch({type:"SELECTED_CITY",value:t.target.value})},selectedCity:l,citiesList:a,searchParams:o,handleSearch:function(t){e.dispatch({type:"HANDLE_SEARCH_PARAM",value:t.target.value})},onSearch:function(){e.dispatch({type:"ON_SEARCH"})}}),r.a.createElement(h,{isLoading:c}),!c&&r.a.createElement(A,{bankList:u,favouriteList:i,onFavourite:function(t){e.dispatch({type:"TOGGLE_FAVOURITE",value:t.toString()})}}))},x=a(7),R={isLoading:!1,selectedCity:null,citiesList:["MUMBAI","COIMBATORE","BANGALORE","CHENNAI","DELHI"],banks:[],bank:{name:"",ifscCode:"",branchName:"",district:"",state:""},favouriteList:{},filteredBanks:[],searchParam:"",cache:{},error:{present:!1,info:{title:"",content:""}}};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=function(e){var t=e.searchParam.toLowerCase();return t.length<=0?e.banks:e.banks.filter((function(e){return e.bank_name.toLowerCase().includes(t)||e.ifsc.toLowerCase().includes(t)||e.state.toLowerCase().includes(t)||e.branch.toLowerCase().includes(t)||e.address.toLowerCase().includes(t)||e.city.toLowerCase().includes(t)||e.district.toLowerCase().includes(t)}))},U=function(e,t){switch(t.type){case"SELECTED_CITY":e.selectedCity=t.value;break;case"SUCCESSFUL_BANK_FETCH":e.banks=t.value,e.filteredBanks=D(e),e.cache[e.selectedCity]=t.value;break;case"FAILED_BANK_FETCH":var a=j({},e.error);a.present=!0,a.info={title:"Failed to fetch banks",content:t.value.toString()},e=j({},e,{error:a});break;case"CLEAR_ERROR":e=j({},e,{error:R.error});break;case"IS_LOADING_TRUE":e.isLoading=!0;break;case"IS_LOADING_FALSE":e.isLoading=!1;break;case"HANDLE_SEARCH_PARAM":e.searchParam=t.value,e.filteredBanks=D(e);break;case"UPDATE_FAVOURITE_FROM_LOCAL":e.favouriteList=t.value;break;case"ON_SEARCH":break;case"TOGGLE_FAVOURITE":var n=t.value;if(e.favouriteList[n]){e.favouriteList[n]=!1;var r=Object.keys(e.favouriteList);r=r.filter((function(t){return e.favouriteList[t]})),window.localStorage.setItem("favourite-list",r)}else e.favouriteList[n]=!0,window.localStorage.setItem("favourite-list",Object.keys(e.favouriteList));break;default:return j({},e)}return j({},e)},B=function(e){var t=Object(n.useReducer)(U,R);return r.a.createElement(o,{value:t},r.a.createElement(P,{state:t[0],dispatch:t[1]}))};var G=function(){return r.a.createElement(B,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.7934d2bf.chunk.js.map