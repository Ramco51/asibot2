exports.run = (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send(`Şuanda müzik çalmıyor!`);

    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Katılabileceğim bir ses kanalında değilsiniz!`);

    if(!fetched.dispatcher.paused) return message.channel.send(`Müzik duraklatılmamış.`);

    fetched.dispatcher.resume();

    message.channel.send(`Müzik devam ettirildi. :arrow_forward: **${fetched.queue[0].songTitle}**`);

}