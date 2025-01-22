# Folds

Folds is an elegant and scalable framework for bots, wrapping Telethon library.

- Minimalistic when you need simple features, powerful when you need complex ones.
- Flexible app structure with no boilerplate and no imports in the middle of files.
- Easy support for multi-bot apps.
- Built with Telegram API without Bot API — I explain it below.

```python
from paper import create_bot, Message

bot = create_bot(...)

@bot.group_message
async def _(message: Message):
    await message.reply('Hello world')

    
if __name__ == '__main__':
    bot.run()
```

## Built with Telegram API

Folds is built on top of Telethon, a Telegram API library. This means Folds works without Bot API.

#### Pros

- No limitations.
  Bot API has natural limitations that Folds doesn't:
  see [the API explanation](/book/dev/api) and [the comparison table](/book/appendix/api-comparison) for details.
- Reuse code for userbots. 
  When you are familiar with Telethon concepts, 
  you can not only program bots with Folds but also program user accounts.
  In particular, our Telegram script tool named [TGPy](/tgpy/index) is also based on Telethon.

#### Cons

- Setting up requires a little extra step.

## Reload the app when edited

If your program is a Python module (which means a directory with `__init__.py`,) you can run it with command:

```shell
python -m paper.reload app
```

Now, your program will restart every time you change files in the app directory.



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

todo

```python
@logic.on(events.NewMessage)
```

`data/bot12345.session`

context
