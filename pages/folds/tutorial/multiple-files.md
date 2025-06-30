# Multiple Files

You may want to split bot logic into multiple files — this is where _skills_ may become useful.

A skill holds a set of rules that can be altogether applied to a bot:

```python
from folds import skill

skill = Skill()

@skill.private_message()
async def f():
    return 'Hi'

bot.use(skill)
```

For example, if your bot operates differently in PMs and groups, 
you can declare one skill with the PM rules and another skill with the group rules.
In a multi-bot application (more on that later), you can define a common skill and individual skills for each bot.

Note that skills don't dispatch anything; they just store rules for easier organization.

## Context variables

A useful feature of skills is that you can declare a skill in a separate file that knows nothing about the actual bot.

In the rules, though, you may still need to use some info on the current bot. 
Then you can use special context variables:

```python
from folds import Skill
from folds.context import bot, client

skill = Skill()

@skill.private_message()
async def f():
    print(bot, client)
    return 'You are speaking to @' + client.me.username
```
