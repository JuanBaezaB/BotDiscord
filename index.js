
const { Cipher } = require('crypto');
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { type } = require('os');
const { TOKEN, PREFIX } = require('./Util/Util');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildEmojisAndStickers
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction,
    Partials.GuildMember,
    Partials.User
  ]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
    activities: [{ name: 'Grabando Onlyfans' }],
    status: 'online',
  });

  // client.user.setPresence({
  //   activities: [{ name: `discord.js v14`, type: ActivityType.Watching }],
  //   status: 'dnd',
  // });

  client.channels.cache.get('1062216237020610662').send('Estoy Prendido')
})


client.on("warn", (info) => console.log(info));
client.on("error", console.error);


client.on('messageCreate', (message) => {
  console.log(message.content);
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }


});


client.commands = new Collection();

client.login(TOKEN);
client.prefix = PREFIX;