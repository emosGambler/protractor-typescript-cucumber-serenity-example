import { AddATodoItem } from './add_a_todo_item';
import { Open, PerformsTasks, Task } from 'serenity-js/protractor';

export class Start implements Task {
    
    constructor(private items: string[]) {}

    static withATodoListContaining(items: string[]) {
        return new Start(items);
    };

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