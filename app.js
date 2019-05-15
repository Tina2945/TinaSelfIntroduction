var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1575013516',
  channelSecret: '6aca82a49ca471da2a0754c3a7e33072',
  channelAccessToken: 'vKWmj1jI9ypiYzibwWIpirFlWAgBu7jze0xeoE8pLH13PsiyntmDfzFXgYqfjUT+5w8tOAkkdMkIiVpuRFY0eo+tUrx2XYkByQ5a5yiSeO1XftTkMZGdRY5mOcjsfe1TgFLuNlZHGhoBHmRoqFIfJgdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  var replyMsg = `Hello你剛才說的是:${event.message.text}`;
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});
