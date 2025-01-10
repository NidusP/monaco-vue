import fs from 'node:fs';
import { resolve, join, parse } from 'node:path';

function readFile(filename: string) {
  return fs.readFileSync(filename, 'utf-8');
}

/**
 * 获取指定目录下的所有文件名
 * @param dir 指定目录的路径
 * @returns 文件名数组
 */
function getFilesInDirectory(dir: string) {
  let files: Record<string, any> = {};

  try {
    // 读取指定目录
    const items = fs.readdirSync(dir);

    // 遍历目录项
    for (const item of items) {
      const fullPath = join(dir, item);
      const stats = fs.statSync(fullPath);
      // 检查是否为文件
      if (stats.isFile()) {
        const { name } = parse(fullPath);
        files[name] = () => import(`monaco-themes/themes/${name}.json`);
      }
      // 如果需要递归获取子目录中的文件，可以取消注释以下代码
      /* else if (stats.isDirectory()) {
                files = files.concat(getFilesInDirectory(fullPath));
            } */
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }

  return files;
}

function writeFile(filename: string, content: string) {
  fs.writeFileSync(filename, content);
}

function main() {
  // 示例使用
  const directoryPath = resolve('../../node_modules/monaco-themes/themes/'); // 替换为实际目录路径
  const files = getFilesInDirectory(directoryPath);
  const filename = resolve('./src/config/monaco-themes.ts');
  writeFile(filename, `export default ${JSON.stringify(files, null, 2)}`);
  console.log(`\x1b[32m%s\x1b[0m`, `Generated file: ${filename}`);
}

// main();

function test() {
  const themesData = JSON.parse(
    readFile(resolve('./node_modules/monaco-themes/themes/themelist.json')),
  );
  const themes = Object.keys(themesData);

  const content = `{
  ${themes.map((t) => `'${t}': () => import('monaco-themes/themes/${themesData[t]}.json')`).join(',\n  ')}
  }`;

  const filename = resolve('./src/config/monaco-themes.ts');
  writeFile(filename, `export default ${content}`);
}

test();
