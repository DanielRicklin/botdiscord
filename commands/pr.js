exports.run = async (client, message, args) => {

    const Rapport = require('../models/Rapport')

    console.log(args.join(' '))

    if (message.attachments.size > 0) {
        await message.attachments.forEach(img => {
            try {
                const rapport = Rapport.create({ name: args.join(' '), url: img.url })
            } catch (e) {
                message.reply(e);
            }
        });
    }
}
