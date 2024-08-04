import {DefaultTheme} from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
    '/en/book/': [
        {text: 'Introduction', link: '/en/book/'},
        {
            text: 'Development',
            items: [
                {text: 'Bots?', link: '/en/book/dev/basics'},
                {text: 'Telegram API', link: '/en/book/dev/api'},
                {text: 'Libraries', link: '/en/book/dev/libraries'},
                {text: 'Usernames', link: '/en/book/dev/usernames'},
                {text: 'Settings', link: '/en/book/dev/botfather'},
                {text: 'Updates', link: '/en/book/dev/updates'},
                {text: 'Host', link: '/en/book/dev/host'},
            ],
        },
        {
            text: 'Messages',
            items: [
                {text: 'Sending', link: '/en/book/messages/sending'},
                {text: 'Markup', link: '/en/book/messages/markup'},
                {text: 'Commands', link: '/en/book/messages/commands'},
                {text: 'Buttons', link: '/en/book/messages/buttons'},
                {text: 'Message IDs', link: '/en/book/messages/id'},
            ],
        },
        {
            text: 'Chats',
            items: [
                {text: 'Users', link: '/en/book/chats/pm'},
                {text: 'Groups', link: '/en/book/chats/groups'},
                {text: 'Channels', link: '/en/book/chats/channels'},
                {text: 'Forums', link: '/en/book/chats/forums'},
                {text: 'Supergroups', link: '/en/book/chats/supergroups'},
                {text: 'Chat IDs', link: '/en/book/chats/id'},
            ],
        },
        {
            text: 'Interaction',
            items: [
                {text: 'Join Requests', link: '/en/book/interaction/join-requests'},
                {text: 'Bot Links', link: '/en/book/interaction/links'},
                {text: 'Inline Mode', link: '/en/book/interaction/inline'},
                {text: 'Stickers', link: '/en/book/interaction/stickers'},
                {text: 'Payments', link: '/en/book/interaction/payments'},
                {text: 'Web Login', link: '/en/book/interaction/login-widget'},
                {text: 'HTML Games', link: '/en/book/interaction/html-games'},
                {text: 'Mini Apps', link: '/en/book/interaction/mini-apps'},
            ],
        },
        {
            text: 'Appendix',
            collapsed: true,
            items: [
                {text: 'API Comparison', link: '/en/book/appendix/api-comparison'},
                {text: 'Official Bots', link: '/en/book/appendix/official-bots'},
            ],
        },
    ],

    '/en/framework/': [

    ],

    '/en/tgpy/': [
        {
            text: '',
            items: [
                {text: 'Quickstart', link: '/en/tgpy/'},
                {text: 'Installation', link: '/en/tgpy/installation'},
            ],
        },
        {
            text: 'Basics',
            items: [
                {text: 'Running Code', link: '/en/tgpy/basics/code'},
                {text: 'Asyncio', link: '/en/tgpy/basics/asyncio'},
                {text: 'Messages', link: '/en/tgpy/basics/messages'},
                {text: 'Examples', link: '/en/tgpy/basics/examples'},
            ],
        },
        {
            text: 'Extensibility',
            items: [
                {text: 'Context Data', link: '/en/tgpy/extensibility/context'},
                {text: 'Modules', link: '/en/tgpy/extensibility/modules'},
                {text: 'Module Examples', link: '/en/tgpy/extensibility/module-examples'},
                {text: 'Transformers & Hooks', link: '/en/tgpy/extensibility/transformers'},
                {text: 'Other API Features', link: '/en/tgpy/extensibility/api'},
            ],
        },
        {
            text: 'Reference',
            items: [
                {text: 'Builtins', link: '/en/tgpy/reference/builtins'},
                {text: 'Module Metadata', link: '/en/tgpy/reference/module-metadata'},
                {text: 'Code Detection', link: '/en/tgpy/reference/code-detection'},
            ],
        },
        {
            text: 'TGPy Recipes',
            items: [
                {text: 'About recipes', link: '/en/tgpy/recipes/about'},
                {text: 'Asking ChatGPT from TGPy', link: '/en/tgpy/recipes/chatgpt'},
                {text: 'Throwing dice (and faking the result)', link: '/en/tgpy/recipes/dice'},
                {text: 'Setting up reminders', link: '/en/tgpy/recipes/reminders'},
                {text: 'Auto-adding group members to contacts to see their stories', link: '/en/tgpy/recipes/contacts'},
                {text: 'Writing TGPy programs in code editors', link: '/en/tgpy/recipes/editors'},
            ],
        },
        {text: 'Russian Chat', link: 'tg://resolve?domain=tgpy_flood'},
    ],
}


export default sidebar
