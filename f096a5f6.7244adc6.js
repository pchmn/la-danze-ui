(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return m})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),o=(t(0),t(128)),r={title:"Animate routing"},m={unversionedId:"usage/animation/routing",id:"usage/animation/routing",isDocsHomePage:!1,title:"Animate routing",description:"Do classic animations with react-router-dom.",source:"@site/docs/usage/animation/routing.md",slug:"/usage/animation/routing",permalink:"/la-danze-ui/docs/1.3.0-beta.2/usage/animation/routing",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/la-danze-ui-docs/docs/usage/animation/routing.md",version:"current",sidebar:"docs",previous:{title:"Components/Hooks",permalink:"/la-danze-ui/docs/1.3.0-beta.2/usage/core/otherComponents"},next:{title:"Animate appearance",permalink:"/la-danze-ui/docs/1.3.0-beta.2/usage/animation/appearance"}},c=[{value:"Basic usage",id:"basic-usage",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[{value:"Nested routing",id:"nested-routing",children:[]},{value:"Different animations between routes",id:"different-animations-between-routes",children:[]},{value:"Custom animations",id:"custom-animations",children:[]}]},{value:"Animations available",id:"animations-available",children:[]},{value:"API",id:"api",children:[]}],u={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Do classic ",Object(o.b)("a",{parentName:"p",href:"#animations-available"},"animations")," with ",Object(o.b)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/quick-start"},"react-router-dom"),"."),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)("p",null,"Just replace your ",Object(o.b)("inlineCode",{parentName:"p"},"Switch")," by ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch"),", your ",Object(o.b)("inlineCode",{parentName:"p"},"Route")," by ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateRoute")," and set ",Object(o.b)("inlineCode",{parentName:"p"},"animationType")," prop on ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," (fade by default)."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { BrowserRouter, Link } from \'react-router-dom\';\nimport { AnimateSwitch, AnimateRoute  } from \'la-danze-ui\';\n\nfunction App() {  \n  return (\n    <BrowserRouter>\n\n      <Link to="/" exact>Go to Home</Link>\n      <Link to="/route1">Go to Route 1</Link>\n      <Link to="/route2">Go to Route 2</Link>\n\n      // Set animation type for the contained routes\n      <AnimateSwitch animationType="slideLeft">\n        <AnimateRoute exact path="/">\n          Home\n        </AnimateRoute>\n        <AnimateRoute path="/route1">\n          Route 1\n        </AnimateRoute>\n        <AnimateRoute path="/route2">\n          Route 2\n        </AnimateRoute>\n      </AnimateSwitch>\n\n    </BrowserRouter>\n  );\n}\n')),Object(o.b)("h2",{id:"advanced-usage"},"Advanced usage"),Object(o.b)("h3",{id:"nested-routing"},"Nested routing"),Object(o.b)("p",null,"If you have nested routing in your app, there is a problem (fixable): when a child route changes, it will re render parent route as well."),Object(o.b)("p",null,"To prevent this you can use ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateLink")," (extends ",Object(o.b)("inlineCode",{parentName:"p"},"NavLink")," of react-router-dom) in combination with ",Object(o.b)("inlineCode",{parentName:"p"},"useAnimateKey()")," hook and ",Object(o.b)("inlineCode",{parentName:"p"},"animationKey")," prop of ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," component. "),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { BrowserRouter, Link } from \'react-router-dom\';\nimport { AnimateSwitch, AnimateRoute, AnimateLink, useAnimationKey  } from \'la-danze-ui\';\n\nfunction App() {\n  // Call hook to get unique animationKey object\n  // It is shared by AnimateLinks and AnimateSwitch\n  const animationKey = useAnimationKey();\n\n  return (\n    <BrowserRouter>\n\n      // Set animationKey prop on AnimateLinks\n      <AnimateLink to="/" exact animationKey={animationKey}>Go to Home</AnimateLink>\n      <AnimateLink to="/nested-routes" animationKey={animationKey}>Go to Nested routes</AnimateLink>\n\n      // Set animationKey prop on AnimateSwitch\n      <AnimateSwitch animationKey={animationKey}>\n        <AnimateRoute exact path="/">\n          Home\n        </AnimateRoute>\n        {/* Nested Routes */}\n        <AnimateRoute path="/nested-routes">\n          <NestedRoutes />\n        </AnimateRoute>\n      </AnimateSwitch>\n\n    </BrowserRouter>\n  );\n}\n\nfunction NestedRoutes() {\n  // Get unique animationKey object\n  // Since it is different from parent animationKey, it will prevent re rendering of parent route\n  const animationKey = useAnimationKey();\n\n  return (\n    // Set animationKey prop on AnimateLinks\n    <AnimateLink to="/nested-routes/" exact animationKey={animationKey}>Go to Nested Routes Home</AnimateLink>\n    <AnimateLink to="/nested-routes/route1" animationKey={animationKey}>Go to Nested Routes Route 1</AnimateLink>\n\n    // Set animationKey prop on AnimateSwitch\n    <AnimateSwitch animationKey={animationKey}>\n      <AnimateRoute exact path="/nested-routes/">\n        Nested Routes Home\n      </AnimateRoute>\n      <AnimateRoute path="/nested-routes/route1">\n        Nested Routes Route 1\n      </AnimateRoute>\n    </AnimateSwitch>\n  );\n}\n')),Object(o.b)("h3",{id:"different-animations-between-routes"},"Different animations between routes"),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," will set same animation for all its contained routes."),Object(o.b)("p",null,"If you want a route to make a different animation, you juste have to set ",Object(o.b)("inlineCode",{parentName:"p"},"animationType")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateRoute")," concerned."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { BrowserRouter, Link } from \'react-router-dom\';\nimport { AnimateSwitch, AnimateRoute  } from \'la-danze-ui\';\n\nfunction App() {  \n  return (\n    <BrowserRouter>\n\n      <Link to="/" exact>Go to Home</Link>\n      <Link to="/route1">Go to Route 1</Link>\n      <Link to="/route2">Go to Route 2</Link>\n\n      <AnimateSwitch animationType="slideLeft">\n        // slideLeft animation (extends animationType of AnimateSwitch)\n        <AnimateRoute exact path="/">\n          Home\n        </AnimateRoute>\n        // slideLeft animation (extends animationType of AnimateSwitch)\n        <AnimateRoute path="/route1">\n          Route 1\n        </AnimateRoute>\n        // scale animation (overrides animationType of AnimateSwitch)\n        <AnimateRoute path="/route2" animationType="scale">\n          Route 2\n        </AnimateRoute>\n      </AnimateSwitch>\n\n    </BrowserRouter>\n  );\n}\n')),Object(o.b)("h3",{id:"custom-animations"},"Custom animations"),Object(o.b)("p",null,"You can create your own animations, because ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateRoute")," inherite some ",Object(o.b)("a",{parentName:"p",href:"https://www.framer.com/motion/"},"framer-motion")," props."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"#api"},"API doc")," of these components for more detail."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can mix nested routing, different animations between routes and custom animations without any problem.")),Object(o.b)("h2",{id:"animations-available"},"Animations available"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fade")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"scale")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"slideUp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"slidedown")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"slideLeft")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"slideRight"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Use them with ",Object(o.b)("inlineCode",{parentName:"p"},"animationType")," prop of ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateSwitch")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AnimateRoute"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/la-danze-ui/docs/1.3.0-beta.2/api/components/AnimateSwitch"},Object(o.b)("inlineCode",{parentName:"a"},"AnimateSwitch"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/la-danze-ui/docs/1.3.0-beta.2/api/components/AnimateRoute"},Object(o.b)("inlineCode",{parentName:"a"},"AnimateRoute"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/la-danze-ui/docs/1.3.0-beta.2/api/components/AnimateLink"},Object(o.b)("inlineCode",{parentName:"a"},"AnimateLink"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/la-danze-ui/docs/1.3.0-beta.2/api/hooks/useAnimationKey"},Object(o.b)("inlineCode",{parentName:"a"},"useAnimationKey()")))))}p.isMDXComponent=!0},128:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},l=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),b=a,d=l["".concat(r,".").concat(b)]||l[b]||s[b]||o;return t?i.a.createElement(d,m(m({ref:n},u),{},{components:t})):i.a.createElement(d,m({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=b;var m={};for(var c in n)hasOwnProperty.call(n,c)&&(m[c]=n[c]);m.originalType=e,m.mdxType="string"==typeof e?e:a,r[1]=m;for(var u=2;u<o;u++)r[u]=t[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);