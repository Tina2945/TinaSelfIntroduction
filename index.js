const line = require('@line/bot-sdk');
const express = require('express');
const lineConfig = {
  channelAccessToken: process.env.KWmj1jI9ypiYzibwWIpirFlWAgBu7jze0xeoE8pLH13PsiyntmDfzFXgYqfjUT+5w8tOAkkdMkIiVpuRFY0eo+tUrx2XYkByQ5a5yiSeO1XftTkMZGdRY5mOcjsfe1TgFLuNlZHGhoBHmRoqFIfJgdB04t89/1O/w1cDnyilFU=,
  channelSecret: process.env.6aca82a49ca471da2a0754c3a7e33072
};
const client = new line.Client(lineConfig);
const app = express();
app.listen(3000, function() {
  console.log('App now running on port', this.address().port);
});
app.post('/', line.middleware(lineConfig), function(req, res) {
  Promise
    .all(req.body.events.map(handleEvent))
    .then(function(result) {
      res.json(result);
    });
});
function handleEvent(event) {
  switch (event.type) {
    case 'join':
    case 'follow':
      return client.replyMessage(event.replyToken, {
        type: 'text',
        text: '你好請問我們認識嗎?'
      });   
    case 'message':
      switch (event.message.type) {
        case 'text':
          return client.replyMessage(event.replyToken, {
            type: 'text',
            text: (event.message.text+'~*')
          });
      }
  }
}
