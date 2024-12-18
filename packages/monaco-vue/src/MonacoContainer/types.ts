import type { editor } from 'monaco-editor';

export type ContainerProps = {
  width: number | string;
  height: number | string;
  // loading: ReactNode | string;
  className?: string;
  wrapperProps?: object;
};

export type ContainerEmits = {
  (
    event: 'mount',
    val: (otps: editor.IStandaloneEditorConstructionOptions) => editor.IStandaloneCodeEditor,
  ): editor.IStandaloneCodeEditor;
};
