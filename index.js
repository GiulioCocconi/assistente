//now
require('http').createServer().listen(3000)

//req
const Discord = require('discord.js')
const fs = require('fs') //parrot
const http = require('http') //parrot
const unzip = require('unzip') //parrot
const rimraf = require('rimraf') //parrot
const moment = require('moment') //parrot

//Discord Client
const client = new Discord.Client()

//parrot

function error (message) {
  console.log(message)
}

const helpEmbed = {
  'title': 'About & Commands',
  'description': ‘ASSISTENTE DEL SERVER MINECRAFT’,
  'color': 2456945,
  'timestamp': moment().format(),
  'footer': {
    'icon_url': 'http://cultofthepartyparrot.com/parrots/parrot.gif',
    'text': 'Mr.Parrot (partydiscord)'
  },

  'author': {
    'name': 'Mr.Parrot',
    'url': 'https://kizzaris.github.io/partydiscord/',
    'icon_url': 'http://cultofthepartyparrot.com/parrots/parrot.gif'
  },

  'fields': [
    {
      'name': 'start',
      'value': 'Starts the upload. (Must have manage emojis).',
      'inline': true
    },
    {
      'name': 'help',
      'value': 'This command right here.',
      'inline': true
    },
  ]
}

function unpack () {
  fs.createReadStream('parrot.zip').pipe(unzip.Extract({ path: './' }))
  fs.unlink('parrot.zip')
}

function download () {
  var file = fs.createWriteStream('./parrot.zip')
  http.get('http://cultofthepartyparrot.com/parrots-c56c7933c6.zip', function (response) {
    response.pipe(file)
    file.on('finish', function () {
      file.close(unpack)
    })
    file.on('error', function (err) { // Handle errors
      fs.unlink('parrot.zip') // Delete the file async. (But we don't check the result)
      return error(err.message)
    })
  })
}

client.on('ready', () => {
  console.log('I am ready!')
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setGame('Do +help for help!')
})

client.on('message', (message) => {
  if (message.author.bot) return
  if (message.content === '+start') {
    if (message.channel.type === 'text') {
      if (message.member.hasPermission('MANAGE_EMOJIS')) {
        uploadEmojis(message)
      }
    }
  } else if (message.content === '+help') {
    message.channel.send({ embed: helpEmbed })
  } else if (message.content === '+leave') {
    if (message.channel.type === 'text') {
      leaveServer(message)
    }
  } else if (message.content === '+stats') {
    message.channel.send(`${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  }
})

function leaveServer (message) {
  message.channel.send('<a:gothparrot:394867688289206272>')
  message.channel.guild.leave()
}

function emojiUpload(message, emojiName) {
  if (fs.existsSync('./parrots/' + emojiName + '.gif')) {
    message.channel.guild.createEmoji('./parrots/' + emojiName + '.gif', emojiName);
    message.channel.send(emojiName)
  } else if (fs.existsSync('./parrots/hd/' + emojiName + '.gif')) {
    message.channel.guild.createEmoji('./parrots/hd/' + emojiName + '.gif', emojiName);
    message.channel.send(emojiName)
  } else {
    console.log('ERROR: emojiUpload requested `' + emojiName + '` but it was not found.')
  }
}

function uploadEmojis(message) {
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`);
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241> Let's get this started!!!! <a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`);
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`);
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`);
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241> Uploading Emojis!!!!!!!!!! <a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`);
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`);
  emojiUpload(message, 'partyparrot')
  emojiUpload(message, 'middleparrot')
  emojiUpload(message, 'rightparrot')
  emojiUpload(message, 'congaparrot')
  emojiUpload(message, 'shuffleparrot')
  emojiUpload(message, 'fastparrot')
  emojiUpload(message, 'ultrafastparrot')
  emojiUpload(message, 'christmasparrot')
  emojiUpload(message, 'parrotwave1')
  emojiUpload(message, 'parrotwave2')
  emojiUpload(message, 'parrotwave3')
  emojiUpload(message, 'parrotwave4')
  emojiUpload(message, 'parrotwave5')
  emojiUpload(message, 'parrotwave6')
  emojiUpload(message, 'parrotwave7')
  emojiUpload(message, 'confusedparrot')
  emojiUpload(message, 'dealwithitparrot')
  emojiUpload(message, 'gothparrot')
  emojiUpload(message, 'loveparrot')
  emojiUpload(message, 'parrotcop')
  emojiUpload(message, 'explodyparrot')
  emojiUpload(message, 'boredparrot')
  emojiUpload(message, 'coffeeparrot')
  emojiUpload(message, 'fidgetparrot')
  emojiUpload(message, 'hamburgerparrot')
  emojiUpload(message, 'luckyparrot')
  emojiUpload(message, 'matrixparrot')
  emojiUpload(message, 'discoparrot')
  emojiUpload(message, 'angryparrot')
  emojiUpload(message, 'aussiecongaparrot')
  emojiUpload(message, 'aussieparrot')
  emojiUpload(message, 'aussiereversecongaparrot')
  emojiUpload(message, 'parrotdad')
  emojiUpload(message, 'rotatingparrot')
  emojiUpload(message, 'sadparrot')
  emojiUpload(message, 'stableparrot')
  emojiUpload(message, 'parrotsleep')
  emojiUpload(message, 'prideparrot')
  emojiUpload(message, 'sassyparrot')
  emojiUpload(message, 'slowparrot')
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`);
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241> It's finshed! Enjoy!!!!!!! <a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`);
  message.channel.send(`<a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241><a:ultrafastparrot:405266489218826241>`)
}

if (fs.existsSync(__dirname + '/parrots/')) {
  rimraf.sync(__dirname + '/parrots/')
  download()
  client.login(process.env.TOKEN)
} else {
  download()
  client.login(process.env.TOKEN)
}
//fine parrot
