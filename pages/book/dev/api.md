# Telegram API VS Bot API. What Is the Difference?

Basically, developing a bot means developing a program which connects to Telegram servers, receives some info (like
incoming messages) and sends some instructions (like "reply to that message").
Let's dive into how it works.

**MTProto API** (also known as **Telegram API**) is the API through which your mobile or desktop Telegram app connects
to the Telegram servers. It is open, meaning that developers can use the API to create own Telegram apps.

It is named after MTProto encryption protocol which was developed by Telegram team for their messenger.

**Telegram Bot API** is a different API that can only be used for bots. It is built on top of MTProto API.

Bot API was created to provide developers with a possibility of writing bots on plain HTTP-requests and not studying
MTProto.
In addition, Bot API has features to make development easier, such as webhooks and built-in HTML/Markdown markup.

However, you won't need this :)

You unlikely will write plain HTTP-requests: it is easier to use libraries instead. There are libraries for many
programming languages and usually they have everything for convenient development.

**In short, you can develop bots with either Telegram API or Bot API.**

## So which API to choose?

There are libraries built on top of Bot API as well as libraries built on top of Telegram API. 

On the one hand, you can find many more libraries for Bot API.

On the other hand, Bot API is a bit more limited. 
By default, it forbids uploading large files or fetching old messages from chat history 
(you can check out [the comparison table](../appendix/api-comparison).)
I prefer always using Telegram API, but honestly there is little difference.

You can read more about choosing the right library on the next page!

## Userbots

As Telegram API is open and has libraries that work with it, you can easily write a program that controls a user account
rather than a bot.

Such programs are called userbots. There are userbots that put current time on the user's profile picture,
collect messages from public groups and channels, and so on.

In general, userbots are useful to automate actions that users are allowed to do and bots are not.

::: warning
Usually Telegram doesn't ban for userbots, but be careful. Telegram may limit or delete spammer accounts.
:::

## Related links

- [Telegram docs. Technical details of MTProto](https://core.telegram.org/mtproto)
- [Telegram docs. Authorizing bots through Telegram API](https://core.telegram.org/api/bots)
- [Telegram docs. Bot API reference](https://core.telegram.org/bots/api)
- [Telegram docs. Telegram API methods](https://core.telegram.org/methods)
- [Official Bot API channel with updates](https://t.me/BotNews)
