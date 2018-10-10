module.exports = {
  'Nightwatch Example' : function (browser) {
    browser
      .url('https://screener.io')
      .execute('/*@screener.init*/', ['Chrome: Nightwatch Test'])
      .execute('/*@screener.snapshot*/', ['Home'])
      .end();
  }
};
