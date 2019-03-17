module.exports = {
  'Nightwatch Example': browser => {
    browser
      .url('https://screener.io')
      .execute('/*@screener.init*/', ['Chrome: Nightwatch Test'])
      .execute('/*@screener.snapshot*/', ['Home'])
      .execute('/*@screener.end*/', [], ({value}) => {
        // @screener.end will return screener results
        // Note: @screener.end will close your test session, so it must be called just before the end of your test
        browser.assert.ifError(value.message);
      })
      .end();
  }
};
