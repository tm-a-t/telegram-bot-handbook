# Developing Telegram Bots for Forums

Forums are a special kind of groups that are split into multiple topics.
If your bot works in groups, you want to check if it handles forums correctly.

<br>

<figure>

![Форум](/pictures/ru/forum.png)

<figcaption>In the picture, forum topics are listed and other chats have shrunk into a small column.</figcaption>
</figure>

## Technical perspective

Forum is simply a group with a special user interface. 
You can even open a forum in a regular chat view using the forum menu in the official apps.

Let's discuss how topics work technically.
When a topic is created, a system message "Topic created" appears. 
All replies to this message then fall into the topic.
Topic ID is exactly the system message ID.
The General topic is the topic where all other messages go, and its ID equals to 1.

## Usage

If your bot works in groups, then you probably should consider the case when the group is the forum. 
For example, if a user sends a command, the bot should answer in the same topic 
(otherwise the response will appear in the General topic.)

::: tabs key:libraries
== Folds
```python
from folds import Message, UseChat

...

@bot.group_message
async def _(message: Message, chat: UseChat):
    if chat.forum:
        await message.reply('Reply')
        return
    await message.respond('Hello')
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

## Managing topics

Bots can open, edit, and close topics just like users. 
Depending on the forum settings this may require special admin rights.

todo https://core.telegram.org/api/threads
