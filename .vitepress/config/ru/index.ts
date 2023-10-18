import {LocaleSpecificConfig} from 'vitepress/types/shared'
import {DefaultTheme} from 'vitepress/types/default-theme'
import sidebar from './sidebar'

const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    titleTemplate: ':title — хендбук',
    description: 'Карманное руководство разработчика ботов о фичах и полезных приёмах в Телеграме',
    head: [

    ],
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
        sidebar: sidebar,
    },
}

export default ruConfig
