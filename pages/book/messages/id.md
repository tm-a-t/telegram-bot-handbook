# How Telegram Assigns Message IDs

When you program a bot, you will often need to refer to messages by their IDs —
so it will be useful to know that these IDs have different meaning in different types of chats.

## In channels and supergroups

In channels and supergoups, message IDs are unique per chat: the first message in the chat has ID = 1, 
the second message has ID = 2, and so on.

Supergroups are a special kind of groups that look like regular groups in UI;
we'll cover them [later in the book](../chats/supergroups).

## In PM and regular groups

In personal dialogs and regular groups, there are no common message IDs. 
The messages are numbered separately for each user — or, in our case, a bot. 
The first message bot received or sent in any PM or group has ID = 1, the second one has ID = 2, and so on.

## Special cases

Although service messages (such as 'A user entered the chat' or 'The chat title has changed') 
don't look like normal messages in the UI, they are still messages and thus have their own IDs.

::: info Telegram API
A bot can retrieve a message by its ID through [Telegram API](../dev/api), but Bot API doesn't provide such feature.
:::
