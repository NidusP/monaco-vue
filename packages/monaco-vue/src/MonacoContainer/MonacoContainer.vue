<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { getMonaco } from '../utils/monaco';
import type { ContainerEmits, ContainerProps } from './types';
import { cssProperty } from '../utils';

const props = defineProps<ContainerProps>()
const emit = defineEmits<ContainerEmits>();

const divRef = ref();
const isEditorReady = ref(false)

const m = getMonaco()
onMounted(() => {
  m.then(monaco => {
    isEditorReady.value = true
    nextTick(() => {
      emit('mount', monaco.editor.create(divRef.value))
    })
  })
})

onUnmounted(() => {
  m.cancel()
})
</script>

<template>
  <section :style="{
    width: cssProperty(props.width),
    height: cssProperty(props.height),
  }">
    <div v-if="!isEditorReady">
      loading{{ isEditorReady }}
    </div>
    <div v-show="isEditorReady" ref="divRef" style="height: 100%;"></div>
  </section>
</template>

<style scoped></style>
