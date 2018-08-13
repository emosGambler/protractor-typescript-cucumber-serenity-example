import { Actor, BrowseTheWeb, Text } from 'serenity-js/protractor';
import { serenity } from 'serenity-js';
import { AddATodoItem } from './../../spec/screenplay/tasks/add_a_todo_item';
import { expect } from './../../spec/expect';
import { listOf } from './../../spec/text';
import { MarkATodoItemAsDone } from './../../spec/screenplay/tasks/mark_a_todo_item_as_done';
import { protractor } from 'protractor';
import { RemoveATodoItem } from './../../spec/screenplay/tasks/remove_a_todo_item';
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
        return expect(stage.theActorInTheSpotlight().toSee(TodoList.Items_Displayed)).to.eventually.deep.equal(listOf(items));
    });
    
    this.When(/^s?he removes (.*?) from (?:his|her) list$/, (item: string) => {
        return stage.theActorInTheSpotlight().attemptsTo(
            RemoveATodoItem.called(item)
        );
    });    

    this.When(/^s?he marks (.*?) as done$/, (item: string) => {
        return stage.theActorInTheSpotlight().attemptsTo(
            MarkATodoItemAsDone.called(item)
        );
    });

    this.Then(/^(?:his|her) todo list contains of (.*?) item left$/, (count: string) => {
        return expect(stage.theActorInTheSpotlight().toSee(Text.of(TodoList.Items_Left_Count))).to.eventually.equal(count);
    });
};
