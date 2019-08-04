exports.run = (client, message, args) => {
	let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
	  .first();
	voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
}