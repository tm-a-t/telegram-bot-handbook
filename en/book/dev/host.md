# Running Your Telegram Bot on a Server

## Hosting

You will likely need a server, because you will want to get your program running with a stable power and internet
connection.

For that, you will need to buy a host. Bot programs usually need a small amount of resources, so 
a simple plan from any hosting provider will probably be fine.

<!--

<div class="tip custom-block" style="padding: 16px">

Here is a place for an ad of your cool hosting service. Feel free to [contact me](https://t.me/tm_a_t) :)

</div>

-->

## Long-polling vs webhooks

Setting up a server depends on how your bot works. The default option is long-polling, meaning that the program 
regularly sends requests to the server to get new updates. But if you use Bot API, your program can alternatively
be a webhook, meaning that Telegram servers will make requests to the program whenever there are updates.

To set up a webhook, you will need to receive requests through a web application. For aiogram library, there
are [built-in features](https://docs.aiogram.dev/en/latest/dispatcher/webhook.html) to integrate with aiohttp 
or any other asynchronous web framework.

## Free hosting

If you are unable to pay for hosting, you can try [PythonAnywhere](https://www.pythonanywhere.com/) 
(which works unstably) or
[Yandex Cloud Functions](https://cloud.yandex.ru/docs/functions/tutorials/telegram-bot-serverless).
