# Mini-Guide on Implementing Telegram Bot Commands 

A common way to interact with bots is through commands. Commands start with "/" and consist of latin letters, digits, 
and underscores.

The commands are highlighted similarly to links, and a user can tap on a command to send it.

![An example of using commands](/pictures/ru/commands.png)

## Command arguments

Of course, you can ask users to enter additional text after a command, like `/weather London`.

However, this approach may not be user-friendly. 
When a user clicks on a command in the auto-completion menu, 
Telegram immediately sends the command without allowing for additional input.
To add text to a command without sending it, 
users must press the tab key in desktop apps or long-tap the command in mobile apps. 
Many users are unaware of these features.

Therefore, Telegram recommends implementing specific commands that can be used without arguments, 
such as `/weather_london`.

If this approach doesn't suit your needs, consider alternative interaction methods.
[Buttons](../messages/buttons) or [inline mode](../interaction/inline) work well for selecting from multiple options.
For collecting additional information, the bot can simply ask a follow-up question in the next message.

## Command lists

Through BotFather, a bot developer can specify a list of command hints with short descriptions.
When users start typing a command in a chat with the bot, they will see an autocomplete menu with these commands.

![An example of autocomplete with commands from multiple bots](/pictures/book/commands-autocomplete.png)

Users will also see a "menu" button in personal dialogs and groups with the bot. 
This button opens the autocomplete menu with available commands.

If your command list includes `/help`, a "Help with bot" button will appear in the bot's profile.
Similarly, including `/settings` creates a "Settings" button, and `/privacy` creates a "Privacy policy" button.

You can also specify command hints through the API instead of BotFather.
This way, a bot may show different menus for different users and groups.
The menus can also depend on user language (useful for localizing command descriptions)
or user admin status (helpful for group moderation features).

## Commands in groups

In groups with multiple bots, commands should include the bot's username to specify which bot should respond: 
for example, `/start@examplebot`.

When a user clicks on a command in a bot's message, Telegram automatically appends the bot's username to the command.

A bot cannot see commands that end with other bot usernames. 
For more information, see the [privacy mode explanation](../chats/groups#privacy).
