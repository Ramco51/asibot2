exports.run = async (client, message, args, ops) => {

let fetched = ops.active.get(message.guild.id);

if(!fetched) return message.channel.send(`Şuanda müzik çalmıyor!`);

let queue = fetched.queue;
let nowPlaying = queue[0];

let resp = `__**Şuanda Çalan**__\n**${nowPlaying.songTitle}** -- **Ekleyen:** *${nowPlaying.requester}*\n\n__**Sıra**__\n`;

for(var i = 1; i < queue.length; i++){
    resp += `**${i}.** **${queue[i].songTitle}** -- **Ekleyen:** *${queue[i].requester}*\n`;
}

message.channel.send(resp);


}