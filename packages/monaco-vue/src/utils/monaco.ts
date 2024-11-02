import loader from '@monaco-editor/loader';
import * as monaco from 'monaco-editor';

loader.config({
  monaco,
});

export const getMonaco = async () => {
  return await loader.init();
};
