const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!"

client.on('ready', () => {
  console.log('I am ready!');
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`!help | ${client.users.size} users`);
});

client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var argresult = args.join(' ');

    if(msg.author.bot) return; //This here means that if message was sent from the other bots EXEPT Akelli, our bot (Akelli) won't sent anything in the chat (thats why return there is e.g return, returns you to somewhere or something) this prevents bot-ception (when multiple bots were to use the same prefix).

  
 // HELP CMD (EMBED)
  if (msg.content.startsWith(prefix + 'help')) {
    msg.channel.send({embed:{
      "title": "",
      "description": "Hi! I'm TeamCo7Bot!\nI am developed by TeamCo7Clan & @akellicompany.\I contain entertaining & reliable information commands.\n\nFor a list of commands send **!commands**\n\nJoin our Discord!\nhttps://discord.me/teamco7clan",
      "color": 3447003,
      "footer": {
      "text": "© Copyright TeamCo7Clan"
 
      },
      "author": {
      "name": "TeamCo7Clan Bot Introduction",
      "url": "https://thebestgameryt.github.io/AkelliBot/",
      "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
      }
      }
      });
      }
 
   // COMMANDS CMD (EMBED)
   if (msg.content.startsWith(prefix + 'commands')) {
    msg.member.send({embed:
      {
      "title": "Default prefix: !",
      "description": "Need help? Join our Discord server.",
      "author": {
        "name": "Commands",
        "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
      },
      "color": 553380,
      "footer": {
        "text": "© Copyright TeamCo7Clan, @teamco7clan"
      },
      "fields": [
        {
          "name": "» Information",
          "value": "!ping, !myavatar, !avatar, !stats, !serverinfo, !credits, !socialmedia, !invite",
          "inline": false
        },
        {
          "name": "» Entertainment",
          "value": "!poke, !hi, !weed, !haveibeenpwned, !dog, !cat, !meme, !boob, !slots, !8ball",
          "inline": false
        },
        {
          "name": "» Staff Administration",
          "value": "!ban, !kick, !report, !poll, !purge, !mute, !warn, !setgame, !setprefix",
          "inline": false
        },
        {
          "name": "» Music",
          "value": "Currently unavailable. Software Developer required!",
          "inline": false
        }
      ]
    }
  });
msg.reply('check your inbox for your commands!\nBot is still under development, not all commands shall work!');
   }
 

});
client.login(process.env.BOT_TOKEN);
