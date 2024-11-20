<script setup lang="ts">
import MonacoContainer from '../MonacoContainer';
import type { OnMount } from '../MonacoContainer/types';
import { getOrCreateModel } from '../utils/monaco';
import { DiffEditorProps } from './types';

const props = defineProps<DiffEditorProps>()

const handleMount: OnMount = ({ diffEditor, monaco }) => {
  if (!diffEditor) return;

  const originalModel = getOrCreateModel(monaco, props.defaultValue || '', props.languages, '')
  const modifiedModel = getOrCreateModel(monaco, props.defaultValue || '', props.languages, '')

  diffEditor.setModel({
    original: originalModel,
    modified: modifiedModel
  })

}
</script>

<template>
  <MonacoContainer diff :width="props.width" :height="props.height" @mount="handleMount" />
</template>