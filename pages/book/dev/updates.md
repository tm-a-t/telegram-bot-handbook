# Understanding Updates in Telegram Bot Development

## What are updates

Updates are events that the bot program receives from Telegram server.
There can be an update about an incoming message, an update about a user joining a group, and so on.

We will often use this term further in the book.

::: tabs key:libraries
== Folds
== Telethon
== Other libraries
<HelpNeeded/>
:::

## The main challenge of developing bots { #limitations }

**Updates are almost the only way to get any info about chats, messages, and users.**

[//]: # (todo mark)

Your program may not fetch the latest user's message or the list of chats where the bot belongs. 
Telegram only gives info about the current user or the current chat in updates:
for example, when a user sends a message or the bot is added to the group.

If you need a list of bot users, received messages, or anything similar, you should save this data. 
(You will likely need a database.)

If you lose this info, you won't be able to get it again.

::: info Telegram API
You can fetch some info using Telegram API and not Bot API:
for example, it is possible to get a message by its ID or the info about a user. 
These features are listed [in the table](../appendix/api-comparison).
:::

## Receiving updates multiple times

Bot API disallows getting updates multiple times. If you received an update in Bot API, 
you won't be able to receive it again.

There is no such limitation in Telegram API though. This is due to the fact that Telegram API is mainly used for apps:
clearly, a user can have multiple Telegram apps on multiple devices while each of them should receive new messages.
The same works for bots: when you run multiple bot programs on Telegram API, they all get the new updates.

::: tip
Moreover, there is a Telegram API trick to fetch old updates.
For instance, it may be useful to get a list of bot users if it was not saved or the database was lost.
[Docs](https://core.telegram.org/api/updates#recovering-gaps)
:::
