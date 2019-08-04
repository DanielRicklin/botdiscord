const Discord = require('discord.js');
const cron = require("node-cron");
const fs = require("fs");
const YoutubeStream = require('ytdl-core');
const client = new Discord.Client();
// require('dotenv').config();


client.on("ready", message => {
	// console.log("hello!");
	// cron.schedule('29 23 * * *', () => {
	// setInterval(() => {
	// 	let date = Date.now();
	// 	// const channel = client.channels.find('name', 'flood');
	// 	// channel.send("@everyone C'est l'heure de l'apérooo !!");
	// }, 600000); //86400000
	// });
});

client.config = require("./config/config.json");
client.commands = require("./config/commands.json");

client.on("message", message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(client.config.prefix)) return;
	

    let command = message.content.split(" ")[0];
    command = command.slice(client.config.prefix.length);
    let args = message.content.split(" ").slice(1);

    if (client.commands.indexOf(command) == -1) {
        return;
    }

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

// let scheduledMessage = new cron.CronJob('00 49 22 * * *', () => {
// 	// This runs every day at 10:30:00, you can do anything you want
// 	const channel = client.channels.find('name', 'flood');
// 	channel.send("@everyone C'est l'heure de l'apéro !!");
//   });
  
// // When you want to start it, use:
// scheduledMessage.start()

client.login(client.config.token);