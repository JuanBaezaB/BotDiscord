import { Client } from "discord.js";
import { onInteraction } from "../Events/onInteraction";
import { onReady } from "../Events/onReady";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        console.log(`${client.user.username} is online`);

        client.user.setPresence({
            activities: [{ name: 'con tus sentimientos.' }],
            status: 'online',
        });

        // await onReady(client)
    });

    // client.on(
    //     "interactionCreate",
    //     async (interaction) => await onInteraction(interaction)
    // );
};