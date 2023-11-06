# Updates

## Updates?

Updates are events about which the Telegram server notifies the bot program.
It can be an update about an incoming message, an update about a user joining a group, and so on.

I will use this term on the further pages.

## The main challenge of bot development { #limitations }

Updates are almost the only one way to get any info about chats, messages, and users.

Your program can't fetch the latest user's message or the list of chats where the bot belongs. 
Telegram gives the info only in updates:
for example, when user sends a message or the bot is added to the group.

If you need a list of bot users, received messages, and so on, you should save this data. 
(You will likely need a database.)

If you lose this info, you won't be able to get it again.

::: tip Telegram API
You can get some info using Telegram API without Bot API:
for example, it is possible to fetch a message by its id or the info about a user. 
You can see the full list [on the handbook's page on API](../dev/api#api-difference).
:::

## Getting updates multiple times

Bot API disallows getting updates multiple times. If you received an update in Bot API, 
you won't be able to receive it again.

There is no such limitation in Telegram API. This is due to the fact that Telegram API is mainly used for apps:
user can have multiple Telegram apps on multiple devices, each of them should receive new messages.
The same thing works with bots: if you run multiple bot programs on Telegram API, they all will get the new updates.
Also, there is [a Telegram API trick](../dev/api#old-updates) to fetch old updates.
