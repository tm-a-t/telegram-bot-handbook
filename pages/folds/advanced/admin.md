# Admin Rules

You can set admin settings in order to restrict some rules only to a subset of users.
I made this feature built-in because it is something I have implemented for almost every bot.

## Simple admin

You can specify the list of user ids — and the chat id, if you have a group for admins.

```python
admin_config = SimpleAdmin(user_ids=[111111111, 222222222], chat_id=999999999)
bot = Bot(..., admin=admin_config)

@bot.admin.private_command.stats()
async def f():
    return 'An admin sent /stats to PM!'

@bot.admin.group_command.stats()
async def f():
    return 'Someone sent /stats to the admin group!'
```


## Use cases

For more advanced use cases:
- If you don’t have a fixed set of admins — and you want to retrieve it from a database, for example — 
  you can implement the `Admin` interface itself and use it instead of `SimpleAdmin` the same way.
- If you have a more complex structure of admins with different permissions, 
  I suggest you implement some custom decorators and checks.
