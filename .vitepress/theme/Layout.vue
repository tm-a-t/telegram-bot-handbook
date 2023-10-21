<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import {useRouter} from 'vitepress';

const {Layout} = DefaultTheme;
const router = useRouter();

router.onAfterRouteChanged = async (to: string) => {
  if (!import.meta.env.SSR) {
    ym(95150339, 'hit', to);
  }
}
</script>

<template>
  <Layout></Layout>
</template>

<style>
/*
.VPSidebar {
  background: url('background.svg') top right;
  background-size: 50vh;
}
*/
</style>