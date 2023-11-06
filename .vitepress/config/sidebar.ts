import {DefaultTheme} from 'vitepress'

const sidebar: DefaultTheme.Sidebar = [
    {text: 'Intro', link: '/en/index.md'},
    {
        text: 'Development',
        items: [
            {text: 'Basics', link: '/en/dev/basics.md'},
            {text: 'Telegram API', link: '/en/dev/api.md'},
            {text: 'Libraries', link: '/en/dev/libraries.md'},
            {text: 'Usernames', link: '/en/dev/usernames.md'},
            {text: 'Settings', link: '/en/dev/botfather.md'},
            {text: 'Updates', link: '/en/dev/updates.md'},
            {text: 'Host', link: '/en/dev/host.md'},
        ],
    },
    {
        text: 'Messages', items: [
            {text: 'Sending', link: '/en/messages/sending.md'},
            {text: 'Markup', link: '/en/messages/markup.md'},
            {text: 'Commands', link: '/en/messages/commands.md'},
            {text: 'Buttons', link: '/en/messages/buttons.md'},
            {text: 'Message ids', link: '/en/messages/id.md'},
        ],
    },
    {
        text: 'Chats', items: [
            {text: 'Users', link: '/en/chats/pm.md'},
            {text: 'Groups', link: '/en/chats/groups.md'},
            {text: 'Channels', link: '/en/chats/channels.md'},
            {text: 'Forums', link: '/en/chats/forums.md'},
            {text: 'About supergroups', link: '/en/chats/supergroups.md'},
            {text: 'Chat ids', link: '/en/chats/id.md'},
        ],
    },
    {
        text: 'Interaction', items: [
            {text: 'Join requests', link: '/en/interaction/join-requests.md'},
            {text: 'Bot links', link: '/en/interaction/links.md'},
            {text: 'Inline mode', link: '/en/interaction/inline.md'},
            {text: 'Stickers', link: '/en/interaction/stickers.md'},
            {text: 'Payments', link: '/en/interaction/payments.md'},
            {text: 'Web login', link: '/en/interaction/login-widget.md'},
            {text: 'HTML games', link: '/en/interaction/html-games.md'},
            {text: 'Mini apps', link: '/en/interaction/mini-apps.md'},
        ],
    },
]

export default sidebar
