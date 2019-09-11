exports.run = (client, message, args) => {
	message.delete(0);
	const emo = client.emojis.get("529808201349201931");
    message.channel.send({embed: {
		color: 3447003,
		description: `Si vous voulez le rôle "veilleur/dragon" reagissez au message avec l'emoji ${emo}`,
		timestamp: new Date(),
		footer: {
			icon_url: client.user.avatarURL,
		  	text: "© DBB"
		}
	  }
	})
		.then(message => {
            message.react("529808201349201931");

            client.on('messageReactionAdd', (reaction, user) => {
                if(reaction.emoji.id === "529808201349201931" && user.id !== client.user.id) {
                    let role = message.guild.roles.find(r => r.name === "veilleur/dragon");
					reaction.message.guild.member(user).addRole(role);
				}
			})
			client.on('messageReactionRemove', (reaction, user) => {
                if(reaction.emoji.id === "529808201349201931" && user.id !== client.user.id) {
                    let role = message.guild.roles.find(r => r.name === "veilleur/dragon");
					reaction.message.guild.member(user).removeRole(role);
				}
			})
		})
		.catch(error => {
			console.log('error');
		});
}