const Discord = require("discord.js");

exports.run = async (client, message, args) => {
        
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("Voc� n�o tem permiss�o suficiente para poder apagar mensagens!")
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)

        return message.reply(" voc� tem que me fornecer um n�mero entre 2 e 100 equivalente ao n�mero de mensagens a serem exclu�das!")
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`ERROR <:error:513734399762628609> **${error}**`))
  
}

exports.help = {
	name: "clear"
}