# Simple Rules

With Folds, you write simple code and complicate it when needed.

The most common scenario for bot to is to process a user command and reply with a message.
So you can just return a string:

```python
@bot.private_commands.help
async def f():
    return 'I am a tutorial bot'
```

With this code, whenever a user writes `/help` in private messages, the bot will answer with our text.

You may have noticed that I named the function `f`.
We won't use the function name anywhere, so it doesn't really matter. 
I like `f` because it's simple and looks nice.
You can instead use `_` or give functions meaningful names.

If we are interested in the text of the incoming message, we can accept it as an argument:

```python
@bot.private_message
async def _(text: str):
    if text == 'hi':
        return 'Hello!'
    else:
        return "I don't know what you're talking about. Want some tea?"
```

And for more complex scenarios, we can accept the [Message](https://docs.telethon.dev/en/stable/quick-references/objects-reference.html) object:

```python
from folds import Message

...

@bot.private_message
async def _(message: Message):
    if message.photo is not None:
        await message.download_media()
        return f'I downloaded the photo you sent at {message.date}'
```

## Sending messages

As we've seen, `return '...'` is useful when you want to tell the user you're finished.

Of course, you may want to send messages in other cases: 
maybe send multiple messagees, send a message with a file, or send a message and then do something else.
Then, you can use Telethon methods. 

Here are some methods that may be helpful:

- `message.respond()` is the shortcut to send a new message to the same chat as `message`
- `message.reply()` is the shortcut to send a new message as a reply to `message`
- `client.send_message()` is the main function that sends any message to any chat.
The `client` object here represents the current Telethon's Telegram client and can be imported from `folds.context`


```python
from folds import Message
from folds.context import client

...

@bot.private_message
async def _(message: Message):
    await message.respond('Searching for your query...')
    picture_url = ...  # find picture url for message.text
    await message.reply('Your result', file=picture_url)
    await client.send_message(ADMIN_USER_ID, 'A user just made a query')
```

For all the things you can do with messages, consult [Telethon docs.](https://docs.telethon.dev/en/stable/quick-references/objects-reference.html)
