# Telegram API vs Bot API. What is the Difference?

Bot is controlled by a program. The program connects to Telegram servers, receives some info (like incoming messages)
and sends some instructions (like "reply to that message").
Let's dive into how it works.

**MTProto API** (or **Telegram API**) is the API through which your mobile or desktop Telegram app connects
to the Telegram servers. It is open, meaning that developers can use it to create own Telegram apps.

It is named after MTProto encryption protocol which was specially developed by Telegram team.

**Telegram Bot API** is a different API that can only be used for bots. In fact, it is built on top of MTProto API.

Bot API was created to provide developers with a possibility of writing bots on plain HTTP-requests and not studying MTProto.
In addition, Bot API has features to make development easier, such as webhooks and built-in HTML/Markdown markup.

But you don't need all that :)

You unlikely will write plain HTTP-requests: it is easier to use libraries instead. There are libraries for many
programming languages and usually they have everything for convenient development.

**So you can write bots with either Telegram API or Bot API.**

## Which API to choose?

On the one hand, it is easier to find a library written in Bot API.

On the other hand, Bot API is more limited. It forbids to [upload large files](../messages/sending#file-limits)
by default or [fetch old messages from chat history](./updates#limitations).

You can read about choosing the right library [on the next page](./libraries).

{ #api-difference }

::: details Functionality of Bot API vs Telegram API

| Feature                                     | Bot API                                                                                                    | Telegram API                                                                                                        |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Fetching messages**                       | From [updates](./updates) only                                                                             | From updates or by message IDs                                                                                      |
| **Fetching users**                          | From updates only                                                                                          | From updates, by message IDs (if the bot ["saw"](../chats/pm#seen-users) the user) or by username (200 times a day) |
| **File sizes**                              | ↓ 20 МБ, ↑ 50 МБ (Without [local server](https://core.telegram.org/bots/api#using-a-local-bot-api-server)) | Like regular users                                                                                                  |
| **Fetching group members**                  | No                                                                                                         | Yes                                                                                                                 |
| **Get old updates**                         | No                                                                                                         | Yes                                                                                                                 |
| **Run multiple programs with the same bot** | Only if other programs use Telegram API                                                                    | [Yes](./updates#получение-апдеитов-несколько-раз)                                                                   |

Telegram API has a feature [to get some updates](https://core.telegram.org/api/updates#recovering-gaps).
This may be useful to get a list of bot users if it was not saved or the database was lost.
{#old-updates}

:::

## Userbots

As Telegram API is open and has libraries that work with it, you can easily write a program that controls a user account
rather than a bot.

Such programs are called userbots.

There are userbots that put current time on the user's profile picture, 
collect messages from public groups and channels, and so on.

In general, userbots are useful to automate actions that users are allowed to do and bots aren't.

::: warning
Usually Telegram doesn't ban for userbots, but be careful. Telegram may limit or delete spammer accounts.
:::

## Related links

- [Telegram docs. Technical details of MTProto](https://core.telegram.org/mtproto)
- [Telegram docs. Authorizing bots through Telegram API](https://core.telegram.org/api/bots)
- [Telegram docs. Bot API reference](https://core.telegram.org/bots/api)
- [Telegram docs. Telegram API methods](https://core.telegram.org/methods)
- [Official Bot API channel with updates](https://t.me/BotNews)
