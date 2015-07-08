'use strict';

var webdriverio = require('webdriverio');
var assert      = require('assert');

describe('top page', function () {
  var client;

  before(function *() {
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
    yield client.init();
  });

  describe('top', function () {
    it('has correct title', function *() {
      var title = yield client.url('http://webdriver.io').getTitle();
      assert(title.match(/WebdriverIO/), 'The title contains "WebdriverIO"');
    });
  });

  after(function () {
    client.end();
  });
});
