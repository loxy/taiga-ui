(window.webpackJsonp=window.webpackJsonp||[]).push([[781],{HGGC:function(t,e,u){"use strict";u.r(e),e.default='```html\n<table tuiTable [columns]="columns">\n  <thead tuiThead>\n    <tr tuiThGroup>\n      <th *tuiHead="\'name\'" tuiTh>Name</th>\n      <th *tuiHead="\'email\'" tuiTh>E-mail</th>\n      <th *tuiHead="\'status\'" tuiTh>Status</th>\n      <th *tuiHead="\'tags\'" tuiTh [sorter]="null">Tags</th>\n    </tr>\n  </thead>\n  <tbody tuiTbody>\n    <tr *ngFor="let item of users | tuiTableSort" tuiTr>\n      <td *tuiCell="\'name\' of item; let value" tuiTd>{{value}}</td>\n      <td *tuiCell="\'email\' of item; let value" tuiTd>\n        <a *ngIf="value" tuiLink [href]="\'mailto:\' + value">{{value}}</a>\n      </td>\n      <td *tuiCell="\'status\' of item; let value" tuiTd>\n        <div [class]="value">{{value}}</div>\n      </td>\n      <td *tuiCell="\'tags\' of item; let tags" tuiTd>\n        <tui-tag *ngFor="let tag of tags" class="tui-space_right-1" [value]="tag" [autoColor]="true"></tui-tag>\n      </td>\n    </tr>\n  </tbody>\n</table>\n```\n'}}]);