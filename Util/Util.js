require("dotenv").config();

exports.TOKEN = process.env.TOKEN;
exports.YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
exports.PREFIX = process.env.PREFIX || "!";
