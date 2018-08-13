import { Target, Text, Question } from 'serenity-js/protractor';
import { by } from 'protractor';

export class SamplePage {
    static Tab = Target.the('Tab').located(by.css('START HERE'));
}