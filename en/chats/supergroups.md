# What Telegram Supergroups Are 

A long time ago, Telegram developers introduced two types of groups: regular ones and supergroups.
Supergroups were to use for big communities, having a larger member limit, public links, and other features.

Apparently, this idea was later considered inconvenient. Telegram apps no longer mention such term as "supergroup",
and both group types look the same.

Technical distinctions though remained. The main trait of supergroups is that they are a special case of channels.

I use the term "groups" both for regular groups and supergroups in the handbook. 

## Creating supergroup

A regular group turns into a supergroup while certain settings are changed. As technically the group is replaced with 
a supegroup-channel, [chat ID](../chats/ID) changes. A supergroup cannot become a regular group again.

## Message and group IDs

[Message IDs work differently in regular groups and supergroups](../messages/ID).
In addition, in Bot API regular group IDs start with `-` prefix while supergroup IDs start with `-100`.

## Gigagroups (broadcast groups)

A maximal number of supergroup members is 200 000. When it's close to the limit, Telegram app suggests admins
turn the supergroup into the gigagroup. Gigagroups may contain an unlimited number of members, 
but only admins can send messages there.

I have no idea why they exist.

## Related links

- (Russian) [Features of different types of groups. Cases when a regular group turns into a supergroup](https://tginfo.me/groups_vs_supergroups/)
- [Telegram API. Differences between regular groups, supergroups, and gigagroups](https://core.telegram.org/api/channel)
