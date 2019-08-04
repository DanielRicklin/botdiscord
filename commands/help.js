exports.run = (client, message, args) => {
    message.channel.send({embed: {
		color: 3447003,
		author: {
		  name: client.user.username,
		  icon_url: client.user.avatarURL
		},
		title: "voilà toute les commandes possible et imaginable",
		fields: [{
			name: "!ping",
			value: "Bah juste coucou"
		  },
		  {
			name: "!play [lien youtube] [nom du channel vocal]",
			value: "Pour des vocaux en musique"
		  }
		],
		timestamp: new Date(),
		footer: {
		  icon_url: client.user.avatarURL,
		  text: "© Example"
		}
	  }
	});
}