//req
const Discord = require('discord.js');
const music = require('discord.js-music-v11'); //musica
const YoutubeDL = require('youtube-dl'); //musica


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
  client.user.setActivity('gestire il server')
})



//quando si  manda un messaggio


client.on('message', message => {

  if (message.toLowerCase().startsWith(PREFIX.toLowerCase())) {			
    const comando = message.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
    const suffisso = message.substring(PREFIX.length + command.length).trim();

    switch (comando) {
      case 'dado':
        var dado = Math.floor(Math.random() * 6) + 1; //valore del dado
        var dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/' + dado + '.png'
        //url immagine dado
       var messaggio = 'Ho tirato il dado ed è uscito questo numero:' 
       message.reply(messaggio + ' ' + dado, {file: dadoImage});
    }

    }
  }
});
//login al bot, da mettere alla fine
client.login(process.env.TOKEN)
