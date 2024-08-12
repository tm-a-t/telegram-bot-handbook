# How to Set Up a Telegram Bot with BotFather

Bots are registered and configured using [@BotFather](https://t.me/BotFather).

## Registration

Once you open BotFather, it will suggest you create a bot with the `/newbot` command.
You will choose bot name and [username](./usernames) and then the bot profile will be created.

You will obtain the bot token which looks like `1553279091:AAGLECcm23ihHRomX3PrKHc-IMQcIti6afA`.
The token is a key to control the bot.

![Example of creating a bot](/pictures/ru/botfather.png)

## Settings

In [@BotFather](https://t.me/BotFather), you can edit bot settings with the `/mybots` command.

This is how you customize the bot profile and configure special features, such as
forbidding being added to groups.

You may register up to 20 bots.

### Customization { #customization }

You can open a profile of a bot you own and click "edit" to change its avatar, name, intro, and "about" text. 
This is rather a new feature: BotFather commands used to be the only way to change bot's profile settings.

Intro (or description) is the text that users will see in before starting the dialog with the bot.
It may contain a picture, possibly a GIF.

::: tip
Spend some time to fill the bot profile: that will be helpful and convenient for users.
Add a profile picture to make the bot more distinguishable in the chat list. 
It may be a good idea to include your contacts in "About".
:::

::: info
In BotFather, you can also edit [command hints](../messages/commands)
or [inline mode placeholder](../interaction/inline).
:::

### Transferring

In BotFather's bot settings you can transfer the ownership to another person. 
For that, you must have 2FA enabled (for at least 7 days.) The other person must have started 
a dialog with the bot.
