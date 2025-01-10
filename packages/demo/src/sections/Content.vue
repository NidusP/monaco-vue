<script setup lang="ts">
import { useEditorStore } from '../store';
import DiffEditor from './DiffEditor.vue';
import Editor from './Editor.vue';

const store = useEditorStore()

</script>

<template>
  <VContainer>
    <Editor v-if="store.editorMode === 'editor'" />
    <DiffEditor v-if="store.editorMode === 'diffEditor'" />
  </VContainer>
</template>

<style scoped></style>
