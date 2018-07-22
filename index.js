//req
const Discord = require('discord.js');

//Discord Client
const client = new Discord.Client();

//prefisso
let prefix = "!a"

function error (message) {
  console.log(message)
}

//quando il bot si accende

client.on('ready', () => {
  console.log('Il bot è pronto')
  client.user.setGame('gestire il server')
})

//quando si  manda un messaggio

//dado
client.on('message', message => {

    if (message.content === prefix + 'dado') {

       message.reply(Math.floor(Math.random() * 6) + 1);

       }

});
//login al bot, da mettere alla fine
client.login(process.env.TOKEN)
