import { Open, PerformsTasks, step, Task, Click } from 'serenity-js/protractor';
import { SamplePage } from './../components/sample_page';

export class StartSamplePage implements Task {
    
    static andOpenSomeTab() {
        return new StartSamplePage();
    };

    @step('{0} starts sample page')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('https://www.pdfindexgenerator.com/download-samples/'),
            Click.on(SamplePage.Tab)
        );
    };
}