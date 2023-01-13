import { FastifyPluginAsync } from 'fastify'
// import TelegramBot from 'node-telegram-bot-api';

// let chats = [];

// let telegramBot = null;

// const token = '5939201657:AAGU4-SVY86EUjIgQzl_ix5DzhiFDSt7N5c';

// async function start() {
//   telegramBot = new TelegramBot(token);
//   await telegramBot.startPolling({ restart: true });
// }

// async function stop() {
//   if (telegramBot != null) {
//     await telegramBot.stopPolling({ cancel: true });
//     telegramBot = null;
//   }
//   process.exit();
// }

// (async () => {
//   await start();
//   process.on('SIGQUIT', stop);
//   process.on('SIGINT', stop);

//   telegramBot.on('message', (msg) => {
//     const chatId = msg.chat.id;

//     if(msg.text === "Следи за работами") {
//       chats.push(chatId);

//       return telegramBot.sendMessage(chatId, 'Ок, дам знать, как что-то будет');
//     }

//     if(msg.text === "Отстань") {
//       chats = chats.filter((chat) => chat !== chatId);

//       return telegramBot.sendMessage(chatId, 'Ой, все');
//     }

//     return telegramBot.sendMessage(chatId, 'Я не понимаю, что ты хочешь');
//   });
// })();

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/message', function (request: any, reply) {

    // chats.forEach((chat) => {
    //   bot.sendMessage(chat, request.query.message);
    // });
  
    reply.send({ hello: request.query.message })
  })
  
}

export default root;
