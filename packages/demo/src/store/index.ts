import { defineStore, createPinia } from 'pinia';
import { initialState } from './state';
import type { EditorModeEnum } from '@/utils';
import type { editor } from 'monaco-editor';

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
    setOptions(options: editor.IEditorOptions & editor.IGlobalEditorOptions) {
      this.editor.options = options;
    },
  },
});

export const pinia = createPinia();
