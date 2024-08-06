# How Your Bot Uses Personal Messages and User Profiles

## How a personal dialog starts

A bot may send messages to the user only after they allowed it. Once the dialog is started, the bot can send messages
any time.

Bots may not send messages to other bots.

### 1. Starting a bot directly

Normally, PM start when the user opens the bot and clicks "Start".
The user can open the bot with a link or through the app search, for example. 
Then they see ["What this bot can do?" description](../dev/botfather#customization) and the "Start" button.
A click sends `/start` command.
The bot should reply on this command with a greeting or a usage instruction.

Just like any other chat, after a person started a dialog with a bot, it appears in their recent chat list.

![](/pictures/ru/start.gif)

::: warning
`/start` command doesn't imply that this the user has no dialog with the bot. It may be a good idea to make sure your
bot doesn't get broken when the user sends `/start` when they already started the dialog.
:::

::: tip
You can use [deep links](../interaction/links) so that the `/start` message contains additional information.
:::

### 2. Other ways to start a dialog

A bot may send messages to a user, if one of the following:

- The user [requested to join](../interaction/join-requests) a group or channel.
- The user [authorized on a site with Telegram Login Widget](../interaction/login-widget) through the bot.

User sees the reason in the beginning of the dialog.

## Stopping the dialog { #block }

A user can stop the dialog by blocking the bot. The bot will not be able to send personal messages to the user
until they unblock it.

::: tip Checking if the bot may text to a user
Try showing a "Bot is typing..." status in the dialog. If Telegram servers returned an error, the bot may not
send messages to the user.

This means the user has blocked the bot or the dialog has never started.
:::

## User profile

While keeping user profile data, keep in mind that users may have no username or no last name. In addition, all such
profile data except for [user ID](../chats/id) can change over time.

## User languages

Bots know the language that a person has set in their Telegram app. 
This allows your bot to speak user's native language.

Still, user language is not always included in the updates. Therefore, if your bot adjusts to user languages,
Telegram recommends to use the last known language in cases the update misses this information.

## Seen users

Bot must have seen a user to make actions related to this user (mention them, etc.) The bot sees a user, for example,
when the bot receives a message from the user or fetches them by the username.

Technically speaking, this means API requests must include not only [user ID](./id) but also a relevant 
access hash. API gives access hashes together with other user info in updates. Access hashes are cached by Bot API
and good Telegram API libraries, so you should not worry about it.
