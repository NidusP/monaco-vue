import type { Monaco } from '@monaco-editor/loader';
import type { editor } from 'monaco-editor';

export type OnMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => void;

export type OnBeforeMount = (monaco: Monaco) => void;

export type EditorProps = {
  options?: Parameters<editor.IStandaloneCodeEditor['updateOptions']>[0];
  languages: string;
  defaultValue?: string;
  value?: string;
  theme?: editor.defineTheme;
  width: number | string;
  height: number | string;
};

export type EditorEmits = {
  (e: 'update:value', value: string): void;
  (e: 'beforeMount', monaco: Monaco): void;
  (e: 'mount', editor: editor.IStandaloneCodeEditor, monaco: Monaco): void;
};
