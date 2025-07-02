# Developing Telegram Bots for Groups

Group bots are powerful. 
They provide features in groups — the space where people talk to each other.
There are a lot of details to consider though.

## Joining groups

Users can add bots to groups, but bots cannot join groups on their own. 
The bot's developer can forbid adding to groups [using BotFather settings.](../dev/botfather)

In public groups (those with usernames), bots can only be added by administrators. 
Group admins can grant the bot permissions for deleting group members or performing other administrative actions.

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

Group messages are visible to all members. A bot cannot send a message that only one person in the group can see.
For example, when a bot greets new members, all existing members will also receive this greeting message.

To maintain a clean chat environment, the bot can automatically delete auxiliary messages after a certain period.
Here is an example of deleting greeting messages after 30 seconds (unless the program is interrupted):

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

Note that if your bot needs to send personal messages to users, [join requests](../interaction/join-requests) may be useful to get PM permission.

## Privacy mode and visible messages { #privacy }

Many bots are designed to react only [to commands](../messages/commands.md).
For this reason, Telegram protects group privacy by default and doesn't notify bots about non-command messages.

If you want your bot to see all chat messages, you need to disable the privacy mode.

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
After disabling the privacy mode, you need to remove the bot from the group and add it back 
for the changes to take effect.
:::

Mobile and desktop Telegram apps indicate whether the privacy mode is on in group member lists:

![Пример бота](/pictures/ru/privacy.png){ style="margin: 0 auto" }

::: info Force reply {#force-reply}
If a bot with privacy mode enabled asks a question in a group, the user's response must be a reply 
for the bot to see it.

To make replying easier, a bot can send a "force reply" message which automatically initiates 
the reply interface for the user.

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

Getting the sender's name:

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
