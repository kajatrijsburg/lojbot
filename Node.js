var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "MjIxNjk4NzkyMDUzOTMyMDM0.CyIBBw.I7F-E5cPSVR1lH6XZsDWO1hT4T8",
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});