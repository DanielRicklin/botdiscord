exports.run = (client, message, args) => {
    message.channel.send({embed: {
		color: 3447003,
		author: {
		  name: client.user.username,
		  icon_url: client.user.avatarURL
		},
		description: "Voilà toute les commandes possible et imaginable",
		fields: [{
			name: "!ping",
			value: "Bah juste coucou"
		  },
		  {
			name: "!play [lien youtube]",
			value: "Pour des vocaux en musique"
		  },
		  {
			name: "!leave",
			value: "Pour kick le bot du channel vocal"
		  },
		  {
			name: "!compo [nom du monstre]",
			value: "Donne la/les compo(s) pour le monstre voulu"
		  },
		  {
			name: "!liste",
			value: "Donne la liste des monstres"
		  }
		],
		timestamp: new Date(),
		footer: {
		  icon_url: client.user.avatarURL,
		  text: "© DBB"
		}
	  }
	});
}