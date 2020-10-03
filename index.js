const TelegramBot = require("node-telegram-bot-api");
const token = "ISI TOKEN @BotFather";
const client = new TelegramBot(token, { polling: true });

client.on('message', (msg) => {
  //replying
});

//akses untuk memulai bot!
client.onText(/\/start/, msg => {
  const chatId = msg.chat.id;
  const reply = { reply_to_message_id: msg.message_id };
  const name = msg.from.first_name;
  client.sendMessage(chatId, "Welcome, " + msg.from.first_name + "!", reply);
});

//akses untuk exit bot!
client.onText(/\/exit/, msg => {
  const chatId = msg.chat.id;
  const reply = { reply_to_message_id: msg.message_id };
  const name = msg.from.first_name;
  client.sendMessage(chatId, "Bye-Bye, " + msg.from.first_name + "!", reply);
});
