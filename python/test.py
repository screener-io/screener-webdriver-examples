from selenium import webdriver
import os
screener = {
  'name': 'Python Example',
  'resolution': '1280x1024',
  'apiKey': os.environ['SCREENER_API_KEY'],
  'group': os.environ['SCREENER_GROUP_ID']
}
caps = {
  'browserName': 'chrome',
  'screener': screener
}
driver = webdriver.Remote(
  desired_capabilities=caps,
  command_executor="https://hub.screener.io/wd/hub"
)
driver.get("https://screener.io")
driver.execute_script('/*@screener.snapshot*/', 'Home')
driver.quit()
