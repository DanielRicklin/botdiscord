
exports.run = (client, message, args) => {
	function emoji(id){
		return client.emojis.get(id).toString();
	}
	// if(message.author.username === 'GrosStaff'){
	// 	message.channel.fetchMessages({ limit: 3 })
	// 		.then(messages => {
	// 			messages.forEach(msg => {
	// 				if(msg.author.id === '607653983326306335' && msg.mentions.users.first().id != '383747871104827393' && message.author.id != msg.mentions.users.first().id){
	// 					message.channel.send("<@" + msg.mentions.users.first().id + "> tu t'es fait piquer ton mojito par" + "<@" + message.author.id + ">");
	// 				}
	// 			});
	// 		})
	// 		.catch(console.error);
	// 	}
/*	if((message.member.roles.find(r => r.id === "526423192873599022") || message.member.roles.find(r => r.id === "526422194339708958") || message.member.roles.find(r => r.id === "625605665024638977")) && args[0] != "<@607653983326306335>"  && message.author.id !== "383747871104827393"){
*/		if(args[0]){
			args.forEach(arg => {
				message.channel.send(arg + ' Voilà un mojito tout frais ')
			});
		}
		else
			message.reply('Voilà un mojito tout frais ');
/*	} else {
		message.reply("Bois de l'eau");
	}
	if (args[0] == "<@607653983326306335>" && (message.member.roles.find(r => r.id === "526423192873599022") || message.member.roles.find(r => r.id === "526422194339708958"))){
		message.reply("Merci beaucoup, j'avais soif à force de parler");
	}
*/}
