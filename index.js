const Discord = require("discord.js");
const ownerID ="467988314767753217";
//const bot = new Discord.Client();
const client = new Discord.Client();
const YTDL =require("ytdl-core");

const TOKEN = process.env.TOKEN;
const PREFIX = "."
const active = new Map();

//var bot = new Discord.Client();

var servers = {};




client.on("message", message => {

   
    let args = message.content.slice(PREFIX.length).trim().split(" ");
    
    
    let cmd = args.shift().toLocaleLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(PREFIX)) return;

    try{
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];
        let ops = {
            ownerID:ownerID,
            active: active
           
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);
    }
    catch(e){
        console.log(e.stack);
        
    }


    

});

client.on("message", function(message){

    if(message.content == "iyi geceler")
    {

        message.channel.sendMessage("Sanada iyi geceler :heart:" + message.author);

}

});


    client.on("message", function(message){

        if(message.content == "iyi geclr"){
    
            message.channel.sendMessage("Sanada iyi geceler :heart:" + message.author);
    
        }


});

client.on("message", function(message){

    if(message.content == "iyi gclr"){

        message.channel.sendMessage("Sanada iyi geceler :heart:" + message.author);

    }


});

client.on("message", function(message){

    if(message.content == "iyi gcler"){

        message.channel.sendMessage("Sanada iyi geceler :heart:" + message.author);

    }


});

client.on("ready", () => console.log("Hazır!"));



client.login(TOKEN);    

