(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),b=r,d=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=e.componentProps;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Required"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e){return r.createElement("tr",null,r.createElement("td",{className:"codeFont bold"},e.name),r.createElement("td",{className:"codeFont italic fz90"},(t=e.type,Array.isArray(t)?t.map((function(e,t){return 0===t?e:r.createElement(r.Fragment,null,r.createElement("br",null),"|",r.createElement("span",{style:{marginLeft:"5px"}},e))})):t)),r.createElement("td",{className:"codeFont italic fz90"},e.default),r.createElement("td",{className:"fz90"},e.required?r.createElement("span",{className:"bold"},"Yes"):"No"),r.createElement("td",{className:"propsDescription fz90"},e.description));var t}))))}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return s})),n.d(t,"additionalProps",(function(){return u})),n.d(t,"defaultProps",(function(){return b})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),o=n(0),i=n.n(o),c=n(117),l=n(120),p={title:"MountTransition",hide_title:!0},m={unversionedId:"api/components/MountTransition",id:"api/components/MountTransition",isDocsHomePage:!1,title:"MountTransition",description:"MountTransition",source:"@site/docs/api/components/MountTransition.mdx",slug:"/api/components/MountTransition",permalink:"/la-danze-ui/docs/0.0.9/api/components/MountTransition",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/doc/docs/api/components/MountTransition.mdx",version:"current",sidebar:"docs",previous:{title:"AnimateLink",permalink:"/la-danze-ui/docs/0.0.9/api/components/AnimateLink"},next:{title:"Form",permalink:"/la-danze-ui/docs/0.0.9/api/components/Form"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],u=[{name:"animationType",type:["'fade'","'scale'","'slideUp'","'slideDown'","'slideLeft'","'slideRight'"],default:"'fade'",description:Object(c.b)(i.a.Fragment,null," Animation type of the div. Overrides ",Object(c.b)("code",null,"variants")," prop.")}],b=[{name:"initial",type:["Target","VariantLabels","boolean"],default:"'initial'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.initial"},"doc"),".")},{name:"animate",type:["AnimationControls","TargetAndTransition","VariantLabels","boolean"],default:"'in'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.animate"},"doc"),".")},{name:"exit",type:["TargetAndTransition","VariantLabels"],default:"'out'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.exit"},"doc"),".")},{name:"transition",type:["Transition"],default:"{ duration: 0.225 }",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.transition"},"doc"),".")},{name:"variants",type:["Variants"],description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.variants"},"doc"),".")},{name:"style",type:["MotionStyle"],description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.style"},"doc"),".")}],d={toc:s,additionalProps:u,defaultProps:b};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"mounttransition"},Object(c.b)("inlineCode",{parentName:"h1"},"MountTransition")),Object(c.b)("p",null,"This component extends ",Object(c.b)("inlineCode",{parentName:"p"},"motion.div")," component of ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.framer.com/motion/"}),"framer-motion"),". It provides one additional prop: ",Object(c.b)("inlineCode",{parentName:"p"},"animationType"),"."),Object(c.b)("p",null,"You just have to use this prop to do basic animations:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"fade (default)"),Object(c.b)("li",{parentName:"ul"},"scale"),Object(c.b)("li",{parentName:"ul"},"slide up"),Object(c.b)("li",{parentName:"ul"},"slide down"),Object(c.b)("li",{parentName:"ul"},"slide left"),Object(c.b)("li",{parentName:"ul"},"slide right")),Object(c.b)("p",null,"All other ",Object(c.b)("inlineCode",{parentName:"p"},"motion.div")," props are present, but some have default values. See below."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { AnimatePresence } from 'framer-motion';\nimport { MountTransition } from 'la-danze-ui';\n\nfunction App({ isVisible }) {\n  return (\n    <AnimatePresence>\n      {isVisible && (\n        <MountTransition\n          animationType=\"slideLeft\"\n        />\n      )}\n    </AnimatePresence>\n  );\n}\n")),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Extends ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.framer.com/api/motion/component/#props"}),Object(c.b)("inlineCode",{parentName:"a"},"motion.div"))," props")),Object(c.b)("p",null,"Additional props:"),Object(c.b)(l.a,{componentProps:u,mdxType:"PropsTable"}),Object(c.b)("p",null,"Original ",Object(c.b)("inlineCode",{parentName:"p"},"motion.div")," props default values:"),Object(c.b)(l.a,{componentProps:b,mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);