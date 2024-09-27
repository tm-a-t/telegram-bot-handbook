import sidebar from './sidebar'
import {DefaultTheme, LocaleSpecificConfig} from "vitepress";

const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    titleTemplate: ':title — хендбук',
    description: 'Карманное руководство разработчика Телеграм-ботов. Фичи и приёмы',
    head: [

    ],
    themeConfig: {
        logoLink: '/',
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
        editLink: {
            pattern: 'https://github.com/tm-a-t/papercraft/edit/main/:path',
            text: 'Изменить страницу на Гитхабе',
        },
        lastUpdated: {
            text: 'Обновлено',
            formatOptions: {
                // @ts-ignore
                dateStyle: 'long',
                forceLocale: true,
            },
        },
        sidebar: sidebar,
    },
}

export default ruConfig
