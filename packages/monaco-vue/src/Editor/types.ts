import type { editor } from 'monaco-editor';

export type EditorProps = {
  options?: Parameters<editor.IStandaloneCodeEditor['updateOptions']>[0];
  languages: string;
  defaultValue?: string;
};

export type EditorEmits = {};
