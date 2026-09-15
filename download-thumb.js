const http = require('https');
const fs = require('fs');

const file = fs.createWriteStream("yt-thumb.jpg");
const request = http.get("https://i.ytimg.com/vi/Z2E19OGgif4/hqdefault.jpg", function(response) {
   response.pipe(file);
   file.on('finish', () => {
       file.close();
       console.log('Download Completed');
   });
});
