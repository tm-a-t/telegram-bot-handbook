# Mini-Guide on Implementing Telegram Bot Commands 

A common way to interact with bots is through commands. Commands start with “/” and consist of latin letters, digits, 
and underscores.

The commands are highlighted similarly to links. A user can tap on a command to send it.

![An example of using commands](/pictures/ru/commands.png)

## Commands in groups

In groups, to differentiate between commands meant for different bots, Telegram recommends ending the commands with the bot usernames: 
`/start@examplebot`.

When a user clicks on a command in a bot message, they will automatically send a command with the bot username in the end.

A bot can't see commands ending with other usernames: see [privacy mode explanation](../chats/groups#privacy).

## Command lists

Through BotFather, a bot developer can specify a list of command hints with short descriptions. 
In this case, whenever a user starts typing a command in chat with the bot, they will see autocomplete menu.

![An example of autocomplete with commands from multiple bots](/pictures/ru/commands-autocomplete.png)

In addition, users will see a "menu" button in personal dialogs and groups with the bot. The button
will open the autocomplete menu.

If there is `/help` in the command list, a "Help with bot" button which sends this command appears in bot profile.
Similarly, `/settings` command creates a "Settings" button and `/privacy` creates a "Privacy policy" button.

An alternative way to specify command hints is through API. This way, a bot may show different menus depending 
on users and groups. The menus can also depend on user language 
(which is convenient for localizing command descriptions) or user admin status 
(which can be used for group moderation features.)

## Command arguments

It is not forbidden to ask users to enter additional text after a command, like `/weather London`.

However, it's difficult for users to enter commands such way. If a user chooses a command in the auto-completion menu, they normally send it immediately. 
To complete the command but not send it, a user should press tab key in the desktop apps or long-tap the command 
in case of the mobile apps. This is a feature of which many users are not aware.

Telegram recommends implementing specific commands that can be used without arguments, like `/weather_london`.

If this is not a way for you, you can consider other ways of interaction. 
[Buttons](../messages/buttons) or [inline mode](../interaction/inline) may fit for selecting from multiple options. 
For some additional information from the user, the bot can simply ask a question in the next message. 
