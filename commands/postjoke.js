const Sequelize = require('sequelize');

exports.run = (client, message, args) => {
	if(args[0]){
		let joke = client.sql.define('joke',
			{
				joke: {
					type: Sequelize.STRING
				},
				auteur: {
					type: Sequelize.STRING
				}
			},
			{
				tableName: 'jokes'
			}
		);
	
		joke.create({ joke: args.join(' '), auteur: message.author.id})
			.then(() => {
				message.reply("Normalement c'est enregistré 😂");
			})
			.catch((err) => {
				message.reply(err);
			});
	}
	else
		message.reply("Me faut une blague !");
}