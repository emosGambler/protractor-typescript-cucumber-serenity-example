import { Actor, BrowseTheWeb } from 'serenity-js/protractor';
import { AddATodoItem } from './../../spec/screenplay/tasks/add_a_todo_item';
import { expect } from './../../spec/expect';
import { listOf } from './../../spec/text';
import { protractor } from 'protractor';
import { Start } from './../../spec/screenplay/tasks/start';
import { TodoList } from './../../spec/screenplay/components/todo_list';

export = function todoUserSteps() {

    this.setDefaultTimeout(30 * 1000);

    let actor: Actor;

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (name: string, items: string) {
        actor = Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser));
        return actor.attemptsTo(
            Start.withATodoListContaining(listOf(items))
        );
    });
    
    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName: string) {
        return actor.attemptsTo(
            AddATodoItem.called(itemName)
        );
    });
    
    this.Then(/^.* todo list should contain (.*?)$/, function (items: string) {
        return expect(actor.toSee(TodoList.Items_Displayed)).eventually.deep.equal(listOf(items));
    });
};
