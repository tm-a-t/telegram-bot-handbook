# How to Set Up a Telegram Bot through BotFather

## Registration

You can register a bot using [@BotFather](https://t.me/BotFather).

Once you open BotFather, it will suggest you create a bot with the `/newbot` command.
You will choose bot name and [username](./usernames) and then the bot profile will be created.

You will obtain the bot token which looks like `1553279091:AAGLECcm23ihHRomX3PrKHc-IMQcIti6afA`.
The token is a key to control the bot.

![Example of creating a bot](/pictures/ru/botfather.png)

## Settings

In [@BotFather](https://t.me/BotFather), you can edit bot settings with the `/mybots` command.

This is how you customize the bot profile and configure special features, such as
forbidding being added to groups.

One may register up to 20 bots.

### Customization { #customization }

Open the `/mybots` menu, choose the bot and click `Edit bot`. Here are the settings that can be customized:

![Avatar, name, description and about](/pictures/ru/customization.png){ style="max-width: 480px" }

Description is the text that users will see in before starting the dialog with the bot.
It may contain a picture, possibly a GIF.
{ style="margin-top: 32px" }

::: tip
Spend some time to fill the bot profile: that will be helpful and convenient for users.
Add a profile picture to make the bot more distinguishable in the chat list. 
It may be a good idea to include your contacts in "About".
:::

::: info
You can edit [command hints](../messages/commands)
or [inline mode placeholder](../interaction/inline) from the same menu.
:::

### Transferring

In BotFather's bot settings you can transfer the ownership to another person. 
For that, you must have 2FA enabled (for at least 7 days.) The other person should have started 
a dialog with the bot.
