import { defineStore, createPinia } from 'pinia';

export const useEditorStore = defineStore('editor', {
  state: () => ({
    editorMode: 'editor',
    themeMode: 'light',
    selectedLanguageId: 19,
    monacoTheme: 'vs-dark',
  }),
  getters: {},
  actions: {
    switchEditorMode() {
      console.log('switchEditorMode', this.editorMode);
      this.editorMode = this.editorMode === 'editor' ? 'diffEditor' : 'editor';
    },
    switchThemeMode() {
      this.themeMode = this.themeMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const pinia = createPinia();
