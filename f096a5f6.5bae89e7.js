(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(117)),r={title:"Animate routing"},c={unversionedId:"usage/animation/routing",id:"usage/animation/routing",isDocsHomePage:!1,title:"Animate routing",description:"Just do classic animations with react-router-dom.",source:"@site/docs/usage/animation/routing.md",slug:"/usage/animation/routing",permalink:"/la-danze-ui/docs/0.0.9/usage/animation/routing",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/doc/docs/usage/animation/routing.md",version:"current",sidebar:"docs",previous:{title:"Drawer",permalink:"/la-danze-ui/docs/0.0.9/usage/core/drawer"},next:{title:"Animate appearance",permalink:"/la-danze-ui/docs/0.0.9/usage/animation/appearance"}},m=[{value:"Basic usage",id:"basic-usage",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[{value:"Nested routing",id:"nested-routing",children:[]},{value:"Different animations between routes",id:"different-animations-between-routes",children:[]},{value:"Custom animations",id:"custom-animations",children:[]}]},{value:"Animations available",id:"animations-available",children:[]},{value:"API",id:"api",children:[]}],u={toc:m};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Just do classic ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#animations-available"}),"animations")," with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactrouter.com/web/guides/quick-start"}),"react-router-dom"),"."),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)("p",null,"Just replace your ",Object(o.b)("inlineCode",{parentName:"p"},"Switch")," by ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch"),", your ",Object(o.b)("inlineCode",{parentName:"p"},"Route")," by ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateRoute")," and set ",Object(o.b)("inlineCode",{parentName:"p"},"animationType")," prop on ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," (fade by default)."),Object(o.b)("p",null,"See Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { BrowserRouter, Link } from \'react-router-dom\';\nimport { AnimateSwitch, AnimateRoute  } from \'la-danze-ui\';\n\nfunction App() {  \n  return (\n    <BrowserRouter>\n\n      <Link to="/" exact>Go to Home</Link>\n      <Link to="/route1">Go to Route 1</Link>\n      <Link to="/route2">Go to Route 2</Link>\n\n      // Set animation type for the contained routes\n      <AnimateSwitch animationType="slideLeft">\n        <AnimateRoute exact path="/">\n          Home\n        </AnimateRoute>\n        <AnimateRoute path="/route1">\n          Route 1\n        </AnimateRoute>\n        <AnimateRoute path="/route2">\n          Route 2\n        </AnimateRoute>\n      </AnimateSwitch>\n\n    </BrowserRouter>\n  );\n}\n')),Object(o.b)("h2",{id:"advanced-usage"},"Advanced usage"),Object(o.b)("h3",{id:"nested-routing"},"Nested routing"),Object(o.b)("p",null,"If you have nested routing in your app, there is a problem (fixable): when a child route changes, it will re render parent route as well."),Object(o.b)("p",null,"To prevent this you can use ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateLink")," (extends ",Object(o.b)("inlineCode",{parentName:"p"},"NavLink")," of react-router-dom) in combination with ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimateKey()")," hook and ",Object(o.b)("inlineCode",{parentName:"p"},"animationKey")," prop of ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," component. "),Object(o.b)("p",null,"See example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { BrowserRouter, Link } from \'react-router-dom\';\nimport { AnimateSwitch, AnimateRoute, AnimateLink, useAnimationKey  } from \'la-danze-ui\';\n\nfunction App() {\n  // Call hook to get unique animationKey object\n  // It is shared by AnimateLinks and AnimateSwitch\n  const animationKey = useAnimationKey();\n\n  return (\n    <BrowserRouter>\n\n      // Set animationKey prop on AnimateLinks\n      <AnimateLink to="/" exact animationKey={animationKey}>Go to Home</AnimateLink>\n      <AnimateLink to="/nested-routes" animationKey={animationKey}>Go to Nested routes</AnimateLink>\n\n      // Set animationKey prop on AnimateSwitch\n      <AnimateSwitch animationKey={animationKey}>\n        <AnimateRoute exact path="/">\n          Home\n        </AnimateRoute>\n        {/* Nested Routes */}\n        <AnimateRoute path="/nested-routes">\n          <NestedRoutes />\n        </AnimateRoute>\n      </AnimateSwitch>\n\n    </BrowserRouter>\n  );\n}\n\nfunction NestedRoutes() {\n  // Get unique animationKey object\n  // Since it is different from parent animationKey, it will prevent re rendering of parent route\n  const animationKey = useAnimationKey();\n\n  return (\n    // Set animationKey prop on AnimateLinks\n    <AnimateLink to="/nested-routes/" exact animationKey={animationKey}>Go to Nested Routes Home</AnimateLink>\n    <AnimateLink to="/nested-routes/route1" animationKey={animationKey}>Go to Nested Routes Route 1</AnimateLink>\n\n    // Set animationKey prop on AnimateSwitch\n    <AnimateSwitch animationKey={animationKey}>\n      <AnimateRoute exact path="/nested-routes/">\n        Nested Routes Home\n      </AnimateRoute>\n      <AnimateRoute path="/nested-routes/route1">\n        Nested Routes Route 1\n      </AnimateRoute>\n    </AnimateSwitch>\n  );\n}\n')),Object(o.b)("h3",{id:"different-animations-between-routes"},"Different animations between routes"),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," will set same animation for all its contained routes."),Object(o.b)("p",null,"If you want a route to make a different animation, you juste have to set ",Object(o.b)("inlineCode",{parentName:"p"},"animationType")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateRoute")," concerned."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { BrowserRouter, Link } from \'react-router-dom\';\nimport { AnimateSwitch, AnimateRoute  } from \'la-danze-ui\';\n\nfunction App() {  \n  return (\n    <BrowserRouter>\n\n      <Link to="/" exact>Go to Home</Link>\n      <Link to="/route1">Go to Route 1</Link>\n      <Link to="/route2">Go to Route 2</Link>\n\n      <AnimateSwitch animationType="slideLeft">\n        // slideLeft animation (extends animationType of AnimateSwitch)\n        <AnimateRoute exact path="/">\n          Home\n        </AnimateRoute>\n        // slideLeft animation (extends animationType of AnimateSwitch)\n        <AnimateRoute path="/route1">\n          Route 1\n        </AnimateRoute>\n        // scale animation (overrides animationType of AnimateSwitch)\n        <AnimateRoute path="/route2" animationType="scale">\n          Route 2\n        </AnimateRoute>\n      </AnimateSwitch>\n\n    </BrowserRouter>\n  );\n}\n')),Object(o.b)("h3",{id:"custom-animations"},"Custom animations"),Object(o.b)("p",null,"You can create your own animations, because ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateRoute")," inherite some ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.framer.com/motion/"}),"framer-motion")," props."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#api"}),"API doc")," of these components for more detail."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can mix nested routing, different animations between routes and custom animations without any problem.")),Object(o.b)("h2",{id:"animations-available"},"Animations available"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fade")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"scale")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"slideUp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"slidedown")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"slideLeft")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"slideRight"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Use them with ",Object(o.b)("inlineCode",{parentName:"p"},"animationType")," prop of ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateRoute"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/la-danze-ui/docs/0.0.9/api/components/AnimateSwitch"}),Object(o.b)("inlineCode",{parentName:"a"},"AnimateSwitch"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/la-danze-ui/docs/0.0.9/api/components/AnimateRoute"}),Object(o.b)("inlineCode",{parentName:"a"},"AnimateRoute"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/la-danze-ui/docs/0.0.9/api/components/AnimateLink"}),Object(o.b)("inlineCode",{parentName:"a"},"AnimateLink"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/la-danze-ui/docs/0.0.9/api/hooks/useAnimationKey"}),Object(o.b)("inlineCode",{parentName:"a"},"useAnimationKey()")))))}p.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),l=p(n),s=a,d=l["".concat(r,".").concat(s)]||l[s]||b[s]||o;return n?i.a.createElement(d,c(c({ref:t},u),{},{components:n})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=s;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);