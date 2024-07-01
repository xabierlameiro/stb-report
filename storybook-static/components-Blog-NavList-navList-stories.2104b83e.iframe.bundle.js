"use strict";(self.webpackChunkthe_last_dance=self.webpackChunkthe_last_dance||[]).push([[888],{"./src/components/Blog/NavList/navList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>navList_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),navlist_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Blog/NavList/navlist.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(navlist_module.A,options);const NavList_navlist_module=navlist_module.A&&navlist_module.A.locals?navlist_module.A.locals:void 0;var index_esm=__webpack_require__("./node_modules/react-icons/bs/index.esm.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),__jsx=react.createElement,NavList=function NavList(_ref){var title=_ref.title,list=_ref.list,category=_ref.category,isCategory=_ref.isCategory;return list?(category&&"object"==typeof category&&(category=category[0]),isCategory&&"object"==typeof isCategory&&(isCategory=isCategory[0]),__jsx(react.Fragment,null,__jsx("h2",{className:NavList_navlist_module.navTitle},title),__jsx("ul",{className:NavList_navlist_module.postList,"data-testid":"nav-list"},list.map((function(item,index){return __jsx("li",{key:index},__jsx(link_default(),{href:item.href,title:isCategory?item.category:item.tag,className:isCategory?category==item.category.toLowerCase()?NavList_navlist_module.selected:"":category==item.tag.toLowerCase()?NavList_navlist_module.selected:""},__jsx(isCategory?index_esm.S6d:index_esm.oiv,null),__jsx("div",{className:NavList_navlist_module.tag},isCategory?item.category:item.tag),__jsx("div",{className:NavList_navlist_module.number},item.total)))}))))):null};const Blog_NavList=NavList;try{NavList.displayName="NavList",NavList.__docgenInfo={description:"",displayName:"NavList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},list:{defaultValue:null,description:"",name:"list",required:!1,type:{name:"{ category: string; total: number; href: string; tag: string; }[]"}},category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"string | string[]"}},isCategory:{defaultValue:null,description:"",name:"isCategory",required:!1,type:{name:"boolean | boolean[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Blog/NavList/index.tsx#NavList"]={docgenInfo:NavList.__docgenInfo,name:"NavList",path:"src/components/Blog/NavList/index.tsx#NavList"})}catch(__react_docgen_typescript_loader_error){}var navList_stories_jsx=react.createElement;const navList_stories={title:"Blog / NavList",component:Blog_NavList};var Template=function Template(args){return navList_stories_jsx(Blog_NavList,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={title:"Blog",category:"All",isCategory:!0,list:[{category:"All",total:10,href:"/blog",tag:"a"}]},Primary.parameters={controls:{expanded:!0,hideNoControlsWarning:!0,include:["title","category","isCategory","list"]}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <NavList {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Blog/NavList/navlist.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".navlist_navTitle__j2fA1 {\n    font-size: 12px;\n    font-weight: 100;\n    text-indent: 3px;\n    padding-bottom: 5px;\n    color: rgba(var(--blog-font-description));\n}\n.navlist_postList__9OIqv {\n    list-style: none;\n    padding-bottom: 20px;\n}\n\n.navlist_postList__9OIqv li a {\n    display: grid;\n    grid-template-columns: auto 1fr 20px;\n    align-items: center;\n    gap: 5px;\n    font-size: 14px;\n    padding: 5px;\n    color: rgba(var(--blog-font));\n    text-decoration: none;\n    font-weight: 400;\n}\n\n.navlist_postList__9OIqv li svg {\n    font-size: 16px;\n    color: rgba(var(--blue-color));\n}\n\n.navlist_selected__gtwcu .navlist_number__Y4tJ3,\n.navlist_postList__9OIqv .navlist_selected__gtwcu svg {\n    color: rgba(var(--blog-color));\n}\n\n.navlist_selected__gtwcu {\n    background-color: rgba(var(--blue-color));\n    border-radius: 5px;\n    color: rgba(var(--white-color));\n}\n\nli a.navlist_selected__gtwcu {\n    color: rgba(var(--white-color));\n}\n\n.navlist_number__Y4tJ3 {\n    font-size: 12px;\n    color: rgba(var(--blog-font-description));\n    text-align: right;\n}\n","",{version:3,sources:["webpack://./src/components/Blog/NavList/navlist.module.css"],names:[],mappings:"AAAA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,yCAAyC;AAC7C;AACA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,QAAQ;IACR,eAAe;IACf,YAAY;IACZ,6BAA6B;IAC7B,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,8BAA8B;AAClC;;AAEA;;IAEI,8BAA8B;AAClC;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;IAClB,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,yCAAyC;IACzC,iBAAiB;AACrB",sourcesContent:[".navTitle {\n    font-size: 12px;\n    font-weight: 100;\n    text-indent: 3px;\n    padding-bottom: 5px;\n    color: rgba(var(--blog-font-description));\n}\n.postList {\n    list-style: none;\n    padding-bottom: 20px;\n}\n\n.postList li a {\n    display: grid;\n    grid-template-columns: auto 1fr 20px;\n    align-items: center;\n    gap: 5px;\n    font-size: 14px;\n    padding: 5px;\n    color: rgba(var(--blog-font));\n    text-decoration: none;\n    font-weight: 400;\n}\n\n.postList li svg {\n    font-size: 16px;\n    color: rgba(var(--blue-color));\n}\n\n.selected .number,\n.postList .selected svg {\n    color: rgba(var(--blog-color));\n}\n\n.selected {\n    background-color: rgba(var(--blue-color));\n    border-radius: 5px;\n    color: rgba(var(--white-color));\n}\n\nli a.selected {\n    color: rgba(var(--white-color));\n}\n\n.number {\n    font-size: 12px;\n    color: rgba(var(--blog-font-description));\n    text-align: right;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={navTitle:"navlist_navTitle__j2fA1",postList:"navlist_postList__9OIqv",selected:"navlist_selected__gtwcu",number:"navlist_number__Y4tJ3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);