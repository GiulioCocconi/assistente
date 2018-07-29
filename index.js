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
       var dado = Math.floor(Math.random() * 6) + 1; //valore del dado
       var dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/' + dado + '.png'  //url immagine dadovar messaggio = 'Ho tirato il dado ed è uscito questo numero:' 
       message.reply(messaggio + ' ' + dado, {file: dadoImage});
     }
     //comando
     if (comando === prefix + 'comando') {
       let search
       let b 
       var a
       for (a=0; arg[a] = ''; a++){
           if (a=0){
              search = arg[0]
              b = search
           }
           else {
              search = b + ’+’ + arg[a]
              b = search
           }
       }
    }
     
   }
  });

//login al bot, da mettere alla fine
client.login(process.env.TOKEN)
