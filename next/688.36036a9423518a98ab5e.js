(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{Qhn5:function(t,e,n){"use strict";n.r(e),e.default='<div i18n class="description">\n    To highlight extra characters:\n    <ul class="steps">\n        <li>\n            Set\n            <code>tuiTextfieldMaxLength</code>\n        </li>\n        <li class="steps_optional">\n            (Optional) Dont forget to set form validator (for example,\n            <code>Validators.maxLength</code>\n            ) if you want to make field invalid on exceeding the characters\n            limit\n        </li>\n    </ul>\n</div>\n\n<form class="form tui-col_md-6" [formGroup]="testForm">\n    <label tuiLabel label="Write a wise thought" class="tui-row">\n        <tui-text-area\n            formControlName="testValue1"\n            tuiHintContent="it\'s just a joke"\n            [expandable]="true"\n            [tuiTextfieldMaxLength]="maxLength"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Type it\n        </tui-text-area>\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n</form>\n'}}]);