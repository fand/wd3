'use strict';

var assert = require('assert');

describe('top page', function () {

  describe('my feature', function() {
    it('should do something', function *() {
      yield browser
          .url('https://duckduckgo.com/')
          .setValue('#search_form_input_homepage', 'WebdriverIO')
          .click('#search_button_homepage');

      var title = yield browser.getTitle();
      console.log(title); // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    });
  });

});
