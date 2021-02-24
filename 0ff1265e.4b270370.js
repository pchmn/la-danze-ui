(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,b=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e){var t=e.componentProps;return a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"),a.createElement("th",null,"Required"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,t.map((function(e){return a.createElement("tr",null,a.createElement("td",{className:"codeFont bold"},e.name),a.createElement("td",{className:"codeFont italic fz90"},(t=e.type,Array.isArray(t)?t.map((function(e,t){return 0===t?e:a.createElement(a.Fragment,null,a.createElement("br",null),"|",a.createElement("span",{style:{marginLeft:"5px"}},e))})):t)),a.createElement("td",{className:"codeFont italic fz90"},e.default),a.createElement("td",{className:"fz90"},e.required?a.createElement("span",{className:"bold"},"Yes"):"No"),a.createElement("td",{className:"propsDescription fz90"},e.description));var t}))))}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return s})),n.d(t,"componentProps",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=n(0),i=n.n(o),c=n(118),l=n(121),p={title:"AnimateSwitch",hide_title:!0},m={unversionedId:"api/components/AnimateSwitch",id:"api/components/AnimateSwitch",isDocsHomePage:!1,title:"AnimateSwitch",description:"AnimateSwitch",source:"@site/docs/api/components/AnimateSwitch.mdx",slug:"/api/components/AnimateSwitch",permalink:"/la-danze-ui/docs/1.0.2/api/components/AnimateSwitch",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/la-danze-ui-docs/docs/api/components/AnimateSwitch.mdx",version:"current",sidebar:"docs",previous:{title:"DrawerListItem",permalink:"/la-danze-ui/docs/1.0.2/api/components/DrawerListItem"},next:{title:"AnimateRoute",permalink:"/la-danze-ui/docs/1.0.2/api/components/AnimateRoute"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],u=[{name:"animationType",type:["'fade'","'scale'","'slideUp'","'slideDown'","'slideLeft'","'slideRight'"],default:"'fade'",description:Object(c.b)(i.a.Fragment,null," Animation type of all contained routes. Overrides ",Object(c.b)("code",null,"variants")," prop. Overriden by ",Object(c.b)("code",null,"AnimateRoute")," ",Object(c.b)("code",null,"animationType")," prop.")},{name:"animationKey",type:"AnimationKey",description:Object(c.b)(i.a.Fragment,null,"Override ",Object(c.b)("code",null,"key")," prop. Use it only if you have nested routes. It will prevent parent route to re render.")},{name:"initial",type:["Target","VariantLabels","boolean"],default:"'initial'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.initial"},"doc"),".")},{name:"animate",type:["AnimationControls","TargetAndTransition","VariantLabels","boolean"],default:"'in'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.animate"},"doc"),".")},{name:"exit",type:["TargetAndTransition","VariantLabels"],default:"'out'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.exit"},"doc"),".")},{name:"transition",type:["Transition"],default:"{ duration: 0.225 }",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.transition"},"doc"),".")},{name:"variants",type:["Variants"],description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.variants"},"doc"),".")},{name:"style",type:["MotionStyle"],description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.style"},"doc"),".")}],d={toc:s,componentProps:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"animateswitch"},Object(c.b)("inlineCode",{parentName:"h1"},"AnimateSwitch")),Object(c.b)("p",null,"This component extends ",Object(c.b)("inlineCode",{parentName:"p"},"Switch")," component of ",Object(c.b)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/quick-start"},"react-router-dom")," and provides additionnal props for animating contained routes."),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"animationType")," prop to do basic animations:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"fade (default)"),Object(c.b)("li",{parentName:"ul"},"scale"),Object(c.b)("li",{parentName:"ul"},"slide up"),Object(c.b)("li",{parentName:"ul"},"slide down"),Object(c.b)("li",{parentName:"ul"},"slide left"),Object(c.b)("li",{parentName:"ul"},"slide right")),Object(c.b)("p",null,"If your not satisfied with these animations, you can do your own animation with some ",Object(c.b)("a",{parentName:"p",href:"https://www.framer.com/motion/"},"framer-motion")," imported props (inherited from ",Object(c.b)("a",{parentName:"p",href:"/la-danze-ui/docs/1.0.2/api/components/MountTransition"},Object(c.b)("inlineCode",{parentName:"a"},"MountTransition")),"). See below."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import { AnimateSwitch, AnimateRoute } from \'la-danze-ui\';\n\nfunction App() {\n  return (\n    ...\n    <AnimateSwitch animationType="slideLeft">\n      // AnimateSwitch can only be used with AnimateRoute\n      <AnimateRoute path="/example">example</AnimateRoute>\n      ...\n    </AnimatedSwitch>\n  );\n}\n')),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Extends ",Object(c.b)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Switch"},Object(c.b)("inlineCode",{parentName:"a"},"Switch"))," props")),Object(c.b)("p",null,"Additional props:"),Object(c.b)(l.a,{componentProps:u,mdxType:"PropsTable"}))}b.isMDXComponent=!0}}]);