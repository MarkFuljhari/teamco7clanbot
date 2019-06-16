const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!"

client.on('ready', () => {
  console.log('Clan Robot is ready to work!');
  console.log(`Robot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
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

  // WEED CMD
  if (msg.content.startsWith(prefix + 'weed')){
  return msg.channel.send("**Smoking!**").then(async msg => {
    setTimeout(() => {
        msg.edit('🚬');
    }, 500);
    setTimeout(() => {
        msg.edit('🚬 ☁ ');
    }, 700);
    setTimeout(() => {
        msg.edit('🚬 ☁☁ ');
    }, 900);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁ ');
    }, 1000);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁');
    }, 1100);
    setTimeout(() => {
        msg.edit('🚬 ☁☁');
    }, 1200);
    setTimeout(() => {
        msg.edit('🚬 ☁');
    }, 1300);
    setTimeout(() => {
        msg.edit(`**Finished smoking!**`);
    }, 1500);
    setTimeout(() => {
        msg.delete(`**Finished Smoking!**`);
    }, 6000);
  });
}
 
  // DOG CMD
if (msg.content.startsWith(prefix +'dog')){
  let {
    body
} = await superagent
    .get(`https://random.dog/woof.json`);
const dogembed = new Discord.RichEmbed()
    .setTitle("Aww... Doggie!")
    .setColor("RANDOM")
    .setImage(body.url)
msg.channel.send(dogembed);
}
 
// CAT CMD
if (msg.content.startsWith(prefix + 'cat')){
  let {
    body
} = await superagent
    .get(`http://aws.random.cat/meow`);
const catembed = new Discord.RichEmbed()
    .setTitle('Aww... Kitty!')
    .setColor("RANDOM")
    .setImage(body.file)
msg.channel.send(catembed);
}
 
// MEME CMD
if (msg.content.startsWith(prefix + 'meme')){
    let {
        body
    } = await superagent
        .get(`https://api-to.get-a.life/meme`);
    const memembed = new Discord.RichEmbed()
        .setTitle("Life is a meme !")
        .setColor("RANDOM")
        .setImage(body.url)
    msg.channel.send(memembed);
}
  
  //// INFORMATION SECTION ////
  
  // SERVERINFO CMD (EMBED)
if (msg.content.startsWith(prefix + 'server')){
  let online = msg.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = msg.guild.createdAt.getDate()
  let month = 1 + msg.guild.createdAt.getMonth()
  let year = msg.guild.createdAt.getFullYear()
   let sicon = msg.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(msg.guild.name, sicon)
   .setFooter(`Server Created  ${day}.${month}.${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("ID", msg.guild.id, true)
   .addField("Name", msg.guild.name, true)
   .addField("Owner", msg.guild.owner.user.tag, true)
   .addField("Region", msg.guild.region, true)
   .addField("Channels", msg.guild.channels.size, true)
   .addField("Members", msg.guild.memberCount, true)
   .addField("Humans", msg.guild.memberCount - msg.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", msg.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roles", msg.guild.roles.size, true);
   msg.channel.send(serverembed);
}

});
client.login(process.env.BOT_TOKEN);
