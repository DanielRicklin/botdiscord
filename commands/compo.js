const fs = require('fs');

exports.run = (client, message, args) => {
	path = "images/" + args[0] + ".jpg";
	
	fs.access(path, fs.F_OK, (err) => {
		if (err) {
		  message.reply("Ce monstre n'existe pas, voilà la liste.");
		  message.channel.send('!liste');
		  return;
		}	
		message.channel.send("Voilà <@" + message.author.id + ">", {files: ["images/" + args[0] + ".jpg"]});
	});
}