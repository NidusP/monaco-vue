import { defineStore, createPinia } from 'pinia';
import { initialState } from './state';
import type { EditorModeEnum } from '@/utils';

export const useEditorStore = defineStore('editor', {
  state: () => initialState,
  getters: {},
  actions: {
    setEditorMode(mode: EditorModeEnum) {
      console.log('switchEditorMode', mode);
      this.editorMode = mode;
    },
    switchThemeMode() {
      this.themeMode = this.themeMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const pinia = createPinia();
