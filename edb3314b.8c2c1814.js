(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(118)),i={title:"useAnimationKey",hide_title:!0},c={unversionedId:"api/hooks/useAnimationKey",id:"api/hooks/useAnimationKey",isDocsHomePage:!1,title:"useAnimationKey",description:"useAnimationKey()",source:"@site/docs/api/hooks/useAnimationKey.mdx",slug:"/api/hooks/useAnimationKey",permalink:"/la-danze-ui/docs/1.0.0/api/hooks/useAnimationKey",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/doc/docs/api/hooks/useAnimationKey.mdx",version:"current",sidebar:"docs",previous:{title:"NavLink",permalink:"/la-danze-ui/docs/1.0.0/api/components/NavLink"},next:{title:"useOpenDrawer",permalink:"/la-danze-ui/docs/1.0.0/api/hooks/useOpenDrawer"}},u=[{value:"Example",id:"example",children:[]}],p={toc:u};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"useanimationkey"},Object(o.b)("inlineCode",{parentName:"h1"},"useAnimationKey()")),Object(o.b)("p",null,"This hook returns an unique ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pchmn/la-danze-ui/blob/main/packages/lib/src/animation/hooks/useAnimationKey.hook.tsx"},Object(o.b)("inlineCode",{parentName:"a"},"AnimationKey")),"."),Object(o.b)("p",null,"It is only useful if you have nested routes in your app. It will help prevent parent route to re render when child route changes. See ",Object(o.b)("a",{parentName:"p",href:"/la-danze-ui/docs/1.0.0/usage/animation/routing#nested-routing"},"explanation"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import { useAnimationKey } from 'la-danze-ui';\n...\n\nfunction App() {\n  const animationKey = useAnimationKey();\n  ...\n}\n")))}s.isMDXComponent=!0},118:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),d=r,b=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);