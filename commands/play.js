const YoutubeStream = require('ytdl-core');

exports.run = (client, message, args) => {
	let voiceChannel = message.guild.channels.find(args[1]);
    //   .filter(function (channel) { return channel.type === 'voice' })
	//   .first();
	voiceChannel
      .join()
      .then(function (connection) {
        let stream = YoutubeStream(args[0])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
}