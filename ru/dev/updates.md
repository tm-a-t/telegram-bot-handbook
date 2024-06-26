# Апдейты, приходящие Телеграм-ботам

## Что такое апдейты

Апдейты (они же updates, то есть обновления) — это события, о которых сервер уведомляет бота.
Это может быть апдейт о входящем сообщении, апдейт о вступлении участника в группу и так далее.

Я ещё много раз буду использовать это слово на страницах хендбука.

## Главная сложность разработки ботов { #limitations }

Апдейты — почти единственный способ для вашей программы узнать что-то о чатах и сообщениях.

Например, ваша программа не может спросить у Телеграма, каким было последнее
сообщение от пользователя или в каких чатах состоит бот. Телеграм даёт такую информацию только вместе с апдейтами:
например, когда пользователь присылает сообщение или бота добавляют в группу.

Если пользователь отправил боту сообщение, и вам нужно будет использовать текст сообщения позже, сохраните его.

Если вам понадобится иметь список пользователей бота, полученных сообщений и так далее —
вам следует хранить эти данные. Скорее всего, для этого будет нужна база данных.

Если вы потеряете эту информацию, больше вы никак её не получите.

::: tip Telegram API
Некоторую информацию всё-таки можно запросить, используя Telegram API в обход Bot API:
например, так можно получить сообщение по ID или полную информацию о пользователе. 
Полный список можно посмотреть [на странице хендбука про API](../dev/api#api-difference).
:::

## Получение апдейтов несколько раз

Ограничения Bot API не позволяют получать одни и те же апдейты несколько раз. Если вы получили апдейт в Bot API, то
второй раз вы его уже не получите.

В Telegram API такого ограничения нет. Всё потому, что Telegram API в основном предназначен для приложений:
пользователь может пользоваться мессенджером через несколько
приложений, каждое из которых должен получать новые сообщения. То же работает и для ботов. Если запустить несколько
программ бота на Telegram API, каждая из них будет получать все апдейты.
Кроме того, есть [трюк](../dev/api#old-updates), позволяющий получить старые апдейты второй раз.
