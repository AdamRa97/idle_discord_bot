# idle discord bot
Proof of Concept for an idle discord bot, currently this bot only responds to !hello and reads the message contents of all users

## Installation Instructions
```
npm install discord.js
npm install -g nodemon
```
If you are on a mac or linux you need to add sudo

`sudo npm install -g nodemon`

`npm install dotenv`

Once all the dependencies are installed, check your `package.json` and see if your `"main"` is pointing towards `src/index.js`

You need to also create your own Discord Bot so you can retrieve the token to put into the `.env` file to allow the bot to run.

You can do this by going to the [Discord Developer Portal](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications) and then "New Application"

When you are ready to invite the bot to your Discord Server, go to the URL Generator within OAuth2
![image](https://github.com/AdamRa97/idle_discord_bot/assets/50151203/92e72c32-5a57-4421-979b-f7f95a9e23f5)

and select the same options within this screenshot
![image](https://github.com/AdamRa97/idle_discord_bot/assets/50151203/18a54484-02c3-4381-a82c-5b5798c5af30)

Once that is done you can copy the link and paste it into your web address and proceed with the instructions given to you

You can now finally type in `nodemon` in the same project folder that you cloned this repo to and your bot should run!

## Current Commands
`!hello` - returns "Hello World!"
