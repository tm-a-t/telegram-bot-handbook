# How Telegram Bots Can Be Useful in Channels

Bots can participate in channels only as admins.
Admin rights allow bots to send and edit posts, rename channels, and perform other administrative actions.

This makes bots particularly helpful for channel authors.

## Admin rights

Just like in groups, channel admins may select bot admin rights where the default options can be configured in BotFather. 

## Adding buttons to posts

One common use case for bots in channels is adding buttons: likes, links, and other interactive elements.
This was especially popular before message reactions were introduced in Telegram.

These features work by utilizing the "Edit messages of others" admin right, 
which allows a bot to add buttons when editing messages. 
Here is an example:

![Post with buttons](/pictures/ru/channel-buttons.png)

::: tabs key:libraries
== aiogram
```python
@dp.message(F.chat.type == ChatType.CHANNEL)
async def on_new_message(message: Message):
    reply_markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Visit Site", url="https://example.com")]
        ]
    )
    try:
        await bot.edit_message_reply_markup(
            chat_id=message.chat.id,
            message_id=message.message_id,
            reply_markup=reply_markup
        )
    except Exception as e:
        # Bot is not an admin, or the message is uneditable (for example, a sticker)
        pass
```
== Folds
```python
@bot.channel_message()
async def on_new_message(message: Message):
    try:
        await message.edit(
            buttons=[
                [Button.url("Visit Site", "https://example.com")]
            ]
        )
    except (ChatAdminRequiredError, MessageIdInvalidError, InlineBotRequiredError):
        # Bot is not an admin, or the message is uneditable (for example, a sticker)
        pass
```
== Telethon
```python
@client.on(events.NewMessage(func=lambda e: e.is_channel))
async def on_new_message(message: Message):
    try:
        await message.edit(
            buttons=[
                [Button.url("Visit Site", "https://example.com")]
            ]    
        )
    except (ChatAdminRequiredError, MessageIdInvalidError, InlineBotRequiredError):
        # Bot is not an admin, or the message is uneditable (for example, a sticker)
        pass
```
== Other libraries
<HelpNeeded/>
:::

[//]: # (todo: check for the in the example)

[//]: # (todo: Paid posts)
