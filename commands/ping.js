exports.run = (client, message, args) => {
    message.channel.send("Coucou " + message.member.displayName);
}