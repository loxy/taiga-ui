(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{s9I5:function(t,a,n){"use strict";n.r(a),a.default='<tui-select\n    *tuiLet="items$ | async as items"\n    class="b-form"\n    [(ngModel)]="value"\n>\n    Select user\n    <tui-data-list-wrapper\n        *tuiDataList\n        size="l"\n        [items]="items"\n        [itemContent]="content"\n        [disabledItemHandler]="disabledItemHandler"\n    ></tui-data-list-wrapper>\n</tui-select>\n\n<ng-template #content let-data>\n    <div class="template">\n        <tui-avatar\n            size="xs"\n            class="avatar"\n            [avatarUrl]="data.avatarUrl || null"\n            [text]="data.toString()"\n        ></tui-avatar>\n        <div class="name">{{data}}</div>\n    </div>\n</ng-template>\n'}}]);