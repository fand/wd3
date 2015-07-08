'use strict';

var webdriverio = require('webdriverio');
var assert      = require('assert');

describe('top page', function () {
  var client;

  before(function *() {
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
    yield client.init();
  });

  describe('my feature', function() {
    it('should do something', function *() {
      yield client
          .url('https://duckduckgo.com/')
          .setValue('#search_form_input_homepage', 'WebdriverIO')
          .click('#search_button_homepage');

      var title = yield browser.getTitle();
      console.log(title); // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    });
  });

  after(function () {
    client.end();
  });
});
