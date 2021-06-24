function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f46c8cc49e65b3d4a80fb7434cb0e81d2de8f5d92\u241f679020004424391145:",":START_TAG_MARKDOWN:",":CLOSE_TAG_MARKDOWN:",":START_PARAGRAPH: See ",":START_LINK: README.md ",":CLOSE_LINK: instructions of i18n package. There is information how to change a language and how to add a new one. ",":CLOSE_PARAGRAPH:"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f2f9b7e159e9dee28aff96a5c813d2d622a831919\u241f7373613501758200135:Internationalization"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{p8i5:function(e,n,t){"use strict";t.r(n),t.d(n,"I18nModule",(function(){return A}));var a,i=t("sEIs"),o=t("SVIu"),s=t("Qq0t"),r=t("DgXe"),l=t("EM62"),c=t("OZlg"),u=t("yZWP"),d=["header",$localize(_templateObject())];a=$localize(_templateObject2(),"\ufffd#3\ufffd","\ufffd/#3\ufffd","\ufffd#4\ufffd","\ufffd#5\ufffd","\ufffd/#5\ufffd","\ufffd/#4\ufffd");var p,g,f=((g=function e(){_classCallCheck(this,e),this.supported="# Taiga UI \u2014 i18n\n\n[![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk.svg)](https://npmjs.com/package/@taiga-ui/i18n)\n[![Discord](https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23taiga-ui&logo=discord&logoColor=white)](https://discord.gg/Us8d8JVaTg)\n\n[Website](https://taiga-ui.dev) \u2022 [Documentation](https://taiga-ui.dev/getting-started) \u2022 [CDK Wiki](https://github.com/TinkoffCreditSystems/taiga-ui/wiki) \u2022 [Core team](https://github.com/TinkoffCreditSystems/taiga-ui/#core-team)\n\n\x3c!-- Do not change next line without i18n demo page --\x3e\n\n> A package with tools for Taiga UI library i18n\n\nSupported languages:\n\n| Language             |     Constant name      | Coverage |\n| -------------------- | :--------------------: | -------: |\n| English (by default) |  TUI_ENGLISH_LANGUAGE  |     100% |\n| Russian              |  TUI_RUSSIAN_LANGUAGE  |     100% |\n| Spanish              |  TUI_SPANISH_LANGUAGE  |     100% |\n| German               |  TUI_GERMAN_LANGUAGE   |     100% |\n| Turkish              |  TUI_TURKISH_LANGUAGE  |     100% |\n| Dutch                |   TUI_DUTCH_LANGUAGE   |     100% |\n| Ukrainian            | TUI_UKRAINIAN_LANGUAGE |     100% |\n| French               |  TUI_FRENCH_LANGUAGE   |     100% |\n\n\x3c!-- Do not change next line without i18n demo page --\x3e\n\nIt's a part of [**Taiga UI**](https://github.com/TinkoffCreditSystems/taiga-ui) that is fully-treeshakable Angular UI Kit consisting of multiple base libraries and several add-ons\n\n## How to install\n\nIf you have [@taiga-ui/core](https://npmjs.com/package/@taiga-ui/core) in your app, you do not need to install anything. i18n package is included as a dependency.\n\n## How to use\n\nYou have English by default.\n\nIf you want to change it, you need to provide `TUI_LANGUAGE` token in your app.module:\n\n```ts\nimport {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';\n\n// app.module\n@NgModule({\n    // ...\n    providers: [\n        {\n            provide: TUI_LANGUAGE,\n            useValue: of(TUI_RUSSIAN_LANGUAGE),\n        },\n    ],\n})\nexport class AppModule {}\n```\n\nYou can also switch languages on the fly. Use `useFactory` or `useClass` with a service to make a stream of dictionaries.\n\nIf you extremely struggle against every byte of your app, you can build a custom language dictionary with constants:\n\n```ts\n// If we plan to use CORE and KIT packages only\nexport const CUSTOM_RUSSIAN_LANGUAGE: Language = {\n    ...TUI_RUSSIAN_LANGUAGE_CORE,\n    ...TUI_RUSSIAN_LANGUAGE_KIT,\n    // ...TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE,\n    // ...TUI_RUSSIAN_LANGUAGE_ADDON_TABLE,\n};\n```\n\n## How to add a language\n\nFeel free to add new languages!\n\n1. Go to `languages` folder\n2. Copy `english` folder and rename new folder with the name of language you speak\n3. Translate entities in files. If you need some clarification, take a look at interfaces of entities. If you need more, please write to us via issues or any other way of contact :)\n\nThank you!\n\n> You do not need to translate \"Editor\". It is an experimental package\n".split("> A package with tools for Taiga UI library i18n")[1].split("It's a part of [**Taiga UI**]")[0]}).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=l["\u0275\u0275defineComponent"]({type:g,selectors:[["i18n"]],decls:6,vars:1,consts:[[6,"header"],[3,"data"],["tuiLink","","href","https://github.com/TinkoffCreditSystems/taiga-ui/tree/main/projects/i18n","target","_blank"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,d),l["\u0275\u0275i18nStart"](2,a),l["\u0275\u0275element"](3,"markdown",1),l["\u0275\u0275elementStart"](4,"p"),l["\u0275\u0275element"](5,"a",2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("data",n.supported))},directives:[c.a,r.a,u.a],styles:["markdown blockquote{-webkit-box-shadow:inset 4px 0 #f5f5f5;box-shadow:inset 4px 0 #f5f5f5;margin-left:0;padding-left:30px;font-style:italic}markdown td{padding:6px 24px 6px 0}"],encapsulation:2,changeDetection:0}),g),A=((p=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[s.TuiCalendarModule,r.b,s.TuiLinkModule,o.h,i.f.forChild(Object(o.o)(f))]]}),p)}}]);