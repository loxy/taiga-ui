(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{KXQt:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputSliderModule",(function(){return xe}));var a=n("An66"),o=n("3kIJ"),r=n("1VvW"),i=n("SVIu"),l=n("Qq0t"),s=n("dvRg"),c=n("Piem"),m=n("kZht"),u=n("LusI"),d=n("K/iL"),p=n("OZlg"),y=n("e0eB"),f=n("yZWP"),g=n("aPft"),h=n("iyc4"),b=n("cc69");let P=(()=>{class e{constructor(){this.testForm=new o.FormGroup({testValue:new o.FormControl(1e5)}),this.keySteps=[[100/104*30,2e5],[100/104*46,1e6]],this.pluralize=["\u20bd","\u20bd","\u20bd"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-slider-example-1"]],decls:4,vars:17,consts:[[1,"form",3,"formGroup"],["formControlName","testValue","size","m","minLabel","Nothing","maxLabel","Everything",1,"control",3,"pluralize","segmentsPluralize","segments","min","max","steps","quantum","keySteps"],["formControlName","testValue","minLabel","Nothing","maxLabel","Everything",1,"control",3,"pluralize","segmentsPluralize","segments","min","max","steps","quantum","keySteps"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275element"](1,"tui-input-slider",1),m["\u0275\u0275elementStart"](2,"tui-input-slider",2),m["\u0275\u0275text"](3," Gold to people "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("pluralize",t.pluralize)("segmentsPluralize",t.pluralize)("segments",1)("min",5e4)("max",3e7)("steps",104)("quantum",1e3)("keySteps",t.keySteps),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("pluralize",t.pluralize)("segmentsPluralize",t.pluralize)("segments",1)("min",5e4)("max",3e7)("steps",104)("quantum",1e3)("keySteps",t.keySteps))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,b.a,o.NgControlStatus,o.FormControlName],styles:[".form[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.control[_ngcontent-%COMP%]{flex:1;margin-right:1.5rem}"],changeDetection:0}),e})();var x=n("zV1d");let C=(()=>{class e{constructor(){this.control=new o.FormControl(40),this.segments=5,this.max=100,this.min=0}increase(){this.control.patchValue(Math.min(this.control.value+20,this.max))}decrease(){this.control.patchValue(Math.max(this.control.value-20,this.min))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-slider-example-2"]],decls:16,vars:4,consts:[[1,"wrapper"],["new","",3,"min","max","segments","formControl"],[1,"slider-ticks-labels"],["tuiIconButton","","type","button","size","xs","icon","tuiIconDislikeLarge","appearance","icon",3,"click"],["tuiIconButton","","type","button","size","xs","icon","tuiIconLikeLarge","appearance","icon",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"tui-input-slider",1),m["\u0275\u0275text"](2," Rate your mind "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"div",2),m["\u0275\u0275elementStart"](4,"span"),m["\u0275\u0275elementStart"](5,"button",3),m["\u0275\u0275listener"]("click",(function(){return t.decrease()})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"span"),m["\u0275\u0275text"](7,"20%"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"span"),m["\u0275\u0275text"](9,"40%"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"span"),m["\u0275\u0275text"](11,"60%"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"span"),m["\u0275\u0275text"](13,"80%"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"span"),m["\u0275\u0275elementStart"](15,"button",4),m["\u0275\u0275listener"]("click",(function(){return t.increase()})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("min",t.min)("max",t.max)("segments",5)("formControl",t.control))},directives:[b.a,b.b,o.NgControlStatus,o.FormControlDirective,x.a],styles:[".wrapper[_ngcontent-%COMP%]{width:70%}@media screen and (max-width:37.4375em){.wrapper[_ngcontent-%COMP%]{width:100%}}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;font:var(--tui-font-text-s);color:var(--tui-text-02);margin:.5rem .5rem 0}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m)/2 + .5rem)}"],changeDetection:0}),e})();function V(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"span"),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](e)}}let S=(()=>{class e{constructor(){this.control=new o.FormControl(1e4),this.max=1e6,this.min=0,this.totalSteps=100,this.ticksLabels=["0","10K","100K","500k","1000K"],this.keySteps=[[25,1e4],[50,1e5],[75,5e5]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-slider-example-3"]],decls:9,vars:8,consts:[[1,"wrapper"],["new","",3,"min","max","steps","keySteps","formControl","segments"],[1,"slider-ticks-labels"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"tui-input-slider",1),m["\u0275\u0275text"](2," Not linear growing slider "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"div",2),m["\u0275\u0275template"](4,V,2,1,"span",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"p"),m["\u0275\u0275text"](6," Control value: "),m["\u0275\u0275elementStart"](7,"code"),m["\u0275\u0275text"](8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("min",t.min)("max",t.max)("steps",t.totalSteps)("keySteps",t.keySteps)("formControl",t.control)("segments",t.ticksLabels.length-1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngForOf",t.ticksLabels),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](t.control.value))},directives:[b.a,b.b,o.NgControlStatus,o.FormControlDirective,a.s],styles:[".wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width:37.4375em){.wrapper[_ngcontent-%COMP%]{width:100%}}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;font:var(--tui-font-text-s);color:var(--tui-text-02);margin:.5rem .5rem 0}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m)/2 + .5rem)}"],changeDetection:0}),e})();var E,v,T,_,z,O=n("EPR0"),k=n("yHor"),L=n("zGJC"),w=n("FSyC"),M=n("RlDx"),$=n("u8jZ");E=$localize`:␟da84b6ac893fbeaa337a2ee175f98e44ea263e53␟4701019213831986187:Component to input a limited range`,v=$localize`:␟0198de482ad16d583e51cf5d513123183dba1f58␟3089968062191477089: Number formatting can be customized by using ${"\ufffd#4\ufffd"}:START_LINK:TUI_NUMBER_FORMAT${"\ufffd/#4\ufffd"}:CLOSE_LINK:`,T=$localize`:␟14e672e31154c375cb1ee8c781385566c40cdb4d␟6093162029192060257: This component is being refactored. Soon (next major release) you will see the fresh version of it! `,_=$localize`:␟923512b8b545894f6c4ce70adc930ab688f94d68␟2683284265085445349: Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of ${"\ufffd#10\ufffd"}:START_TAG_CODE:InputSlider${"\ufffd/#10\ufffd"}:CLOSE_TAG_CODE: . `,z=$localize`:␟485048a5ceb7f4a1f2aeaafc03d18073e23b8a63␟4052765820269262987: However, if you are going to use this component, we recommend to use new version. To enable the "new version"-mode, add ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:new${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: directive. Example:  ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE: <tui‑input‑slider new ...> ${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:`,z=m["\u0275\u0275i18nPostprocess"](z);const A=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],D=["heading",$localize`:␟414bc269fadd0a392ae0e0c30dddc639ecf38308␟4430738955357466377:With slider segments + ticks labels`];var N;N=$localize`:␟792f0f73e29c38e731983b9276ab0ffd1de01441␟6496774841790769025: Use mixin ${"\ufffd#22\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#22\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;const G=["heading",$localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`];var R,F,I,q,H,K,j,W,B,U,J,Z,Q,X,Y,ee;function te(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,E),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,v),m["\u0275\u0275element"](4,"a",2),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-notification"),m["\u0275\u0275elementStart"](6,"p",3),m["\u0275\u0275i18n"](7,T),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"p"),m["\u0275\u0275i18nStart"](9,_),m["\u0275\u0275element"](10,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"p"),m["\u0275\u0275i18nStart"](12,z),m["\u0275\u0275element"](13,"code"),m["\u0275\u0275element"](14,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](16,A),m["\u0275\u0275element"](17,"tui-input-slider-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](19,D),m["\u0275\u0275elementStart"](20,"tui-notification",6),m["\u0275\u0275i18nStart"](21,N),m["\u0275\u0275element"](22,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](23,"tui-input-slider-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"tui-doc-example",7),m["\u0275\u0275i18nAttributes"](25,G),m["\u0275\u0275elementStart"](26,"dl",8),m["\u0275\u0275i18nStart"](27,R),m["\u0275\u0275elementStart"](28,"dt"),m["\u0275\u0275element"](29,"strong"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](30,"dd"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](31,"tui-input-slider-example-3"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](15),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("content",e.example3)}}function ne(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-slider",23),m["\u0275\u0275text"](1," Range "),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("min",e.min)("max",e.max)("minLabel",e.minLabel)("maxLabel",e.maxLabel)("segments",e.segments)("size",e.size)("keySteps",e.keySteps)("pluralize",e.pluralize)("segmentsPluralize",e.segmentsPluralize)("steps",e.steps)("quantum",e.quantum)("readOnly",e.readOnly)("secondary",e.secondary)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}function ae(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,F),m["\u0275\u0275element"](1,"code"),m["\u0275\u0275i18nEnd"]())}function oe(e,t){1&e&&m["\u0275\u0275i18n"](0,I)}function re(e,t){1&e&&m["\u0275\u0275i18n"](0,q)}function ie(e,t){1&e&&m["\u0275\u0275i18n"](0,H)}function le(e,t){1&e&&m["\u0275\u0275i18n"](0,K)}function se(e,t){1&e&&m["\u0275\u0275i18n"](0,j)}function ce(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,W),m["\u0275\u0275element"](1,"a",24),m["\u0275\u0275i18nEnd"]())}function me(e,t){1&e&&m["\u0275\u0275i18n"](0,B)}function ue(e,t){1&e&&m["\u0275\u0275i18n"](0,U)}function de(e,t){1&e&&m["\u0275\u0275i18n"](0,J)}function pe(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,Z),m["\u0275\u0275element"](1,"code"),m["\u0275\u0275i18nEnd"]())}function ye(e,t){1&e&&m["\u0275\u0275i18n"](0,Q)}function fe(e,t){1&e&&m["\u0275\u0275i18n"](0,X)}function ge(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo",9),m["\u0275\u0275template"](1,ne,2,18,"ng-template"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,ae,2,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().disabled=t})),m["\u0275\u0275template"](4,oe,1,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().keySteps=t})),m["\u0275\u0275template"](5,re,1,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().min=t})),m["\u0275\u0275template"](6,ie,1,0,"ng-template",13),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().max=t})),m["\u0275\u0275template"](7,le,1,0,"ng-template",14),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().minLabel=t})),m["\u0275\u0275template"](8,se,1,0,"ng-template",15),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().maxLabel=t})),m["\u0275\u0275template"](9,ce,2,0,"ng-template",16),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().pluralize=t})),m["\u0275\u0275template"](10,me,1,0,"ng-template",17),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().quantum=t})),m["\u0275\u0275template"](11,ue,1,0,"ng-template",18),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().secondarySelected=t})),m["\u0275\u0275template"](12,de,1,0,"ng-template",19),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().segments=t})),m["\u0275\u0275template"](13,pe,2,0,"ng-template",20),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().segmentsPluralize=t})),m["\u0275\u0275template"](14,ye,1,0,"ng-template",21),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().size=t})),m["\u0275\u0275template"](15,fe,1,0,"ng-template",22),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().steps=t})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](16,"inherited-documentation")}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("control",e.control),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("documentationPropertyValue",e.disabled),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.keyStepsVariants)("documentationPropertyValue",e.keySteps),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.minLabelVariants)("documentationPropertyValue",e.minLabel),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.maxLabelVariants)("documentationPropertyValue",e.maxLabel),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.pluralizeVariants)("documentationPropertyValue",e.pluralize),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.quantumVariants)("documentationPropertyValue",e.quantum),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.secondaryVariants)("documentationPropertyValue",e.secondarySelected),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.segmentsVariants)("documentationPropertyValue",e.segments),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.pluralizeVariants)("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.segmentsPluralize),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.stepsVariants)("documentationPropertyValue",e.steps)}}function he(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",25),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,Y),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",26),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,ee),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",27),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleHtml)}}R=$localize`:␟968d4f0cffb2bf2b0747a84b02410011aff3b035␟1485036497695329333:${"\ufffd#28\ufffd"}:START_TAG_DT:${"\ufffd#29\ufffd"}:START_TAG_STRONG:Key steps${"\ufffd/#29\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#28\ufffd"}:CLOSE_TAG_DT:${"\ufffd#30\ufffd"}:START_TAG_DD: anchor points of non-uniform format between value and position ${"\ufffd/#30\ufffd"}:CLOSE_TAG_DD:`,F=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,I=$localize`:␟1182f923918428fd2bd242abbe914d25c5bcc8b2␟718529244239473960: Key steps to bind slider position and value `,q=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,H=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,K=$localize`:␟a445c1c0c1b03cfdd3bb053dcf04a9482b562e9d␟2252137414227545758: Label for min value `,j=$localize`:␟1a346cbb19ed170dc1c16d6640ad0d70362a0e46␟8031401282441580913: Label for max value `,W=$localize`:␟55bbb104b8b5d5cd59d9ec23818716e265e89098␟2579001541454869739: Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the ${"\ufffd#1\ufffd"}:START_LINK: ICU format ${"\ufffd/#1\ufffd"}:CLOSE_LINK: for i18nPlural `,B=$localize`:␟f26a39c14b6a1067d75ea1628e8b28ef256949db␟1397462847420435865: Minimum indivisible value `,U=$localize`:␟e8a1cc23291582d3cd2869ac4aa1447afd567cec␟3136083767398353488: Right label `,J=$localize`:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `,Z=$localize`:␟996c509e08cd9242082aa69671b5c7e1dde89849␟5852107164659302099: Plural forms for ${"\ufffd#1\ufffd"}:START_TAG_CODE:segments${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,Q=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,X=$localize`:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `,Y=$localize`:␟5c5b855d47959ade58e22dd4b99dd7ce3a6b66f9␟4365654195713409511: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputSliderModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,ee=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let be=(()=>{class e extends u.a{constructor(){super(...arguments),this.exampleModule=n.e(445).then(n.bind(null,"1Cfu")),this.exampleHtml=n.e(446).then(n.bind(null,"XlgN")),this.example1={HTML:n.e(436).then(n.bind(null,"Hxlx")),LESS:n.e(437).then(n.bind(null,"abRr")),TypeScript:n.e(438).then(n.bind(null,"j4/k"))},this.example2={HTML:n.e(439).then(n.bind(null,"OxFf")),LESS:n.e(440).then(n.bind(null,"Fl7q")),TypeScript:n.e(441).then(n.bind(null,"dC0F"))},this.example3={HTML:n.e(442).then(n.bind(null,"2usz")),TypeScript:n.e(444).then(n.bind(null,"kWlT")),LESS:n.e(443).then(n.bind(null,"WMq0"))},this.control=new o.FormControl,this.minVariants=[0,1,5,7.77,-10],this.min=this.minVariants[0],this.maxVariants=[10,100,1e4],this.max=this.maxVariants[0],this.segmentsVariants=[0,1,5,13],this.segments=this.segmentsVariants[0],this.stepsVariants=[0,4,10],this.steps=this.stepsVariants[0],this.quantumVariants=[1,.01,.001,1e-4,10,100],this.quantum=this.quantumVariants[0],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.pluralizeVariants=[["year","years","years"],{one:"thing",few:"things",many:"things",other:"things"},{one:"year",other:"years"}],this.pluralize=null,this.segmentsPluralize=null,this.secondaryVariants=["getter of percent","Something"],this.secondarySelected=null,this.minLabelVariants=["","Nothing"],this.minLabel=this.minLabelVariants[0],this.maxLabelVariants=["","Everything"],this.maxLabel=this.maxLabelVariants[0],this.keyStepsVariants=[[[50,1e3]]],this.keySteps=null}get secondary(){return this.secondarySelected===this.secondaryVariants[0]?Math.round(this.control.value/this.max*100)+"%":this.secondarySelected}}return e.\u0275fac=function(t){return Pe(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-slider"]],features:[m["\u0275\u0275ProvidersFeature"]([{provide:d.a,useExisting:Object(m.forwardRef)(()=>e)}]),m["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputSlider","package","KIT","type","components"],["pageTab",""],["tuiLink","","routerLink","/utils/tokens"],[1,"tui-space_top-0"],["id","base",3,"content",6,"heading"],["id","slider-segments",3,"content",6,"heading"],[1,"tui-space_bottom-8"],["id","key-steps",3,"content",6,"heading"],[1,"tui-space_bottom-8","tui-space_top-0"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pluralize","documentationPropertyMode","input","documentationPropertyType","TuiPluralize | Record<string, string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","quantum","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","secondary","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segmentsPluralize","documentationPropertyMode","input","documentationPropertyType","TuiPluralize",3,"documentationPropertyValues","documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","steps","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","min","max","minLabel","maxLabel","segments","size","keySteps","pluralize","segmentsPluralize","steps","quantum","readOnly","secondary","tuiHintContent","tuiHintDirection","tuiHintMode"],["tuiLink","","href","https://unicode-org.github.io/icu/userguide/format_parse/messages/"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,te,32,3,"ng-template",1),m["\u0275\u0275template"](2,ge,17,27,"ng-template",1),m["\u0275\u0275template"](3,he,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[p.a,y.a,f.a,r.e,g.a,h.a,P,C,S,O.a,k.a,L.a,w.a,b.a,o.NgControlStatus,o.FormControlDirective,M.a,$.a],encapsulation:2,changeDetection:0}),e})();const Pe=m["\u0275\u0275getInheritedFactory"](be);let xe=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.hb,s.ib,c.a,o.ReactiveFormsModule,o.FormsModule,a.c,s.yb,l.W,l.pb,i.i,l.ub,l.Sb,l.Cb,r.f.forChild(Object(i.p)(be))]]}),e})()}}]);