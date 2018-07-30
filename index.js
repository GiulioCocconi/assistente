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

     var messaggioArray = message.content.split(' ');

     var comando = messaggioArray[0];

     var arg = messaggioArray.slice(1)

     

     //dado

     if (comando === prefix + 'dado') {
       let dado = Math.floor(Math.random() * 6) + 1; //valore del dado
       let dadoImage = 'http://ilserverdiminecraft.altervista.org/Server/Bot/Comandi/Dadi/' + dado + '.png'  //url immagine dado
       let messaggio = 'Ho tirato il dado ed è uscito questo numero:' 
       message.reply(messaggio + ' ' + dado, {file: dadoImage});
     }

     //wolfram API

     if (comando === prefix +  'wolfram') {

       var search

       var b 

       var a

       for (a=1; messaggioArray.slice(a) = ''; a++){


           if (a=1){

              search = messaggioArray.slice(a)

              b = search

           }


           else {

              search = b +'+'+ messaggioArray.slice(a)

              b = search

           }

       }

       var wolframLink = 'http://api.wolframalpha.com/v1/simple?i=' + search + '&appid=' + process.env.APPID_WOLFRAM + '&background=282b30&foreground=white'
       message.reply('Ho cercato quello che mi hai chiesto su Wolfram Alpha: /n', {file: wolframLink});



    }

     

   }

  });

