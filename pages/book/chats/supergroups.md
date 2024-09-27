# Supergroups in Telegram

When you use Telegram, you deal with groups regularly. 
The truth is that what looks like groups in Telegram UI is actually two kinds of entities: groups and supergroups.

## What are supergroups

A long time ago, Telegram developers introduced two types of groups: regular ones and supergroups.
Supergroups had public links, larger limit for the number of members, and other features designed for big communities.

Apparently, this idea has later been considered rather confusing. Telegram app interface no longer mentions 
"supergroups" and all groups look the same there, although on the technical level two types remain distinguish.
In fact, most of the groups you participate in are probably supergroups.

The main trait of supergroups is that API considers them a special case of channels.

::: tabs key:libraries
== Telethon & Folds
How to check the type of chat using API types:
```python
from telethon.tl.types import Chat, Channel, User

if isinstance(chat, Channel) and chat.megagroup:
    print('This is a supergroup')  # 'megagroup' is an API term for the same thing
if isinstance(chat, Channel) and not chat.megagroup:
    print('This is a real channel')
if isinstance(chat, Chat):
    print('This is a regular group')
if isinstance(chat, User):
    print('This is PM')
```
How to check the type of chat from an update using Telethon helpers:
```python
if message.is_group:
    print('This is a supergroup or a regular group')
if message.is_channel:
    print('This is a channel or a supergroup')
if message.is_private:
    print('This is PM')
```
== Other libraries
<HelpNeeded/>
:::

I use the term "groups" both for regular groups and supergroups in this book. 
For more info about group bots, see [the page about groups.](../chats/groups)




## Turning into a supergroup

A regular group becomes a supergroup while certain settings are changed. 
As technically the group is replaced with a supegroup (which is a new channel), its [chat ID](../chats/id) changes. 
You may want to handle this event if you store the chats in a database:

::: tabs key:libraries
== Folds
```python
@bot.supergroup_created
async def _():
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

A supergroup cannot become a regular group again.

## Message and group IDs

On the next page we will discuss [how group IDs are different for groups and supergroups in Bot API.](id#bot-api)
In addition, regular groups and supergroups are different in terms of how message ID work
which we will also [discuss further.](../messages/id)


## Gigagroups (broadcast groups)

Gigagroups are yet another type of groups in Telegram. 
They are very rare though, so this is just FYI.

A maximal number of supergroup members is 200.000. 
When it's close to the limit, Telegram app suggests admins turn the supergroup into a gigagroup. 
Gigagroups may contain an unlimited number of members, but only admins can send messages there.

I have no idea why they exist.

## Related links

- (Russian) [Features of different types of groups. Cases when a regular group turns into a supergroup](https://tginfo.me/groups_vs_supergroups/)
- [Telegram API. Differences between regular groups, supergroups, and gigagroups](https://core.telegram.org/api/channel)
