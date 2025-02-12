<script setup lang="tsx">
/**
 * A simple counter component
 * 
 * @component
 * @example
 * <Counter />
 */

import config from '@/config';
import { useEditorStore } from '@/store';
import monacoThemes from '@/config/monaco-themes';
import { defineTheme } from '@/utils/defineTheme';
import { storeToRefs } from 'pinia';
import Editor from '@monaco-editor/vue'

const store = useEditorStore()
const { themeMode, editor } = storeToRefs(store)

let editorRef = null;

function handleEditorDidMount(editor, monaco) {
  // setIsEditorReady(true);
  editorRef = editor;
}

function handleApply() {
  const currentValue = editorRef?.getValue();
  let options;
  try {
    options = JSON.parse(currentValue);
    store.setOptions(options);
  } catch {
    // showNotification({
    //   message: config.messages.invalidOptions,
    //   variant: "error",
    // });
  }
}

</script>

<template>
  <VCard>
    <VCardTitle>Settings</VCardTitle>
    <VCardSubtitle>Languages</VCardSubtitle>
    <VSelect v-model:model-value="editor.selectedLanguageId" :items="config.supportedLanguages" item-title="name"
      item-value="id" label="Language" />
    <VCardSubtitle>Themes</VCardSubtitle>
    <VSelect v-model="themeMode" :items="[...config.defaultThemes, ...Object.keys(monacoThemes)]" label="Theme"
      @update:model-value="defineTheme" />
    <VCardSubtitle>Options</VCardSubtitle>
    <Editor :theme="themeMode" language="json" :height="400" :value="JSON.stringify(editor.options, null, 2)"
      @mount="handleEditorDidMount" />
    <VBtn color="info" @click="handleApply">APPLY</VBtn>
  </VCard>
</template>