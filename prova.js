//req
const Discord = require('discord.js');

//Discord Client
const client = new Discord.Client();

//prefisso


function error (message) {
  console.log(message)
}
var prefix = '!'
var messaggio= '!comando Italy'
     let messaggioArray =messaggio.content.split(' ');
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
       for (a=1; messaggioArray.slice(a)= ''; a++){
           if (a=1){
              search = messaggioArray.slice(a)
              b = search
             console.log(search)
           }
           else {
              search = b +'+'+ messaggioArray.slice(a)
              b = search
             console.log(search)
           }
       }
    }
     
   }
  });

//login al bot, da mettere alla fine
client.login(process.env.TOKEN)

