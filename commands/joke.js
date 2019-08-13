const axios = require('axios');
const Sequelize = require('sequelize');

exports.run = (client, message, args) => {
	// axios.get('https://blague.xyz/joke/random')
	// 	.then(response => {
	// 		message.channel.send(response.data.joke);
	// 	})
	// 	.catch(error => {
	// 		message.reply("Y'a eu un problème, si ça bug trop contact Ricky hehe");
	// 	});

	let joke = client.sql.define('joke',
		{
			joke: {
				type: Sequelize.STRING
			}
		},
		{
			timestamps: false,
			tableName: 'jokes'
		}
	);
	
	joke.findAll({order: Sequelize.literal('rand()'), limit: 1})
	.then(res => {
		res.forEach(re => {
			message.channel.send(re.joke);
		});
	})
	.catch(err => {
		console.error(err);
	})
}