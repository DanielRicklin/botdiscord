exports.run = (client, message, args) => {
	/*if(message.author.username === 'GrosStaff' || message.author.username === 'Braddock' || message.author.username === 'Ricky'){
		//.then(messages => console.log(`Received ${messages.size} messages`))
		message.channel.fetchMessages({ limit: 3 })
			.then(messages => {
				messages.forEach(msg => {
					if(msg.author.id === '607653983326306335')
						console.log(msg.mentions.users.id);
						//504689922397962250
				});
			})
			.catch(console.error);
		//message.channel.send(args[0] + ' Voilà un mojito tout frais :tropical_drink:')
	}*/
	if(message.member.roles.find(r => r.name === "Rang 4") && args[0] != "<@607653983326306335>"){
		if(args[0]){
			args.forEach(arg => {
				message.channel.send(arg + ' Voilà un mojito tout frais :tropical_drink:')
			});
		}
		else
			message.reply('Voilà un mojito tout frais :tropical_drink:'); //:champagne_glass::tumbler_glass::beer::cocktail::wine_glass:
	} else {
		message.reply('Pas pour toi !');
	}
	if (args[0] == "<@607653983326306335>" && (message.author.username === 'Jennifer' || message.author.username === 'laguerriere(dbb)' || message.author.username === 'Chri' || message.author.username === 'Ricky')){
		message.reply("Merci beaucoup, j'avais soif à force de parler");
	}
}