# Extensive Text Formatting in Telegram Messages

Sometimes you want to decorate text in your messages to highlight important things or reference URLs and users.
There is a lot of formatting options in Telegram, so please don't get carried away :) The simpler, the better.

Markup elements in Telegram messages include:

- **Bold text**
- _Italic text_
- <u>Underlined text</u>
- <del>Strikethrough text</del>
- `Monospaced text`
- [Links](#)
- Spoilers (hidden text, see below)
- User mentions through their ID (see below)
- Block quotation (which can be expandable)
- Custom emoji (which are available only for bots with [paid usernames](../dev/usernames))

A message may contain no more than 100 such markup elements. If you try to send a message with more,
the rest will be ignored.
In addition to them, a message may contain any number of username mentions. 
(Note that only five mentions will trigger user notifications; see the User mentions section below for details.)

Bot API allows specifying message markup in HTML or Markdown. 
Telegram API, on the other hand, does not have this functionality built-in,
but Telegram API libraries like Telethon and Pyrogram support similar syntax.

## Monospaced text

Monospaced text can be formatted as an inline element (similar to `<code>` in HTML) or as a block (similar to `<pre>`).

When sending a monospaced text block, you can specify code language so that Telegram apps will apply syntax highlighting.

## Spoilers

A spoiler is text hidden behind an animated cover that users can tap to reveal.

Pictures can be hidden with a spoiler as well, though this is not related to message markup.

![text and picture behind the spoilers](/pictures/ru/spoiler.png)

## User mentions { #mention }

A mention is clickable text that links to a user profile. 
To create a mention using Bot API, you can embed a link in the format `tg://user?ID=123456789`. 
A username automatically becomes a mention when included in a message.

When a group member is mentioned, they receive a notification. 
However, if a message contains more than five mentions, only the first five users will receive notifications.

Bot may mention a user through ID only if they participate in the current chat or have turned on linking them 
while forwarding their messages. Additionally, a bot must [have seen](../chats/pm#seen-users) the user.

There's an important distinction between username mentions and ID mentions:
- Username mentions are simply text that references a username (e.g., @username). When clicked, the Telegram app looks up information about the username owner.
- ID mentions contain the actual user ID. Recipients receive the user's profile information along with the message, making the mention clickable even if the user later changes their username.

## Related links

- [Bot API docs on markup](https://core.telegram.org/bots/api#formatting-options)
