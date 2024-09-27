<script setup>
import {inBrowser, useData, useRoute, useRouter} from 'vitepress'
import {watch} from 'vue'
import * as CookieConsent from 'vanilla-cookieconsent'

const { lang, params } = useData()
const router = useRouter()

updateLangCookie()
watch(lang, updateLangCookie)
router.onBeforeRouteChange = (to) => {
  if (to.startsWith('/ru/') ^ router.route.path.startsWith('/ru/')) {
    return
  }
  if (isRussianSet() && to.startsWith('/book/')) {
    router.go('/ru' + to)
    return false
  }
}

function updateLangCookie() {
  if (inBrowser && params.value.hasRussianTranslation && isCookieAllowed()) {
    console.log("!!!", lang.value)
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
}

function isCookieAllowed() {
  return CookieConsent.acceptedCategory('functionality')
}

function isRussianSet() {
  return getCookie('nf_lang') === 'ru'
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length < 2) return null;
  return parts.pop().split(';').shift();
}

</script>

<template>

</template>
