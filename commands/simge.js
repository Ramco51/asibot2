exports.run = (client, message, args, ops) => {

const simge = new Discord.RichEmbed()
.addField("Simge Kral", "Tersini idda eden köylüdür")
    
message.channel.sendEmbed(simge);
}