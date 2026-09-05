const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set to mobile viewport
    await page.setViewport({ width: 375, height: 812, isMobile: true });
    
    console.log('Navigating to http://localhost:5173...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    
    console.log('Taking mobile screenshot...');
    await page.screenshot({ path: 'mobile_view.png' });
    
    // Click the hamburger menu if it exists
    const hamburgerBtn = await page.$$('header button');
    if (hamburgerBtn.length > 1) {
      console.log('Clicking hamburger menu...');
      await hamburgerBtn[1].click();
      await new Promise(r => setTimeout(r, 1000)); // wait for menu animation
      await page.screenshot({ path: 'mobile_menu_open.png' });
    }
    
    // Set to tablet viewport
    await page.setViewport({ width: 768, height: 1024, isMobile: true });
    console.log('Taking tablet screenshot...');
    await page.screenshot({ path: 'tablet_view.png' });

    await browser.close();
    console.log('Done! Screenshots saved.');
  } catch (err) {
    console.error('Error:', err);
  }
})();
