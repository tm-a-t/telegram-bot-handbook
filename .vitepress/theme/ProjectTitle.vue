<script setup lang="ts">
import {useRoute} from 'vitepress';
import {computed} from 'vue';

const names = {book: 'Book', framework: 'Framework', tgpy: 'TGPy'};

const route = useRoute();
const name = computed(() => names[route.path.split('/')[2]]);
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
