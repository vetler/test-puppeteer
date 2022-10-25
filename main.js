const puppeteer = require('puppeteer');

exports.helloWorld = async (req, res) => {
    const browser = await puppeteer.launch({headless: true});
    await browser.close();
    res.send('Hello, World!');
};
