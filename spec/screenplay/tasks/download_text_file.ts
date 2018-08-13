import { Click, PerformsTasks, step, Task, Target } from 'serenity-js/protractor';

import { DownloadPage } from './../components/download_file_page';

export class DownloadTextFile implements Task {
    
    constructor(private target: Target) { };

    static byClicking(target: Target): DownloadTextFile {
        return new DownloadTextFile(target);
    };

    @step('User downloads a text file')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(this.target),
        );
    };
}