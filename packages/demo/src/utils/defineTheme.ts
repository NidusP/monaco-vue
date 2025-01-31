import { loader } from '@monaco-editor/vue';
import getThemes from '@/config/monaco-themes';

export const defineTheme = async (theme: string) => {
  const data = await getThemes[theme]?.();

  console.log('theme theme theme', theme);
  loader.init().then((monaco) => {
    monaco.editor.defineTheme(theme, data);
    monaco.editor.setTheme(theme);
  });
};
