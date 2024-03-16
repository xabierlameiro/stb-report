"use strict";(self.webpackChunkthe_last_dance=self.webpackChunkthe_last_dance||[]).push([[65],{"./src/components/ControlButtons/controls.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ControlButtons/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Controls / Buttons",argTypes:{onClickClose:{action:"onClickClose"},onClickMinimise:{action:"onClickMinimise"},onClickMaximise:{action:"onClickMaximise"}},component:___WEBPACK_IMPORTED_MODULE_1__.A};var Template=function Template(args){return __jsx(___WEBPACK_IMPORTED_MODULE_1__.A,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={disabled:!1},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <ControlButtons {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/ControlButtons/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ControlButtons});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),controls_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/ControlButtons/controls.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(controls_module.A,options);const ControlButtons_controls_module=controls_module.A&&controls_module.A.locals?controls_module.A.locals:void 0;var index_esm=__webpack_require__("./node_modules/react-icons/bi/index.esm.js"),helpers=__webpack_require__("./src/helpers/index.ts"),__jsx=react.createElement,ControlButtons=function ControlButtons(_ref){var disabled=_ref.disabled,withPadding=_ref.withPadding,onClickClose=_ref.onClickClose,onClickMinimise=_ref.onClickMinimise,onClickMaximise=_ref.onClickMaximise;return __jsx("div",{"data-testid":"controls",className:(0,helpers.Ew)(ControlButtons_controls_module.ch_frame_buttons,withPadding?ControlButtons_controls_module.withPadding:"")},__jsx("div",{onClick:onClickClose,"data-testid":"close",className:(0,helpers.Ew)(ControlButtons_controls_module.ch_frame_button,ControlButtons_controls_module.ch_frame_button_left)},__jsx(index_esm.Gsv,{title:"Close"})),__jsx("div",{"data-testid":"minimise",onClick:onClickMinimise,className:(0,helpers.Ew)(ControlButtons_controls_module.ch_frame_button,ControlButtons_controls_module.ch_frame_button_middle)},__jsx(index_esm.YJx,{title:"Minimise"})),__jsx("div",{"data-testid":"maximise",onClick:onClickMaximise,className:(0,helpers.Ew)(ControlButtons_controls_module.ch_frame_button,ControlButtons_controls_module.ch_frame_button_right,disabled?ControlButtons_controls_module.ch_frame_button_disabled:"")},__jsx(index_esm.N1G,{title:"Maximise"})))};ControlButtons.displayName="ControlButtons";const components_ControlButtons=ControlButtons;try{ControlButtons.displayName="ControlButtons",ControlButtons.__docgenInfo={description:"",displayName:"ControlButtons",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},withPadding:{defaultValue:null,description:"",name:"withPadding",required:!1,type:{name:"boolean"}},onClickClose:{defaultValue:null,description:"",name:"onClickClose",required:!1,type:{name:"(() => void | Function)"}},onClickMinimise:{defaultValue:null,description:"",name:"onClickMinimise",required:!1,type:{name:"(() => void | Function)"}},onClickMaximise:{defaultValue:null,description:"",name:"onClickMaximise",required:!1,type:{name:"(() => void | Function)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ControlButtons/index.tsx#ControlButtons"]={docgenInfo:ControlButtons.__docgenInfo,name:"ControlButtons",path:"src/components/ControlButtons/index.tsx#ControlButtons"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ew:()=>clx});var clx=function clx(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return(classes=classes.filter((function(element){return""!==element&&null!=element})).map((function(item){return null==item?void 0:item.trim()})))?classes.join(" "):""}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/ControlButtons/controls.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".controls_ch_frame_buttons__bNRQM {\n    display: flex;\n    cursor: pointer;\n    gap: 6px;\n    outline: none;\n    user-select: none;\n}\n\n.controls_ch_frame_button__RWaLW {\n    width: 12.8px;\n    height: 12.8px;\n    border: 0.08em solid;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    display: grid;\n    place-content: center;\n    outline: none;\n    user-select: none;\n}\n\n.controls_ch_frame_button__RWaLW svg {\n    color: rgba(var(--blog-font));\n    transform: scale(0.7);\n    opacity: 0;\n}\n\n.controls_ch_frame_buttons__bNRQM:hover .controls_ch_frame_button__RWaLW svg {\n    opacity: 1;\n}\n\n.controls_ch_frame_button_left__T3lX_ {\n    border-color: rgba(var(--red-color));\n    background-color: rgba(var(--red-color));\n}\n\n.controls_ch_frame_button_middle__R_RkJ {\n    border-color: rgba(var(--yellow-color));\n    background-color: rgba(var(--yellow-color));\n}\n\n.controls_ch_frame_button_right__mnV78 {\n    border-color: rgba(var(--green-color));\n    background-color: rgba(var(--green-color));\n}\n\n.controls_ch_frame_button_right__mnV78 svg {\n    transform: scale(0.45) rotate(93deg);\n    stroke-width: 2px;\n}\n\n.controls_ch_frame_button_disabled__h7_cn {\n    background-color: rgba(var(--disable-color));\n    border-color: rgba(var(--disable-color));\n    pointer-events: none;\n    user-select: none;\n    cursor: default;\n    opacity: 0.4;\n}\n\n.controls_ch_frame_buttons__bNRQM:hover .controls_ch_frame_button_disabled__h7_cn svg {\n    opacity: 0;\n}\n\n.controls_withPadding__rXc2r {\n    padding: 0 10px;\n}\n","",{version:3,sources:["webpack://./src/components/ControlButtons/controls.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB;IACrB,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,wCAAwC;AAC5C;;AAEA;IACI,uCAAuC;IACvC,2CAA2C;AAC/C;;AAEA;IACI,sCAAsC;IACtC,0CAA0C;AAC9C;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;AACrB;;AAEA;IACI,4CAA4C;IAC5C,wCAAwC;IACxC,oBAAoB;IACpB,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;AACnB",sourcesContent:[".ch_frame_buttons {\n    display: flex;\n    cursor: pointer;\n    gap: 6px;\n    outline: none;\n    user-select: none;\n}\n\n.ch_frame_button {\n    width: 12.8px;\n    height: 12.8px;\n    border: 0.08em solid;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    display: grid;\n    place-content: center;\n    outline: none;\n    user-select: none;\n}\n\n.ch_frame_button svg {\n    color: rgba(var(--blog-font));\n    transform: scale(0.7);\n    opacity: 0;\n}\n\n.ch_frame_buttons:hover .ch_frame_button svg {\n    opacity: 1;\n}\n\n.ch_frame_button_left {\n    border-color: rgba(var(--red-color));\n    background-color: rgba(var(--red-color));\n}\n\n.ch_frame_button_middle {\n    border-color: rgba(var(--yellow-color));\n    background-color: rgba(var(--yellow-color));\n}\n\n.ch_frame_button_right {\n    border-color: rgba(var(--green-color));\n    background-color: rgba(var(--green-color));\n}\n\n.ch_frame_button_right svg {\n    transform: scale(0.45) rotate(93deg);\n    stroke-width: 2px;\n}\n\n.ch_frame_button_disabled {\n    background-color: rgba(var(--disable-color));\n    border-color: rgba(var(--disable-color));\n    pointer-events: none;\n    user-select: none;\n    cursor: default;\n    opacity: 0.4;\n}\n\n.ch_frame_buttons:hover .ch_frame_button_disabled svg {\n    opacity: 0;\n}\n\n.withPadding {\n    padding: 0 10px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ch_frame_buttons:"controls_ch_frame_buttons__bNRQM",ch_frame_button:"controls_ch_frame_button__RWaLW",ch_frame_button_left:"controls_ch_frame_button_left__T3lX_",ch_frame_button_middle:"controls_ch_frame_button_middle__R_RkJ",ch_frame_button_right:"controls_ch_frame_button_right__mnV78",ch_frame_button_disabled:"controls_ch_frame_button_disabled__h7_cn",withPadding:"controls_withPadding__rXc2r"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);