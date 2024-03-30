# Extensive Text Formatting in Telegram Messages

Bot API allows specifying message markup in HTML or Markdown. Telegram API libraries like Telethon and Pyrogram 
usually support similar syntax.

Message text may include various markup:

- **Bold text**
- _Italic text_
- <u>Underlined text</u>
- <del>Strikethrough text</del>
- `Monospaced text`
- [Links](#)
- Spoilers, which mean hidden text
- User mentions through their ID
- Custom emoji (which are available only for bots with [paid usernames](../dev/usernames))

A message may contain no more than 100 such markup elements (more will be ignored.)

In addition, a message may contain any number of username mentions.

## Monospaced text

Monospaced can be a piece of text (similar to `<code>` in HTML) or a block (similar to `<pre>`).

When sending a monospaced text block, you can specify code language so that Telegram apps will apply syntax highlighting.

## Spoiler

A spoiler is some text hidden behind an animated cover.

Pictures can be hidden with a spoiler as well, though this is not related to message markup.

![text and picture behind the spoilers](/pictures/ru/spoiler.png)

## User mentions { #mention }

A mention is clickable text which leads to a user profile. To insert a mention using Bot API, one can embed a link 
of form `tg://user?ID=123456789`. A username of a user turns into a mention automatically.

When a group member gets mentioned, they get a notification. However, if a message contains more than five mentions,
only five users will get such notifications.

Bot may mention a user through ID only if they participate in the current chat or have turned on linking them 
while forwarding their messages. In addition, a bot must [have seen](../chats/pm#seen-users) the user.

Username mentions are technically regular text. When a user clicks on 
a username mention, Telegram app fetches info about the username owner.
On contrary, when sending ID mentions, the sender specifies the mentioned user ID which becomes a part of the message.
Recipients get the user profile together with the message, so the mention will be clickable even if the user changes 
its username.

## Related links

- [Bot API docs on markup](https://core.telegram.org/bots/api#formatting-options)
