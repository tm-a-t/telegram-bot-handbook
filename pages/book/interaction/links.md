# Creating Links to Bots

Links are a common entry point to using a bot. 
_Deep links_ can be used for starting bot dialogs with some extra input.

## Regular links

The same way as with users, groups, and channels, 
the link `t.me/examplebot` opens the bot with the username `@examplebot`.

## Deep links

Deep links are links of form `t.me/examplebot?start=YOUR_TEXT`. 
They are used to start a personal dialog with the bot with some initial parameters.

Let's break it down. 
Once a user visits a deep link, they see a dialog with the bot and the "Start" button 
(even if they have already [started the dialog).](../chats/pm) 
The button sends `/start YOUR_TEXT`.
The user, however, sees only `/start`, like if starting the bot regularly.

<video controls loop muted preload="auto">
<source src="/pictures/ru/start.webm" type="video/mp4">
</video>

Deep links are often used for referral programs: for example, the parameter can be ID of the user who shared the link.

## Deep links for groups

There is a variant of deep links for groups as well.

The link of form `t.me/examplebot?startgroup=YOUR_TEXT` opens a chat selection dialog to add the bot;
once the bot is added, the command `/start YOUR_TEXT` will immediately be sent to the group.

## Using `tg://` links

All links that we considered above also have `tg://` equivalents. These are direct links that can be opened within the app:

- Regular link: `tg://resolve?domain=examplebot`
- Deep link: `tg://resolve?domain=examplebot&start=YOUR_TEXT`
- Group deep link: `tg://resolve?domain=examplebot&startgroup=true`

There are more direct links that may replace `t.me` links or do special actions.
For example, the link to [tg://settings](tg://settings) opens settings in some Telegram apps.
Such links are listed [in API documentation](https://core.telegram.org/api/links) and
in the unofficial [@DeepLink](https://t.me/deeplink) channel.


## Related links (but not to bots)

- [Telegram docs on deep links](https://core.telegram.org/bots/features#deep-linking)
