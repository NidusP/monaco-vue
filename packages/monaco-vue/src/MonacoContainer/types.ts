import type { Monaco } from '@monaco-editor/loader';
import type { editor } from 'monaco-editor';

export type OnMountParams = {
  diffEditor?: editor.IStandaloneDiffEditor;
  editor?: editor.IStandaloneCodeEditor;
  monaco: Monaco;
};
export type OnMount = (data: OnMountParams) => void;

export type ContainerProps = {
  width: number | string;
  height: number | string;
  // loading: ReactNode | string;
  className?: string;
  wrapperProps?: object;
  diffEditor?: boolean;
};

export type ContainerEmits = {
  (event: 'mount', data: OnMountParams): void;
};
