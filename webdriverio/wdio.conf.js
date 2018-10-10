exports.config = {
  host: 'hub.screener.io',
  port: 443,
  protocol: 'https',
  specs: [
    './specs/**/*.js'
  ],
  capabilities: [{
    browserName: 'chrome',
    screener: {
      resolution: '1280x1024',
      apiKey: process.env.SCREENER_API_KEY,
      group: process.env.SCREENER_GROUP_ID
    }
  }],
  framework: 'mocha',
  mochaOpts: {
    timeout: 90000
  }
}
