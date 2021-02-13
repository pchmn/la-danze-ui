(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return s}));var t=n(3),a=n(7),o=(n(0),n(118)),i={title:"useLaDanzeDrawer",hide_title:!0},c={unversionedId:"api/hooks/useLaDanzeDrawer",id:"api/hooks/useLaDanzeDrawer",isDocsHomePage:!1,title:"useLaDanzeDrawer",description:"useLaDanzeDrawer()",source:"@site/docs\\api\\hooks\\useLaDanzeDrawer.mdx",slug:"/api/hooks/useLaDanzeDrawer",permalink:"/la-danze-ui/docs/1.0.0/api/hooks/useLaDanzeDrawer",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/hooks/useLaDanzeDrawer.mdx",version:"current",sidebar:"docs",previous:{title:"useAnimationKey",permalink:"/la-danze-ui/docs/1.0.0/api/hooks/useAnimationKey"}},u=[{value:"Example",id:"example",children:[]}],p={toc:u};function s(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"useladanzedrawer"},Object(o.b)("inlineCode",{parentName:"h1"},"useLaDanzeDrawer()")),Object(o.b)("p",null,"This hooks permits read and/or update open state of ",Object(o.b)("inlineCode",{parentName:"p"},"LaDanzeDrawer"),". "),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),"import { useLaDanzeDrawer } from 'la-danze-ui';\n...\n\nfunction App() {\n  const [open, setOpen] = useLaDanzeDrawer();\n  ...\n}\n")))}s.isMDXComponent=!0},118:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=s(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),f=t,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return n?a.a.createElement(m,c(c({ref:r},p),{},{components:n})):a.a.createElement(m,c({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);