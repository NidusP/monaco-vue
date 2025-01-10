// import { loader } from '@monaco-editor/vue';
import getThemes from '@/config/monaco-themes';

export const defineTheme = async (theme: string) => {
  console.log('defineTheme', theme);
  const data = await getThemes[theme]?.();
  console.log('data', data);

  // return new Promise((res) => {
  //   // loader.init()
  //   Promise.all([,]).then(([monaco, themeData]) => {
  //     console.log('monaco, themeData', monaco, themeData);
  //     // monaco.editor.defineTheme(theme, themeData);
  //     // res();
  //   });
  // });
};
