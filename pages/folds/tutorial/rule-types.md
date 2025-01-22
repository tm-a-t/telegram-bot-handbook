# Rule Kinds

## Common rule kinds

A bunch of examples for Telegram events supported in Folds.

### Messages

```python
@bot.private_message
async def _():
    return 'I received a private message'
```

```python
@bot.group_message
async def _():
    return 'I received a message in a group'
```

```python
@bot.channel_message
async def _():
    return 'I received a message in a channel'
```

### Commands

```python
@bot.private_commands.hello
async def _():
    return 'I received /hello in PM'
```

```python
@bot.group_commands.hello
async def _():
    return 'I received /hello in a group'
```

### Group actions

```python
@bot.added_to_group
async def _():
    return 'Someone added me to a group'
```

```python
@bot.removed_from_group
async def _():
    pass  # The bot was removed from a group
```

```python
@bot.group_became_supergroup
async def _():
    return 'This group has just became supergroup'
```

See the Papercraft Book on [group bots](../../book/chats/groups) and [supergroups.](../../book/chats/supergroups)

## Combining rule kinds

Folds decorators don't change the function,
so you can combine several of them to declare common logic:

```python
@bot.group_command.help
@bot.private_command.help
async def _():
    return 'I will always help you'
```

## Telethon events

For events that are not listed above, you can declare rules in Telethon style.

```python
from telethon import events

@bot.on(events.NewMessage())
async def _():
    ...
```

[//]: # (todo come up with an example)
