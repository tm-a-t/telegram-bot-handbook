import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Telegram Bot Handbook',
    titleTemplate: 'Handbook',
    description: 'The config on everything',
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
        hostname: 'https://handbook.tmat.me',
    },
    head: [

    ],
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/en/',
        },
        ru: {
            label: 'Russian',
            lang: 'ru',
            titleTemplate: 'Хендбук',
            description: 'Как написать надёжного бота',
            themeConfig: {
                nav: [
                    {text: 'Поделиться', link: 'https://t.me/share?url=handbook.tmat.me'},
                ],
            }
        },
    },
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/tm-a-t/handbook/edit/main/:path'
        },
        outline: 'deep',
        search: {
            provider: 'local',
        },
        nav: [
            {text: 'Share', link: 'https://t.me/share?url=handbook.tmat.me'},
        ],
        sidebar: {
            '/ru/': [
                {text: 'Начало', link: '/ru/index.md'},
                {
                    text: 'Разработка',
                    items: [
                        {text: 'Основы', link: '/ru/dev/basics.md'},
                        {text: 'Telegram API', link: '/ru/dev/api.md'},
                        {text: 'Библиотеки', link: '/ru/dev/libraries.md'},
                        {text: 'Юзернеймы', link: '/ru/dev/usernames.md'},
                        {text: 'Регистрация', link: '/ru/dev/create.md'},
                        {text: 'Апдейты', link: '/ru/dev/updates.md'},
                        {text: 'Хостинг', link: '/ru/dev/host.md'},
                    ],
                },
                {
                    text: 'Сообщения', items: [
                        {text: 'Отправка', link: '/ru/messages/sending.md'},
                        {text: 'Разметка +', link: '/ru/messages/markup.md'},
                        {text: 'Команды', link: '/ru/messages/commands.md'},
                        {text: 'Кнопки', link: '/ru/messages/buttons.md'},
                        {text: 'id сообщений', link: '/ru/messages/id.md'},
                    ],
                },
                {
                    text: 'Чаты', items: [
                        {text: 'Личные сообщения', link: '/ru/chats/pm.md'},
                        {text: 'Группы', link: '/ru/chats/groups.md'},
                        {text: 'Каналы', link: '/ru/chats/channels.md'},
                        {text: 'О супергруппах', link: '/ru/chats/supergroups.md'},
                        {text: 'Форумы', link: '/ru/chats/forums.md'},
                        {text: 'id чатов +', link: '/ru/chats/id.md'},
                    ],
                },
                {
                    text: 'Интерактивность', items: [
                        {text: 'Ссылки на бота', link: '/ru/interaction/links.md'},
                        {text: 'Инлайн-режим', link: '/ru/interaction/inline.md'},
                        {text: 'Стикеры', link: '/ru/interaction/stickers.md'},
                        {text: 'Платежи', link: '/ru/interaction/payments.md'},
                        {text: 'HTML-игры', link: '/ru/interaction/html-games.md'},
                        {text: 'Login Widget', link: '/ru/interaction/login-widget.md'},
                    ],
                },
            ],
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/tm-a-t/handbook'},
        ],
    },
})
