import { Actor, BrowseTheWeb } from 'serenity-js/protractor';
import { serenity } from 'serenity-js';
import { AddATodoItem } from './../../spec/screenplay/tasks/add_a_todo_item';
import { expect } from './../../spec/expect';
import { listOf } from './../../spec/text';
import { protractor } from 'protractor';
import { Start } from './../../spec/screenplay/tasks/start';
import { TodoList } from './../../spec/screenplay/components/todo_list';

let stage = serenity.callToStageFor({
    actor: (name) => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser))
});

export = function todoUserSteps() {

    this.setDefaultTimeout(30 * 1000);

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (name: string, items: string) {
        return stage.theActorCalled(name).attemptsTo(
            Start.withATodoListContaining(listOf(items))
        );
    });
    
    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName: string) {
        return stage.theActorInTheSpotlight().attemptsTo(
            AddATodoItem.called(itemName)
        );
    });
    
    this.Then(/^.* todo list should contain (.*?)$/, function (items: string) {
        return expect(stage.theActorInTheSpotlight().toSee(TodoList.Items_Displayed)).eventually.deep.equal(listOf(items));
    });
};
