import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleComponent} from '!!raw-loader!./examples/import/component.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-active-zone',
    templateUrl: './active-zone.template.html',
    styleUrls: ['./active-zone.style.less'],
    changeDetection,
})
export class ExampleTuiActiveZoneComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
    readonly exampleComponent = exampleComponent;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };
}
