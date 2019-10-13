exports.run = (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send(`Şuanda müzik çalmıyor!`);

    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Katılabileceğim bir ses kanalında değilsiniz!`);

    if(fetched.dispatcher.paused) return message.channel.send(`Müzik zaten duraklatılmış.`);

    fetched.dispatcher.pause();

    message.channel.send(`Müzik duraklatıldı. :pause_button: **${fetched.queue[0].songTitle}**`);

}