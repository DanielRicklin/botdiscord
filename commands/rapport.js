exports.run = async (client, message, args) => {

    const Rapport = require('../models/Rapport')

    // console.log(args.join(' '))

    const rapport = Rapport.find({ name: { $regex: '.*' + args.join(' ') + '.*' } }, function (err, rp) {
        rp.forEach(img => {
            message.channel.send(img.url)
        });
    })

}
