const puppeteer = require("puppeteer");
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1224,
      height: 5310,
      deviceScaleFactor: 2.64227642276,
    });
    await page.goto("http://localhost:3000/");
    page.waitForSelector(
      "#root > div > div:last-child"
    );
    const types = [
      "card",
    ];

    const dir = './build';
    if (!fs.existsSync(dir)) {
      console.log(`Directory ${dir} does not exists. Creating...`);
      try{
        fs.mkdirSync(dir);
        console.log(`Directory ${dir} created.`);
      }
      catch {
        console.log(`Error on creating directory ${dir}`);
      }
    }

    for (const tp of types) {
      const allCards = await page.$$(`.${tp}`);
      for (let [c, card] of allCards.entries()) {
        const v = String(c).padStart(2, 0);
        const fn = `${dir}/card-${tp}-${v}.jpg`;
        try {
          console.log(`Generated CARD ${v} ${fn}`);

          await (await card).screenshot({
            path: fn,
            omitBackground: true,
          });
        } catch (error) {
          console.log(`ERROR on CARD${v}`, typeof card, error);
        }
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
  await browser.close();
})();
