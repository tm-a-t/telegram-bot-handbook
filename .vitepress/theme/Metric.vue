<script setup>
import {onMounted} from 'vue';
import {useRouter} from 'vitepress';

const router = useRouter();

onMounted(() => {
  ym(95150339, 'hit', router.route.path);
  const onAfterRouteChanged = router.onAfterRouteChanged
  router.onAfterRouteChanged = async (to) => {
    ym(95150339, 'hit', to);
    await onAfterRouteChanged(to);
  }
});
</script>

<template></template>
