import type { Monaco } from '@monaco-editor/loader';
import type { editor } from 'monaco-editor';
import type { Theme } from '../../index';

export type OnBeforeMount = (monaco: Monaco) => void;

export type EditorProps = {
  options?: Parameters<editor.IStandaloneCodeEditor['updateOptions']>[0];
  languages: string;
  defaultValue?: string;
  value?: string;
  theme?: Theme | string;
  width: number | string;
  height: number | string;
  line?: number;
  path?: string;
};

export type EditorEmits = {
  (e: 'update:value', value: string): void;
  (e: 'beforeMount', monaco: Monaco): void;
  (e: 'mount', editor: editor.IStandaloneCodeEditor, monaco: Monaco): void;
};
