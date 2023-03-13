export const validateEnv = () => {
    if (!process.env.TOKEN) {
        console.warn("Missing Discord bot token.");
        return false;
    }

    if (!process.env.YOUTUBE_API_KEY) {
        console.warn("Missing Youtube API KEY.");
        return false;
    }
    return true;
};