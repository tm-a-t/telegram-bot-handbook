# How Your Telegram Bot Should Manage User Info

Bots may work in PM, in groups, and in channels — depending on their purpose.
These kinds of chats work by different rules,
so we will consider them all in the "Chats" chapter.

However, your bot will always interact with users in one way or another. 
On this page, we’ll discuss some general advice about managing users.

## User profile

Users may have no username or no last name — you should keep this in mind while storing their profile info. 
In addition, all such profile data except for user ID can change over time
(user IDs will be explained [later in the book).](../chats/id)

## User languages

Bots know the language that a person has set in their Telegram app.
This allows your bot to speak users' native languages.

Still, the user's language is not always included in the updates. 
If your bot adjusts to languages, 
Telegram recommends you use the last known language in cases the update misses this information.

## Seen users

A bot must have seen a user to make actions related to this user (mention them, etc.) The bot sees a user, for example,
when the bot receives a message from the user or fetches them by the username.

"Seeing" users is not an actual term, just an intuitive way of explaining it.
Technically speaking, it means API requests must include not only [user ID](./id) but also a relevant
access hash. API gives access hashes together with other user info in updates. Access hashes are cached by Bot API
and good Telegram API libraries, so you should not worry about it.
