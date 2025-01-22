# How to Choose the Right Library for a Telegram Bot

It depends on whether you choose Bot API or Telegram API. 
I've covered the differences [on the previous page;](./api) make sure to read it first.

## Bot API libraries

A common choice for developing Telegram bots is a Python library called [aiogram.](https://github.com/aiogram/aiogram) [Rocketgram](https://github.com/rocketgram/rocketgram) is a popular alternative.

JavaScript is often used as well: check out [Telegraf](https://github.com/telegraf/telegraf)
or [GrammY.](https://github.com/grammyjs/grammY)

There are Bot API libraries for many other languages, too. 
The official site has [a list](https://core.telegram.org/bots/samples) and seems to keep it actual.

## Telegram API libraries

For Python, the most popular library built with Telegram API is [Telethon.](https://github.com/LonamiWebs/Telethon)
Since Telethon is not primarily focused on developing bots,
I started the [Folds](/folds/index) framework, which is built on top of Telethon
and is designed to create simple and scalable bot programs.

[//]: # (todo I)

As of alternatives, there are [Pyrogram](https://github.com/pyrogram/pyrogram) for Python, [GramJS](https://github.com/gram-js/gramjs) for JavaScript,
and

[//]: # (todo other langs?)

## Getting started

::: tabs key:libraries
== Folds
```shell

```
== Telethon
:::