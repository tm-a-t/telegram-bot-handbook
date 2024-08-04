# How Message IDs Work

Each Telegram message has an ID: this includes system messages 
like "A user entered the chat" or "The chat title has changed".

Message IDs in [supergroups](../chats/supergroups) and channels are unique per chat: the first chat message has ID 1, 
the second message has ID 2, and so on.

Messages in personal dialogs and regular groups are numbered consequently: message IDs are counted separately for
a user (or a bot.) 
The first received or sent messages in all bot's PMs and groups has ID 1, the second one has ID 2, and so on.

::: info Telegram API
A bot can retrieve a message by its ID through Telegram API. Bot API doesn't provide such feature.
:::
