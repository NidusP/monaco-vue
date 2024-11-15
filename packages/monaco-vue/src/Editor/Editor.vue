<script setup lang="ts">
import { watch } from 'vue';
import { editor } from 'monaco-editor';
import { EditorEmits, EditorProps } from './types';
import MonacoContainer from '../MonacoContainer';
import { getMonaco } from '../utils/monaco';
import { getOrCreateModel } from '../utils';

const props = defineProps<EditorProps>()
const emit = defineEmits<EditorEmits>()

const handleMount = async (creator: (a: any) => editor.IStandaloneCodeEditor) => {
  const monaco = await getMonaco();
  const codeEditor = creator({
    model: getOrCreateModel(monaco, props.defaultValue || '', props.languages, '')
  })

  // updateOptions
  watch([props], async ([{ options, languages, }]) => {
    if (options) codeEditor.updateOptions(options)

    const model = codeEditor.getModel();
    if (model && languages) monaco.editor.setModelLanguage(model, languages);
  }, {
    deep: true,
    // immediate: true
  })
}
</script>

<template>
  <MonacoContainer width="100vw" :height="300" @mount="handleMount" />
</template>