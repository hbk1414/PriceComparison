const puppeteer = require('puppeteer')

 async function scrapeProduct(url){
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(url)

      const [el] = await page.$x('//*[@id="landingImage"]');
      const src = await el.getProperty('src')
      const image = await src.jsonValue()

      const [el2] = await page.$x('//*[@id="productTitle"]');
      const txt = await el2.getProperty('textContent')
      const title = await txt.jsonValue()

      const [el3] = await page.$x('//*[@id="almMultiOfferEgress"]/a/div/div/div/div[1]/div[1]/div/div[2]/span[1]');
      const price = await el3.getProperty('textContent')
      const Price = await price.jsonValue()

      console.log({image, title, Price})

      browser.close()
  
  }

 scrapeProduct('https://www.amazon.co.uk/gp/product/B00BZQS8TI?pf_rd_r=N5TFDSAPBEJGNWE0E2JZ&pf_rd_p=6e878984-68d5-4fd2-b7b3-7bc79d9c8b60&pd_rd_r=8ebb5ef2-d669-4c57-87cb-d4ebe74cf321&pd_rd_w=VAD8l&pd_rd_wg=cuBxo&ref_=pd_gw_unk')


 