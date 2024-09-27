# How Telegram Bots Can Be Useful in Channels

Bots can participate in channels only as admins.
Admin rights allow bots sending and editing posts, renaming channels, and so on.

This makes bots helpful for channel authors.

## Admin rights

Just like in groups, channel admins may select bot admin rights where the default options can be configured in BotFather. 

## Adding buttons to posts

One use case for bots in channels is adding buttons: likes, links, and other.
This was especially popular before message reactions were introduced in Telegram.

Such features work with use of the "Edit messages of others" admin right: a bot may add buttons when editing messages. 
Here is an example:

![Post with buttons](/pictures/ru/channel-buttons.png)

::: tabs key:libraries
== Folds
```python
from folds import Message

...

@bot.channel_message
async def _(message: Message):
    await message.edit(buttons=)
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

## Paid posts

[//]: # (todo)
