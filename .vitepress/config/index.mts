import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Telegram Bot Handbook',
    titleTemplate: 'The Handbook',
    description: 'The config on everything',
    cleanUrls: true,
    lastUpdated: true,
    appearance: 'dark',
    sitemap: {
        hostname: 'https://handbook.tmat.me',
    },
    head: [
        ['link', { rel: 'icon', href: 'https://vitepress.dev/favicon.ico' }]
    ],
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/en/',
        },
        ru: {
            label: 'Русский',
            lang: 'ru',
            titleTemplate: ':title — хендбук',
            description: 'Как написать надёжного бота',
            themeConfig: {
                sidebarMenuLabel: 'Меню',
                returnToTopLabel: 'Наверх',
                darkModeSwitchLabel: 'Тёмная тема',
                outline: {
                    level: 'deep',
                    label: 'На этой странице'
                },
                docFooter: {
                    prev: 'Назад',
                    next: 'Вперёд',
                },
                nav: [
                    {text: 'Поделиться', link: 'https://t.me/share?url=handbook.tmat.me/ru/'},
                ],
                editLink: {
                    pattern: 'https://github.com/tm-a-t/handbook/edit/main/:path',
                    text: 'Изменить',
                },
                lastUpdated: {
                    text: 'Обновлено',
                    formatOptions: {
                        // @ts-ignore
                        dateStyle: 'long',
                        forceLocale: true,
                    },
                },
                sidebar: [
                    {text: 'Начало', link: '/ru/index.md'},
                    {
                        text: 'Разработка',
                        items: [
                            {text: 'Основы', link: '/ru/dev/basics.md'},
                            {text: 'Telegram API', link: '/ru/dev/api.md'},
                            {text: 'Библиотеки', link: '/ru/dev/libraries.md'},
                            {text: 'Юзернеймы', link: '/ru/dev/usernames.md'},
                            {text: 'Настройка', link: '/ru/dev/botfather.md'},
                            {text: 'Апдейты', link: '/ru/dev/updates.md'},
                        ],
                    },
                    {
                        text: 'Сообщения', items: [
                            {text: 'Отправка', link: '/ru/messages/sending.md'},
                            {text: 'Разметка', link: '/ru/messages/markup.md'},
                            {text: 'Команды', link: '/ru/messages/commands.md'},
                            {text: 'Кнопки', link: '/ru/messages/buttons.md'},
                            {text: 'id сообщений', link: '/ru/messages/id.md'},
                        ],
                    },
                    {
                        text: 'Чаты', items: [
                            {text: 'ЛС', link: '/ru/chats/pm.md'},
                            {text: 'Группы', link: '/ru/chats/groups.md'},
                            {text: 'Каналы', link: '/ru/chats/channels.md'},
                            {text: 'Форумы', link: '/ru/chats/forums.md'},
                            {text: 'О супергруппах', link: '/ru/chats/supergroups.md'},
                            {text: 'id чатов', link: '/ru/chats/id.md'},
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
                ],
            },
        },
    },
    themeConfig: {
        logo: { src: 'https://vitepress.dev/vitepress-logo-mini.svg', width: 24, height: 24 },
        editLink: {
            pattern: 'https://github.com/tm-a-t/handbook/edit/main/:path'
        },
        outline: 'deep',
        search: {
            provider: 'local',
        },
        sidebar: [
            {text: 'Intro', link: '/en/index.md'},
        ],
        lastUpdated: {
            formatOptions: {
                // @ts-ignore
                dateStyle: 'long',
                forceLocale: true,
            },
        },
        nav: [
            {text: 'Share', link: 'https://t.me/share?url=handbook.tmat.me/en/'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/tm-a-t/handbook'},
        ],
    },
})
