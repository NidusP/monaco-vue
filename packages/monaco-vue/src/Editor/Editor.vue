<script setup lang="ts">
/**
 * A simple counter component
 * 
 * @component
 * @example
 * <Counter />
 */

import { watch } from 'vue';
import type { EditorEmits, EditorProps, } from './types';
import MonacoContainer from '../MonacoContainer';
import { getOrCreateModel } from '../utils/monaco';
import type { OnMount } from '../MonacoContainer/types';

const props = withDefaults(defineProps<EditorProps>(), {
  value: '',
  width: '100%',
  height: '100%',
})
const emit = defineEmits<EditorEmits>()


const handleMount: OnMount = async ({ editor: codeEditor, monaco }) => {
  console.log('onMount onMount');
  if (!codeEditor) return;
  console.log(props, 'props.language');
  codeEditor.setModel(getOrCreateModel(monaco, props.value, props.language, props.path))

  codeEditor.onDidChangeModelContent((event) => {
    const val = codeEditor.getValue()
    if (val !== props.value) {
      emit('update:value', val)
    }
  })

  // update theme
  watch(() => props.theme, (theme) => {
    theme && monaco.editor.setTheme(theme);
    // log
    console.log('theme', theme);
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

  // update language  
  watch(() => props.language, (language) => {
    const model = codeEditor.getModel();
    if (model && language) monaco.editor.setModelLanguage(model, language);
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