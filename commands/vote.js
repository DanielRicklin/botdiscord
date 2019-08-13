exports.run = async (client, message, args) => {
	if (!args[0]) return message.channel.send('Il me faut la question hehe');

	let pseudo = message.author.lastMessage.member.nickname ? message.author.lastMessage.member.nickname : message.author.username;

	let msg = await message.channel.send({embed: {
		color: 0xffffff,
		title: args.join(' '),
		footer: {
			text: `by ${pseudo}`
		}
	  }
	});

	await msg.react('✅');
	await msg.react('❌');

	message.delete(0);
}