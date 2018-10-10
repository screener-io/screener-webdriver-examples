describe('Protractor Example', function() {
  it('should take snapshot of homepage', function() {
    browser.driver.get('https://screener.io');
    browser.driver.executeScript('/*@screener.snapshot*/', 'Home');
  });
});
