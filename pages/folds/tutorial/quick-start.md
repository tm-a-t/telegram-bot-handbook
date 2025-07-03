# Quick Start

```python
pip install folds
```

## Start a bot

1. **Obtain Telegram API keys if you don't have them.**
   Go to https://my.telegram.org and register an app.
   You may fill in any data, it doesn't really matter.
   You may register an app only once and always reuse it afterwards.

2. **Register a bot.**
   Open [@BotFather](https://t.me/BotFather) and follow the instructions.
   You will get the token to control the bot.

3. **Type the code:**

   ```python
   (example)
   ```

4. **Run the app.**

## Asyncio

todo

## Reload the app when edited

::: warning
This is an experimental feature: it may break.
:::

If your program is a Python module (which means a directory with `__init__.py`,) you can run it with the command:

```shell
python -m paper.reload app
```

Now, your program will restart every time you change files in the app directory.

## Session

There is a special Telethon bot [session file](https://docs.telethon.dev/en/stable/concepts/sessions.html) that is stored in `.folds/bot12345.session` by default.
