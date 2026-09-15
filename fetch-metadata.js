const https = require('https');

const videoId = 'Z2E19OGgif4';
const url = `https://www.youtube.com/watch?v=${videoId}`;

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Look for description or keyword metadata
    const descMatch = data.match(/"shortDescription":"([^"]+)"/);
    const titleMatch = data.match(/"title":"([^"]+)"/);
    console.log('Title:', titleMatch ? titleMatch[1] : 'Not found');
    console.log('Description:', descMatch ? descMatch[1] : 'Not found');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
