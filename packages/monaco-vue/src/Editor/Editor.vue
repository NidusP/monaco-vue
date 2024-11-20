<script setup lang="ts">
import { watch } from 'vue';
import type { EditorEmits, EditorProps, } from './types';
import MonacoContainer from '../MonacoContainer';
import { getOrCreateModel } from '../utils/monaco';
import type { OnMount } from '../MonacoContainer/types';

const props = withDefaults(defineProps<EditorProps>(), {
  path: ''
})
const emit = defineEmits<EditorEmits>()

const handleMount: OnMount = async ({ editor: codeEditor, monaco }) => {
  // console.log('onMount', codeEditor, monaco);
  if (!codeEditor) return;

  codeEditor.setModel(getOrCreateModel(monaco, props.defaultValue || '', props.languages, props.path))

  codeEditor.onDidChangeModelContent((event) => {
    const val = codeEditor.getValue()
    if (val !== props.value) {
      emit('update:value', val)
    }
  })

  // update theme
  watch(() => props.theme, (theme) => {
    theme && monaco.editor.setTheme(theme);
  }, {
    immediate: true
  })

  // update options
  watch(() => props.options, (options) => {
    options && codeEditor.updateOptions(options);
  }, {
    immediate: true,
    deep: true
  })

  // update line
  watch(() => props.line, (line) => {
    line != null && codeEditor.revealLine(line)
  })

  // update languages  
  watch(() => props.languages, (languages) => {
    const model = codeEditor.getModel();
    if (model && languages) monaco.editor.setModelLanguage(model, languages);
  }, {
    immediate: true
  })

  // update value
  watch(() => props.value, (value) => {
    if (value != null && value !== codeEditor.getValue()) {
      codeEditor.setValue(value)
    }
  })

  // onMount
  emit('mount', codeEditor, monaco)
}
</script>

<template>
  <MonacoContainer :width="(props.width)" :height="(props.height)" @mount="handleMount">
    <template #loading>loading...hhh</template>
  </MonacoContainer>
</template>