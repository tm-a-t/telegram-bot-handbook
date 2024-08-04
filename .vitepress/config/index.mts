import {defineConfig} from 'vitepress'
import head from './head'
import ruConfig from './ru'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Papercraft',
    // titleTemplate: ':title / Papercraft',

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
            pattern: 'https://github.com/tm-a-t/handbook/edit/main/:path',
            text: 'Edit this page on GitHub',
        },
        lastUpdated: {
            formatOptions: {
                // @ts-ignore
                dateStyle: 'long',
                forceLocale: true,
            },
        },
        // logo: {dark: '/logo.svg', light: '/logo-dark.svg', alt: 'Handbook'},
        nav: [
            {text: 'Book', link: '/en/book/', activeMatch: '/en/book/.*'},
            // {text: 'Framework', link: '/en/framework/', activeMatch: '/en/framework/.*'},
            {text: 'TGPy', link: '/en/tgpy/', activeMatch: '/en/tgpy/.*'},
            // {text: 'Share', link: 'https://t.me/share?url=handbook.tmat.me/en/'},
        ],
        outline: 'deep',
        search: {
            provider: 'local',
        },
        sidebar: sidebar,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/tm-a-t/handbook'},
        ],
    },
})
