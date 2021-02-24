(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"additionalProps",(function(){return m})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(118)),i=n(121),l={title:"FormField",hide_title:!0},c={unversionedId:"api/components/FormField",id:"api/components/FormField",isDocsHomePage:!1,title:"FormField",description:"FormField",source:"@site/docs/api/components/FormField.mdx",slug:"/api/components/FormField",permalink:"/la-danze-ui/docs/1.0.2/api/components/FormField",editUrl:"https://github.com/pchmn/la-danze-ui/edit/main/packages/la-danze-ui-docs/docs/api/components/FormField.mdx",version:"current",sidebar:"docs",previous:{title:"Form",permalink:"/la-danze-ui/docs/1.0.2/api/components/Form"},next:{title:"NavLink",permalink:"/la-danze-ui/docs/1.0.2/api/components/NavLink"}},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],m=[{name:"error",type:"boolean",description:"Weither field is in error or not."},{name:"helperText",type:"string",description:"Error message to display."},{name:"disabled",type:"boolean",description:"Weither field is disabled or not."}],s={toc:p,additionalProps:m};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"formfield"},Object(a.b)("inlineCode",{parentName:"h1"},"FormField")),Object(a.b)("p",null,"This component extends ",Object(a.b)("inlineCode",{parentName:"p"},"Controller")," component of ",Object(a.b)("a",{parentName:"p",href:"https://react-hook-form.com/"},"react-hook-form")," and is meant to be used with ",Object(a.b)("a",{parentName:"p",href:"https://next.material-ui.com/"},"material-ui")," components."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Can't be used outside ",Object(a.b)("a",{parentName:"p",href:"/la-danze-ui/docs/1.0.2/api/components/Form"},Object(a.b)("inlineCode",{parentName:"a"},"<Form>")),".")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import { useForm } from 'react-hook-form';\nimport TextField from '@material-ui/core/TextField';\nimport { Form, FormField } from 'la-danze-ui';\n\nfunction App() {\n  const form = useForm();\n\n  return (\n    <Form form={form}>\n      <FormField\n        name=\"email\"\n        as={TextField}\n        rules={{ required: { value: true, message: 'Email is required' } }} />\n      ...\n    </Form>\n  );\n}\n")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Extends ",Object(a.b)("a",{parentName:"p",href:"https://react-hook-form.com/api#Controller"},Object(a.b)("inlineCode",{parentName:"a"},"Controller"))," props")),Object(a.b)("p",null,"Additional props:"),Object(a.b)(i.a,{componentProps:m,mdxType:"PropsTable"}))}u.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,b=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return n?o.a.createElement(b,l(l({ref:t},p),{},{components:n})):o.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){var t=e.componentProps;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Required"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e){return r.createElement("tr",null,r.createElement("td",{className:"codeFont bold"},e.name),r.createElement("td",{className:"codeFont italic fz90"},(t=e.type,Array.isArray(t)?t.map((function(e,t){return 0===t?e:r.createElement(r.Fragment,null,r.createElement("br",null),"|",r.createElement("span",{style:{marginLeft:"5px"}},e))})):t)),r.createElement("td",{className:"codeFont italic fz90"},e.default),r.createElement("td",{className:"fz90"},e.required?r.createElement("span",{className:"bold"},"Yes"):"No"),r.createElement("td",{className:"propsDescription fz90"},e.description));var t}))))}}}]);