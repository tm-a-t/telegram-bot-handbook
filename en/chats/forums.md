# Understanding Telegram Forums for Bots 

Forums are groups splitted into multiple topics.

<br>

<figure>

![Форум](/pictures/ru/forum.png)

<figcaption>In the picture, forum topics are listed and other chats have shrunk into a small column.</figcaption>
</figure>

## How topics work

Forum is simply a group with a special user interface. You can view a forum as a regular chat in the official apps
using forum menu. (This mode indicates a topic of every message.)

Technically, topics work as following.

When a topic is created, a system message "Topic created" appears. Replies to this message fall into the topic.

Topic ID is the system message ID.

The #general topic is the topic where all other messages go. It has ID 1.

## Usage

If your bot works in groups, then you probably should consider the case when the group is the forum. 
For example, if a user sends a command, the bot should answer in the same topic 
(otherwise the response will appear in #general.)

## Managing topics

Bots can open, edit, and close topics just like users. Depending on the forum settings this may require an admin right.
