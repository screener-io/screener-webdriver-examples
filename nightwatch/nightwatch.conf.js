module.exports = {
  src_folders: ['tests'],
  test_settings: {
    default: {
      webdriver: {
        host: 'hub.screener.io',
        port: 443,
        ssl: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        screener: {
          resolution: '1280x1024',
          apiKey: process.env.SCREENER_API_KEY,
          group: process.env.SCREENER_GROUP_ID
        }
      }
    }
  }
};
