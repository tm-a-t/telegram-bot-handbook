<script setup lang="ts">
import {onMounted, ref} from "vue";

const comments = ref<HTMLDivElement | null>();
const code = '<script async src="https://comments.app/js/widget.js?3" data-comments-app-website="9ZJGrIog" data-limit="100" data-colorful="1" data-dark="1">< /script>'

onMounted(() => {
  comments.value.innerHTML = code;
});
</script>

<template>
<div ref="comments"></div>
</template>

<style scoped>

</style>