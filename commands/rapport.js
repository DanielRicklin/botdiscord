exports.run = async (client, message, args) => {

    const Rapport = require('../models/Rapport')

    const rapport = Rapport.find({ name: { $regex: '.*' + args.join(' ') + '.*' } }, function (err, rp) {
        message.channel.send(rp.name);
        rp.forEach(img => {
            message.channel.send(img.url)
        });
    })

}
