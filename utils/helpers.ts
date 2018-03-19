import { Target, Interaction, BrowseTheWeb } from "serenity-js/protractor";

export const Hover = {
    over: (target: Target) => Interaction.where(`#actor hovers over ${target}`, actor => {
        const browse = BrowseTheWeb.as(actor);
        return browse.locate(target).getWebElement().then(el => {
            return browse.actions().mouseMove(el).perform();
        });
    })
};