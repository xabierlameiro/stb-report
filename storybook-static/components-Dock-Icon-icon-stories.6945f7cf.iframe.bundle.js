"use strict";(self.webpackChunkthe_last_dance=self.webpackChunkthe_last_dance||[]).push([[626],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/Dock/Icon/icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_home_runner_work_the_last_dance_the_last_dance_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants_navMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/navMenu.ts"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Dock/Icon/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_the_last_dance_the_last_dance_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Dock / Icon",component:___WEBPACK_IMPORTED_MODULE_3__.Z,argTypes:{src:{control:"select",options:[_constants_navMenu__WEBPACK_IMPORTED_MODULE_2__.G[0].img,_constants_navMenu__WEBPACK_IMPORTED_MODULE_2__.G[1].img,_constants_navMenu__WEBPACK_IMPORTED_MODULE_2__.G[2].img,_constants_navMenu__WEBPACK_IMPORTED_MODULE_2__.G[3].img]}}};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_3__.Z,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={src:_constants_navMenu__WEBPACK_IMPORTED_MODULE_2__.G[0].img,alt:_constants_navMenu__WEBPACK_IMPORTED_MODULE_2__.G[0].alt},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Icon {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})})},"./src/components/Dock/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/image.js"),next_image__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Icon=function Icon(_ref){var src=_ref.src,alt=_ref.alt,testId=_ref.testId;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default(),{"data-testid":testId,src,alt,width:60,height:60,priority:!0}))};Icon.__docgenInfo={description:'@description: Icon component\n@param {string} src - Image source\n@param {string} alt - Image alt text\n@param {string} testId - Test id for testing\n@returns {JSX.Element}\n@example\n<Icon src="/images/nextjs.svg" alt="NextJS" testId="nextjs-icon" />',methods:[],displayName:"Icon",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dock/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Dock/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/navMenu.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>menu});var menu=[{img:"/menu/vscode.png",alt:"Go to home page",link:"/",testId:"home"},{img:"/menu/notes.png",alt:"Go to blog",link:{en:"/blog/react/filter-for-positions",es:"/blog/react/filtro-para-posiciones",gl:"/blog/react/filtro-para-posicions"},testId:"blog"},{img:"/menu/terminal.png",alt:"Go to terminal",link:"/comments",testId:"terminal"},{img:"/menu/books.png",alt:"Legal documents",link:"/legal/cookies-policy",testId:"legal"},{img:"/menu/settings.png",alt:"Got to configuration page",link:"/settings",testId:"settings"}]}}]);