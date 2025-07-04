import {DefaultTheme} from 'vitepress'

const sidebar: DefaultTheme.Sidebar = [
    {text: 'Home', link: '/en/index.md'},
    {
        text: 'Development',
        items: [
            {text: 'Intro', link: '/en/dev/basics.md'},
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
            {text: 'Message IDs', link: '/en/messages/id.md'},
        ],
    },
    {
        text: 'Chats', items: [
            {text: 'Users', link: '/en/chats/pm.md'},
            {text: 'Groups', link: '/en/chats/groups.md'},
            {text: 'Channels', link: '/en/chats/channels.md'},
            {text: 'Forums', link: '/en/chats/forums.md'},
            {text: 'Supergroups', link: '/en/chats/supergroups.md'},
            {text: 'Chat IDs', link: '/en/chats/id.md'},
        ],
    },
    {
        text: 'Interaction', items: [
            {text: 'Join Requests', link: '/en/interaction/join-requests.md'},
            {text: 'Bot Links', link: '/en/interaction/links.md'},
            {text: 'Inline Mode', link: '/en/interaction/inline.md'},
            {text: 'Stickers', link: '/en/interaction/stickers.md'},
            {text: 'Payments', link: '/en/interaction/payments.md'},
            {text: 'Web Login', link: '/en/interaction/login-widget.md'},
            {text: 'HTML Games', link: '/en/interaction/html-games.md'},
            {text: 'Mini Apps', link: '/en/interaction/mini-apps.md'},
        ],
    },
]

export default sidebar
