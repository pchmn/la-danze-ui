(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"componentProps",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=n(0),i=n.n(r),c=n(118),m=n(121),l={title:"AnimateRoute",hide_title:!0},p={unversionedId:"api/components/AnimateRoute",id:"api/components/AnimateRoute",isDocsHomePage:!1,title:"AnimateRoute",description:"AnimateRoute",source:"@site/docs/api/components/AnimateRoute.mdx",slug:"/api/components/AnimateRoute",permalink:"/la-danze-ui/docs/0.0.12/api/components/AnimateRoute",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/doc/docs/api/components/AnimateRoute.mdx",version:"current",sidebar:"docs",previous:{title:"AnimateSwitch",permalink:"/la-danze-ui/docs/0.0.12/api/components/AnimateSwitch"},next:{title:"AnimateLink",permalink:"/la-danze-ui/docs/0.0.12/api/components/AnimateLink"}},u=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],s=[{name:"animationType",type:["'fade'","'scale'","'slideUp'","'slideDown'","'slideLeft'","'slideRight'"],default:"'fade'",description:Object(c.b)(i.a.Fragment,null," Animation type of the route. Overrides ",Object(c.b)("code",null,"variants")," prop.")},{name:"initial",type:["Target","VariantLabels","boolean"],default:"'initial'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.initial"},"doc"),".")},{name:"animate",type:["AnimationControls","TargetAndTransition","VariantLabels","boolean"],default:"'in'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.animate"},"doc"),".")},{name:"exit",type:["TargetAndTransition","VariantLabels"],default:"'out'",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.exit"},"doc"),".")},{name:"transition",type:["Transition"],default:"{ duration: 0.225 }",description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.transition"},"doc"),".")},{name:"variants",type:["Variants"],description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.variants"},"doc"),".")},{name:"style",type:["MotionStyle"],description:Object(c.b)(i.a.Fragment,null,"See framer-motion ",Object(c.b)("a",{href:"https://www.framer.com/api/motion/component/#motionprops.style"},"doc"),".")}],b={toc:u,componentProps:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"animateroute"},Object(c.b)("inlineCode",{parentName:"h1"},"AnimateRoute")),Object(c.b)("p",null,"This component extends ",Object(c.b)("inlineCode",{parentName:"p"},"Route")," component of ",Object(c.b)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/quick-start"},"react-router-dom")," and provides additionnal props for animating the route."),Object(c.b)("p",null,"By default, ",Object(c.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," will set same animation for all its contained routes. So if you want all your routes to behave the same, just use ",Object(c.b)("inlineCode",{parentName:"p"},"AnimateRoute")," as a regular ",Object(c.b)("inlineCode",{parentName:"p"},"Route")," and nothing more."),Object(c.b)("p",null,"However if you want a particular route to use a different animation, you can do it. For basic animations just set animationType prop:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"fade (default)"),Object(c.b)("li",{parentName:"ul"},"scale"),Object(c.b)("li",{parentName:"ul"},"slide up"),Object(c.b)("li",{parentName:"ul"},"slide down"),Object(c.b)("li",{parentName:"ul"},"slide left"),Object(c.b)("li",{parentName:"ul"},"slide right")),Object(c.b)("p",null,"If your not satisfied with these animations, you can do your own animation with some ",Object(c.b)("a",{parentName:"p",href:"https://www.framer.com/motion/"},"framer-motion")," imported props (inherited from ",Object(c.b)("a",{parentName:"p",href:"/la-danze-ui/docs/0.0.12/api/components/MountTransition"},Object(c.b)("inlineCode",{parentName:"a"},"MountTransition")),"). See below."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"AnimateRoute")," uses ",Object(c.b)("inlineCode",{parentName:"p"},"MountTransition")," component under the hook to make the animation.")),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import { AnimateSwitch, AnimateRoute } from \'la-danze-ui\';\n\nfunction App() {\n  return (\n    ...\n    <AnimateSwitch animationType="slideLeft">\n      // AnimateRoute must be contained in a AnimateSwitch\n      <AnimateRoute path="/example">\n          example\n      </AnimateRoute>\n      // Different animation for this route\n      <AnimateRoute path="/different-animation" animationType="scale">\n        different animation\n      </AnimateRoute>\n      ...\n    </AnimatedSwitch>\n  );\n}\n')),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Extends ",Object(c.b)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Route"},Object(c.b)("inlineCode",{parentName:"a"},"Route"))," props")),Object(c.b)("p",null,"Additional props:"),Object(c.b)(m.a,{componentProps:s,mdxType:"PropsTable"}))}d.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||s[b]||r;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);function o(e){var t=e.componentProps;return a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default"),a.createElement("th",null,"Required"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,t.map((function(e){return a.createElement("tr",null,a.createElement("td",{className:"codeFont bold"},e.name),a.createElement("td",{className:"codeFont italic fz90"},(t=e.type,Array.isArray(t)?t.map((function(e,t){return 0===t?e:a.createElement(a.Fragment,null,a.createElement("br",null),"|",a.createElement("span",{style:{marginLeft:"5px"}},e))})):t)),a.createElement("td",{className:"codeFont italic fz90"},e.default),a.createElement("td",{className:"fz90"},e.required?a.createElement("span",{className:"bold"},"Yes"):"No"),a.createElement("td",{className:"propsDescription fz90"},e.description));var t}))))}}}]);