<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getMonaco } from '../utils/monaco';
import type { editor } from 'monaco-editor';

const aRef = ref();
let a: editor.IStandaloneCodeEditor

onMounted(async () => {
  console.log(aRef.value, 'aRef')

  const monaco = await getMonaco()

  a = monaco.editor.create(aRef.value, {
    value: 'select * from a',
    language: 'sql'
  })
})

const handleC = () => {
  console.log('handleC')
  a.getAction('editor.action.formatDocument')?.run()
}
</script>

<template>
  <section style="width: 100vw; height: 300px;">
    <div ref="aRef" style="height: 100%;"></div>
  </section>
  <button @click="handleC">aaa</button>
</template>

<style scoped></style>
