<script setup lang="ts">
import {useRoute} from 'vitepress';
import {computed} from 'vue';

const route = useRoute();
const config = computed(() => {
  if (route.path.startsWith('/book') || route.path.startsWith('/ru/book')) {
    return {name: 'Book', showDivider: false}
  }
  if (route.path.startsWith('/folds')) {
    return {name: 'Folds', showDivider: true}
  }
  if (route.path.startsWith('/tgpy')) {
    return {name: 'TGPy', showDivider: true}
  }
  return {name: '', showDivider: false}
});
</script>

<template>
  <span v-if="config.showDivider" class="divider">›</span>
  <span v-else>&nbsp;</span>
  {{ config.name }}
<!--  <Badge class="badge" type="info" :text="name" v-if="name"/>-->
</template>

<style scoped>
.divider {
  color: var(--vp-c-text-3);
  margin: 0 6px;
}
</style>
