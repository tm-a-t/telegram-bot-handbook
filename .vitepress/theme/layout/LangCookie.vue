<script setup>
import {inBrowser, useData} from 'vitepress'
import { watch } from 'vue'
import * as CookieConsent from 'vanilla-cookieconsent'

const { lang } = useData()

function updateCookie() {
  if (inBrowser && CookieConsent.acceptedCategory('functionality')) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
}

watch(lang, () => {
  updateCookie()
})
</script>

<template>

</template>
