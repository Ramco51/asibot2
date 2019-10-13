exports.run = (client, message, args, ops) => {

    if(!message.member.voiceChannel) return message.channel.send(`Lütfen bir ses kanalına bağlanın!`);
    
    if(!message.guild.me.voiceChannel) return message.channel.send(`Bot bir ses kanalına bağlı değil!`);
    
    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(`Üzgünüm, bir ses kanalına bağlı değilsiniz.`);
    
    message.guild.me.voiceChannel.leave();
    
    message.channel.send(`**Kanaldan Ayrılındı!**`);
    
    
    
    }