# Апдейты — основной источник информации

## Апдейты

Апдейты (они же updates, то есть обновления) — это события, о которых сервер уведомляет бота. 
Это может быть апдейт о входящем сообщении, апдейт о вступлении участника в группу и так далее.

Запомнили? Я буду использовать это слово на следующих страницах хендбука.

## Боты получают только информацию об обновлениях

Главная сложность разработки ботов состоит в том, что боты получают только апдейты.

Например, программа не может запросить старые сообщения из чата или список всех своих пользователей. Телеграм передаёт
только апдейты о том, что в чат отправили новое сообщение или пользователь сделал какое-то действие.

Таким образом, вам придётся самостоятельно хранить список чатов, старых сообщений (если это зачем-то нужно) и так далее.
Если вы случайно сотрёте/потеряете эту информацию, вы её больше никак не получите.

Некоторую информацию всё-таки можно запросить, используя Telegram API в обход Bot API:
например, получить сообщение по id или список участников группы.

::: info Получение апдейтов несколько раз

Если вы получили апдейт в Bot API, то второй раз вы его уже не получите.

В Telegram API это не так: пользователь может пользоваться мессенджером через несколько клиентов,
каждый из которых должен получать новые сообщения. 
Аналогично, если запустить для одного бота несколько программ на Telegram API, 
то каждая из них будет получать все апдейты.

Ограничения Bot API не позволяют сделать то же самое.

:::