import {DefaultTheme} from 'vitepress'

const sidebar: DefaultTheme.Sidebar = [
    {text: 'Начало', link: '/ru/index.md'},
    {
        text: 'Разработка',
        items: [
            {text: 'Введение', link: '/ru/dev/basics.md'},
            {text: 'Telegram API', link: '/ru/dev/api.md'},
            {text: 'Библиотеки', link: '/ru/dev/libraries.md'},
            {text: 'Юзернеймы', link: '/ru/dev/usernames.md'},
            {text: 'Настройка', link: '/ru/dev/botfather.md'},
            {text: 'Апдейты', link: '/ru/dev/updates.md'},
            {text: 'Хостинг', link: '/ru/dev/host.md'},
        ],
    },
    {
        text: 'Сообщения', items: [
            {text: 'Отправка', link: '/ru/messages/sending.md'},
            {text: 'Разметка', link: '/ru/messages/markup.md'},
            {text: 'Команды', link: '/ru/messages/commands.md'},
            {text: 'Кнопки', link: '/ru/messages/buttons.md'},
            {text: 'ID сообщений', link: '/ru/messages/id.md'},
        ],
    },
    {
        text: 'Чаты', items: [
            {text: 'Пользователи', link: '/ru/chats/pm.md'},
            {text: 'Группы', link: '/ru/chats/groups.md'},
            {text: 'Каналы', link: '/ru/chats/channels.md'},
            {text: 'Форумы', link: '/ru/chats/forums.md'},
            {text: 'О супергруппах', link: '/ru/chats/supergroups.md'},
            {text: 'ID чатов', link: '/ru/chats/id.md'},
        ],
    },
    {
        text: 'Интерактивность', items: [
            {text: 'Заявки', link: '/ru/interaction/join-requests.md'},
            {text: 'Ссылки на бота', link: '/ru/interaction/links.md'},
            {text: 'Инлайн-режим', link: '/ru/interaction/inline.md'},
            {text: 'Стикеры', link: '/ru/interaction/stickers.md'},
            {text: 'Платежи', link: '/ru/interaction/payments.md'},
            {text: 'Авторизация на сайте', link: '/ru/interaction/login-widget.md'},
            {text: 'HTML-игры', link: '/ru/interaction/html-games.md'},
            {text: 'Мини-приложения', link: '/ru/interaction/mini-apps.md'},
        ],
    },
]

export default sidebar
