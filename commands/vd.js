exports.run = (client, message, args) => {
	// message.delete(0);
	message.channel.fetchMessages({ limit: 2 })
		.then(messages => {
			messages.forEach(msg => {
				msg.delete(0);
			})
		})
	const emo = client.emojis.get("622213672122712084");
    message.channel.send({embed: {
		color: 3447003,
		description: `Si vous voulez le rôle "veilleur/dragon" reagissez au message avec l'emoji ${emo}`
	  }
	})
		.then(message => {
            message.react("622213672122712084");

            client.on('messageReactionAdd', (reaction, user) => {
                if(reaction.emoji.id === "622213672122712084" && user.id !== client.user.id) {
                    let role = message.guild.roles.find(r => r.name === "veilleur/dragon");
					reaction.message.guild.member(user).addRole(role);
				}
			})
			client.on('messageReactionRemove', (reaction, user) => {
                if(reaction.emoji.id === "622213672122712084" && user.id !== client.user.id) {
                    let role = message.guild.roles.find(r => r.name === "veilleur/dragon");
					reaction.message.guild.member(user).removeRole(role);
				}
			})
		})
		.catch(error => {
			console.log('error');
		});
}