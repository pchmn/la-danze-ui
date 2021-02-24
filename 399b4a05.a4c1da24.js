(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),b=r,d=s["".concat(c,".").concat(b)]||s[b]||u[b]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=e.componentProps;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Required"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e){return r.createElement("tr",null,r.createElement("td",{className:"codeFont bold"},e.name),r.createElement("td",{className:"codeFont italic fz90"},(t=e.type,Array.isArray(t)?t.map((function(e,t){return 0===t?e:r.createElement(r.Fragment,null,r.createElement("br",null),"|",r.createElement("span",{style:{marginLeft:"5px"}},e))})):t)),r.createElement("td",{className:"codeFont italic fz90"},e.default),r.createElement("td",{className:"fz90"},e.required?r.createElement("span",{className:"bold"},"Yes"):"No"),r.createElement("td",{className:"propsDescription fz90"},e.description));var t}))))}},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return s})),n.d(t,"componentProps",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=n(0),c=n.n(o),i=n(118),l=n(121),p={title:"DrawerListItem",hide_title:!0},m={unversionedId:"api/components/DrawerListItem",id:"api/components/DrawerListItem",isDocsHomePage:!1,title:"DrawerListItem",description:"DrawerListItem",source:"@site/docs/api/components/DrawerListItem.mdx",slug:"/api/components/DrawerListItem",permalink:"/la-danze-ui/docs/1.0.2/api/components/DrawerListItem",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/la-danze-ui-docs/docs/api/components/DrawerListItem.mdx",version:"current",sidebar:"docs",previous:{title:"Drawer",permalink:"/la-danze-ui/docs/1.0.2/api/components/Drawer"},next:{title:"AnimateSwitch",permalink:"/la-danze-ui/docs/1.0.2/api/components/AnimateSwitch"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],u=[{name:"title",type:"string",description:"The title of the tooltip when drawer is closed."},{name:"to",type:"string",required:!0,description:Object(i.b)(c.a.Fragment,null,"See react-router-dom ",Object(i.b)("a",{href:"https://reactrouter.com/web/api/Link"},"doc"),".")},{name:"exact",type:"boolean",description:Object(i.b)(c.a.Fragment,null,"See react-router-dom ",Object(i.b)("a",{href:"https://reactrouter.com/web/api/NavLink"},"doc"),".")},{name:"strict",type:"boolean",description:Object(i.b)(c.a.Fragment,null,"See react-router-dom ",Object(i.b)("a",{href:"https://reactrouter.com/web/api/NavLink"},"doc"),".")},{name:"isActive",type:"function",description:Object(i.b)(c.a.Fragment,null,"See react-router-dom ",Object(i.b)("a",{href:"https://reactrouter.com/web/api/NavLink"},"doc"),".",Object(i.b)("br",null),Object(i.b)("code",null,"(match: match%3CParams%3E | null, location: Location%3Cunknown%3E): boolean"))},{name:"onActive",type:"function",description:Object(i.b)(c.a.Fragment,null,"Event fired when active state changes.",Object(i.b)("br",null),Object(i.b)("code",null,"(active: boolean) => void"))},{name:"animationKey",type:"AnimationKey",description:Object(i.b)(c.a.Fragment,null,"Use it only if you have nested routes. It will prevent parent route from re rendering.")},{name:"noRefresh",type:"boolean",description:Object(i.b)(c.a.Fragment,null,"If set to ",Object(i.b)("code",null,"true")," it will prevent current route from refreshing on click.")},{name:"safeOnClick",type:"function",description:Object(i.b)(c.a.Fragment,null,"Onclick event fired only when there is a route change by clicking on item. ",Object(i.b)("code",null,"noRefresh")," must be ",Object(i.b)("code",null,"true"),".",Object(i.b)("br",null),Object(i.b)("code",null,"(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void"))}],b={toc:s,componentProps:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"drawerlistitem"},Object(i.b)("inlineCode",{parentName:"h1"},"DrawerListItem")),Object(i.b)("p",null,"This component extends ",Object(i.b)("inlineCode",{parentName:"p"},"ListItem")," component of ",Object(i.b)("a",{parentName:"p",href:"https://next.material-ui.com/"},"material-ui"),". It also provide props for routing. See props."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Can't be used outside ",Object(i.b)("a",{parentName:"p",href:"/la-danze-ui/docs/1.0.2/api/components/Drawer"},Object(i.b)("inlineCode",{parentName:"a"},"<Drawer>")),".")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import { List, ListItemIcon, ListItemText } from \'@material-ui/core\';\nimport { DrawerListItem } from \'la-danze-ui\';\n\nfunction App() {\n  return (\n    ...\n    <DrawerListItem to="/" exact title="Home">\n      <ListItemIcon>...</ListItemIcon>\n      <ListItemText primary="Home" />\n    </DrawerListItem>\n    ...\n  );\n}\n')),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Extends ",Object(i.b)("a",{parentName:"p",href:"https://next.material-ui.com/api/list-item/"},Object(i.b)("inlineCode",{parentName:"a"},"ListItem"))," props")),Object(i.b)("p",null,"Additional props:"),Object(i.b)(l.a,{componentProps:u,mdxType:"PropsTable"}))}d.isMDXComponent=!0}}]);