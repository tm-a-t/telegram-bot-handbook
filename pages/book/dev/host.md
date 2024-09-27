# Running Your Telegram Bot on a Server

## Hosting

You will likely need a server, because you will want to get your program running with a stable power and internet
connection.

For that, you will need to buy a host. Bot programs usually need a small amount of resources, so 
a simple plan from any hosting provider will probably be fine.

## To note: Long-polling vs webhooks

If you are using Bot API, you may choose to use webhooks instead of long-polling updates.
This affects how you configure your server.

The default option is long-polling, meaning that the program regularly sends requests to the server to get new updates. 
If you set up a webhook instead, Telegram servers will make requests to the program whenever there are updates.

To set up a webhook, you will need to receive requests through a web application. For aiogram library, there
are [built-in features](https://docs.aiogram.dev/en/latest/dispatcher/webhook.html) to integrate with aiohttp 
or any other asynchronous web framework.

::: tabs key:libraries
== aiogram
```python

```
::: 

## Free hosting

If you are unable to pay for hosting, you can try [PythonAnywhere](https://www.pythonanywhere.com/) 
(which works unstably) or
[Yandex Cloud Functions](https://cloud.yandex.ru/docs/functions/tutorials/telegram-bot-serverless) (for serverless functions.)

[//]: # (todo: check)
