//req
const Discord = require('discord.js');

//Discord Client
const client = new Discord.Client();

//prefisso
var prefix = "!"

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
   if (message.content.startsWith(prefix)) {
     let messaggioArray = message.content.split(' ');
     let comando = messaggioArray[0];
     let arg = messaggioArray.slice(1)
     
     //dado
     if (comando === prefix + 'dado') {
       let dado = Math.floor(Math.random() * 6) + 1; //valore del dado
       let dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/' + dado + '.png'  //url immagine dadovar messaggio = 'Ho tirato il dado ed è uscito questo numero:' 
       message.reply(messaggio + ' ' + dado, {file: dadoImage});
     }

     //parliamo
     if (comando === prefix + 'parliamo') {
         //cosa fare
     }

    }
     
if (message.content.startsWith('Ciao' || 'ciao')) {
   if (!message.author.bot) {
      let frase = Math.floor(Math.random() * 3) + 1; //numero casuale tra 1 e 4
      if (frase === 1) {
         message.channel.send('Ciao a te,' + ' ' + message.author);
      }
      if (frase === 2) {
         message.channel.send('Ciao boss');
      }
      if (frase === 3) {
         message.channel.send('Buongiorno');
      }
      if (frase === 4) {
         message.channel.send('Ciao');
      }
   }
}
});

//login al bot, da mettere alla fine
client.login(process.env.TOKEN)
