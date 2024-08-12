<script setup lang="ts">
import {useRoute} from 'vitepress';
import {computed} from 'vue';

const route = useRoute();
const name = computed(() => {
  if (route.path.startsWith('/book') || route.path.startsWith('/ru/book')) {
    return 'Book'
  }
  if (route.path.startsWith('/framework')) {
    return 'Framework'
  }
  if (route.path.startsWith('/tgpy')) {
    return 'TGPy'
  }
});
</script>

<template>
  <Badge class="badge" type="tip" :text="name" v-if="name"/>
</template>

<style scoped>
.badge {
  position: relative;
  top: 3px;
  margin-left: 4px;
}
</style>
