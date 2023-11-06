# How to set up a Telegram bot

## Registration

Use [@BotFather](https://t.me/BotFather) to register your bot.

It will suggest to create a bot with the `/new_bot` command.
You will choose bot's name and [username](./usernames) and then BotFather will create the bot's profile.

You will obtain the bot token: something like `1553279091:AAGLECcm23ihHRomX3PrKHc-IMQcIti6afA`.
The token is a key to control the bot.

![Example of creating a bot](/pictures/ru/botfather.png)

## Settings

In [@BotFather](https://t.me/BotFather), you can use the `/mybots` command to edit bot settings.

It is useful to customize the bot profile and control special features, such as
forbidding being added to groups.

One may register up to 20 bots.

### Customization { #customization }

Open the `/mybots` menu, choose the bot and click `Edit bot`. Here are the customizable settings:

![Avatar, name, description and about](/pictures/ru/customization.png){ style="max-width: 480px" }

Description is the text that users will see in before starting personal messages.
It may contain a picture, including a GIF.
{ style="margin-top: 32px" }

::: tip
Spend some time to fill the bot profile: that will be helpful and convenient for users.
Add a profile picture to make the bot more distinguishable in the chat list. 
It may be a good idea to include your contacts in "About".
:::

::: info
In the same menu, you can edit [command hints](../messages/commands)
or [inline mode placeholder](../interaction/inline).
:::

### Transferring

In BotFather's bot settings you can transfer the ownership to another person. 
For that, you must have 2FA enabled (for at least 7 days.) The other person should have started 
a dialog with the bot.
