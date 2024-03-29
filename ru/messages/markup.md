# Разметка

Сообщения могут содержать жирный текст, курсив и другую разметку.

Размечать сообщения в Bot API можно в стиле HTML или Markdown.
Аналогичная разметка реализована в библиотеках для Telegram API, таких как Telethon и Pyrogram.

Текст в Телеграм-сообщениях может быть:

- **жирным,**
- _курсивным,_
- <u>подчёркнутым</u>,
- <del>зачёркнутым</del>,
- `моноширинным,`

а также вы можете встроить в текст:

- [ссылку](#),
- спойлер — спрятанный текст,
- упоминание пользователя по id,
- кастомные эмодзи (доступны только для ботов с [платным юзернеймом](../dev/usernames)).

Суммарно в сообщение можно добавить не более 100 таких элементов разметки; лишние будут игнорироваться.

Также в сообщении может быть сколько угодно упоминаний пользователей по юзернейму.

## Моноширинный текст

Моноширинным можно сделать кусочек текста (как HTML-тегом `<code>`) и блок кода на полную ширину (как `<pre>`).

Большинство официальных приложений отображают такую разметку одинаково.

У блока кода можно задать язык для подсветки синтаксиса, но пока что подсветка синтаксиса из всех официальных приложений
работает только в WebA.

## Спойлер

Спойлер — это текст, спрятанный за анимированной плашкой.

Обернуть в спойлер можно не только текст, но и картинки; хотя это делается не средствами разметки.

![текст и картинка за спойлерами](/pictures/ru/spoiler.png)

## Упоминание пользователя { #mention }

Упоминание пользователя — текст, похожий на ссылку, клик по которому открывает профиль пользователя.
Чтобы вставить в сообщение упоминание пользователя, в Bot API достаточно встроить ссылку на `tg://user?id=123456789`.
Юзернейм пользователя автоматически превращается в упоминание.

Если упомянуть в группе её участника, он получит уведомление. Если в сообщении больше пяти упоминаний, уведомления
получат только некоторые пять из них.

Бот может упоминать по id в чате только тех пользователей, которые состоят в чате или разрешили показывать ссылки на себя при
пересылке сообщений.
Также бот не может упоминать по id пользователей, которых он не [«видел»](../chats/pm#seen-users)

Технически упоминания по юзернейму — это обычный текст, при нажатии на который приложение запрашивает у Телеграма 
информацию о пользователе по юзернейму.
Упоминания по id же работают по-другому: отправитель сообщения вместе с текстом упоминания отправляет id пользователя,
и он привязывается к сообщению. Получателям вместе с сообщением передаётся профиль пользователя, 
поэтому такое упоминание будет кликабельным, даже если пользователь поменяет юзернейм.

## Ссылки по теме

- [Объяснение разметки в документации к Bot API](https://core.telegram.org/bots/api#formatting-options)
