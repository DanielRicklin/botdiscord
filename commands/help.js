exports.run = (client, message, args) => {
	message.delete(0);
    message.channel.send({embed: {
		color: 3447003,
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		description: "Voilà toutes les commandes possibles et imaginables",
		fields: [
			{
				name: "__**Tout et n'importe quoi**__\n*!ping*",
				value: "Bah juste coucou\n"
			},
			{
				name: "*!mojito [liste de noms]*",
				value: "hehe que les R4 et les alcoolo ont le pouvoir de donner des mojitos"
			},
			{
				name: "*!vote [la question]*",
				value: "Bah faire un vote quoi, j'vais pas faire un dessin"
			},
			{
				name: "__**Musique**__\n*!play [lien youtube]*",
				value: "Pour des vocaux en musique"
			},
			{
				name: "*!leave*",
				value: "Pour kick le bot du channel vocal"
			},
			{
				name: "__**Monstre**__\n*!compo [nom du monstre]*",
				value: "Donne la/les compo(s) pour le monstre voulu"
			},
			{
				name: "*!liste*",
				value: "Donne la liste des monstres"
			},
			{
				name: "__**Blague**__\n*!joke*",
				value: "Avoir une blague spécial DBB"
			},
			{
				name: "*!postjoke [la blague: la réponse]*",
				value: "Enrichir la base de données de blagues"
			},
			{
				name: "__**Héros**__\n*!veilleur*",
				value: "Pour être notifié dès qu'il y a des veilleurs"
			},
			{
				name: "*!dragon*",
				value: "Pour être notifié dès qu'il y a des dragons"
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