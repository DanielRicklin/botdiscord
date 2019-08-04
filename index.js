const Discord = require('discord.js');
// const cron = require("node-cron");
const client = new Discord.Client();


client.on("ready", message => {
	console.log("Working");
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

client.login(client.config.token);