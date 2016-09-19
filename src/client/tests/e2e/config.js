exports.config = {
    seleniumServerJar: "D:/Profiles/smouret/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",

    // location of your E2E test specs
    specs: [
        './**/*.js'
    ],

    // configure multiple browsers to run tests
    multiCapabilities: [{
        'browserName': 'chrome'
    }],

    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: 'http://localhost:9000/',

    // testing framework, jasmine is the default
    framework: 'jasmine'
};
