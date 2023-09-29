import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Telegram Bot Handbook',
    titleTemplate: 'the handbook',
    description: 'Explore Telegram features, bot limitations, and API tricks.',
    cleanUrls: true,
    lastUpdated: true,
    appearance: 'dark',
    sitemap: {
        hostname: 'https://handbook.tmat.me',
    },
    head: [
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
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
            description: 'Карманное руководство разработчика ботов о фичах Телеграма и полезных приёмах',
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
        i18nRouting: false,  // change when start English version
        logo: {dark: '/logo.svg', light: '/logo-dark.svg', alt: 'Handbook'},
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
