import { Click, PerformsTasks, step, Task } from 'serenity-js/protractor';

import { TodoList } from './../components/todo_list';

export class MarkATodoItemAsDone implements Task {

    constructor(private itemName: string) {}

    static called(itemName): MarkATodoItemAsDone {
        return new MarkATodoItemAsDone(itemName);
    };

    @step('{0} marks a Todo item called #itemName as done')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(TodoList.Checkbox_Of_Item_With_Name(this.itemName))
        );
    };
}