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


client.on('message', message => {
//dado
    if (message.content === prefix + 'dado') {
       var dadoImage //url immagine dado
       var messaggio = 'Ho tirato il dado ed è uscito questo numero:'
       var dado = Math.floor(Math.random() * 6) + 1; //valore del dado

       if (dado === 1) {
          dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/1.png'
       }

       if (dado === 2) {
          dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/2.png'
       }

       if (dado === 3) {
          dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/3.png'
       }

       if (dado === 4) {
          dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/4.png'
       }

       if (dado === 5) {
          dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/5.png'
       }

       if (dado === 6) {
          dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/6.png'
      }

     message.reply(dadoImage + messaggio + dado);
    }
  }
);

//login al bot, da mettere alla fine
client.login(process.env.TOKEN)
