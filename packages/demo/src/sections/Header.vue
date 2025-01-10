<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useEditorStore } from '../store';
import { isMobile } from '../utils/isMobile';

const mr = '<MR />'
const mrvue = 'Monaco Editor React'
const store = useEditorStore()
const { editorMode } = storeToRefs(store)
const { switchEditorMode, switchThemeMode } = store
console.log(store.editorMode, 'globalStore')
</script>

<template>
  <v-toolbar image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" dark prominent>
    <Typography className={classes.logo}>
      {{ mr }}
    </Typography>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title v-if="!isMobile">{{ mrvue }}</v-toolbar-title>
    <VBtn variant="outlined" color="white" :disabled="editorMode === 'editor'" @click="switchEditorMode()">Editor</VBtn>
    <VBtn variant="outlined" :disabled="editorMode === 'diffEditor'" @click="switchEditorMode()">Diff Editor</VBtn>
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
