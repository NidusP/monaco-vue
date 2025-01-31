<script setup lang="ts">
import MonacoEditor from '@monaco-editor/vue'
import Settings from './Settings.vue';
import examples from '../../config/examples';
import { useEditorStore } from '../../store';
import { storeToRefs } from 'pinia';
import { config } from '../../config';
import { computed } from 'vue';

const store = useEditorStore()
const { editor } = storeToRefs(store)
const language = computed(() => config.supportedLanguages
  .find(({ id }) => id === editor.value.selectedLanguageId).name)

</script>

<template>
  <VContainer fluid class="pa-0  pa-0">
    <VRow no-gutters>
      <VCol cols="8">
        <MonacoEditor :value="examples[editor.selectedLanguageId]" :language="language" theme="vs-dark" />
      </VCol>
      <VCol cols="4">
        <Settings />
      </VCol>
    </VRow>
  </VContainer>
</template>
