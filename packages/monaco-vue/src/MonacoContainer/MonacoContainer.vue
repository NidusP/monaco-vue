<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { getMonaco } from '../utils/monaco';
import type { ContainerEmits, ContainerProps } from './types';
import { cssProperty } from '../utils';

const props = withDefaults(defineProps<ContainerProps>(), {
  diffEditor: false
})

const emit = defineEmits<ContainerEmits>();

const divRef = ref();
const isEditorReady = ref(false)

const m = getMonaco()
onMounted(() => {
  m.then(monaco => {
    isEditorReady.value = true
    nextTick(() => {
      emit('mount', {
        editor: props.diffEditor 
          ? undefined 
          : monaco.editor.create(divRef.value, {
            automaticLayout: true
          }),
        monaco,
        diffEditor: props.diffEditor 
          ? monaco.editor.createDiffEditor(divRef.value) 
          : undefined
      })
    })
  })
})

onUnmounted(() => {
  m.cancel()
})

console.log(props.width, props.height, 'props props props');
</script>

<template>
  <section class="monaco-container" :style="{
    width: cssProperty(props.width),
    height: cssProperty(props.height),
  }">
    <slot v-if="!isEditorReady" name="loading"></slot>
    <div class="monaco-editor" v-show="isEditorReady" ref="divRef"></div>
  </section>
</template>

<style scoped>
.monaco-container {
  display: flex;
  text-align: inherit;

  .monaco-editor {
    width: 100%;
  }
}
</style>
