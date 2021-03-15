const puppeteer = require('puppeteer')

async function scrapeProduct(url){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [el] = await page.$x('//*[@id="main"]/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/div[2]/span/div/div/img');
      const src = await el.getProperty('src')
      const image = await src.jsonValue()

    const [el2] = await page.$x('//*[@id="main"]/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/div[1]/h1');
    const txt = await el2.getProperty('textContent')
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="main"]/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/div[4]/form/div/div[1]/div[1]/div/div/span/span[3]');
    const price = await el3.getProperty('textContent')
    const Price = await price.jsonValue();



    console.log({image, title, Price})

    browser.close()

}

scrapeProduct('https://www.tesco.com/groceries/en-GB/products/261425645')