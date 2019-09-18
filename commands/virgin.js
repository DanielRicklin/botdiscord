exports.run = async (client, message, args) => {
	if((message.member.roles.find(r => r.id === "526423192873599022") || message.member.roles.find(r => r.id === "526422194339708958")) && args[0] != "<@607653983326306335>"){
		if(args[0]){
			args.forEach(arg => {
				message.channel.send(arg + ' Voilà un virgin mojito tout frais :tropical_drink:')
			});
		}
		else
			message.reply('Voilà un virgin mojito tout frais ' + emoji("622200544819150848") + emoji("622200544819150848"));
	} else {
		message.reply("Bois de l'eau");
	}
}