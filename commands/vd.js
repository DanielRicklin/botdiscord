exports.run = (client, message, args) => {
	// message.delete(0);
	message.channel.fetchMessages({ limit: 2 })
		.then(messages => {
			messages.forEach(msg => {
				msg.delete(0);
			})
		})
	const veilleur = client.emojis.get("622213672122712084");
	const dragon = client.emojis.get("622213718620766239");
    message.channel.send({embed: {
		color: 3447003,
		description: `__**Vous pouvez vous attribuer certains rôles vous même:**__ \n\n__Veilleur:__	${veilleur}\n__Dragon:__	${dragon}
		\n__**Vous pouvez aussi notifier les gens d'un veilleur ou d'un dragon:**__`
	  }
	})
		.then(message => {
            message.react("622213672122712084");
            message.react("622213718620766239");
            // message.react("🖖");
            // message.react("👊");

            client.on('messageReactionAdd', (reaction, user) => {
                if(reaction.emoji.id === "622213672122712084" && user.id !== client.user.id) {
                    let role = message.guild.roles.find(r => r.name === "veilleur");
					reaction.message.guild.member(user).addRole(role);
				}
                if(reaction.emoji.id === "622213718620766239" && user.id !== client.user.id) {
					let role = message.guild.roles.find(r => r.name === "dragon");
					reaction.message.guild.member(user).addRole(role);
				}
                // if(reaction.emoji.id === "🖖") {
				// 	client.channels.find(r => r.id === '526533937171005449').send('azrefsd');
				// }
                // if(reaction.emoji.id === "👊") {
				// 	client.channels.find(r => r.id === '526533937171005449').send('@dragon');
				// }
			})
			client.on('messageReactionRemove', (reaction, user) => {
                if(reaction.emoji.id === "622213672122712084" && user.id !== client.user.id) {
                    let role = message.guild.roles.find(r => r.name === "veilleur");
					reaction.message.guild.member(user).removeRole(role);
				}
                if(reaction.emoji.id === "622213718620766239" && user.id !== client.user.id) {
                    let role = message.guild.roles.find(r => r.name === "dragon");
					reaction.message.guild.member(user).removeRole(role);
				}
			})
		})
		.catch(error => {
			console.log('error');
		});
}