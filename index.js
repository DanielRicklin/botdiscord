const Discord = require('discord.js');
const Sequelize = require('sequelize');
const cron = require("node-cron");
const client = new Discord.Client();

client.config = require("./config/config.json");
client.commands = require("./config/commands.json");
client.sql = new Sequelize(
    'dbbot',
    client.config.user_BDD,
    client.config.password_BDD,
    {
        host: client.config.host_BDD,
        dialect: 'mysql'
    }
);

cron.schedule('00 20 * * *', () => {
    client.channels.get('526533937171005449').send('@here Aperoooo' + client.emojis.get("622200544819150848").toString());
});


client.on("ready", message => {
	console.log("Working");
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Lords Mobile',
            type: "PLAYING"
        }
    });
    // client.channels.get('621385021743169536').send('!vd'); //621385021743169536 //607912705088552962
    client.channels.get("623261101433552908").setName(`Users: ${client.guilds.reduce((a, g) => a +g.memberCount, 0)}`);
});


client.on("message", message => {
	if (!message.content.startsWith(client.config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(client.config.prefix.length);
    let args = message.content.split(" ").slice(1);

    if (client.commands.indexOf(command) == -1) return;

    try {
        client.channels.get("623261101433552908").setName(`Users: ${client.guilds.reduce((a, g) => a +g.memberCount, 0)}`);
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

// client.on("guildCreate", guild => {
//     client.channels.get("623261101433552908").setName(`Users: ${client.guilds.reduce((a, g) => a +g.memberCount, 0)}`);
// });

// client.on("guildDelete", guild => {
//     client.channels.get("623261101433552908").setName(`Users: ${client.guilds.reduce((a, g) => a +g.memberCount, 0)}`);
// });

client.login(client.config.token);