const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!"

client.on('ready', () => {
  console.log('Robot is ready to operate!');
  console.log(`Robot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`!help | ${client.users.size} users`);
});

client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var argresult = args.join(' ');

    if(msg.author.bot) return; //This here means that if message was sent from the other bots EXEPT Akelli, our bot (Akelli) won't sent anything in the chat (thats why return there is e.g return, returns you to somewhere or something) this prevents bot-ception (when multiple bots were to use the same prefix).

  $heroku create --stack heroku-18
  $heroku stack:set heroku-18
  
  {
   "stack": "heroku-18"
}
  
 // HELP CMD (EMBED)
  if (msg.content.startsWith(prefix + 'help')) {
    msg.channel.send({embed:{
      "title": "",
      "description": "Hi! I'm TeamCo7Clan Bot!\nI am developed by TeamCo7Clan.\nI contain numerous commands.\n\nFor a list of commands send **!commands**\n\nJoin our Discord!\nhttps://discord.me/teamco7clan",
      "color": 3447003,
      "footer": {
      "text": "© Copyright TeamCo7Clan"
 
      },
      "author": {
      "name": "TeamCo7Clan Bot Introduction",
      "url": "https://thebestgameryt.github.io/AkelliBot/",
      "icon_url": "https://cdn.discordapp.com/avatars/481540507479048203/a4fb450ef67ebf9fb9bb3079a89278c6.png?size=2048"
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
        "icon_url": "https://cdn.discordapp.com/avatars/481540507479048203/a4fb450ef67ebf9fb9bb3079a89278c6.png?size=2048"
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
          "value": "!wave, !poke, !hi, !weed, !haveibeenpwned, !dog, !cat, !meme, !boob, !slots, !8ball",
          "inline": false
        },
        {
          "name": "» Staff Administration",
          "value": "!ban, !kick, !report, !poll, !purge, !mute, !warn, !setgame, !setprefix",
          "inline": false
        },
        {
          "name": "» Music",
          "value": "Music unavailable! Software Developer for music requested. Please apply!",
          "inline": false
        }
      ]
    }
  });
msg.reply('check your inbox for your commands!\nBot is still under development, not all commands shall work!\nJavascript Software Developer requested.');
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
        msg.delete(`**Finished smoking!**`);
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
  
  // SLOT MACHINE CMD
if (msg.content.startsWith(prefix + 'slots')){
  if (!msg.guild.member(client.user).hasPermission("SEND_MESSAGES")) return msg.author.send('I don\'t have permission to Send Messages. Please enable send messages for my role!');
 
    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = msg.author.displayName;
    let aicon = msg.author.displayAvatarURL;
 
    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        msg.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        msg.channel.send(embed);
    }
}
 
// 8BALL CMD
if (msg.content.startsWith(prefix + '8ball')){
  if (!args[2]) return msg.reply("please ask a full question!");
  let replies = ["Why ask me that? :laughing:","Yes, Certainly :8ball:", "No, Never :8ball:", "Please ask again :8ball:"]
  let result = Math.floor((Math.random() * replies.length));
 
  let question = args.slice().join(" ");
 
  let embedz = new Discord.RichEmbed()
      .setAuthor(msg.author.username + " asks: " + question)
      .setColor("#D3D3D3")
      .addField("Answer", "Asked by " + msg.author.tag + "\nAnswer: " + replies[result] + "")
 
  msg.channel.send(embedz)
}
  
       //// INFORMATION SECTION ////
 
     if (msg.content.startsWith(prefix + 'ping')) {
    //   const t = await msg.channel.send("Ping ?");  DON'T DELETE THIS
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
 
       // MYAVATAR CMD
       if (msg.content.startsWith(prefix + 'myavatar')){
        msg.member.send(msg.author.avatarURL);
        msg.reply('I will send you your profile picture!');
        }
 
       // AVATAR @USER CMD
       if (msg.content.startsWith(prefix + 'avatar')){
        let member = msg.mentions.members.first();
        msg.member.send(member.user.displayAvatarURL);
        msg.reply('user\'s profile picture sent to you!');
   }
  
      // SERVERINFO CMD (EMBED)
if (msg.content.startsWith(prefix + 'serverinfo')){
  let online = msg.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = msg.guild.createdAt.getDate()
  let month = 1 + msg.guild.createdAt.getMonth()
  let year = msg.guild.createdAt.getFullYear()
   let sicon = msg.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(msg.guild.name, sicon)
   .setFooter(`Server Created • ${day}.${month}.${year}`)
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
  
  //// STAFF ADMINISTRATION SECTION ////
  
  // KICK @USER <REASON> COMMAND:
if (msg.content.startsWith(prefix + 'kick')){
 const kicklog = msg.guild.channels.find(channel => channel.name === 'mod-logs');
 const mod = msg.author;
if(!msg.member.roles.some(r=>["Management","Staff"].includes(r.name)) )
 return msg.reply("you don\'t have permission to use that!");
 let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
     if(!user)
       return msg.reply("please mention a valid member of this server! ⚠️");
     if(!user.kickable)
       return msg.reply("unable to kick.\nIs this user a higher/the highest member?\nMake sure I have enough privileges.");
     let reason = args.slice(1).join(' ');
     if(!reason) reason = "No reason provided by executer.";
     await user.kick(reason)
       .catch(error => msg.reply(`Sorry ${msg.author} I couldn't kick because of : ${error}`));
        const kickembed = new Discord.RichEmbed()
        .setAuthor(' Action | Ban', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
        .addField('User', `<@${user.id}>`)
        .addField('Reason', `${reason}`)
        .addField('Moderator', `${mod}`)
        .setColor('#D9D900')
    kicklog.send(kickembed)
}
  
  // BAN @USER <REASON> COMMAND:
if (msg.content.startsWith(prefix + 'ban')) {
  const banlog = msg.guild.channels.find(channel => channel.name === 'mod-logs');
  const mod = msg.author;
  if(!msg.member.roles.some(r=>["Management","Staff"].includes(r.name)) )
  return msg.reply("you don\'t have permission to use that!");
  let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!user)
  return msg.reply("please mention a valid member of this server! ⚠️");
if(!user.bannable)
  return msg.reply("unable to ban.\nIs this user a higher/the highest member?\nMake sure I have enough privileges.");
 
let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided by executer.";
 
await user.ban(reason)
  .catch(error => msg.reply(`Sorry ${mod} I couldn't ban because of : ${error}`));
 const banembed = new Discord.RichEmbed()
           .setAuthor(' Action | Ban', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
           .addField('User', `<@${user.id}>`)
           .addField('Reason', `${reason}`)
           .addField('Moderator', `${mod}`)
           .setColor('#D9D900')
       banlog.send(banembed)
}
 
  // PURGE <AMMOUNT> COMMAND:
if (msg.content.startsWith(prefix + 'purge')){
    if (!msg.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return msg.channel.send(':no_entry `I do not have the correct permissions.`').catch(console.error);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");
    if (isNaN(args[1])) return msg.channel.send(':warning: `Supply a valid amount of messages to purge!`');
    if (args[1] > 100) return msg.channel.send(':warning: `Supply a number less than 100.`');
            msg.channel.bulkDelete(args[1]);
            var cleanEmbed = new Discord.RichEmbed()
            .setAuthor('Channel Cleaning Service')
            .setDescription(`Cleaned **${args[1]}** messages :white_check_mark:`)
            .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
            .setColor('#ffffff');
            msg.channel.send(cleanEmbed);
}
  
  // SET GAME ACTIVITY STATUS OF THE BOT MANUALLY (WITHOUT ENTERING SCRIPT/CODE)
// SETGAME <TEXT>
if (msg.content.startsWith(prefix + 'setgame')) {
  if(!msg.member.roles.some(r=>["Management","Staff"].includes(r.name)) )
  return msg.reply("you don't have sufficient access to execute this command! :warning: \n Requirement: Management or Staff.");
 
  let result = args.slice(1).join(' ');
 
  client.user.setActivity(result);
  msg.reply("command accepted! ✅\nGame activity status updated.");
  }
 
// PREFIX <PREFIX> COMMAND
if (msg.content.startsWith(prefix + 'setprefix')){
  if(!msg.member.roles.some(r=>["Management"].includes(r.name)) )
  return msg.reply("you don't have sufficient access to execute this command! :warning: \n Requirement: Management.");
 
  let result = args.slice(1).join(' ');
 
  client.user.setPrefix(result);
  msg.reply("command accepted! ✅\nPrefix has been updated.");
}

  // POLL COMMAND:
if (msg.content.startsWith(prefix + 'poll')){
  if(!msg.member.roles.some(r=>["Management","Staff"].includes(r.name)) )
  return msg.reply("you don't have sufficient access to execute this command! :warning: \nRequirement: Management or Staff.");
 
    if (!msg.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
        msg.channel.send('Invalid permissions.');
        return;
    }
 
    // (CHECK FOR INPUT)
    if (!args[0]) return msg.channel.send('Proper usage: a.<question>');
 
    // (CREATE EMBED)
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll started by ${msg.author.username}`);
 
    let msgSent = await msg.channel.send(embed)
        .then(function (msgSent) {
            msgSent.react("❎");
            msgSent.react("✅"); // You can only add two reacts
            msg.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}
  
});
client.login(process.env.BOT_TOKEN);
