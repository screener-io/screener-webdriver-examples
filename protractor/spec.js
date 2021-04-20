describe('Protractor Example', function() {
  it('should take snapshot of homepage', function() {
    browser.driver.executeScript('/*@visual.init*/', 'My Visual Test');
    browser.driver.get('https://screener.io');
    browser.driver.executeScript('/*@visual.snapshot*/', 'Home');
  });
});
