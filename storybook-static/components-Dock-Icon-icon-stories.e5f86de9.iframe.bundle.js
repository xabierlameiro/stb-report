"use strict";(self.webpackChunkthe_last_dance=self.webpackChunkthe_last_dance||[]).push([[165],{"./src/components/Dock/Icon/icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_constants_navMenu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/navMenu.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Dock/Icon/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Dock / Icon",component:___WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{src:{control:"select",options:[_constants_navMenu__WEBPACK_IMPORTED_MODULE_1__.M[0].img,_constants_navMenu__WEBPACK_IMPORTED_MODULE_1__.M[1].img,_constants_navMenu__WEBPACK_IMPORTED_MODULE_1__.M[2].img,_constants_navMenu__WEBPACK_IMPORTED_MODULE_1__.M[3].img]}}};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.A,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={src:_constants_navMenu__WEBPACK_IMPORTED_MODULE_1__.M[0].img,alt:_constants_navMenu__WEBPACK_IMPORTED_MODULE_1__.M[0].alt},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Icon {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Dock/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Icon=function Icon(_ref){var src=_ref.src,alt=_ref.alt,testId=_ref.testId;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{"data-testid":testId,src,alt,width:60,height:60,priority:!0}))};const __WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dock/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Dock/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/navMenu.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>menu});var menu=[{img:"/menu/vscode.png",alt:"Go to home page",link:"/",testId:"home"},{img:"/menu/notes.png",alt:"Go to blog",link:{en:"/blog/nextjs/continuous-integration-with-github-actions-workflow",es:"/blog/nextjs/integracion-continua-con-github-actions-workflow",gl:"/blog/nextjs/integracion-continua-con-github-actions-workflow"},testId:"blog"},{img:"/menu/terminal.png",alt:"Go to terminal",link:"/comments",testId:"terminal"},{img:"/menu/books.png",alt:"Legal documents",link:"/legal/cookies-policy",testId:"legal"},{img:"/menu/settings.png",alt:"Got to configuration page",link:"/settings",testId:"settings"}]},"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);