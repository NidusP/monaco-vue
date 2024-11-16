<script setup lang="ts">
import { watch } from 'vue';
import { editor } from 'monaco-editor';
import { EditorEmits, EditorProps } from './types';
import MonacoContainer from '../MonacoContainer';
import { getMonaco, getOrCreateModel } from '../utils/monaco';

const props = defineProps<EditorProps>()
const emit = defineEmits<EditorEmits>()

const handleMount = async (codeEditor: editor.IStandaloneCodeEditor) => {
  const monaco = await getMonaco();
  codeEditor.setModel(getOrCreateModel(monaco, props.defaultValue || '', props.languages, ''))

  codeEditor.onDidChangeModelContent((event) => {
    const val = codeEditor.getValue()
    if (val !== props.value) {
      emit('update:value', val)
    }
  })
  // updateOptions
  watch([props], async ([{ options, languages, value, theme }]) => {
    const model = codeEditor.getModel();

    if (model && languages) monaco.editor.setModelLanguage(model, languages);
    if (theme) monaco.editor.setTheme(theme);
    if (value != null && value !== codeEditor.getValue()) {
      console.log('value changed', codeEditor.getValue())
      console.log('value changed', value)
      codeEditor.setValue(value)
    }

    // onMount
    emit('mount', codeEditor, monaco)

    if (options) codeEditor.updateOptions(options)
  }, {
    deep: true,
    immediate: true
  })

}
</script>

<template>
  <MonacoContainer :width="(props.width)" :height="(props.height)" @mount="handleMount" />
</template>