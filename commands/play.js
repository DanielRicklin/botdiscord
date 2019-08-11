const YoutubeStream = require('ytdl-core');

exports.run = (client, message, args) => {
	message.member.voiceChannel
		.join()
		.then(function (connection) {
			let stream = YoutubeStream(args[0], {filter: "audioonly"})
			stream.on('error', function () {
				message.reply("Je n'ai pas réussi à lire cette vidéo :(")
				connection.disconnect()
			});
			connection
				.playStream(stream, {seek: 0, volume: 0.2})
				.on('end', function () {
					connection.disconnect()
				});
		});
}