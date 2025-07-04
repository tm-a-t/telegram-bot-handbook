# How Telegram Bots Send, Edit, and Forward Messages

This page provides tips about what bots can and cannot do with Telegram messages.
In short, bots can send, edit, and delete messages just like users, but there are some limitations and corner cases. 
For example, you may encounter errors when trying to send a voice message to a premium user or when attempting to add a picture 
to a message that was already sent without media.

## Sending messages

Bots can send and receive messages just like users. These messages can be simple text or include media such as 
pictures, videos, files, polls, voice messages, stickers, and more.

Unlike users, bots can also add [buttons](../messages/buttons) to their messages.

::: tabs key:libraries
== aiogram
```python
# Send a message
await bot.send_message(chat_id=chat_id, text='Hey there')

# Shortcut: send where the message came from
await message.answer('Hey there')

# Send a file
document = FSInputFile('path.txt')
await bot.send_document(
    chat_id=chat_id,
    document=document    
)
```
See [How to upload file?](https://docs.aiogram.dev/en/v3.20.0.post0/api/upload_file.html#sending-files)
== Telethon & Folds
```python
# Send a message
await client.send_message(chat_id, 'Hey there')

# Shortcut: send where the event came from
await event.respond('Hey there')

# Send a file
await client.send_message(
    chat_id,
    file='path.txt'
)
```
== Other libraries
<HelpNeeded/>
:::

### When is it forbidden to send messages?

A bot may not send messages to a user who [blocked it.](../chats/pm#block)
A bot may not send messages in a channel or group where the bot is not a member or where admins have restricted sending messages.

Premium users can restrict receiving voice messages (including round videos).

::: tabs key:libraries
== aiogram
```python
try:
    await client.send_message(chat_id, 'Hey there')
except TelegramForbiddenError:
    print('User blocked the bot, bot banned from chat, etc.')
```
== Telethon & Folds
```python
try:
    await client.send_message(...)
except UserIsBlockedError:
    print('User blocked the bot :(')
```
== Other libraries
<HelpNeeded/>
:::

### Why do albums behave strangely?

An album is a collection of multiple media messages (such as photos or videos) that are displayed as a single grouped message in Telegram apps.

### What are the file limits? { #file-limits }

Telegram allows sharing files up to 4 GB; however, Bot API has more strict limits. Through Bot API, a bot can download 
files up to 20 MB and upload files up to 50 MB. If you use [a local Bot API server](../appendix/api-comparison) though, these limits extend up 
to 2 GB.

### How frequently can a bot send messages?

Telegram won't let you spam, of course. The following average limits are named:

- No more than a message per second in a chat.
- No more than 30 messages per second in all chats.
- No more than 20 messages per minute in a group.

There is no built-in functionality to send messages to all users simultaneously. 
If you need to broadcast information to all bot users, 
you'll need to implement a system to send messages gradually.

Note that the limits for less common actions, such as editing or deleting messages, are more restrictive.

Developers of popular bots can contact Telegram support to request increased limits.

## Editing

Unlike users' edited messages, when a bot edits a message, the message does not get the "Edited" label.

::: tabs key:libraries
== aiogram
```python
from asyncio import sleep

...

my_message = await bot.send_message(chat_id, 'Loading...')
await sleep(10)
await my_message.edit_text('Loaded!')
```
== Telethon & Folds
```python
from asyncio import sleep

...

my_message = await client.send_message(chat_id, 'Loading...')
await sleep(10)
await my_message.edit('Loaded!')
```
== Other libraries
<HelpNeeded/>
:::

### How to edit media? { #edit-media }

While editing a message, one can edit its media as well as the text.
A picture, video, or file can be replaced with another picture, video, or file (music counts as files too.)
~~However, media can't be added to messages that were originally sent without media.~~
You can now add a media document to a text message.

## Forwarding

When a user or a bot forwards a music file, it doesn't receive the "Forwarded" label. Strange Telegram rules ¯\_(ツ)_/¯

It is not allowed to forward messages from groups and channels with the "protected content" setting turned on.

::: tabs key:libraries
== aiogram
```python
# With the 'Forwarded' label
await message.forward(chat_id)

# Without the 'Forwarded' label
await message.copy_to(chat_id)
```
== Telethon & Folds
```python
# With the 'Forwarded' label
await message.forward(chat_id)

# Without the 'Forwarded' label
await client.send_message(chat_id, message)
```
== Other libraries
<HelpNeeded/>
:::

## Interacting with messages

Bot cannot vote in polls either; however, they can send all kinds of polls.
They also can react to messages.

## Related links

- [Bot FAQ. Answer about limits](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this)
