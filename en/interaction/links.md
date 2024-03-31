# Creating Links to Bots

## Regular links

Links to bots ar similar to links to users, groups, and channels: 
the link [t.me/examplebot](https://t.me/examplebot) opens the bot with the username `@examplebot`.

There is also a direct link:
[tg://resolve?domain=examplebot](tg://resolve?domain=examplebot)

::: info About tg:// links

Links starting with tg:// may replace t.me links or do special actions.
For example, the link [tg://settings](tg://settings) opens settings in Telegram apps.

Such links are listed [in API documentation](https://core.telegram.org/api/links) and 
in the unofficial [@DeepLink](https://t.me/deeplink) channel.

:::

## Deep links

Deep link is a link of form [t.me/examplebot?start=YOUR_TEXT](https://t.me/examplebot?start=ВАШ_ТЕКСТ). They are used to start a dialog with the bot
with some initial parameters.

This works as following. Once a user visits a deep link, they see a dialog with the bot and the "Start" button 
(even if they have already [started the dialog](../chats/pm)). A click on the button sends `/start YOUR_TEXT`.
The user, however, sees only `/start`, like if starting the bot regularly.

<video controls loop muted preload="auto">
<source src="/pictures/ru/start.webm" type="video/mp4">
</video>

Deep links are often used for referral programs: for example, the parameter can be ID of the user who shared the link.

The direct link is similar: [tg://resolve?domain=examplebot&start=YOUR_TEXT](tg://resolve?domain=examplebot&start=ВАШ_ТЕКСТ)

## Deep links for groups

There are deep links for groups as well..

The link of form [t.me/examplebot?startgroup=YOUR_TEXT](https://t.me/examplebot?startgroup=ВАШ_ТЕКСТ) opens a chat selection dialog to add the bot;
once the bot is added, the command `/start YOUR_TEXT` will immediately be sent to the group.

The direct link: [tg://resolve?domain=examplebot&startgroup=true](tg://resolve?domain=examplebot&startgroup=true)

## Related links (not deep ones)

- [Telegram docs on deep links](https://core.telegram.org/bots/features#deep-linking)
