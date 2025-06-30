# Arguments

When you declare the rules with typed parameters, Folds provides the arguments automatically:

- `str`: gets the current message text
- `Message` or `SystemMessage` (or another Telethon event): gets the current event
- `ThisReplyTo`: resolves the message which this message replies to
- `ThisChat`: resolves the current chat
- `ThisSender`: resolves the current sender
- `ThisInputChat`: resolves the current Telethon input chat
- `ThisInputSender`: resolves the current Telethon input sender

## Example

```python
@bot.group_message()
async def f(chat: ThisChat):
    # Now, Telethon has resolved the chat even if 
    # the chat info didn't come with the update 
    return f'I got a message from {chat.title}'
```

If rewritten without `ThisChat`, the code becomes:

```python
@bot.group_message()
async def f(message: Message):
    chat = await message.get_chat()
    return f'I got a message from {chat.title}'
```
