exports.run = (client, message, args) => {
    if(message.author.username === 'laguerriere(dbb)')
        message.channel.send("Coucou moi du futur");
    else
        message.channel.send("Coucou <@" + message.author.id + ">");
}