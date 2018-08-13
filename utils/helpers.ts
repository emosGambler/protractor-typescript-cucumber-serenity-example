import { Target, Interaction, BrowseTheWeb } from "serenity-js/protractor";
import { browser } from 'protractor';
import * as fs from 'fs'
import { expect } from './../spec/expect';

export const Hover = {
    over: (target: Target) => Interaction.where(`#actor hovers over ${target}`, actor => {
        const browse = BrowseTheWeb.as(actor);
        return browse.locate(target).getWebElement().then(el => {
            return browse.actions().mouseMove(el).perform();
        });
    })
}
