import { config } from 'dotenv';
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js'
import { validateEnv } from "./utils/validateEnv";

import ready from "./listeners/ready";

config();


(async () => {
    console.log("Bot is starting...");
    if (!validateEnv()) return;

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

    await client.login(process.env.TOKEN);
})();