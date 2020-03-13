exports.run = (client, message, args) => {
	message.delete(0);
	message.channel.send({
		embed: {
			color: 3447003,
			title: "Voilà toutes les commandes possibles et imaginables",
			author: {
				name: client.user.username,
				icon_url: client.user.avatarURL
			},
			// description: "Voilà toutes les commandes possibles et imaginables",
			fields: [
				{
					name: "*!!ping*",
					value: "Bah juste coucou\n"
				},
				{
					name: "*!!mojito [liste de noms]*",
					value: "Tournée pour tous"
				},
				{
					name: "*!!vote [la question]*",
					value: "Bah faire un vote quoi, j'vais pas faire un dessin"
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: false,
				},
				{
					name: "__**Musique**__\n*!!play [lien youtube]*",
					value: "Pour des vocaux en musique"
				},
				{
					name: "*!!leave*",
					value: "Pour kick le bot du channel vocal"
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: false,
				},
				{
					name: "__**Monstre**__\n*!!compo [nom du monstre]*",
					value: "Donne la/les compo(s) pour le monstre voulu"
				},
				{
					name: "*!!liste*",
					value: "Donne la liste des monstres"
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: false,
				},
				{
					name: "__**Rapport de troupes**__\n*!!pr [nom du compte] [images à upload, pas des liens !!!]*",
					value: "Upload des images d'un compte, rapport de troupes, stuff...."
				},
				{
					name: "*!!rapport [nom du mec ou presque]*",
					value: "Donne tout les comptes et ses images avec le [nom du mec ou presque] fournie"
				}/*,
			{
				name: "__**Blague**__\n*!!joke*",
				value: "Avoir une blague spécial DBB"
			},
			{
				name: "*!!postjoke [la blague: la réponse]*",
				value: "Enrichir la base de données de blagues"
			},
			{
				name: "__**Héros**__\n*!!veilleur*",
				value: "Pour être notifié dès qu'il y a des veilleurs"
			},
			{
				name: "*!!dragon*",
				value: "Pour être notifié dès qu'il y a des dragons"
			}*/
			],
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: "©Ricky"
			}
		}
	});
}
