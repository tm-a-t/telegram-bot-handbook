# Papercraft Framework

Pythonic, elegant, scalable, inspired by the spirit of FastAPI

multiple files with no boilerplate and no imports in the middle of files

multiple bots

built with Telegram API without Bot API

Papercraft is actually a thin wrapper for Telethon

Code like this

```python
from paper import create_bot, Message

bot = create_bot(...)

@bot.group_message
async def _(message: Message):
    await message.reply('Hello world')

    
if __name__ == '__main__':
    bot.run()
```

## Telegram API

Papercraft Framework is built on top of Telethon, a Telegram API library. This means it works without Bot API.

**Pros:** Bots written in Papercraft have less limitations. See [explanation](/en/book/dev/api) and [comparison table](/en/book/appendix/api-comparison)

**Cons:** Setting up has a couple more little steps.

## Quick Start

Obtain Telegram API keys, bot token, enter this:

(example)

Then run the app:

## Restart the app

Load changes dynamically:

```shell
python -m paper.reload app
```

## Rules

```python
@bot.group_message
@bot.private_command
...
```

## Rule parameters

Use arguments to fetch things:

```python
from paper import

async def _(message: Message, user: Sender, chat: Chat, reply_to: ReplyToMessage)
```


## Multiple files

You can define some rules in separate files.

```python
my_logic = Logic()

@my_logic.group_message
```

## Multiple bots 

Your app can handle multiple bots at once, because I believe in Unix way for Telegram bots :)

```python
app = App(...)
bot1 = app.bot(token=...)
bot2 = app.bot(token=...)

app.run()
```

## Admin rules

```python
app = App(admin=SimpleAdmin(user_ids=[123123123], chat_id=5253151345))

@bot.admin_commands
```

## Learn

- Telethon
- Book
- Contact me
