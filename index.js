
//req
const Discord = require('discord.js')
const fs = require('fs') //parrot
const http = require('http') //parrot
const unzip = require('unzip') //parrot
const rimraf = require('rimraf') //parrot
const moment = require('moment') //parrot

//Discord Client
const client = new Discord.Client()

function error (message) {
  console.log(message)
}

client.on('ready', () => {
  console.log('Il bot è pronto')
  client.user.setGame('gestire il server')
}

//login al bot, da mettere alla fine
  client.login(process.env.TOKEN)


