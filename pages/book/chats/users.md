# How Your Telegram Bot Should Manage User Info

Bots may work in PM, in groups, and in channels — depending on their purpose.
These kinds of chats work by different rules,
so we will consider them all in the "Chats" chapter.

However, your bot will always interact with users in one way or another. 
On this page, we’ll discuss some general advice about managing users.

## User profile

Users may have no username or no last name — you should keep this in mind while storing their profile info. 
In groups, this means the bot can't always mention a user by username. 
We will explore non-username mentions later in the book when we discuss [message markup.](../messages/markup#mention)

In addition, first name, username, and other profile data except for user ID can change over time,
so ID is probably the only reliable way to indentify a user.
(User IDs will be explained [later in the book,](../chats/id) too.)

::: tabs key:libraries
== Telethon & Folds
For example, a correct way to get user's display name would be:
```python
if user.last_name is None:
    full_name = user.first_name
else:
    full_name = f'{user.first_name} {user.last_name}'
```
== Other libraries
<HelpNeeded/>
:::

## User languages

Bots know the language that a person has set in their Telegram app.
This allows your bot to speak users' native languages.

Still, the user's language is not always included in the updates. 
If your bot adjusts to languages, 
Telegram recommends you use the last known language in cases the update misses this information.

::: tabs key:libraries
== Telethon & Folds
```python
user.lang_code  # Sometimes is None
```
== Other libraries
<HelpNeeded/>
:::


## Seen users

A bot must have seen a user to make actions related to this user (mention them, etc.) The bot sees a user, for example,
when the bot receives a message from the user or fetches them by the username.

"Seeing" users is not an actual term, just an intuitive way of explaining it.
Technically speaking, it means API requests must include not only [user ID](./id) but also a relevant
access hash. API gives access hashes together with other user info in updates. Access hashes are cached by Bot API
and good Telegram API libraries, so you shouldn't worry about them.

::: tabs key:libraries
== Telethon & Folds
== Other libraries
<HelpNeeded/>
:::
