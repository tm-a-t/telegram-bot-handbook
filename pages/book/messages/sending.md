# How Telegram Bots Send, Edit, and Forward Messages

This page collects some tips about what bots can and cannot do with Telegram messages.
In short, they can send, edit, and delete messages just like users, but all actions have some corner cases. 
For example, you may encounter errors when you try to send a voice message to a premium user or add a picture 
to a message that was already sent.

## Sending messages

Bots can send and receive messages just like users. Those can be either just text messages or messages with media: 
pictures, videos, files, polls, voice messages, stickers, and so on.

Unlike users, bots may also add [buttons](../messages/buttons) to its messages.

### Examples

::: tabs key:libraries
== Telethon & Folds
One of many ways to send a message with a file:

```python
await client.send_message(
    chat_id,
    'Hello World', 
    file='path.txt'
)
```
== Other libraries
<HelpNeeded/>
:::

### When is it forbidden to send messages?

A bot may not send messages to a user who [blocked it.](../chats/pm#block)
A bot may not send messages in a channel or group where the bot is not a member or the admins have restricted sending messages.

Premium users can forbid sending voice messages to them (including those round videos.)

::: tabs key:libraries
== Telethon & Folds
```python
from telethon.errors import UserIsBlockedError

...

try:
    await client.send_message('')
except UserIsBlockedError:
    print('Bad :(')    
```
== Other libraries
<HelpNeeded/>
:::

### Why are albums so strange?

An album is multiple messages with pictures which are displayed like one message in Telegram apps.

### What are the file limits? { #file-limits }

Telegram allows sharing files up to 4 GB; however, Bot API has more strict limits. Through Bot API, a bot can download 
files up to 20 MB and upload files up to 50 MB. If you use [a local Bot API server](../appendix/api-comparison) though, these limits extend up 
to 2 GB.

### How frequently can a bot send messages?

Telegram won't let you spam, of course. The following average limits are named:

- No more than a message per second in a chat.
- No more than 30 messages per second in all chats.
- No more than 20 messages per minute in a group.

There is no such option as sending messages to all users at once. If you want to broadcast some information among all 
bot users, you'll have to send messages gradually.

Note that the limits concerning more rare actions, such as editing or deleting messages, are more strict.

Developers of popular bots can contact the tech support and ask to increase the limits.

## Editing

Unlike users, when bot edits a message, the message does not get the "Edited" note.

### Examples

::: tabs key:libraries
== Telethon & Folds
== Other libraries
<HelpNeeded/>
:::

### How to edit media? { #edit-media }

While editing a message, one can edit its media as well as the text.
A picture, video, or file can be replaced with another picture, video, or file (music counts as files too.)
However, media can't be added to messages sent without media.

## Forwarding

When a user or a bot forwards a music file, it doesn't get the "Forwarded" label. Strange Telegram rules.

[//]: # (todo :shrug:)

It is not allowed to forward messages from groups and channels with the "protected content" setting turned on.

### Examples

::: tabs key:libraries
== Telethon & Folds
== Other libraries
<HelpNeeded/>
:::

## Interacting with messages

Bots cannot react to messages. They cannot vote in polls either; however, they can send all kinds of polls.

## Related links

- [Bot FAQ. Answer about limits](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this)
