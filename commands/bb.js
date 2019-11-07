const moment = require("moment");
let bb = [];
moment.locale('fr');
moment().format('LLLL');

exports.run = (client, message, args) => {
	for(let key in bb){
		if(moment(bb[key]).isBefore(moment()))
			bb.slice(key, 1);
	}
	if(args[0]){
		// args.forEach(arg => {});
		if(args[0] == '24' || args[0] == '24h'){
			// message.author ? message.author : args[1]
			bb[args[1]] = moment().add(1, 'days');
		} else if(args[0] == '3' || args[0] ==  '3j') {
			bb[args[1]] = moment().add(3, 'days');
		} else if(args[0] == '7' || args[0] == '7j'){
			bb[args[1]] = moment().add(7, 'days');
		} else if(args[0] == '14' || args[0] == '14j'){
			bb[args[1]] = moment().add(14, 'days');
		}
	} else {
		let res = "";
		for(let key in bb){
			res += key + " | " + moment(bb[key]).format('Do MMMM HH:mm:ss');
			res += "\n";
			// console.log(key, moment(bb[key]).format('Do MMMM HH:mm:ss'));
		}
		message.channel.send(res);
	}
}