export const rTabs = (str: string) => str.trim().replace(/^ {4}/gm, '');

export enum EditorModeEnum {
  EDITOR = 'editor',
  DIFF_EDITOR = 'Diff Editor',
  SQL_EDITOR = 'Sql Editor',
}
