exports.config = {
  seleniumAddress: 'https://hub.screener.io/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome',
    screener: {
      name: 'Chrome: Protractor Test',
      resolution: '1280x1024',
      apiKey: process.env.SCREENER_API_KEY,
      group: process.env.SCREENER_GROUP_ID
    }
  }
};
