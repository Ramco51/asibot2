exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send(`Şuanda müzik çalmıyor!`);
    
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Katılabileceğim bir ses kanalında değilsiniz!`);
    
    let userCount = message.member.voiceChannel.members.size;
    
    let required = Math.ceil(userCount/2);
    
    if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
    
    if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Üzgünüm, atlamak için oy verdin. ${fetched.queue[0].voteSkips.length}/${required} gereklidir.`);
    
    fetched.queue[0].voteSkips.push(message.member.id);
    
    ops.active.set(message.guild.id, fetched);
    
    if(fetched.queue[0].voteSkips.length >= required){

        message.channel.send(`:fast_forward: Sıradaki şarkıya geçildi!`);

        return fetched.dispatcher.emit(`end`);
    
    }

    message.channel.send(`Oylama Başladı! **${fetched.queue[0].voteSkips.length}/${required}** gerklidir.`);

}