import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiItemsHandlersProvider} from '@taiga-ui/kit';

interface Employee {
    readonly id: number;
    readonly name: string;
    readonly dept: {
        readonly id: number;
        readonly title: string;
    };
}

const STRINGIFY_EMPLOYEE: TuiStringHandler<Employee> = (item: Employee) =>
    `${item.name} (${item.dept.title})`;

@Component({
    selector: 'tui-combo-box-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [tuiItemsHandlersProvider({stringify: STRINGIFY_EMPLOYEE})],
})
export class TuiComboBoxExample6 {
    readonly testValue = new FormControl(null);

    readonly items: ReadonlyArray<Employee> = [
        {id: 42, name: 'John Cleese', dept: {id: 566, title: 'Financial'}},
        {id: 237, name: 'Eric Idle', dept: {id: 560, title: 'Staffing'}},
        {id: 666, name: 'Michael Palin', dept: {id: 566, title: 'Financial'}},
        {id: 123, name: 'Terry Gilliam', dept: {id: 500, title: 'Administrative'}},
        {id: 777, name: 'Terry Jones', dept: {id: 566, title: 'Financial'}},
        {id: 999, name: 'Graham Chapman', dept: {id: 560, title: 'Staffing'}},
    ];
}
