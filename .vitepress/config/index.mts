import {defineConfig} from 'vitepress'
import head from './head'
import ruConfig from './ru'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Telegram Bot Handbook',
    titleTemplate: 'Handbook',

    appearance: 'dark',
    cleanUrls: true,
    description: 'Explore Telegram features, bot limitations, and API tricks.',
    head: head,
    lastUpdated: true,
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/en/',
        },
        ru: {
            label: 'Русский',
            lang: 'ru',
            ...ruConfig,
        },
    },
    sitemap: {
        hostname: 'https://handbook.tmat.me',
    },
    srcExclude: ['readme.md'],
    markdown: {
        config: (md) => {
            md.disable('emoji')
        }
    },
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/tm-a-t/handbook/edit/main/:path'
        },
        // remove next line when start English version
        i18nRouting: false,
        lastUpdated: {
            formatOptions: {
                // @ts-ignore
                dateStyle: 'long',
                forceLocale: true,
            },
        },
        logo: {dark: '/logo.svg', light: '/logo-dark.svg', alt: 'Handbook'},
        nav: [
            {text: 'Share', link: 'https://t.me/share?url=handbook.tmat.me/en/'},
        ],
        outline: 'deep',
        search: {
            provider: 'algolia',
            options: {
                appId: 'XWCAXSO1PW',
                apiKey: 'baac738133a1f9099fb1aa9fce51603b',
                indexName: 'handbook-tmat',
            }
        },
        sidebar: sidebar,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/tm-a-t/handbook'},
        ],
    },
})
