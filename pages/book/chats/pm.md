# How Personal Dialogs with Telegram Bots Work

You want your bot to answer users in personal dialogs.

Even if your bot is designed to work in groups or channels, it is a good idea to implement a greeting message in PM.
This way, the people who get interested in the bot and open its profile will not face the silence.
You can include an "Add to your group" link using [deep links for groups.](../interaction/links#deep-links-for-groups)


## Starting a personal dialog

A bot may not send messages to the user until the user started the dialog. 
Once the dialog is started, the bot can send messages at any time.
(Bots may not send messages to other bots.)

### The `/start` command

Here is how a personal dialog usually starts.

A user opens the bot with a link or by searching in the app, for example. 
Then they see [the intro text](../dev/botfather#customization) and the "Start" button.

When they click the button, the `/start` command is sent
which signals that the private chat has begun.
The bot should respond to the command with a greeting or usage instructions.

::: tabs key:libraries
== Folds
```python
@bot.private_commands.start
async def _():
    return 'Hi!'
```
== Telethon
```python
from telethon import events
from telethon.tl.custom import Message

...

@client.on(events.NewMessage(pattern='^/start( .+)?$'))
async def on_start(event: Message):
    await event.respond('Hi!')
```

The regexp in this example accepts `/start` with some text after it in case a deep link is used.
Deep links are explained [in the "Interaction" chapter.](../interaction/links)
== Other libraries
<HelpNeeded/>
:::

![](/pictures/ru/start.gif)

Just like any other chat, the dialog with the bot appears in user's recent chat list.

::: warning
The `/start` command does not imply that this the user has no dialog with the bot. 
It may be a good idea to make sure your bot doesn't get broken 
if the user sends `/start` when they already started the dialog.
:::

::: tip Extra input
You can use [deep links](../interaction/links) so that the `/start` message contains additional information.
:::

### Alternative ways to start a dialog

Sometimes a bot may send messages to a user if they haven't started the dialog explicitly. 
This happens in one of the following cases:

- The user [requested to join](../interaction/join-requests) a group or channel where the bot manages join requests.
- The user [authorized on a site with Telegram Login Widget](../interaction/login-widget) through the bot.

When this occurs, the Telegram app shows user explanation why the bot contacts them.

::: tabs key:libraries
== Folds
== Telethon
== Other libraries
<HelpNeeded/>
:::

## Stopping the dialog { #block }

A user can stop the dialog by blocking the bot. The bot will not be able to send personal messages to the user
until they unblock it.

## How to check if the bot may text to a user

Sometimes you may want to check if a user has blocked your bot. Here is a simple method:

Try showing a "Bot is typing..." status in the dialog. If Telegram servers returned an error, the bot may not
send messages to the user. This means that either the user has blocked the bot or the dialog has never started.

This action has very loose rate limits, so you can do it frequently.

::: tabs key:libraries
== Telethon & Folds
== Other libraries
<HelpNeeded/>
:::

