exports.run = (client, message, args) => {
	// let voiceChannel = message.guild.channels.find(channel => channel.name === args[1]);
	if (message.guild.voiceConnection)
		message.guild.voiceConnection.disconnect();
	else
		message.reply("Je dois être connecté à un channel vocal pour me faire kick !!");
}