const
    glob         = require('glob'),
    protractor   = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),
    seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop();
    crew         = require('serenity-js/lib/stage_crew');

var fs = require("fs");

exports.config = {
    allScriptsTimeout: 110000,
    baseUrl: 'http://todomvc.com',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [ 'disable-infobars', '--no-sandbox', '--test-type=browser'],
            prefs: {
                download: {
                    prompt_for_download: false,
                    default_directory: `${__dirname}/target/downloads`
                }
            }
        }
    },
    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register'
        //tags: '@test'
    },
    disableChecks: true,
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),
    ignoreUncaughtExceptions: true,
    seleniumServerJar: seleniumJar,
    serenity: {
        crew:    [
            crew.serenityBDDReporter(),
            crew.photographer()
        ]
    },
    specs: [ 'features/**/*.feature' ],
    onPrepare: () => {
        if (!fs.existsSync('./target')) {
            fs.mkdirSync('./target')
        }
        if (!fs.existsSync('./target/downloads')) {
            fs.mkdirSync('./target/downloads')
        }
    }
};
