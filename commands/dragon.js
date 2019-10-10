exports.run = (client, message, args) => {
	let role = message.guild.roles.find(r => r.name === "dragon");
	message.member.addRole(role.id);
}