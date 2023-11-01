# Understanding Updates in Telegram Bot Development

## What are updates

Updates are events that the bot program receives from Telegram server.
There can be an update about an incoming message, an update about a user joining a group, and so on.

I will often use this term further.

## The main challenge of developing bots { #limitations }

**Updates are almost the only one way to get any info about chats, messages, and users.**

Your program may not fetch the latest user's message or the list of chats where the bot belongs. 
Telegram only gives info about the current user or the current chat in updates:
for example, when a user sends a message or the bot is added to the group.

If you need a list of bot users, received messages, or anything similar, you should save this data. 
(You will likely need a database.)

If you lose this info, you won't be able to get it again.

::: tip Telegram API
You can fetch some info using Telegram API and not Bot API:
for example, it is possible to get a message by its ID or the info about a user. 
You can see the full list [on the handbook's page on API](../dev/api#api-difference).
:::

## Receiving updates multiple times

Bot API disallows getting updates multiple times. If you received an update in Bot API, 
you won't be able to receive it again.

There is no such limitation in Telegram API though. This is due to the fact that Telegram API is mainly used for apps:
clearly, a user can have multiple Telegram apps on multiple devices while each of them should receive new messages.
The same works for bots: when you run multiple bot programs on Telegram API, they all get the new updates.
Also, there is [a Telegram API trick](../dev/api#old-updates) to fetch old updates.
