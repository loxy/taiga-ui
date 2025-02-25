import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiTableSizeSelectorModule} from '@taiga-ui/addon-editor/components/toolbar-tools/table-size-selector';
import {
    TuiButtonModule,
    TuiDescribedByModule,
    TuiDropdownControllerModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {TuiTableCreateComponent} from './table-create.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiDropdownControllerModule,
        TuiButtonModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiTableSizeSelectorModule,
    ],
    declarations: [TuiTableCreateComponent],
    exports: [TuiTableCreateComponent],
})
export class TuiTableCreateModule {}
