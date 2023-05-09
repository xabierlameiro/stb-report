(self.webpackChunkthe_last_dance=self.webpackChunkthe_last_dance||[]).push([[64],{"./src/components/Dock/dock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>dock_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),navMenu=__webpack_require__("./src/constants/navMenu.ts"),Icon=__webpack_require__("./src/components/Dock/Icon/index.tsx"),router=__webpack_require__("./node_modules/next/router.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var defaultValues={open:!0,lang:!1},DialogStateContext=react.createContext(void 0),dialogReducer=function dialogReducer(state,action){switch(action.type){case"alternate":return _objectSpread(_objectSpread({},state),{},{open:!state.open});case"open":return _objectSpread(_objectSpread({},state),{},{open:!0});case"close":return _objectSpread(_objectSpread({},state),{},{open:!1});case"toggleLang":return _objectSpread(_objectSpread({},state),{},{lang:!state.lang});default:throw new Error("Unknown action type: ".concat(action.type))}},DialogProvider=function DialogProvider(_ref){var children=_ref.children,_React$useReducer=react.useReducer(dialogReducer,defaultValues),_React$useReducer2=(0,slicedToArray.Z)(_React$useReducer,2),value={state:_React$useReducer2[0],dispatch:_React$useReducer2[1]};return __jsx(DialogStateContext.Provider,{value},children)};DialogProvider.displayName="DialogProvider";DialogProvider.__docgenInfo={description:"",methods:[],displayName:"DialogProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{DialogProvider.displayName="DialogProvider",DialogProvider.__docgenInfo={description:"",displayName:"DialogProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/context/dialog.tsx#DialogProvider"]={docgenInfo:DialogProvider.__docgenInfo,name:"DialogProvider",path:"src/context/dialog.tsx#DialogProvider"})}catch(__react_docgen_typescript_loader_error){}var next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),dock_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Dock/dock.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(dock_module.Z,options);const Dock_dock_module=dock_module.Z&&dock_module.Z.locals?dock_module.Z.locals:void 0;var helpers=__webpack_require__("./src/helpers/index.ts"),Dock_jsx=react.createElement,Dock=function Dock(){var _useRouter=(0,router.useRouter)(),pathname=_useRouter.pathname,locale=_useRouter.locale,_useDialog=function useDialog(){var context=react.useContext(DialogStateContext);if(void 0===context)throw new Error("useDialog must be used within a DialogProvider");return _objectSpread(_objectSpread({},context.state),{},{dispatch:context.dispatch,dialog:function dialog(dispatch){dispatch(context.state,context.dispatch)}})}(),dispatch=_useDialog.dispatch,clickHandler=function clickHandler(){return dispatch({type:"open"})};return Dock_jsx(react.Fragment,null,Dock_jsx("nav",{className:Dock_dock_module.dock,"data-testid":"dock"},Dock_jsx("ul",null,navMenu.G.map((function(_ref,index){var _link,_link2,link=_ref.link,img=_ref.img,alt=_ref.alt,testId=_ref.testId,path=pathname.split("/")[1],term="object"==typeof link?null===(_link=link[locale])||void 0===_link?void 0:_link.split("/")[1]:link.split("/")[1],check=!!term&&path.includes(term);return Dock_jsx("li",{key:index,onClick:clickHandler,className:(0,helpers.L1)(pathname===link||check?Dock_dock_module.selected:""),"data-testid":testId},Dock_jsx(link_default(),{href:null!==(_link2=null==link?void 0:link[locale])&&void 0!==_link2?_link2:link,title:alt},Dock_jsx(Icon.Z,{src:img,alt})))})))))};Dock.__docgenInfo={description:"@description This component is the dock that appears on the bottom of the screen\n@returns JSX.Element",methods:[],displayName:"Dock"};const components_Dock=Dock;var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,dock_stories_jsx=react.createElement;function dock_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function dock_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?dock_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):dock_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const dock_stories={title:"Dock / Buttons",component:components_Dock};var Primary=function Primary(){return dock_stories_jsx(DialogProvider,null,dock_stories_jsx(components_Dock,null))};Primary.displayName="Primary",Primary.parameters=dock_stories_objectSpread(dock_stories_objectSpread({},Primary.parameters),{},{docs:dock_stories_objectSpread(dock_stories_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:dock_stories_objectSpread({originalSource:"() => <DialogProvider>\n        <Dock />\n    </DialogProvider>"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Primary.__docgenInfo={description:"",methods:[],displayName:"Primary"}},"./src/components/Dock/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/image.js"),next_image__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Icon=function Icon(_ref){var src=_ref.src,alt=_ref.alt,testId=_ref.testId;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default(),{"data-testid":testId,src,alt,width:60,height:60,priority:!0}))};Icon.__docgenInfo={description:'@description: Icon component\n@param {string} src - Image source\n@param {string} alt - Image alt text\n@param {string} testId - Test id for testing\n@returns {JSX.Element}\n@example\n<Icon src="/images/nextjs.svg" alt="NextJS" testId="nextjs-icon" />',methods:[],displayName:"Icon",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dock/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Dock/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/navMenu.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>menu});var menu=[{img:"/menu/vscode.png",alt:"Go to home page",link:"/",testId:"home"},{img:"/menu/notes.png",alt:"Go to blog",link:{en:"/blog/nextjs/continuous-integration-with-github-actions-workflow",es:"/blog/nextjs/integracion-continua-con-github-actions-workflow",gl:"/blog/nextjs/integracion-continua-con-github-actions-workflow"},testId:"blog"},{img:"/menu/terminal.png",alt:"Go to terminal",link:"/comments",testId:"terminal"},{img:"/menu/books.png",alt:"Legal documents",link:"/legal/cookies-policy",testId:"legal"},{img:"/menu/settings.png",alt:"Got to configuration page",link:"/settings",testId:"settings"}]},"./src/helpers/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L1:()=>clx});var clx=function clx(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return(classes=classes.filter((function(element){return""!==element&&null!=element})).map((function(item){return null==item?void 0:item.trim()})))?classes.join(" "):""}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Dock/dock.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dock_dock__3ZDp_ {\n    background-color: rgba(var(--grey-color), 0.2);\n    box-shadow: 0 8px 32px 0 rgb(var(--grey-color) / 37%);\n    border: 1px solid rgba(var(--grey-color), 0.18);\n    backdrop-filter: blur(12px);\n    width: max-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px 10px 15px;\n    border-radius: 20px;\n    position: fixed;\n    bottom: 1px;\n    left: 50%;\n    transform: translate(-50%);\n    max-height: 75px;\n    z-index: 1;\n}\n\n.dock_dock__3ZDp_ ul {\n    padding: 0;\n    display: flex;\n    list-style: none;\n    cursor: pointer;\n    outline: none;\n    user-select: none;\n}\n\n.dock_dock__3ZDp_ li {\n    display: flex;\n    align-items: center;\n    position: relative;\n    outline: none;\n    user-select: none;\n}\n\n.dock_dock__3ZDp_ img {\n    width: 60px;\n    transition: all 0.2s ease;\n}\n\n@media (hover: hover) {\n    .dock_dock__3ZDp_ li:hover img {\n        width: 100px;\n        height: 100px;\n        transform: translateY(-20px);\n    }\n\n    .dock_dock__3ZDp_ li:hover + li img {\n        width: 90px;\n        height: 90px;\n        transform: translateY(-18px);\n    }\n}\n\n.dock_selected__j9TU_::after {\n    transform: translate(-50%, 20px);\n    color: rgba(var(--blog-font));\n    content: '.';\n    font-size: 40px;\n    position: absolute;\n    left: 50%;\n}\n","",{version:3,sources:["webpack://./src/components/Dock/dock.module.css"],names:[],mappings:"AAAA;IACI,8CAA8C;IAC9C,qDAAqD;IACrD,+CAA+C;IAC/C,2BAA2B;IAC3B,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,SAAS;IACT,0BAA0B;IAC1B,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI;QACI,YAAY;QACZ,aAAa;QACb,4BAA4B;IAChC;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,4BAA4B;IAChC;AACJ;;AAEA;IACI,gCAAgC;IAChC,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,SAAS;AACb",sourcesContent:[".dock {\n    background-color: rgba(var(--grey-color), 0.2);\n    box-shadow: 0 8px 32px 0 rgb(var(--grey-color) / 37%);\n    border: 1px solid rgba(var(--grey-color), 0.18);\n    backdrop-filter: blur(12px);\n    width: max-content;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px 10px 15px;\n    border-radius: 20px;\n    position: fixed;\n    bottom: 1px;\n    left: 50%;\n    transform: translate(-50%);\n    max-height: 75px;\n    z-index: 1;\n}\n\n.dock ul {\n    padding: 0;\n    display: flex;\n    list-style: none;\n    cursor: pointer;\n    outline: none;\n    user-select: none;\n}\n\n.dock li {\n    display: flex;\n    align-items: center;\n    position: relative;\n    outline: none;\n    user-select: none;\n}\n\n.dock img {\n    width: 60px;\n    transition: all 0.2s ease;\n}\n\n@media (hover: hover) {\n    .dock li:hover img {\n        width: 100px;\n        height: 100px;\n        transform: translateY(-20px);\n    }\n\n    .dock li:hover + li img {\n        width: 90px;\n        height: 90px;\n        transform: translateY(-18px);\n    }\n}\n\n.selected::after {\n    transform: translate(-50%, 20px);\n    color: rgba(var(--blog-font));\n    content: '.';\n    font-size: 40px;\n    position: absolute;\n    left: 50%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={dock:"dock_dock__3ZDp_",selected:"dock_selected__j9TU_"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"?6e58":()=>{}}]);