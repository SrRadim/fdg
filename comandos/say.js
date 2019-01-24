const Discord = require("discord.js")

module.exports.run = async (bot, message, args)  => {

    if (!args.slice(0).join(' ')) return message.reply('Diga o que você quer falar!')
    message.channel.send({embed:{
        'description':args.slice(0).join(' ')
        ,'color':message.member.highestRole.color,
    

    }})
    message.delete().catch();
}

module.exports.help = {
    name: "embed"
}

exports.help = {
	name: "say"
}