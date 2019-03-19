const assert = require('assert');

describe('WebdriverIO Example', () => {
  it('should take snapshot of homepage', () => {
    browser.url('https://screener.io');
    browser.execute('/*@screener.init*/', 'WebdriverIO Example');
    browser.execute('/*@screener.snapshot*/', 'Home');

    // @screener.end will return screener results
    // Note: @screener.end will close your test session, so it must be called just before the end of your test
    const {value} = browser.execute('/*@screener.end*/');
    assert.ifError(value.message);
  });
});
