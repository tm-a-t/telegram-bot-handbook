# How to Set Up a Telegram Bot with BotFather

You register and configure bots via [@BotFather](https://t.me/BotFather) — which itself is an official Telegram bot.

## Registration

Once you run BotFather, it will suggest you create a bot with the `/newbot` command.
You’ll choose its name and [username,](./usernames) and then the bot profile will be created.

You will obtain the bot token which looks like `1553279091:AAGLECcm23ihHRomX3PrKHc-IMQcIti6afA`.
The token is a key to control the bot.

![Example of creating a bot](/pictures/ru/botfather.png)

## Settings

In BotFather, you can edit bot settings with the `/mybots` command.
This is how you customize the bot profile and configure special features, such as
forbidding being added to groups.

You may register up to 20 bots.

### Customization { #customization }

You can open the profile of your bot and click "edit" to change its avatar, name, intro, and "about" text. 
By the way, this is rather a new feature: BotFather commands used to be the only way to change bot's profile settings.

Intro (aka description) is the text that users see before they start the dialog with the bot.
It may contain a picture, possibly a GIF.

::: tip
Spend some time to fill the bot profile: that will be helpful and convenient for users.
Add a profile picture to make the bot more distinguishable in the chat list. 
It may be a good idea to include your contacts in "About".
:::

::: info
In BotFather, you can also edit [command hints](../messages/commands)
or [inline mode placeholder.](../interaction/inline)
:::

### Transferring

If you need to transfer the ownership to another person, you can do it with BotFather itself.
This is often useful when you develop a bot todo.

For transferring, you must have 2FA enabled (for at least 7 days) and the recipient must have started 
a dialog with the bot.
