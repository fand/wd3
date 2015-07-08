var Promise = require('promise');
var WebdriverManager = require('webdriver-manager');
var wm = new WebdriverManager();

exports.config = {
    specs: [
        './test/**.js'
    ],
    exclude: [],
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost/',
    waitforTimeout: 10000,
    framework: 'mocha',
    reporter: 'dot',
    mochaOpts: {
        ui: 'bdd'
    },
    onPrepare: function() {
        return new Promise(function (resolve, reject) {
            wm.start({closeOnStdinInput: false}, function (err) {
                if (err) { reject(err); }
                resolve();
            });
        });
    },
    before: function() {
    },
    after: function() {
    },
    onComplete: function() {
        wm.stop();
    }
};
