exports.run = (client, message, args, ops) => {


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":no_entry_sign: Kullanıcı bulunamadı!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Bu komutu kullanmaya yetkiniz **yok**!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Bu kullanıcıyı atamazsınız!");

    let kEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColot("#fc7735")
    .addField("Atılan Kullanıcı", `${kUser} with ID ${kUser.id}`)
    .addField("Atan", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Atıldığı Kanal", message.channel)
    .addField("Zaman", message.createdAt)
    .addField("Sebep", kReason);

    let kChannel = message.guild.channels.find(`name`, `genel`);
    if(!kChannel) return message.channel.send("Genel kanalı bulunamadı!"); 

    message.guild.member(kUser).kick(kReason);
    kChannel.send(kEmbed);


}