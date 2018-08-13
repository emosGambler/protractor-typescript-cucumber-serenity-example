import { Target, Interaction, BrowseTheWeb } from "serenity-js/protractor";
import { browser, promise } from "protractor";
import * as fs from "fs";
import { expect } from "../expect";

const downloadsDir = "./target/downloads";

export const ValidateDownloadedFile = {
    Name: (expectedName: string) => Interaction.where(`#actor downloads file ${expectedName}`, actor => {
        return expect(isFileDownloaded(expectedName, 3)).to.eventually.be.true;
    })
};

function isFileDownloaded(name: string, timeoutInSeconds: number): promise.Promise<boolean> {
    return browser.wait(() => {
        return fs.existsSync(`${downloadsDir}/${name}`);
    }, timeoutInSeconds * 1000).then(() => {
        return true;
    }, () => {
        return false;
    });
}