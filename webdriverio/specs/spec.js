describe('WebdriverIO Example', function() {
    it('should take snapshot of homepage', function () {
        browser.url('https://screener.io');
        browser.execute('/*@screener.init*/', 'Chrome: WebdriverIO Test');
        browser.execute('/*@screener.snapshot*/', 'Home');
    });
});
