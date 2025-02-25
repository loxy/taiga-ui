import {Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-files-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputFilesExample3 {
    readonly control = new FormControl();

    readonly files: ReadonlyArray<TuiFileLike> = [
        {
            name: 'Loaded.txt',
        },
        {
            name: 'A file with a very very long title to check that it can be cut correctly.txt',
        },
    ];

    loadingFile: TuiFileLike | null = {
        name: 'Loading file.txt',
    };

    readonly rejectedFiles: ReadonlyArray<TuiFileLike> = [
        {
            name: 'File with an error.txt',
            content: 'Something went wrong this time',
        },
    ];

    readonly fileWithLink: TuiFileLike = {
        name: 'with link.txt',
        src: 'https://tools.ietf.org/html/rfc675',
    };

    removedFiles = [this.loadingFile];
    restoredFiles: TuiFileLike[] = [];

    constructor(@Inject(TUI_IS_CYPRESS) readonly isCypress: boolean) {}

    removeLoading() {
        this.loadingFile = null;
    }

    restore(file: TuiFileLike) {
        this.restoredFiles = [...this.restoredFiles, file];
        this.removedFiles = this.removedFiles.filter(
            removed => file.name !== removed?.name,
        );
    }

    remove(file: TuiFileLike) {
        this.removedFiles = [...this.removedFiles, file];
        this.restoredFiles = this.restoredFiles.filter(
            restored => file.name !== restored?.name,
        );
    }
}
