const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});


client.once('ready', () => {
    console.log('The bot is online!');
});

client.on('message', message => {
    console.log("Received message: ${message.content}");
    if (message.author.bot) return;
    if (message.content === '!hello') {
        message.channel.send('Hello, user!');
    }
});

// Log in using your bot's token
client.login('enter bot token here');
