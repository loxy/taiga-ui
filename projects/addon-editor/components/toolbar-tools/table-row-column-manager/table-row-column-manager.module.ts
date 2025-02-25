import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDescribedByModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {TuiTableRowColumnManagerComponent} from './table-row-column-manager.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiButtonModule,
        TuiDataListModule,
        TuiLetModule,
    ],
    declarations: [TuiTableRowColumnManagerComponent],
    exports: [TuiTableRowColumnManagerComponent],
})
export class TuiTableRowColumnManagerModule {}
