import loader from '@monaco-editor/loader';
import Editor from './src/Editor/Editor.vue';

export { Editor, loader };
export default Editor;

// Default themes
export type Theme = 'vs-dark' | 'light';
