const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!"

client.on('ready', () => {
  console.log('I am ready!');
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`!help | ${client.users.size} servers`);
});

client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var argresult = args.join(' ');

    if(msg.author.bot) return; //This here means that if message was sent from the other bots EXEPT Akelli, our bot (Akelli) won't sent anything in the chat (thats why return there is e.g return, returns you to somewhere or something) this prevents bot-ception (when multiple bots were to use the same prefix).

  // HELP COMMAND (EMBED MESSAGE: https://embedbuilder.nadekobot.me/)
  	if (msg.content.startsWith(prefix + 'help')) {
      	msg.channel.send({embed: {
  "plainText": "",
  "title": "Commands",
  "color": 3447003,
  "footer": {
    "text": " Copyright @teamco7clan",
    "icon_url": "https://cdn.discordapp.com/avatars/481540507479048203/6aaed6c31705efac5eb4906a9605ac14.png?size=2048"
  },
  "thumbnail": "",
  "fields": [
    {
      "name": "Music",
      "value": "Developer required for JavaScript.",
      "inline": false
    },
    {
      "name": "Entertainmemt",
      "value": "Developing",
      "inline": false
    },
    {
      "name": "Information",
      "value": "Developing",
      "inline": false
    },
    {
      "name": "Staff Administration",
      "value": "Developing",
      "inline": false
    }
  ]
}
  });
}

 
});
client.login(process.env.BOT_TOKEN);
