function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fa00085d81c7d4560cd63a58005c3b1828a022bae\u241f1834291192066424064:",":START_PARAGRAPH:",":START_TAG_STRONG:Addon Doc",":CLOSE_TAG_STRONG: allows you to create documentation like this page ",":CLOSE_PARAGRAPH:",":START_PARAGRAPH:You can install it for your demo project:",":CLOSE_PARAGRAPH:",":START_TAG_PRE:",":START_TAG_CODE:npm install @taiga-ui/addon-doc",":CLOSE_TAG_CODE:",":CLOSE_TAG_PRE:",":START_PARAGRAPH_1: And use with project ",":START_LINK: README.md ",":CLOSE_LINK: instructions. ",":CLOSE_PARAGRAPH:",":START_PARAGRAPH_1: You can also see ",":START_LINK_1: a community made guide ",":CLOSE_LINK: in Russian. ",":CLOSE_PARAGRAPH:"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fb384349e552237d4e1d8fd606ae55e20a1829aef\u241f3703356990057810908:Documentation engine"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{cS37:function(e,n,t){"use strict";t.r(n),t.d(n,"DocModule",(function(){return g}));var o,a=t("1VvW"),i=t("SVIu"),r=t("Qq0t"),l=t("kZht"),p=t("OZlg"),u=t("yZWP"),s=["header",$localize(_templateObject())];o=$localize(_templateObject2(),"[\ufffd#3\ufffd|\ufffd#5\ufffd]","\ufffd#4\ufffd","\ufffd/#4\ufffd","[\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd]","[\ufffd#3\ufffd|\ufffd#5\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd]","\ufffd#6\ufffd","\ufffd#7\ufffd","\ufffd/#7\ufffd","\ufffd/#6\ufffd","[\ufffd#8\ufffd|\ufffd#10\ufffd]","\ufffd#9\ufffd","[\ufffd/#9\ufffd|\ufffd/#11\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd]","[\ufffd#8\ufffd|\ufffd#10\ufffd]","\ufffd#11\ufffd","[\ufffd/#9\ufffd|\ufffd/#11\ufffd]","[\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd]"),o=l["\u0275\u0275i18nPostprocess"](o);var d,m,c=((m=function e(){_classCallCheck(this,e),this.docReadme="# Taiga UI \u2014 Doc\n\n[![npm version](https://img.shields.io/npm/v/@taiga-ui/addon-doc.svg)](https://npmjs.com/package/@taiga-ui/addon-doc)\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@taiga-ui/addon-doc)](https://bundlephobia.com/result?p=@taiga-ui/addon-doc)\n[![Discord](https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23taiga-ui&logo=discord&logoColor=white)](https://discord.gg/Us8d8JVaTg)\n\n> Taiga UI based library for developing documentation portals for Angular libraries.\n\n## How to install\n\nInstall main packages:\n\n```\nnpm i @taiga-ui/{cdk,core,kit}\n```\n\nInstall doc:\n\n```\nnpm i @taiga-ui/addon-doc\n```\n\n## How to use\n\n> You can also see [community made guide](https://habr.com/ru/company/europlan/blog/559804/) in Russian\n\n1. Include `TuiDocMainModule` in your App module and use in your template:\n\n   ```html\n   <tui-doc-main>You can add content here, it will be shown below navigation in the sidebar</tui-doc-main>\n   ```\n\n2. Configure languages to highlight in your main module:\n\n   ```typescript\n   import {NgModule} from '@angular/core';\n   import {TuiDocMainModule} from '@taiga-ui/addon-doc';\n   import {hljsLanguages} from './hljsLanguages';\n   import {HIGHLIGHT_OPTIONS, HighlightLanguage} from 'ngx-highlightjs';\n   import {AppComponent} from './app.component';\n\n   @NgModule({\n     bootstrap: [AppComponent],\n     imports: [TuiDocMainModule],\n     declarations: [AppComponent],\n     providers: [\n       {\n         provide: HIGHLIGHT_OPTIONS,\n         useValue: {\n           coreLibraryLoader: () => import('highlight.js/lib/core' as string),\n           lineNumbersLoader: () => import('highlightjs-line-numbers.js' as string), // Optional, only if you want the line numbers\n           languages: {\n             typescript: () => import('highlight.js/lib/languages/typescript' as string),\n             less: () => import('highlight.js/lib/languages/less' as string),\n             xml: () => import('highlight.js/lib/languages/xml' as string),\n           },\n         },\n       },\n     ],\n   })\n   export class AppBrowserModule {}\n   ```\n\n3. Configure documentation providers:\n\n   `TUI_DOC_PAGES` \u2014 an array of pages, see `TuiDocPages` type\n\n   `TUI_DOC_LOGO` \u2014 an src for the SVG logo in the sidebar\n\n   `TUI_DOC_DEFAULT_TABS` \u2014 an array of default named for tabs on your typical page\n\n   `TUI_DOC_TITLE` \u2014 a title prefix for the browser tab\n\n   `TUI_DOC_SEE_ALSO` \u2014 a two dimensional array of related pages by their titles\n\n4. Configure routing:\n\n   ```typescript\n   import {Routes} from '@angular/router';\n\n   const appRoutes: Routes = [\n     {\n       path: 'super-page',\n       loadChildren: '../super-page/super-page.module#SuperModule',\n       data: {\n         title: 'Super Page',\n       },\n     },\n     // ...\n   ];\n   ```\n\n   > You must have title in route data in order for `TUI_DOC_SEE_ALSO` to work. It would also be automatically added to\n   > `TUI_DOC_TITLE` for browser tab title when navigating to that route.\n\n5. Create pages.\n\n   _Module:_\n\n   ```typescript\n   import {NgModule} from '@angular/core';\n   import {RouterModule} from '@angular/router';\n   import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';\n   import {SuperComponent} from './super.component';\n\n   @NgModule({\n     imports: [TuiAddonDocModule, RouterModule.forChild(generateRoutes(SuperComponent))],\n     declarations: [SuperComponent],\n     exports: [SuperComponent],\n   })\n   export class SuperModule {}\n   ```\n\n   _Component:_\n\n   ```typescript\n   import {Component} from '@angular/core';\n\n   import {default as exampleHtml} from '!!raw-loader!./examples/1/index.html';\n   import {default as exampleTs} from '!!raw-loader!./examples/1/index.ts';\n\n   @Component({\n     selector: 'super-component',\n     templateUrl: './account.template.html',\n   })\n   export class SuperComponent {\n     // Keys would be used as tabs for code example\n     readonly example = {\n       TypeScript: exampleTs,\n       HTML: exampleHtml,\n     };\n\n     readonly inputVariants = ['input 1', 'input 2'];\n   }\n   ```\n\n   _Template:_\n\n   ```html\n   <tui-doc-page header=\"Super\" package=\"SUPER-PACKAGE\" deprecated>\n     <ng-template pageTab>\n       \x3c!-- default tab name would be used --\x3e\n       This would be the content of a first tab\n\n       <tui-doc-example id=\"basic-example\" heading=\"Example of usage\" [content]=\"example\">\n         <example-1></example-1>\n       </tui-doc-example>\n     </ng-template>\n\n     <ng-template pageTab=\"Documentation\">\n       <tui-doc-demo>\n         <super-component [input]=\"input\"></super-component>\n       </tui-doc-demo>\n       <tui-doc-documentation>\n         <ng-template\n           documentationPropertyName=\"input\"\n           documentationPropertyMode=\"input\"\n           documentationPropertyType=\"T\"\n           [documentationPropertyValues]=\"inputVariants\"\n           [(documentationPropertyValue)]=\"input\"\n         >\n           Some input\n         </ng-template>\n       </tui-doc-documentation>\n     </ng-template>\n   </tui-doc-page>\n   ```\n"}).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=l["\u0275\u0275defineComponent"]({type:m,selectors:[["doc"]],decls:12,vars:0,consts:[[6,"header"],[1,"language-html"],[1,"tui-space_bottom-8"],["tuiLink","","href","https://github.com/tinkoff/taiga-ui/tree/main/projects/addon-doc","target","_blank"],["tuiLink","","href","https://habr.com/ru/company/europlan/blog/559804/","target","_blank"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,s),l["\u0275\u0275i18nStart"](2,o),l["\u0275\u0275elementStart"](3,"p"),l["\u0275\u0275element"](4,"strong"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](5,"p"),l["\u0275\u0275elementStart"](6,"pre",1),l["\u0275\u0275element"](7,"code"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"p",2),l["\u0275\u0275element"](9,"a",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"p",2),l["\u0275\u0275element"](11,"a",4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]())},directives:[p.a,u.a],styles:["markdown blockquote{-webkit-box-shadow:inset 4px 0 #f5f5f5;box-shadow:inset 4px 0 #f5f5f5;margin-left:0;padding-left:1.875rem;font-style:italic}"],encapsulation:2,changeDetection:0}),m),g=((d=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:d}),d.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||d)},imports:[[r.TuiLinkModule,i.h,a.f.forChild(Object(i.o)(c))]]}),d)}}]);