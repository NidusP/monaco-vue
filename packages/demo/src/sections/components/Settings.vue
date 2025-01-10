<script setup lang="tsx">
import config from '@/config';
import { useEditorStore } from '@/store';
import monacoThemes from '@/config/monaco-themes';
import { defineTheme } from '../../utils/defineTheme';

const store = useEditorStore()
console.log(config, 'config config config');
</script>

<template>
  <Typography variant="h5">Settings</Typography>
  {{ store.selectedLanguageId }}store.selectedLanguageId
  <Divider />
  <VSelect v-model:model-value="store.selectedLanguageId" :items="config.supportedLanguages" item-title="name"
    item-value="id" label="Language" />
  <VSelect v-model:model-value="store.monacoTheme" :items="[...config.defaultThemes, ...Object.keys(monacoThemes)]"
    label="Theme" @update:model-value="defineTheme" />
</template>