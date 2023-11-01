# How to Choose the Right Library for a Telegram Bot

## Bot API libraries

A common choice for developing Telegram bots is a Python library called [aiogram](https://github.com/aiogram/aiogram).
It is asynchronous, uses decorators and contains useful development tools. 
[Rocketgram](https://github.com/rocketgram/rocketgram) is a popular alternative.

::: details aiogram code example

Here is some example code from [aiogram docs](https://docs.aiogram.dev/en/dev-3.x/).

```python
import asyncio
import logging
import sys
from os import getenv

from aiogram import Bot, Dispatcher, Router, types
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart
from aiogram.types import Message
from aiogram.utils.markdown import hbold

# Bot token can be obtained via https://t.me/BotFather
TOKEN = getenv("BOT_TOKEN")

# All handlers should be attached to the Router (or Dispatcher)
dp = Dispatcher()


@dp.message(CommandStart())
async def command_start_handler(message: Message) -> None:
    """
    This handler receives messages with `/start` command
    """
    # Most event objects have aliases for API methods that can be called in events' context
    # For example if you want to answer to incoming message you can use `message.answer(...)` alias
    # and the target chat will be passed to :ref:`aiogram.methods.send_message.SendMessage`
    # method automatically or call API method directly via
    # Bot instance: `bot.send_message(chat_id=message.chat.ID, ...)`
    await message.answer(f"Hello, {hbold(message.from_user.full_name)}!")


@dp.message()
async def echo_handler(message: types.Message) -> None:
    """
    Handler will forward receive a message back to the sender

    By default, message handler will handle all message types (like a text, photo, sticker etc.)
    """
    try:
        # Send a copy of the received message
        await message.send_copy(chat_id=message.chat.ID)
    except TypeError:
        # But not all the types is supported to be copied so need to handle it
        await message.answer("Nice try!")


async def main() -> None:
    # Initialize Bot instance with a default parse mode which will be passed to all API calls
    bot = Bot(TOKEN, parse_mode=ParseMode.HTML)
    # And the run events dispatching
    await dp.start_polling(bot)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())
```

:::

JavaScript is often used as well: check out [Telegraf](https://github.com/telegraf/telegraf)
or [GrammY](https://github.com/grammyjs/grammY).

There are libraries for many other languages, too. The official site has
[a list](https://core.telegram.org/bots/samples) and seems to keep it actual.

## Telegram API libraries

If you want to use [Telegram API but not Bot API](./api), you should choose a library built on Telegram API.

There are two such libraries for Python: [Telethon](https://github.com/LonamiWebs/Telethon)
and [Pyrogram](https://github.com/pyrogram/pyrogram). For JavaScript, there is [GramJS](https://github.com/gram-js/gramjs).

Telegram API libraries are handy if you want to write bots and
[userbots](./api#юзерботы) without re-learning — that's why I prefer always using Telethon.
