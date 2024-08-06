# How Telegram Assigns Message IDs

When you program a bot, you will often need to refer to messages by their IDs —
so it will be useful to know what these IDs exactly mean.

In supergroups and channels, message IDs are unique per chat: the first message in the chat has ID = 1, 
the second message has ID = 2, and so on.
We haven't discussed [Supergroups](../chats/supergroups) yet, but in short.

In personal dialogs and regular groups, however, there are no common message IDs. 
The messages are numbered separately for each user — or, in our case, a bot. 
The first message bot received or sent in any PM or group has ID = 1, the second one has ID = 2, and so on.

Although service messages (such as 'A user entered the chat' or 'The chat title has changed') 
don't look like normal messages in the UI, they are still messages and thus have their own IDs.

::: info Telegram API
A bot can retrieve a message by its ID through [Telegram API](../dev/api), but Bot API doesn't provide such feature.
:::
