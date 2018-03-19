const
    glob         = require('glob'),
    protractor   = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),
    seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop();
    crew         = require('serenity-js/lib/stage_crew');

exports.config = {
    allScriptsTimeout: 110000,
    baseUrl: 'http://todomvc.com',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'disable-infobars'
            ]
        }
    },
    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register'
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
    specs: [ 'features/**/*.feature' ]
};
