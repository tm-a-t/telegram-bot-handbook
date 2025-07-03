# Отправка, изменение и пересылка сообщений

На этой странице я собрал возможности Телеграм-ботов, связанные с сообщениями.
Если коротко: боты могут отправлять, изменять и удалять сообщения, как и пользователи — 
но с некоторыми исключениями. Например, вы можете столкнуться с ошибкой, если ваш бот попытается отправить
голосовое сообщение премиум-пользователю или добавить картинку в уже отправленное сообщение.

## Отправка сообщений

Бот может отправлять и получать сообщения, как и пользователи. Это могут быть просто текстовые сообщения, а могут быть
сообщения с медиа: картинками, видео, файлами, опросами, голосовыми сообщениями, стикерами и так далее.

А ещё, в отличие от пользователей, бот может добавлять к своим сообщениям [кнопки](../messages/buttons).

::: tabs key:libraries
== aiogram
```python
# Send a message
await bot.send_message(chat_id=chat_id, text='Hey there')

# Shortcut: send where the message came from
await message.answer('Hey there')

# Send a file
document = FSInputFile('path.txt')
await bot.send_document(
    chat_id=chat_id,
    document=document    
)
```
См. [How to upload file?](https://docs.aiogram.dev/en/v3.20.0.post0/api/upload_file.html#sending-files)
== Telethon & Folds
```python
# Send a message
await client.send_message(chat_id, 'Hey there')

# Shortcut: send where the event came from
await event.respond('Hey there')

# Send a file
await client.send_message(
    chat_id,
    file='path.txt'
)
```
== Другие библиотеки
<HelpNeeded/>
:::

### Когда нельзя отправлять сообщения

Бот не может отправить сообщение [заблокировавшему его пользователю](../chats/pm#block);
в группу или канал, где его нет или где админы отняли разрешение на отправку сообщений.

Премиум-пользователь может запретить отправку голосовых сообщений (в том числе кружочков).

::: tabs key:libraries
== aiogram
```python
try:
    await client.send_message(chat_id, 'Hey there')
except TelegramForbiddenError:
    print('User blocked the bot, bot banned from chat, etc.')
```
== Telethon & Folds
```python
try:
    await client.send_message(...)
except UserIsBlockedError:
    print('User blocked the bot :(')
```
== Другие библиотеки
<HelpNeeded/>
:::

### Как устроены альбомы

Альбом — это несколько сообщений-картинок или сообщений-файлов, которые приложения Телеграма отображают как одно сообщение.

### Какие ограничения на файлы { #file-limits }

В Телеграме можно делиться файлами до 4 ГБ, но ограничения в Bot API более жёсткие. Через Bot API бот может скачивать
файлы до 20 МБ и отправлять файлы до 50 МБ. Эти лимиты повышаются, если вы используете
[локальный сервер Bot API](../appendix/api-comparison): тогда бот может скачивать и отправлять файлы до 2 ГБ.

### Как часто можно отправлять сообщения

Конечно, спамить не получится. Сам Телеграм называет такие примерные лимиты:

- не больше одного сообщения в секунду в один чат,
- не больше 30 сообщений в секунду во все чаты,
- не больше 20 сообщений в минуту в одну группу.

Если вы хотите сделать рассылку по всем пользователям, то вы не сможете отправить сообщения всем одновременно;
придётся рассылать постепенно.

Учтите, что на более редкие действия, такие как изменение и удаление сообщений, ограничения строже.
Для ботов с большим числом пользователей лимиты могут быть увеличены через поддержку.

## Изменение сообщений

Когда бот изменяет сообщение, в сообщении не появляется надпись «Изменено», как в сообщениях пользователей.

::: tabs key:libraries
== aiogram
```python
from asyncio import sleep

...

my_message = await bot.send_message(chat_id, 'Loading...')
await sleep(10)
await my_message.edit_text('Loaded!')
```
== Telethon & Folds
```python
from asyncio import sleep

...

my_message = await client.send_message(chat_id, 'Loading...')
await sleep(10)
await my_message.edit('Loaded!')
```
== Другие библиотеки
<HelpNeeded/>
:::

### Как изменять медиа { #edit-media }

Изменяя сообщение, можно изменить не только его текст, но и медиа.

Картинку, видео или файл можно заменить на другую картинку, видео или файл (музыка тоже считается файлом).

~~В сообщения, отправленные без медиа, уже нельзя добавить медиа.~~ Теперь можно добавить медиа в текстовое сообщение.

## Пересылка сообщений

Если попробовать переслать музыку, то она переотправится без подписи «Переслано».

Нельзя пересылать сообщения из групп и каналов, в настройках которых включён запрет на сохранение контента
(это настройка называется protected content).

::: tabs key:libraries
== aiogram
```python
# С подписью 'Переслано'
await message.forward(chat_id)

# Без подписи 'Переслано'
await message.copy_to(chat_id)
```
== Telethon & Folds
```python
# С подписью 'Переслано'
await message.forward(chat_id)

# Без подписи 'Переслано'
await client.send_message(chat_id, message)
```
== Другие библиотеки
<HelpNeeded/>
:::

## Взаимодействие с сообщениями

Боты не могут голосовать в опросах, хотя могут их отправлять.
Они также могут оставлять реакции к сообщениям.

## Ссылки по теме

- [Bots FAQ на сайте Телеграма про лимиты](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this)
