import { Click, PerformsTasks, step, Task } from 'serenity-js/protractor';

import { Hover } from './../../../utils/helpers';
import { TodoList } from './../components/todo_list';

export class RemoveATodoItem implements Task {
    
    constructor(private itemName: string) { }

    static called(itemName: string): RemoveATodoItem {
        return new RemoveATodoItem(itemName);
    };

    @step('{0} removes a Todo item called #itemName')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Hover.over(TodoList.Item_With_Name(this.itemName)),
            Click.on(TodoList.Remove_Button)
        );
    };
}