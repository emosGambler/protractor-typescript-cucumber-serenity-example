import { Open, PerformsTasks, step, Task } from 'serenity-js/protractor';

export class StartSamplePage implements Task {
    
    static andOpenSomeTab() {
        return new StartSamplePage();
    };

    @step('{0} starts sample page')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('https://angular.io/guide/setup#download'),
        );
    };
}