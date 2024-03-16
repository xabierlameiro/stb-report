"use strict";(self.webpackChunkthe_last_dance=self.webpackChunkthe_last_dance||[]).push([[895],{"./src/components/NavigationArrows/navigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>navigation_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/sl/index.esm.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),navigation_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavigationArrows/navigation.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(navigation_module.A,options);const NavigationArrows_navigation_module=navigation_module.A&&navigation_module.A.locals?navigation_module.A.locals:void 0;var __jsx=react.createElement,NavigationArrows=function NavigationArrows(_ref){var hidden=_ref.hidden,disabledLeft=_ref.disabledLeft,onClickLeft=_ref.onClickLeft,disabledRight=_ref.disabledRight,onClickRight=_ref.onClickRight;return hidden?null:__jsx("nav",{className:NavigationArrows_navigation_module.nav},__jsx(index_esm.SnO,{className:disabledLeft?NavigationArrows_navigation_module.disabled:"","data-testid":"left",onClick:onClickLeft}),__jsx(index_esm.dH8,{className:disabledRight?NavigationArrows_navigation_module.disabled:"","data-testid":"right",onClick:onClickRight}))};NavigationArrows.displayName="NavigationArrows";const components_NavigationArrows=NavigationArrows;try{NavigationArrows.displayName="NavigationArrows",NavigationArrows.__docgenInfo={description:"",displayName:"NavigationArrows",props:{hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},disabledLeft:{defaultValue:null,description:"",name:"disabledLeft",required:!1,type:{name:"boolean"}},disabledRight:{defaultValue:null,description:"",name:"disabledRight",required:!1,type:{name:"boolean"}},onClickRight:{defaultValue:null,description:"",name:"onClickRight",required:!1,type:{name:"(() => void)"}},onClickLeft:{defaultValue:null,description:"",name:"onClickLeft",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NavigationArrows/index.tsx#NavigationArrows"]={docgenInfo:NavigationArrows.__docgenInfo,name:"NavigationArrows",path:"src/components/NavigationArrows/index.tsx#NavigationArrows"})}catch(__react_docgen_typescript_loader_error){}var navigation_stories_jsx=react.createElement;const navigation_stories={title:"Controls / NavigarionArrows",argTypes:{onClickRight:{action:"onClickRight"},onClickLeft:{action:"onClickLeft"}},component:components_NavigationArrows};var Template=function Template(args){return navigation_stories_jsx(components_NavigationArrows,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={disabledLeft:!1,disabledRight:!1},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <NavigarionArrows {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavigationArrows/navigation.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".navigation_nav__d1tya {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.navigation_nav__d1tya svg {\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n    transition: all 0.3s ease-in;\n}\n\n.navigation_disabled__5XY3C {\n    pointer-events: none;\n    cursor: default;\n    opacity: 0.2;\n}\n","",{version:3,sources:["webpack://./src/components/NavigationArrows/navigation.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,YAAY;AAChB",sourcesContent:[".nav {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.nav svg {\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n    transition: all 0.3s ease-in;\n}\n\n.disabled {\n    pointer-events: none;\n    cursor: default;\n    opacity: 0.2;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={nav:"navigation_nav__d1tya",disabled:"navigation_disabled__5XY3C"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);