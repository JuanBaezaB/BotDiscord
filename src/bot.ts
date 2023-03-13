import { config } from 'dotenv';
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js'
import ready from "./listeners/ready";

config();

console.log("Bot is starting...");

const client: Client = new Client({
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


ready(client);

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

client.login(process.env.TOKEN);