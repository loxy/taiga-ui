function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fbd9aa8d13320476087ef2b67437c8078fbb05a07\u241f2620483019814878192:Custom dialog"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fa961c44abe17a269b883d349b02e8226016895fd\u241f3463395013752872705: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f9d6e1408c0a40d04f5eeb6f5d16b8706aded4261\u241f8564515230059500750:Dialogs"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{OFrn:function(e,t,n){"use strict";n.r(t),n.d(t,"DialogsModule",(function(){return T}));var o=n("2kYt"),a=n("sEIs"),r=n("SVIu"),i=n("Qq0t"),c=n("dvRg"),s=n("EM62"),l=n("OZlg"),u=n("iyc4"),p=n("TLy2"),d=n("TRv/"),m=n("zV1d"),f=n("cweO");function g(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",4),s["\u0275\u0275element"](1,"tui-avatar",5),s["\u0275\u0275text"](2," \xabChoose wisely\xbb "),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("rounded",!0))}function b(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",4),s["\u0275\u0275element"](1,"tui-avatar",6),s["\u0275\u0275text"](2," \xabYou chose poorly\xbb "),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("rounded",!0))}function h(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",4),s["\u0275\u0275text"](1," \xabYou have chosen wisely\xbb "),s["\u0275\u0275element"](2,"tui-avatar",7),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("rounded",!0))}var v,y,x=((v=function(){function e(t,n){_classCallCheck(this,e),this.notifications=t,this.promptService=n}return _createClass(e,[{key:"onClick",value:function(e,t,n){var o=this;this.promptService.open(e,{heading:"Taiga UI is the best",buttons:["Absolutely!","No way!"]}).pipe(Object(p.a)((function(e){return e?o.notifications.show(n,{status:"success"}):o.notifications.show(t,{status:"error"})}))).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||v)(s["\u0275\u0275directiveInject"](i.TuiNotificationsService),s["\u0275\u0275directiveInject"](d.b))},v.\u0275cmp=s["\u0275\u0275defineComponent"]({type:v,selectors:[["tui-dialogs-example-1"]],decls:8,vars:0,consts:[["tuiButton","",3,"click"],["choose",""],["poorly",""],["wisely",""],[1,"wrapper"],["avatarUrl","assets/images/choose.png","size","l",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/poorly.png",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/wisely.png",1,"tui-space_left-1",3,"rounded"]],template:function(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",0),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](n);var e=s["\u0275\u0275reference"](3),o=s["\u0275\u0275reference"](5),a=s["\u0275\u0275reference"](7);return t.onClick(e,o,a)})),s["\u0275\u0275text"](1,"Show prompt"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,g,3,1,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](4,b,3,1,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](6,h,3,1,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"])}},directives:[m.a,f.a],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}"]}),v),C=["header",$localize(_templateObject())];y=$localize(_templateObject2());var O,w,_,j=["heading",$localize(_templateObject3())],k=((O=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {\n    ChangeDetectionStrategy,\n    Component,\n    Inject,\n    Injectable,\n    Provider,\n} from '@angular/core';\nimport {AbstractTuiDialogService, TUI_DIALOGS, TuiDialog} from '@taiga-ui/cdk';\nimport {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\n// Define options interface\ninterface PromptOptions {\n    readonly heading: string;\n    readonly buttons: readonly [string, string];\n}\n\n// Create component\n@Component({\n    selector: 'prompt',\n    templateUrl: './prompt.template.html',\n    styleUrls: ['./prompt.style.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PromptComponent {\n    // Here you get options + content + id + observer\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<PromptOptions, boolean>,\n    ) {}\n\n    onClick(response: boolean) {\n        this.context.completeWith(response);\n    }\n}\n\n// Create service\n@Injectable({\n    providedIn: 'root',\n})\nexport class PromptService extends AbstractTuiDialogService<PromptOptions> {\n    readonly defaultOptions = {\n        heading: 'Are you sure?',\n        buttons: ['Yes', 'No'],\n    } as const;\n    readonly component = new PolymorpheusComponent(PromptComponent);\n}\n\n// Add this provider to app module\nexport const PROMPT_PROVIDER: Provider = {\n    provide: TUI_DIALOGS,\n    useExisting: PromptService,\n    multi: true,\n};\n",HTML:'\x3c!-- Add id for accessibility purposes --\x3e\n<h2 [id]="context.id">{{context.heading}}</h2>\n<section\n    polymorpheus-outlet\n    [content]="context.content"\n    [context]="context"\n></section>\n<p class="buttons">\n    <button tuiButton class="tui-space_right-3" (click)="onClick(true)">\n        {{context.buttons[0]}}\n    </button>\n    <button tuiButton appearance="secondary" (click)="onClick(false)">\n        {{context.buttons[1]}}\n    </button>\n</p>\n',LESS:":host {\n    display: block;\n    padding: 24px;\n    margin: auto;\n    border-radius: 0 0 12px 12px;\n    background: var(--tui-base-01);\n    box-shadow: inset 0 4px var(--tui-accent);\n    animation: tuiReveal var(--tui-duration), tuiFadeIn var(--tui-duration);\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    margin: 24px 0 0;\n}\n"}}).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=s["\u0275\u0275defineComponent"]({type:O,selectors:[["dialogs"]],decls:7,vars:1,consts:[[6,"header"],["id","dialog",3,"content",6,"heading"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,C),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18n"](3,y),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-doc-example",1),s["\u0275\u0275i18nAttributes"](5,j),s["\u0275\u0275element"](6,"tui-dialogs-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("content",t.example1))},directives:[l.a,u.a,x],encapsulation:2,changeDetection:0}),O),P=n("kiPw"),S=((_=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[i.TuiButtonModule,P.c,o.c]]}),_),T=((w=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[o.c,S,i.TuiButtonModule,c.TuiAvatarModule,r.h,a.f.forChild(Object(r.o)(k))]]}),w)}}]);