const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!"

//// CONSOLE REPLY & GAME ACTIVITY STATUS OF THE BOT: ////

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Success! I am online on DiscordApp.');
    console.log(`Bot has woken up! With ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);
    client.user.setActivity(`!help | ${client.users.size} users`, { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : `!help`}`))
    .catch(console.error);
  });

client.on('message', message => {
  
         //// INFORMATION COMMANDS: /////
  
  	// PING CMD
     if (msg.content.startsWith(prefix + 'ping')) {
    //   const t = await msg.channel.send("Ping ?");
    //   t.edit(`Pong! Latency is **${t.createdTimestamp - msg.createdTimestamp}**ms. API Latency is **${Math.round(client.ping)}**ms`); DON'T DELETE THIS EITHER
    let msgping1 = new Date();
    let botping = new Date() - msg.createdAt;
    let msgping2 = new Date() - msgping1;
 
    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('Discord API Ping: ', Math.floor(botping) + 'ms')
        .addField('Bot Ping: ', Math.floor(botping) + 'ms')
        .addField('Message Ping: ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`Requested by ${msg.author.tag}`);
 
   return msg.channel.send(pingembed);
   }

         //// ENTERTAINMENT COMMANDS: ////
 
// POKE CMD
if (msg.content.startsWith(prefix + 'poke')){
let member = msg.mentions.members.first();
msg.channel.send(`${member} got poked by ${msg.author}`);
}
 
// HI CMD
if (msg.content.startsWith(prefix + 'hi')){
msg.channel.send('Hey wassup?');
}
 
// HAND WAVE CMD
if (msg.content.startsWith(prefix + 'wave')){
let member = msg.mentions.members.first();
msg.channel.send(`${member} , ${msg.author} waved at you.`);
}

});
//
client.login(process.env.BOT_TOKEN);


