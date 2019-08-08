const Sequelize = require('sequelize');

exports.run = (client, message, args) => {
	if(args[0]){
		let joke = client.sql.define('joke', {
			joke: {
				type: Sequelize.STRING
			}
		},
		{
			freezeTableName: true
		});
	
		joke.create({ joke: args[0]})
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