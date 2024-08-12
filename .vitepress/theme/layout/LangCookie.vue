<script setup>
import {inBrowser, useData, useRoute} from 'vitepress'
import { watch } from 'vue'
import * as CookieConsent from 'vanilla-cookieconsent'

const { lang, params } = useData()

function updateLangCookie() {
  if (inBrowser && params.value.hasRussianTranslation && cookieAllowed()) {
    console.log("!!!", lang.value)
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
}

function cookieAllowed() {
  return CookieConsent.acceptedCategory('functionality')
}

updateLangCookie()
watch(lang, updateLangCookie)
watch(() => params.value.hasRussianTranslation, updateLangCookie)
</script>

<template>

</template>
