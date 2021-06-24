function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f8dbd1dc3f7db0c83ba44d241601f87aaaccb1e13\u241f4082988165397565907:Use pipe in template under Taiga UI control:"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f8fce1cdd1c7d067dcac00549f0a3e89e24bf5db5\u241f8814146691035312350: Import ",":START_TAG_CODE:TuiFilterByInputPipeModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fbc963fb63de70d2e76559d18d31fe0c914d05a74\u241f7316437354589455408: Pipe for filtering an array by value entered in a textfield ",":START_TAG_TUI_DOC_EXAMPLE:",":START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:",":CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:",":CLOSE_TAG_TUI_DOC_EXAMPLE:",":START_TAG_TUI_DOC_EXAMPLE_1:",":START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:",":CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:",":CLOSE_TAG_TUI_DOC_EXAMPLE:",":START_TAG_TUI_DOC_EXAMPLE_2:",":START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:",":CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:",":CLOSE_TAG_TUI_DOC_EXAMPLE:"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f8ea1c797573c9676df67b83748a331433703a6da\u241f4166966430858792974:Custom stringify"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fe44cbeb2204ab3f18f2fc48550ff5f3154790975\u241f4997832321224755259:Custom matcher"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{sb3Y:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFilterByInputModule",(function(){return X}));var r=n("2kYt"),a=n("nIj0"),i=n("sEIs"),o=n("SVIu"),l=n("Qq0t"),m=n("dvRg"),p=n("EM62"),u=n("OZlg"),c=n("e0eB"),s=n("iyc4"),f=n("GdrL"),d=n("fP8s"),_=n("OWJi"),y=n("FlJ/");function T(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-data-list-wrapper",3),p["\u0275\u0275pipe"](1,"tuiFilterByInput")),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",p["\u0275\u0275pipeBind1"](1,1,n.items))}}var h,C=((h=function e(){_classCallCheck(this,e),this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new a.FormGroup({user:new a.FormControl})}).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=p["\u0275\u0275defineComponent"]({type:h,selectors:[["tui-filter-by-input-example-1"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input",1),p["\u0275\u0275text"](2," User "),p["\u0275\u0275template"](3,T,2,3,"tui-data-list-wrapper",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.form)},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,f.a,a.NgControlStatus,a.FormControlName,d.a,_.a],pipes:[y.a],encapsulation:2,changeDetection:0}),h),g=n("BBBb");function b(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-data-list-wrapper",3),p["\u0275\u0275pipe"](1,"tuiFilterByInput")),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",p["\u0275\u0275pipeBind2"](1,1,n.items,n.matcher))}}var E,I=((E=function e(){_classCallCheck(this,e),this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new a.FormGroup({user:new a.FormControl}),this.matcher=function(e,t){return e.split(" ").pop().toLowerCase().startsWith(t.toLowerCase())}}).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=p["\u0275\u0275defineComponent"]({type:E,selectors:[["tui-filter-by-input-example-2"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-combo-box",1),p["\u0275\u0275text"](2," Search by last name "),p["\u0275\u0275template"](3,b,2,4,"tui-data-list-wrapper",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.form)},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,g.a,a.NgControlStatus,a.FormControlName,d.a,_.a],pipes:[y.a],encapsulation:2,changeDetection:0}),E),x=n("cVyY"),F=n("xcN3"),G=n("9B3E");function L(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",4),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275property"]("value",n),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.name," ")}}function v(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-data-list"),p["\u0275\u0275template"](1,L,2,2,"button",3),p["\u0275\u0275pipe"](2,"tuiFilterByInputWith"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",p["\u0275\u0275pipeBind2"](2,1,n.items,n.stringify))}}var S,w,O,A,M=((S=function e(){_classCallCheck(this,e),this.items=[{name:"John Cleese"},{name:"Eric Idle"},{name:"Graham Chapman"},{name:"Michael Palin"},{name:"Terry Gilliam"},{name:"Terry Jones"}],this.form=new a.FormGroup({user:new a.FormControl}),this.stringify=function(e){return e.name}}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=p["\u0275\u0275defineComponent"]({type:S,selectors:[["tui-filter-by-input-example-3"]],decls:4,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","user",3,"stringify"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-combo-box",1),p["\u0275\u0275text"](2," User "),p["\u0275\u0275template"](3,v,3,4,"tui-data-list",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.form),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("stringify",t.stringify))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,g.a,a.NgControlStatus,a.FormControlName,d.a,x.a,r.s,F.a],pipes:[G.a],encapsulation:2,changeDetection:0}),S),B=n("u8jZ"),P=["heading",$localize(_templateObject())],D=["heading",$localize(_templateObject2())],U=["heading",$localize(_templateObject3())];function j(e,t){if(1&e&&(p["\u0275\u0275i18nStart"](0,w),p["\u0275\u0275elementStart"](1,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](2,P),p["\u0275\u0275element"](3,"tui-filter-by-input-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](5,D),p["\u0275\u0275element"](6,"tui-filter-by-input-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-doc-example",5),p["\u0275\u0275i18nAttributes"](8,U),p["\u0275\u0275element"](9,"tui-filter-by-input-example-3"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275i18nEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("content",n.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example2),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example3)}}function N(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",6),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,O),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,A),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}w=$localize(_templateObject4(),"\ufffd#1\ufffd","\ufffd#3\ufffd","\ufffd/#3\ufffd","[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]","\ufffd#4\ufffd","\ufffd#6\ufffd","\ufffd/#6\ufffd","[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]","\ufffd#7\ufffd","\ufffd#9\ufffd","\ufffd/#9\ufffd","[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]"),w=p["\u0275\u0275i18nPostprocess"](w),O=$localize(_templateObject5(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),A=$localize(_templateObject6());var J,R,k=((R=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiFilterByInputPipeModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiFilterByInputPipeModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-input [formControl]="user">\n    User\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items | tuiFilterByInput"\n    ></tui-data-list-wrapper>\n</tui-input>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample1 {\n    readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n}\n",HTML:'<form class="b-form" [formGroup]="form">\n    <tui-input formControlName="user">\n        User\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items | tuiFilterByInput"\n        ></tui-data-list-wrapper>\n    </tui-input>\n</form>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample2 {\n    readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n\n    readonly matcher = (name: string, search: string) =>\n        name.split(' ').pop()!.toLowerCase().startsWith(search.toLowerCase());\n}\n",HTML:'<form class="b-form" [formGroup]="form">\n    <tui-combo-box formControlName="user">\n        Search by last name\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items | tuiFilterByInput : matcher"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n</form>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample3 {\n    readonly items = [\n        {name: 'John Cleese'},\n        {name: 'Eric Idle'},\n        {name: 'Graham Chapman'},\n        {name: 'Michael Palin'},\n        {name: 'Terry Gilliam'},\n        {name: 'Terry Jones'},\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n\n    readonly stringify = ({name}: {name: string}) => name;\n}\n",HTML:'<form class="b-form" [formGroup]="form">\n    <tui-combo-box formControlName="user" [stringify]="stringify">\n        User\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor="let item of items | tuiFilterByInputWith : stringify"\n                tuiOption\n                [value]="item"\n            >\n                {{item.name}}\n            </button>\n        </tui-data-list>\n    </tui-combo-box>\n</form>\n'}}).\u0275fac=function(e){return new(e||R)},R.\u0275cmp=p["\u0275\u0275defineComponent"]({type:R,selectors:[["example-tui-filter-by-input"]],decls:3,vars:0,consts:[["header","FilterByInput","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],["id","matcher",3,"content",6,"heading"],["id","stringify",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,j,10,3,"ng-template",1),p["\u0275\u0275template"](2,N,10,2,"ng-template",2),p["\u0275\u0275elementEnd"]())},directives:[u.a,c.a,s.a,C,I,M,B.a],encapsulation:2,changeDetection:0}),R),X=((J=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:J}),J.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||J)},imports:[[r.c,a.ReactiveFormsModule,m.TuiFilterByInputPipeModule,o.h,m.TuiInputModule,l.TuiDataListModule,m.TuiDataListWrapperModule,m.TuiComboBoxModule,i.f.forChild(Object(o.o)(k))]]}),J)}}]);