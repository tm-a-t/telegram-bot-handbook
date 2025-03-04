# Multiple Bots

Sometimes a bot can become more user-friendly if its functionality is split into multiple 
interconnected little bots, because this makes the bots a native pluggable system.

Folds supports multi-bot applications easily:

```python
from folds import App

app = App(api_id, api_hash)
bot1 = app.create_bot(bot1_token)
bot2 = app.create_bot(bot2_token)

@bot1.private_command.ping
@bot2.private_command.ping
async def f():
    return 'Pong!'

@bot1.private_command.start
async def f():
    return 'Hi, I am the first bot'

@bot2.private_command.hello
async def f():
    return 'Hi, I am the second bot'
```
