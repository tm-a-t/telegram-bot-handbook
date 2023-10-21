<script setup lang="ts">
import {useSidebar} from 'vitepress/theme';

const {sidebar, isSidebarEnabled} = useSidebar();

const props = defineProps<{
  items?: any[],
}>();
const items = props.items || sidebar;

function stripExtension(filename: string) {
  return filename.substring(0, filename.length - '.md'.length);
}
</script>

<template>
  <ul v-if="!isSidebarEnabled" :class="{'top-level': !props.items}">
    <template v-for="item in items">
      <li v-if="item.link !== '/ru/index.md'">
        <a v-if="item.link" :href="stripExtension(item.link)">{{ item.text }}</a>
        <b v-else>{{ item.text }}</b>
        <SidebarButton v-if="item.items" :items="item.items"/>
      </li>
    </template>
  </ul>
</template>

<style scoped>
ul.top-level {
  list-style: none;
  padding: 0;
}

ul.top-level > li {
  margin-top: 24px;
}
</style>