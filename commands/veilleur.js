exports.run = (client, message, args) => {
	let role = message.guild.roles.find(r => r.name === "veilleur");
	message.member.addRole(role.id);
}