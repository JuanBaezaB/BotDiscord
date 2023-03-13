import { config } from 'dotenv';
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js'
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

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
interactionCreate(client);

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

client.login(process.env.TOKEN);