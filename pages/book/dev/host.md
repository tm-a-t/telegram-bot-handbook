# Running Your Telegram Bot on a Server

## Hosting

You will likely need a server to run your bot with a stable power and internet connection.

For this purpose, you'll need to purchase hosting services. Bot programs typically require minimal resources, so 
a basic plan from most hosting providers should be sufficient.

## Free hosting

If you are unable to pay for hosting, you can try these free alternatives:
- [PythonAnywhere](https://www.pythonanywhere.com/) (note that it may work unstably)
- [Yandex Cloud Functions](https://cloud.yandex.ru/docs/functions/tutorials/telegram-bot-serverless) (for serverless functions)

## Long-polling vs webhooks

If you are using Bot API, you may choose to use webhooks instead of long-polling updates.
This choice will affect how you configure your server.

The default option is long-polling, where your program regularly sends requests to Telegram servers to check for new updates. 
With webhooks, Telegram servers will send HTTP requests to your program whenever there are updates available.

To set up a webhook, you'll need a web application capable of receiving HTTP requests. 
For the aiogram library, there are [built-in features](https://docs.aiogram.dev/en/latest/dispatcher/webhook.html) 
that integrate with aiohttp or other asynchronous web frameworks.

::: tabs key:libraries
== aiogram
See the guide on [aiogram webhooks](https://docs.aiogram.dev/en/latest/dispatcher/webhook.html)
== Other libraries
<HelpNeeded/>
::: 
