---
comments: 841727
---

# Как выбрать правильную библиотеку для Телеграм-бота 

## Библиотеки для Bot API

Самая популярная продвинутая библиотека для разработки ботов на Питоне —
это [aiogram](https://github.com/aiogram/aiogram). Её любят, потому что она асинхронная, использует декораторы и содержит удобные инструменты
для разработки. Известная альтернатива — [Rocketgram](https://github.com/rocketgram/rocketgram).

::: details Пример кода на aiogram

Вот для примера код с первой страницы [документации](https://docs.aiogram.dev/en/dev-3.x/) к aiogram.

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
    # Bot instance: `bot.send_message(chat_id=message.chat.id, ...)`
    await message.answer(f"Hello, {hbold(message.from_user.full_name)}!")


@dp.message()
async def echo_handler(message: types.Message) -> None:
    """
    Handler will forward receive a message back to the sender

    By default, message handler will handle all message types (like a text, photo, sticker etc.)
    """
    try:
        # Send a copy of the received message
        await message.send_copy(chat_id=message.chat.id)
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

Кроме этого, ботов часто пишут на Джаваскрипте: например, на [Telegraf](https://github.com/telegraf/telegraf)
и [GrammY](https://github.com/grammyjs/grammY).

Для многих других языков тоже есть библиотеки. На официальном сайте есть
[списочек](https://core.telegram.org/bots/samples), который даже вроде поддерживается в актуальном состоянии; 
но по перечисленнам библиотекам рекомендации дать не могу.

## Библиотеки для Telegram API

Если вы хотите использовать [Telegram API вместо Bot API](./api), вам следует взять библиотеку, которая на этом апи 
основана.
Для Питона есть две хорошие библиотеки: [Telethon](https://github.com/LonamiWebs/Telethon)
и [Pyrogram](https://github.com/pyrogram/pyrogram). Для Джаваскрипта — [GramJS](https://github.com/gram-js/gramjs).

Библиотеки для Telegram API удобны тем, что на них можно писать и ботов, и
[юзерботов](./api#юзерботы), не переучиваясь. Я так и делаю: для всего использую Telethon.
