import {LocaleSpecificConfig} from 'vitepress/types/shared'
import {DefaultTheme} from 'vitepress/types/default-theme'
import sidebar from './sidebar'

const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    titleTemplate: ':title — хендбук',
    description: 'Карманное руководство разработчика Телеграм-ботов. Фичи и приёмы',
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
            {text: 'Book', link: '/ru/book/', activeMatch: '/ru≈/book/.*'},
            // {text: 'Framework', link: '/en/framework/', activeMatch: '/en/framework/.*'},
            {text: 'TGPy', link: '/ru/tgpy/', activeMatch: '/ru/tgpy/.*'},
        ],
        editLink: {
            pattern: 'https://github.com/tm-a-t/handbook/edit/main/:path',
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
