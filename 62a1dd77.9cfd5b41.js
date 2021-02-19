(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=e.componentProps;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Required"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e){return r.createElement("tr",null,r.createElement("td",{className:"codeFont bold"},e.name),r.createElement("td",{className:"codeFont italic fz90"},(t=e.type,Array.isArray(t)?t.map((function(e,t){return 0===t?e:r.createElement(r.Fragment,null,r.createElement("br",null),"|",r.createElement("span",{style:{marginLeft:"5px"}},e))})):t)),r.createElement("td",{className:"codeFont italic fz90"},e.default),r.createElement("td",{className:"fz90"},e.required?r.createElement("span",{className:"bold"},"Yes"):"No"),r.createElement("td",{className:"propsDescription fz90"},e.description));var t}))))}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"componentProps",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(117)),c=n(120),i={title:"LaDanzeDrawer",hide_title:!0},l={unversionedId:"api/components/LaDanzeDrawer",id:"api/components/LaDanzeDrawer",isDocsHomePage:!1,title:"LaDanzeDrawer",description:"LaDanzeDrawer",source:"@site/docs/api/components/LaDanzeDrawer.mdx",slug:"/api/components/LaDanzeDrawer",permalink:"/la-danze-ui/docs/0.0.9/api/components/LaDanzeDrawer",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/doc/docs/api/components/LaDanzeDrawer.mdx",version:"current",sidebar:"docs",previous:{title:"DrawerTemplate",permalink:"/la-danze-ui/docs/0.0.9/api/components/DrawerTemplate"},next:{title:"DrawerListItem",permalink:"/la-danze-ui/docs/0.0.9/api/components/DrawerListItem"}},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],u=[{name:"logo",type:"string",required:!0,description:"The logo to use."},{name:"title",type:"string",required:!0,description:"The title to use."}],m={toc:p,componentProps:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ladanzedrawer"},Object(o.b)("inlineCode",{parentName:"h1"},"LaDanzeDrawer")),Object(o.b)("p",null,"This component is a custom drawer. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pchmn.github.io/la-danze-ui/demo"}),"demo")," for a live preview."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It must be use with ",Object(o.b)("inlineCode",{parentName:"p"},"DrawerTemplate")," (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/la-danze-ui/docs/0.0.9/usage/core/drawer"}),"doc"),").")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport logo from './logo.svg';\nimport { \n  DrawerTemplate,\n  DrawerContainer,\n  MainContainer,\n  LaDanzeDrawer\n} from 'la-danze-ui';\n\nfunction App() {\n  return (\n    <DrawerTemplate>\n      <DrawerContainer>\n        <LaDanzeDrawer logo={logo} title=\"Drawer\">\n          ...\n        </LaDanzeDrawer>\n      </DrawerContainer>\n\n      <MainContainer>\n        ...\n      </MainContainer>\n    </DrawerTemplate>\n  );\n}\n")),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)(c.a,{componentProps:u,mdxType:"PropsTable"}))}s.isMDXComponent=!0}}]);