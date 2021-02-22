(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"componentProps",(function(){return m})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),o=t(0),c=t.n(o),i=t(118),l=t(121),p={title:"NavLink",hide_title:!0},u={unversionedId:"api/components/NavLink",id:"api/components/NavLink",isDocsHomePage:!1,title:"NavLink",description:"NavLink",source:"@site/docs/api/components/NavLink.mdx",slug:"/api/components/NavLink",permalink:"/la-danze-ui/docs/1.0.0/api/components/NavLink",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/doc/docs/api/components/NavLink.mdx",version:"current",sidebar:"docs",previous:{title:"FormField",permalink:"/la-danze-ui/docs/1.0.0/api/components/FormField"},next:{title:"useAnimationKey",permalink:"/la-danze-ui/docs/1.0.0/api/hooks/useAnimationKey"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],m=[{name:"noRefresh",type:"boolean",default:"false",description:Object(i.b)(c.a.Fragment,null,"If ",Object(i.b)("code",null,"true")," and link is active, prevents refresh when clicking.")},{name:"safeOnClick",type:"function",description:Object(i.b)(c.a.Fragment,null,"Onclick event fired only when there is a route change by clicking on link (if ",Object(i.b)("code",null,"noRefresh")," = ",Object(i.b)("code",null,"true")," and link is active, event will not be fired).",Object(i.b)("br",null),Object(i.b)("code",null,"(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void"))},{name:"onActive",type:"function",description:Object(i.b)(c.a.Fragment,null,"Event fired when active state changes.",Object(i.b)("br",null),Object(i.b)("code",null,"(active: boolean) => void"))}],d={toc:s,componentProps:m};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"navlink"},Object(i.b)("inlineCode",{parentName:"h1"},"NavLink")),Object(i.b)("p",null,"This component extends extends ",Object(i.b)("inlineCode",{parentName:"p"},"NavLink")," of ",Object(i.b)("a",{parentName:"p",href:"https://reactrouter.com/web/api/NavLink"},"react-router-dom"),". It provides additional props for preventing refresh of current route."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import { NavLink } from \'la-danze-ui\';\n\nfunction App() {\n  return (\n    ...\n    <NavLink to="/" exact title="Home" noRefresh />\n    ...\n  );\n}\n')),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Extends react-router-dom ",Object(i.b)("a",{parentName:"p",href:"https://reactrouter.com/web/api/NavLink"},Object(i.b)("inlineCode",{parentName:"a"},"NavLink"))," props")),Object(i.b)("p",null,"Additional props:"),Object(i.b)(l.a,{componentProps:m,mdxType:"PropsTable"}))}b.isMDXComponent=!0},118:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return t?a.a.createElement(b,i(i({ref:n},p),{},{components:t})):a.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(0);function a(e){var n=e.componentProps;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Required"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,n.map((function(e){return r.createElement("tr",null,r.createElement("td",{className:"codeFont bold"},e.name),r.createElement("td",{className:"codeFont italic fz90"},(n=e.type,Array.isArray(n)?n.map((function(e,n){return 0===n?e:r.createElement(r.Fragment,null,r.createElement("br",null),"|",r.createElement("span",{style:{marginLeft:"5px"}},e))})):n)),r.createElement("td",{className:"codeFont italic fz90"},e.default),r.createElement("td",{className:"fz90"},e.required?r.createElement("span",{className:"bold"},"Yes"):"No"),r.createElement("td",{className:"propsDescription fz90"},e.description));var n}))))}}}]);