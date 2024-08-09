# Developing Telegram Bots for Forums

Forums are a special kind of groups that are split into multiple topics.
If your bot works in groups, you will want to check if it handles forums correctly.

<br>

<figure>

![Форум](/pictures/ru/forum.png)

<figcaption>In the picture, forum topics are listed and other chats have shrunk into a small column.</figcaption>
</figure>

## Technical perspective

Forum is simply a group with a special user interface. 
You can even view a forum as a regular chat in the official apps using the forum menu.

Let's discuss how topics work technically.

When a topic is created, a system message "Topic created" appears. Replies to this message fall into the topic.
Topic ID is the system message ID.

The General topic is the topic where all other messages go, and its ID equals to 1.

## Usage

If your bot works in groups, then you probably should consider the case when the group is the forum. 
For example, if a user sends a command, the bot should answer in the same topic 
(otherwise the response will appear in #general.)

## Managing topics

Bots can open, edit, and close topics just like users. 
Depending on the forum settings this may require special admin rights.
