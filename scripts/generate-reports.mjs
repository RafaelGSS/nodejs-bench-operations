import { copyFile, readFile, readdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { majorNodeFolderRegexp, nodeFolderVersionRegexp, rootFolder } from './utils.mjs';

const filterFolders = regexp => item => {
  return item.isDirectory() && !!regexp.exec(item.name);
};
const filterMajorFolders = filterFolders(majorNodeFolderRegexp);
const filterNodeFolders = filterFolders(nodeFolderVersionRegexp);

console.info(`Root folder: ${rootFolder}`);

const majorNodeFolders = await readdir(rootFolder, {
  encoding: 'utf-8',
  recursive: false,
  withFileTypes: true,
}).then(filesOrFolders => filesOrFolders.filter(filterMajorFolders));

console.log(`Found ${majorNodeFolders.length} major versions.`);

for (const majorNodeFolder of majorNodeFolders) {
  const majorNodeFolderPath = join(majorNodeFolder.path, majorNodeFolder.name);
  const nodeFoldersUnderMajor = await readdir(majorNodeFolderPath, {
    encoding: 'utf-8',
    recursive: false,
    withFileTypes: true,
  }).then(items => items.filter(filterNodeFolders));

  console.log(` > Found ${nodeFoldersUnderMajor.length} node versions under ${majorNodeFolder.name}.`);

  // sort to use later to generate the major report
  nodeFoldersUnderMajor.sort((a, b) => a.name.localeCompare(b.name));

  for (const nodeFolder of nodeFoldersUnderMajor) {
    const nodeFolderPath = join(nodeFolder.path, nodeFolder.name);
    const benchmarkPaths = await readdir(nodeFolderPath, {
      encoding: 'utf-8',
      recursive: false,
      withFileTypes: true,
    }).then(items => items.filter(item => item.name.endsWith('.md')).map(item => join(item.path, item.name)));

    console.log(`   > Found ${benchmarkPaths.length} benchmarks under ${nodeFolder.name}.`);

    // sort just to ensure the order between multiple runs
    benchmarkPaths.sort((a, b) => a.localeCompare(b));

    const benchmarkContents = await Promise.all(benchmarkPaths.map(path => readFile(path, 'utf-8')));
    const finalContent = benchmarkContents.join('\n');
    const finalContentFilepath = resolve(majorNodeFolderPath, `RESULTS-${nodeFolder.name}.md`);

    await writeFile(finalContentFilepath, finalContent, {
      encoding: 'utf-8',
    });

    console.log(`     > Generated ${finalContentFilepath}.`);
  }

  if (nodeFoldersUnderMajor.length > 0) {
    const latestNodeVersion = nodeFoldersUnderMajor[nodeFoldersUnderMajor.length - 1];
    const latestNodeVersionReport = resolve(majorNodeFolderPath, `RESULTS-${latestNodeVersion.name}.md`);
    const majorReportFinalPath = resolve(rootFolder, `RESULTS-${majorNodeFolder.name}.md`);

    await copyFile(latestNodeVersionReport, majorReportFinalPath);

    console.log(`   > Generated ${majorReportFinalPath}`);
  }
}
