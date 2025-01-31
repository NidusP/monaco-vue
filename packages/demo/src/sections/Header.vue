<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useEditorStore } from '../store';
import { isMobile } from '../utils/isMobile';
import { EditorModeEnum } from '../utils';

const mrvue = 'Monaco Editor Vue'
const store = useEditorStore()
const { editorMode } = storeToRefs(store)
const { setEditorMode, switchThemeMode } = store
console.log(store.editorMode, 'globalStore')
</script>

<template>
  <v-toolbar image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" dark prominent>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title v-if="!isMobile">{{ mrvue }}</v-toolbar-title>
    <VBtn variant="outlined" color="white" :disabled="editorMode === EditorModeEnum.EDITOR"
      @click="setEditorMode(EditorModeEnum.EDITOR)">
      {{ EditorModeEnum.EDITOR }}
    </VBtn>
    <VBtn variant="outlined" :disabled="editorMode === EditorModeEnum.DIFF_EDITOR"
      @click="setEditorMode(EditorModeEnum.DIFF_EDITOR)">
      {{ EditorModeEnum.DIFF_EDITOR }}
    </VBtn>
    <VBtn variant="outlined" :disabled="editorMode === EditorModeEnum.SQL_EDITOR"
      @click="setEditorMode(EditorModeEnum.SQL_EDITOR)">
      {{ EditorModeEnum.SQL_EDITOR }}
    </VBtn>
    <v-spacer></v-spacer>
    <VBtn variant="outlined" @click="switchThemeMode()">aaa</VBtn>
    <VBtn target="_blank" rel="noreferrer">
      GitHub
      <img width="30" src="/icons/octocat.png" alt="github icon" />
    </VBtn>
    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style scoped></style>
