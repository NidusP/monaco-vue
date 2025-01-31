import type { Monaco } from '@monaco-editor/loader';
import type { editor } from 'monaco-editor';
import type { Theme } from '../../index';

export type OnBeforeMount = (monaco: Monaco) => void;

export type EditorProps = {
  options?: Parameters<editor.IStandaloneCodeEditor['updateOptions']>[0];
  /**
   * Value of the current model
   */
  value?: string;

  /**
   * Language of the current model
   */
  language?: string;

  theme?: Theme | string;
  /**
   * Width of the editor wrapper
   * Defaults to 100%
   */
  width?: number | string;

  /**
   * Height of the editor wrapper
   * Defaults to 100%
   */
  height?: number | string;
  line?: number;
  path?: string;
};

export type EditorEmits = {
  (e: 'update:value', value: string): void;
  (e: 'beforeMount', monaco: Monaco): void;
  (e: 'mount', editor: editor.IStandaloneCodeEditor, monaco: Monaco): void;
};
