const TelegramBot = require('node-telegram-bot-api');

const token = '7292394758:AAGSbXGUAbg2JTBt4fuGnYRcIUULNu2m6a0';

const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands([
  { command: '/start', description: "Bot haqida ma'lumot" },
  { command: '/info', description: "O'zingiz haqingizda ma'lumot" },
  { command: '/username', description: "Usernameingiz" },
  { command: '/botavatar', description: "Botimizning avatar rasmi" },
  { command: '/dinogame', description: "chromedagi dino game🦖" },
]);

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    const starts = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Info", callback_data: '/info' },
            { text: "Username", callback_data: '/username' },
          ],
          [
            { text: "Botavatar", callback_data: '/botavatar' },
            { text: "Sticker", callback_data: '/sticker'},
          ],
          [
            { text: "Dino game🦖", callback_data: '/dinogame'},
          ]
        ]
      }
    };

    return bot.sendMessage(chatId, `Assalomu alaykum hurmatli ${msg.from?.first_name}!`, starts);
  }

  if (text === '/info') {
    return bot.sendMessage(chatId, `Ismingiz: ${msg.from?.first_name}, Familya: ${msg.from?.last_name}, Chat ID: ${chatId}`);
  }

  if (text === '/username') {
    return bot.sendMessage(chatId, `Sizning username: @${msg.from?.username}`);
  }

  if (text === '/botavatar') {
    return bot.sendPhoto(chatId, './botavatar.jpg', {
      caption: 'Bu bizning botimizni avatar rasmi',
    });
  }

  if (text === '/sticker') {
    return bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.webp');
  }

  if (text === '/dinogame') {
    return bot.sendMessage(chatId, "O'yinni boshlang:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Dino game🦖", url: 'https://chromedino.com/' }]
        ]
      }
    });
  }

  return bot.sendMessage(chatId, "Uzur, bu buyruqni tushunmadim :(");
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === '/info') {
    return bot.sendMessage(chatId, `Ismingiz: ${query.from?.first_name}, Familya: ${query.from?.last_name}, Chat ID: ${chatId}`);
  }

  if (data === '/username') {
    return bot.sendMessage(chatId, `Sizning username: @${msg.from?.username}`);
  }

  if (data === '/botavatar') {
    return bot.sendPhoto(chatId, './botavatar.jpg', {
      caption: 'Bu bizning botimizni avatar rasmi',
    });
  }

  if (data === '/sticker') {
    return bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.webp');
  }

  if (data === '/dinogame') {
    return bot.sendMessage(chatId, "O'yinni boshlang:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Dino game🦖", url: 'https://chromedino.com/' }]
        ]
      }
    });
  }
});
