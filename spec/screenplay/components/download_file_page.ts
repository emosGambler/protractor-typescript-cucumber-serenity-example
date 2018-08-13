import { by } from 'protractor';
import { Target } from 'serenity-js/protractor';

export class DownloadPage {
    static DownloadLink = Target.the('Download link').located(by.css('.downloadlink'));
}