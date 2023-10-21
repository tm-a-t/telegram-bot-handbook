<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import {useRouter} from 'vitepress';
import {onMounted} from 'vue';

const {Layout} = DefaultTheme;
const router = useRouter();

onMounted(() => {
  console.log('ine')
  router.onAfterRouteChanged = async (to: string) => {
    ym(95150339, 'hit', to);
  }
});
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