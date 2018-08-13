import { Open, PerformsTasks, step, Task } from 'serenity-js/protractor';

import { AddATodoItem } from './add_a_todo_item';

export class Start implements Task {
    
    constructor(private items: string[]) {}

    static withATodoListContaining(items: string[]) {
        return new Start(items);
    };

    @step('{0} starts with a Todo List containing #items')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('/examples/angularjs/'),
            ...this.addAll(this.items)
        );
    };

    private addAll(items: string[]): Task[] {
        return items.map(item => AddATodoItem.called(item));
    };
}