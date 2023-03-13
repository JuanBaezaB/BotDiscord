import { Client } from "discord.js";

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
    });
};