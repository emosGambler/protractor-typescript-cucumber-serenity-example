import { Target, Text, Question } from 'serenity-js/protractor';
import { by } from 'protractor';

export class TodoList {
    
    static Items = Target.the('List of Items').located(by.repeater('todo in todos'));
    static Items_Displayed = Text.ofAll(TodoList.Items);
    static Remove_Button = Target.the('Remove button').located(by.css('button.destroy'));
    static What_Needs_To_Be_Done = Target.the('"What needs to be done?" input box').located(by.id('new-todo'));
    static Items_Left_Count = Target.the('Items Left').located(by.css('span#todo-count > strong'));

    static Item_With_Name(itemName: string): Target {
        return Target.the('Added item').located(by.xpath(`//label[text() = "${itemName}"]`));
    };

    static Checkbox_Of_Item_With_Name(itemName: string): Target {
        return Target.the('Checkbox of added item').located(by.xpath(`//label[text() = "${itemName}"]/../input[contains(@class, "toggle")]`));
    };
}