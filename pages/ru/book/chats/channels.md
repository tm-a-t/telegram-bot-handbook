# Чем Телеграм-боты могут быть полезны в каналах

Боты могут состоять в каналах только как админы.
Права администратора позволяют ботам отправлять и редактировать посты, 
переименовывать каналы и выполнять другие административные действия.

Это делает ботов особенно полезными для авторов каналов.

## Права администратора

Как и в группах, администраторы каналов могут выбирать права для ботов, где параметры по умолчанию можно настроить в BotFather.

## Добавление кнопок под постами

Один из распространенных случаев использования ботов в каналах — добавление кнопок: лайков и ссылок.
Это было особенно популярно до появления реакций на сообщения в Telegram.

Это работает с помощью права администратора на редактирование чужих публикаций,
которое позволяет боту добавлять к сообщениям авторов кнопки.
Вот пример:

![Пост с кнопками](/pictures/ru/channel-buttons.png)

::: tabs key:libraries
== aiogram
```python
@dp.message(F.chat.type == ChatType.CHANNEL)
async def on_new_message(message: Message):
    reply_markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Посетить сайт", url="https://example.com")]
        ]
    )
    try:
        await bot.edit_message_reply_markup(
            chat_id=message.chat.id,
            message_id=message.message_id,
            reply_markup=reply_markup
        )
    except Exception as e:
        # Бот не является администратором, или сообщение нельзя редактировать (например, стикер)
        pass
```
== Folds
```python
@bot.channel_message()
async def on_new_message(message: Message):
    try:
        await message.edit(
            buttons=[
                [Button.url("Посетить сайт", "https://example.com")]
            ]
        )
    except (ChatAdminRequiredError, MessageIdInvalidError, InlineBotRequiredError):
        # Бот не является администратором, или сообщение нельзя редактировать (например, стикер)
        pass
```
== Telethon
```python
@client.on(events.NewMessage(func=lambda e: e.is_channel))
async def on_new_message(message: Message):
    try:
        await message.edit(
            buttons=[
                [Button.url("Посетить сайт", "https://example.com")]
            ]    
        )
    except (ChatAdminRequiredError, MessageIdInvalidError, InlineBotRequiredError):
        # Бот не является администратором, или сообщение нельзя редактировать (например, стикер)
        pass
```
== Other libraries
<HelpNeeded/>
:::