# Telegram API vs Bot API

Bot is controlled by a program. The program connects to Telegram servers, receives some info (such us incoming messages)
and sends some commands (such as "reply to that message").
Let's dive into how it works.

**MTProto API** (or **Telegram API**) is the API through which your mobile or desktop Telegram app connects
to the Telegram servers. It is open, meaning that developers can use it to create own Telegram apps.

It is called so because it is based on MTProto protocol which was specially developed by Telegram team.

**Telegram Bot API** is a different API that can be used only for bots.

It was created to provide developers with a possibility of writing bots on plain HTTP-requests and not studying MTProto.
Bot API also has features to make development easier like webhooks and built-in HTML/Markdown markup.

But you don't need all that :)

You are unlikely going to write plain HTTP-requests. It is easier to use libraries instead. There are libraries for many
programming languages and usually they have everything for convenient development.

**You can write bots with either Telegram API or Bot API.**

## Which API to choose?

On the one hand, there are much more libraries written on Bot API.

On the other hand, Bot API has more limits. It doesn't allow to [upload large files](../messages/sending#file-limits)
by default or [fetch old messages from chat history](./updates#limitations).

Read about choosing the right library [on the next page](./libraries).

{ #api-difference }

::: details Functionality of Bot API vs Telegram API

| Feature                                     | Bot API                                                                                                    | Telegram API                                                                                                        |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Fetching messages**                       | From [updates](./updates) only                                                                             | From updates or by message ids                                                                                      |
| **Fetching users**                          | From updates only                                                                                          | From updates, by message ids (if the bot ["saw"](../chats/pm#seen-users) the user) or by username (200 times a day) |
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

There are userbots that [put current time on the user's profile picture](https://habr.com/ru/articles/457078/), 
collect messages from public groups and channels, and so on.

Generally, userbots are useful to do actions with Telegram that are not possible with bots.

::: warning
Usually Telegram doesn't ban for userbots, but be careful. If you spam, your account can be limited or deleted.
:::

## Related links

- [Telegram docs. MTProto: Technical details](https://core.telegram.org/mtproto)
- [Telegram docs. Authorizing bots through Telegram API](https://core.telegram.org/api/bots)
- [Telegram docs. Bot API reference](https://core.telegram.org/bots/api)
- [Telegram docs. Telegram API methods](https://core.telegram.org/methods)
- [Channel with Bot API updates](https://t.me/BotNews)
