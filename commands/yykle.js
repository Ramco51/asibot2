exports.run = (client, message, args, ops) =>
{
    
    if(message.author.id !== ops.ownerID) return message.channel.send("Üzgünüm, bu komutu sadece sahip kullanabilir!");
         
    

    try {
        delete require.cache[require.reslove(`./${args[0]}.js`)];
    }
    catch(e)
    {

        return message.channel.send(`Yeniden yüklendi: ${args[0]}`);

    }

    message.channel.send(`Başarılı yeniden yükleme: ${args[0]}`);

}
