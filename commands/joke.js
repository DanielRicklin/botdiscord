const axios = require('axios');

exports.run = (client, message, args) => {
	axios.get('https://blague.xyz/joke/random')
		.then(response => {
			message.channel.send(response.data.joke);
		})
		.catch(error => {
			message.reply("Y'a eu un problème, si ça bug trop contact Ricky hehe");
		});

		/*User.findOne().then(function (user) {
			console.log(user.get('firstName'));
		});*/
}