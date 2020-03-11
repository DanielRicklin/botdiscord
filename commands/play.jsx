const YoutubeStream = require('ytdl-core');
const streamOptions = { seek: 0, volume: 0.05 };

exports.run = (client, message, args) => {
	message.member.voiceChannel
		.join()
		.then(function (connection) {
			let stream = YoutubeStream(args[0], {filter: "audioonly"})
			stream.on('error', function (e) {
				message.reply("Je n'ai pas réussi à lire cette vidéo :(" + e)
				connection.disconnect()
			});
			connection
				.playStream(stream, streamOptions)
				.on('end', function () {
					connection.disconnect()
				});
		});
}
