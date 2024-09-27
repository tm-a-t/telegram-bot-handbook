# Developing Telegram Bots for Groups

Group bots are powerful. 
They provide features in groups — the space people talk to each other.
There is a lot of details to consider though.

## Joining groups

Users can add bots to groups, but bots cannot join groups by their own. 
The bot's developer can forbid adding to groups [using BotFather settings.](../dev/botfather)

In public groups, which means groups with usernames, bots can only be added by admins. 
Group admins can grant the bot the rights for deleting group members or other admin actions.

A group may contain up to 20 bots.

::: tabs key:libraries
== Folds
```python
@bot.added_to_group
async def _(chat: Chat):
    return 'Hello ' + chat.title
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

## Sending messages to group members

Some examples of sending messages:

::: tabs key:libraries
== Folds
```python
@bot.group_message
async def _(chat: Chat):
    return 'Hello ' + chat.title
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

Group messages are visible to all members. There is no way for a bot to show a message to one person only.
For example, if a bot greets new members, all members will receive the message.

To keep the chat clean, the bot can delete auxiliary messages in some time.
Here is an example of deleting greeting messages in 30 seconds (unless the program is interrupted):

::: tabs key:libraries
== Folds
```python
from asyncio import sleep

    answer = await message.respond(f'Welcome to the group, {user.first_name}')
    await sleep(30)
    await answer.delete()
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

Note that if your bot has to write personal messages to users, [join requests](../interaction/join-requests) may be useful to get PM permission.

## Privacy mode and visible messages { #privacy }

Many bots are designed to react only [to commands](../messages/commands.md).
This is why by default Telegram protects group privacy and doesn't notify bots about non-command messages.

In order to make your bot see all chat messages, you should turn off the privacy mode.

Privacy mode is a BotFather setting and it is activated by default. 
In this mode, the bot only gets updates about commands and other group messages that may address the bot. 
This includes:
- Commands
- Replies on bot messages, replies to replies and so on
- Messages [mentioning](../messages/markup#mention) the bot
- System messages

When the privacy mode is off, the bot can see all messages in groups except for ones from other bots.

Also, if a bot is a group admin, it sees all messages regardless of the privacy mode setting.

![A bot that doesn't see some messages](/pictures/ru/friedrich.png){ style="" }

::: tip Troubles turning off privacy mode?
When you turned off the privacy mode, you should delete the bot from the group and add it back 
in order to apply changes.
:::

Mobile and desktop Telegram apps indicate whether the privacy mode is on in group member lists:

![Пример бота](/pictures/ru/privacy.png){ style="margin: 0 auto" }

::: info Force reply {#force-reply}
If a bot has the privacy mode enabled and asks a group member a question, the user's answer clearly
should be a message reply so that the bot can see it.

Rather than ask the user to choose to "reply", a bot can send a "force reply" message which automatically makes
the user start replying.

However, I don't recommend using force reply. In my opinion, automatic replies only confuse users.
:::

## Admin rights

When a user promotes a bot to a group admin, they can select admin rights. There is a BotFather setting for specifying 
the admin rights suggested by default.

The right to remain anonymous, which allows users to send messages on behalf of the group, has no effect on bots.

![Choosing rights](/pictures/ru/admin-rights.png)

## Messages on behalf of groups and channels

Not only users can send messages in groups.
Your program should correctly handle messages sent by other entities:

- Messages from a linked channel in a discussion group (API treats them as forwarded)
- Messages from a group by anonymous group admins
- Messages from public channels by premium users

### Examples

Determining chat type (e.g. for storing in a database:)

::: tabs key:libraries
== Folds
```python
from folds import UseSender
from telethon.tl.types import Chat, Channel, User

...

@bot.group_message
async def _(sender: UseSender):
    if isinstance(sender, User):
        print('Message from user')
    if isinstance(sender, Chat):
        print('Message from group')
    if isinstance(sender, Channel):
        print('Message from channel or supergroup')
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

Getting sender's name:

::: tabs key:libraries
== Folds
```python
from folds import UseSender

...

@bot.group_commands.hello
async def _(sender: UseSender):
    name = sender.first_name or sender.title  # one of these is not None
    return f'Hello {name}'
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

## Related links

- [Telegram docs. Privacy mode](https://core.telegram.org/bots/features#privacy-mode)
