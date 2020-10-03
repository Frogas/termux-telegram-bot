const TelegramBot = require("node-telegram-bot-api");
const token = "1313132154:AAFlmR71CIn7ObLj7QMwbefBraT0HVPaEy8";
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  var bye = "bye";
  if(msg.text.toString().toLowerCase().includes(bye)){
    bot.sendMessage(msg.chat.id, "Selamat Pergi! " + msg.from.first_name);
  }

  var what = "idiot";
  if(msg.text.includes(what)){
    bot.kickChatMember(msg.chat.id, msg.from.id);
  }
});

bot.onText(/\/start/, msg => {
  bot.sendMessage(
    msg.chat.id,
    "Selamat Datang, " +
      msg.from.first_name +
      "\nSilakan tekan commands atau button,\nyang berada dikeyboard anda!\n\nCommands:\n/dice - Kocok dadu secara random!\n/music [url] - Download music custom!\n/sendpic - Mengirim picture random!\n/nulis [teks] - Untuk nulis dibuku!\n/lirik [lagunya] - Untuk melihat lirik lagu!",
    {
      reply_markup: {
        keyboard: [["/dice", "/music", "/sendpic", "/nulis", "/lirik"]]
      }
    }
  );
});

bot.onText(/\/dice/, msg => {
  bot.sendMessage(msg.chat.id, "1");
});

bot.onText(/\/rcode/, msg => {
  bot.sendMessage(msg.chat.id, "Code:22345");
});

bot.onText(/\/sendpic/, msg => {
  bot.sendPhoto(msg.chat.id, "https://images.app.goo.gl/1JF1zTiWz8HhS3kp8", {
    caption: "Nama: Minecraft\nWeb: image.app.goo.gl\nBy: Reza"
  });
});
