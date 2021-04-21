exports.config = {
  seleniumAddress: 'https://hub.screener.io/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome',
    'sauce:visual': {
       apiKey: process.env.SCREENER_API_KEY,
       projectName: 'my-project',
       viewportSize: '1280x1024'
    },
    'sauce:options': {
       username: process.env.SAUCE_USERNAME,
       accessKey: process.env.SAUCE_ACCESS_KEY,
       build: `Protractor build-${process.env.DATE}`
    }
  }
};
