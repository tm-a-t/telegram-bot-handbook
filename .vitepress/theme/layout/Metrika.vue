<script setup>
import {onMounted} from 'vue';
import {useRouter} from 'vitepress';

const router = useRouter();

function setPage(path) {
  if (typeof ym !== 'undefined') {
    ym(95150339, 'hit', path);
  }
}

onMounted(() => {
  setPage(router.route.path)
  router.onAfterRouteChanged = async (to) => {
    setPage(to);
  }
});
</script>

<template></template>
