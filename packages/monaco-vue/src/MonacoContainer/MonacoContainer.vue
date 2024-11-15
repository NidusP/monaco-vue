<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { getMonaco } from '../utils/monaco';
import type { ContainerEmits, ContainerProps } from './types';

const props = defineProps<ContainerProps>()
const emit = defineEmits<ContainerEmits>();

const divRef = ref();
const isEditorReady = ref(false)

const m = getMonaco()
onMounted(() => {
  m.then(monaco => {
    isEditorReady.value = true
    nextTick(() => {
      emit('mount', (otps) => monaco.editor.create(divRef.value, otps))
    })
  })
})

onUnmounted(() => {
  m.cancel()
})
</script>

<template>
  <section :style="{
    width: props.width,
    height: '300px'
  }">
    <div v-if="!isEditorReady">
      loading{{ isEditorReady }}
    </div>
    <div v-show="isEditorReady" ref="divRef" style="height: 100%;"></div>
  </section>
</template>

<style scoped></style>
