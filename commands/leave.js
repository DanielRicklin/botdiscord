exports.run = (client, message, args) => {
	// let voiceChannel = message.guild.channels.find(channel => channel.name === args[1]);
	if (message.guild.voiceConnection)
		message.guild.voiceConnection.disconnect();
	else
		message.reply("Connecte toi à un channel vocal pour faire ça !");
}