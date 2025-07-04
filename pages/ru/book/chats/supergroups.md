# Что такое супергруппы

Наверняка вы регулярно пользуетесь Телеграм-группами.
На самом деле, что выглядит как группа в интерфейсе Телеграма, может быть двумя сущностями: 
группой или супергруппой.

## Что такое супергруппы

Давным-давно разработчики Телеграма ввели два типа групп: обычные и супергруппы.
Супергруппы обладали публичными ссылками, большим лимитом на количество участников и другими фишками, 
предназначенными для больших сообществ.

Но со временем, видимо, эту идею сочли неудобной или непонятной.
Теперь в интерфейсе Телеграма не используется слово «супергруппа»,  и обычные группы и супергруппы выглядят почти одинаково.
Тем не менее с технической точки зрения различия остались. Большинство групп, где вы состоите, скорее всего являются супергруппами.

Главная особенность супергрупп в том, что с точки зрения API они считаются частным случаем.

::: tabs key:libraries
== aiogram
```python
if chat.type == ChatType.SUPERGROUP:
    print('Это супергруппа')
if chat.type == ChatType.CHANNEL:
    print('Это настоящий канал')
if chat.type == ChatType.GROUP:
    print('Это группа старого типа')
if chat.type == ChatType.PRIVATE:
    print('Это личные сообщения')
```
== Telethon & Folds
Как проверить тип чата через API-типы:
```python
from telethon.tl.types import Chat, Channel, User

if isinstance(chat, Channel) and chat.megagroup:
    print('Это супергруппа')  # 'megagroup' - это термин API для того же самого
if isinstance(chat, Channel) and not chat.megagroup:
    print('Это настоящий канал')
if isinstance(chat, Chat):
    print('Это группа старого типа')
if isinstance(chat, User):
    print('Это личные сообщения')
```
Как проверить тип чата через свойства Telethon:
```python
if message.is_group:
    print('Это супергруппа или обычная группа')
if message.is_channel:
    print('Это канал или супергруппа')
if message.is_private:
    print('Это личные сообщения')
```
== Other libraries
<HelpNeeded/>
:::

В этой книге я использую термин "группы" как для обычных групп, так и для супергрупп.
Подробнее о разработке ботов для групп см. [страницу о группах.](../chats/groups)

## Превращение в супергруппу

Обычная группа становится супергруппой при изменении определенных настроек.
Поскольку технически группа заменяется супергруппой (которая является новым каналом), 
[её ID](../chats/id) меняется.
Вам понадобится обработать это событие, если вы храните чаты в базе данных:

::: tabs key:libraries
== aiogram
```python
@dp.message(F.migrate_to_chat_id)
async def migrated(message: Message):
    print(f'{message.chat.title} стала супергруппой')
```
== Folds
```python
@bot.group_became_supergroup()
async def handle_supergroup(chat: ThisChat):
    print(f'{chat.title} стала супергруппой')
```
== Telethon
```python
def group_became_supergroup(event: events.ChatAction.Event) -> bool:
    return (
            isinstance(event, tl_types.UpdateNewChannelMessage)
            and isinstance(event.message, tl_types.MessageService)
            and isinstance(
                event.message.action, tl_types.MessageActionChannelMigrateFrom
            )
    )

@client.on(events.ChatAction(func=group_became_supergroup))
async def handle_supergroup(event: events.ChatAction.Event):
    chat = await event.get_chat()
    print(f'{chat.title} стала супергруппой')
```
== Other libraries
<HelpNeeded/>
:::

Супергруппа не может снова стать обычной группой.

## ID сообщений и групп

У ID групп и супергрупп есть различия, которые мы рассмотрим [на следующей странице.](id#bot-api)
Кроме того, обычные группы и супергруппы отличаются тем, как работают ID сообщений: см. [ID сообщений.](../messages/id)

## Гигагруппы (broadcast groups)

Гигагруппы — это еще один тип групп, но такой редкий, что я расскажу о нём только для справки.

Максимальное количество участников супергруппы - 200 000.
Когда оно близко к пределу, приложение Telegram предлагает администраторам превратить супергруппу в гигагруппу.
Гигагруппы могут содержать неограниченное количество участников, 
но только администраторы могут отправлять там сообщения.

Я не представляю, зачем они существуют.

## Ссылки по теме

- [Особенности групп и супергрупп; когда группы становятся супегруппами](https://tginfo.me/groups_vs_supergroups/)
<!-- - [О супергруппах в блоге Telegram в 2015 году](https://telegram.org/blog/supergroups#supergroups)
- [В каких случаях сейчас группа становится супергруппой](https://t.me/tginfo/1917) -->
- [О группах, супергруппах и broadcast groups в документации к API](https://core.telegram.org/api/channel)
