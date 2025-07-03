# Апдейты, приходящие Телеграм-ботам

## Что такое апдейты

Апдейты (они же updates, то есть обновления) — это события, о которых сервер уведомляет бота.
Это может быть апдейт о входящем сообщении, апдейт о вступлении участника в группу и так далее.

Я ещё много раз буду использовать это слово на страницах хендбука.

::: tabs key:libraries
== aiogram
```python
@dp.message(F.photo & (F.chat.type == ChatType.PRIVATE))
async def on_private_photo(message: Message):
    photo = message.photo[-1]  # highest resolution
    file_path = f"downloads/photo_{photo.file_id}.jpg"
    await bot.download(photo, file_path)
    await message.answer('Got your photo! Saved to ' + file_path)
```
== Folds
```python
@bot.private_message()
async def handle_photo(message: Message):
    if not message.photo: 
        return

    file_path = await message.download_media()
    return 'Got your photo! Saved to ' + file_path
```
== Telethon
```python
@client.on(events.NewMessage(incoming=True, func=lambda e: e.photo and e.is_private))
async def handle_photo(event: Message):
    file_path = await event.download_media()
    await event.respond('Got your photo! Saved to ' + file_path)
```
== Другие библиотеки
<HelpNeeded/>
:::

## Главная сложность разработки ботов { #limitations }

<mark>Апдейты — почти единственный способ для вашей программы узнать что-то о чатах и сообщениях.</mark>

Например, ваша программа не может спросить у Телеграма, каким было последнее
сообщение от пользователя или в каких чатах состоит бот. Телеграм даёт такую информацию только вместе с апдейтами:
например, когда пользователь присылает сообщение или бота добавляют в группу.

Если пользователь отправил боту сообщение, и вам нужно будет использовать текст сообщения позже, сохраните его.

Если вам понадобится иметь список пользователей бота, полученных сообщений и так далее —
вам следует хранить эти данные. Скорее всего, для этого будет нужна база данных.

Если вы потеряете эту информацию, больше вы никак её не получите.

::: info Telegram API
Некоторую информацию всё-таки можно запросить, используя Telegram API в обход Bot API:
например, так можно получить сообщение по ID или полную информацию о пользователе. 
Полный список можно посмотреть [в таблице](../appendix/api-comparison).
:::

## Получение апдейтов несколько раз { #receiving-updates-multiple-times }

Ограничения Bot API не позволяют получать одни и те же апдейты несколько раз. Если вы получили апдейт в Bot API, то
второй раз вы его уже не получите.

В Telegram API такого ограничения нет. Всё потому, что Telegram API в основном предназначен для приложений:
пользователь может пользоваться мессенджером через несколько
приложений, каждое из которых должен получать новые сообщения. То же работает и для ботов. Если запустить несколько
программ бота на Telegram API, каждая из них будет получать все апдейты.

::: tip
Кроме того, в Telegram API есть возможность получить некоторые старые апдейты.
Это полезно, например, чтобы получить список пользователей бота, если он не сохранялся или база данных была утеряна.
[Документация](https://core.telegram.org/api/updates#recovering-gaps)
:::
