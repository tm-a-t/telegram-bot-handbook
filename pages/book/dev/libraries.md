# How to Choose the Right Library for a Telegram Bot

It depends on whether you choose Bot API or Telegram API. I've covered the differences [on the previous page](./api):
make sure to read it first.

## Bot API libraries

A common choice for developing Telegram bots is a Python library called [aiogram](https://github.com/aiogram/aiogram).
It is asynchronous and contains some powerful development tools. 
[Rocketgram](https://github.com/rocketgram/rocketgram) is a popular alternative.

JavaScript is often used as well: check out [Telegraf](https://github.com/telegraf/telegraf)
or [GrammY](https://github.com/grammyjs/grammY).

There are libraries for many other languages, too. The official site has
[a list](https://core.telegram.org/bots/samples) and seems to keep it actual.

## Telegram API libraries

If you want to use Telegram API but not Bot API, you should choose a library built on Telegram API.
There are two such libraries for Python: [Telethon](https://github.com/LonamiWebs/Telethon)
and [Pyrogram](https://github.com/pyrogram/pyrogram). For JavaScript, there is [GramJS](https://github.com/gram-js/gramjs).

Telegram API libraries are handy if you want to write bots and
[userbots](./api#userbots) without re-learning — that's why I prefer always using Telethon.
