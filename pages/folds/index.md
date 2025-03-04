# Folds

Folds is an elegant and scalable framework for bots, wrapping Telethon library.

- Minimalistic when you need simple features, powerful when you need complex ones.
- Flexible app structure with no boilerplate and no imports in the middle of files.
- Easy support for multi-bot apps.
- Built with Telegram API without Bot API — I explain it below.

```python 
from folds import Bot, Message, ThisUser

bot = Bot(bot_token, api_id, api_hash, parse_mode='html')


@bot.added_to_group
async def added():
  return 'Hello!'


@bot.group_commands.help
async def on_help_command():
  return 'You called for /help?'


@bot.group_commands.hello
async def on_hello_command(message: Message, user: ThisUser):
  await message.reply('Hmm!')
  await message.reply(f'Hello, {user.first_name}')


if __name__ == '__main__':
  bot.run()
```

## Built with Telegram API

Folds is built on top of Telethon, a Telegram API library. This means Folds doesn't use Bot API.

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

## Learn

Here is how to get familiar with Folds:
- Read these docs, of course. I tried to make them friendly!
- Read [the Telethon docs](https://docs.telethon.dev) because Folds bases on Telethon. 
  ChatGPT knows Telethon well, apparently.
- Join the chat and ask questions: [@sdlof](https://t.me/sdlof)

## Getting Started

Head over to [Quick Start.](./tutorial/quick-start)
