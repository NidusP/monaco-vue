<script setup lang="ts">
import MonacoContainer from '@monaco-editor/vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('aonBeforeMount,')
})
let aaa
const mount = (a) => {
  aaa = a
}

const handle = (a) => {
  console.log('handle', a)
  aaa.getAction('editor.action.formatDocument')?.run()
}
</script>

<template>
  <MonacoContainer @mount="mount" />
  <div @click="handle">sql a a a a </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
