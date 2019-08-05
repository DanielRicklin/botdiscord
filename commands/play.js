const YoutubeStream = require('ytdl-core');

function Play(connection, message){
	let server = servers[message.guild.id];
	console.log(server.queue[0]);
	server.dipatcher = connection.playStream(YoutubeStream(server.queue[0], {filter: "audioonly"}));
	server.queue.shift();
	server.dipatcher.on("end", function(){
		if (server.queue[0])
			Play(connection, message);
		else
			connection.disconnect();
	})
}

exports.run = (client, message, args) => {
	// let voiceChannel = message.guild.channels.find(channel => channel.name === args[1]);
	if (message.member.voiceChannel){
		if (!message.guild.voiceConnection){
			if (!servers[message.guild.id])
				servers[message.guild.id] = {queue: []};
			message.member.voiceChannel
				.join()
				.then((connection) => {
					let server = servers[message.guild.id];
					message.reply("Successfully joined !");
					server.queue.push(args[0]);
					Play(connection, message);
					// let stream = YoutubeStream(args[0], {filter: 'audioonly'});
					// stream.on('error', function () {
					// 	message.reply("Je n'ai pas réussi à lire cette vidéo :(");
					// 	connection.disconnect();
					// })
					// connection
					// 	.playStream(stream)
					// 	.on('end', function () {
					// 		connection.disconnect();
					// 		message.reply("Fini bye bye");
					// 	})
				});
		}
		else
			message.reply("Connecte toi à un channel vocal pour faire ça !");
	}		
}