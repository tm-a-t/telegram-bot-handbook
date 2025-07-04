<script setup lang="ts">
</script>

<template>
  <div class="custom-code-group-tab language-">
    <slot/>
  </div>
</template>

<style scoped>
.custom-code-group-tab, .custom-code-group-tab[class] {
  /* background-color: var(--vp-c-bg-elv); */
  padding: 24px;
}

.custom-code-group-tab :deep(pre) {
  background-color: var(--vp-code-block-bg);
  margin-left: -24px;
  margin-right: -24px;
}

.custom-code-group-tab > :deep(pre):first-child {
  margin-top: -24px;
}

.custom-code-group-tab > :deep(pre):last-child {
  margin-bottom: -24px;
}

/*
.custom-code-group-tab :deep(code) {
  padding: 0;
}
*/
</style>