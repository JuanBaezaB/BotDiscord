
const { Client, GatewayIntentBits, Partials } = require('discord.js');
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
  client.user.setActivity(`${PREFIX}help and ${PREFIX}play`, { type: "LISTENING" });

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
 


client.login(TOKEN);
client.prefix = PREFIX;