<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useEditorStore } from '../store';
import { EditorModeEnum } from '../utils';

const editors = {
  [EditorModeEnum.EDITOR]: defineAsyncComponent(() => import('./components/Editor.vue')),
  [EditorModeEnum.DIFF_EDITOR]: defineAsyncComponent(() => import('./components/DiffEditor.vue')),
  [EditorModeEnum.SQL_EDITOR]: defineAsyncComponent(() => import('./components/SqlEditor.vue'))
}

const store = useEditorStore()

</script>

<template>
  <Component :is="editors[store.editorMode]"></Component>
</template>

<style scoped></style>
