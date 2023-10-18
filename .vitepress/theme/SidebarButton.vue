<script setup lang="ts">
import {useSidebar} from 'vitepress/theme';
import {defineProps} from 'vue';

const {sidebar, isSidebarEnabled} = useSidebar();

const props = defineProps<{
  items?: any[],
}>();
const items = props.items || sidebar;
</script>

<template>
  <ul v-if="!isSidebarEnabled" :class="{'top-level': !props.items}">
    <template v-for="item in items">
      <li v-if="item.link !== '/ru/index.md'">
        <a v-if="item.link" :href="item.link">{{ item.text }}</a>
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