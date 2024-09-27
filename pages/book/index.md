---
title: Papercraft Book
titleTemplate: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/tm-a-t.png',
    name: 'Artyom Ivanov',
    title: 'Author',
    links: [
      { icon: 'github', link: 'https://github.com/tm-a-t' },
    ]
  },
  {
    avatar: 'https://www.github.com/vanutp.png',
    name: 'Ivan Filipenkov',
    title: 'Expert',
    links: [
      { icon: 'github', link: 'https://github.com/tm-a-t' },
    ]
  },
  {
    name: '???',
    title: 'Editor',
    links: [
      { icon: 'github', link: 'https://github.com/tm-a-t' },
    ]
  },
]
</script>



# Papercraft Book

Welcome to Papercraft Book!
This is your guide to developing user-friendly, featureful, and stable bots for Telegram messenger.
The book is independent of any specific programming language or library.
In fact, it includes examples for different libraries,
and I will gladly accept contributions from readers who add examples for more libraries.

[//]: # (It is designed to be used together with library docs and Telegram API reference.)

We will cover all major features of Telegram bot platform,
starting from as common as `/commands` and ending with the most specific ones,
like managing join requests and subtopics in groups.
In addition, we will learn about the corner cases and development tips.

Another focus of this book is user experience.
The book describes how to make bots easy to use and when common Telegram features have better alternatives.

To sum up — Papercraft Book is my attempt to collect everything you will want to learn but probably won't find
in your library docs or API reference.
I believe it to be the most complete and practical guide on developing bots for Telegram.

## Table of contents

The book is four chapters, each divided into multiple pages:

1. [**Development.**](dev/basics)
   Things to note before you start coding: API and libraries, bot configuration, some basic notions and tips.
2. [**Messages.**](messages/sending)
   Features of messages: sending/editing/deleting, commands, markup, buttons.
3. [**Chats.**](chats/users) 
   Managing user data & developing bots for different kinds of chats.
   Rules of PM, groups, and channels. Forums and supergroups.
4. [**Interaction.**](interaction/join-requests) 
   Non-dialog Telegram features: join requests, deep links, payments, mini apps, etc.

Feel free to use navigation on the left or just hit the "Next page" button below.

## Book updated

This site was previously called Telegram Bot Handbook and was more like a reference of Telegram features.
Now, I've rewritten it so it became — well, a book. What changed:
- todo

The site is now called Papercraft and contains not only the book but also docs 
for TGPy userbot and docs for my new Folds framework.

## About

<VPTeamMembers size="small" :members="members" />

Some pictures and videos are taken from the Telegram site. Most screenshots are made in Telegram web apps.

The sources are open on GitHub. Corrections and improvements are welcome!
