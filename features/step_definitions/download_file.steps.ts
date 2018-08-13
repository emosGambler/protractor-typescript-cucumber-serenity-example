import { protractor } from 'protractor';
import { serenity } from 'serenity-js';
import { Actor, BrowseTheWeb } from 'serenity-js/protractor';

import { ValidateDownloadedFile } from './../../spec/interactions/download_file';
import { DownloadPage } from './../../spec/screenplay/components/download_file_page';
import { DownloadTextFile } from './../../spec/screenplay/tasks/download_text_file';
import { StartSamplePage } from './../../spec/screenplay/tasks/startSamplePage';

const actor: string = 'User';

let stage = serenity.callToStageFor({
    actor: (name) => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser))
});

export = function downloadFileSteps() {

    this.setDefaultTimeout(30 * 1000);

    this.Given(/^user enters page$/, () => {
        return stage.theActorCalled(actor).attemptsTo(
            StartSamplePage.andOpenSomeTab()
        );
    });

    this.When(/^user downloads some text file$/, () => {
        return stage.theActorCalled(actor).attemptsTo(
            DownloadTextFile.byClicking(DownloadPage.DownloadLink)
        );
    });

    this.Then(/^the file is downloaded$/, () => {
        const fileName: string = "quickstart-master.zip";
        return stage.theActorCalled(actor).attemptsTo(
            ValidateDownloadedFile.Name(fileName),
        );
    });
};