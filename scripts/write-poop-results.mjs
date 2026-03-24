import { mkdir, rename } from 'node:fs/promises';
import { resolve } from 'node:path';
import { existAsync, rootFolder } from './utils.mjs';
import { readdir } from 'node:fs/promises';

const artifactsDir = './temp-reports';

/**
 * Get all poop report files from the temp-reports directory
 * Parse the node version from the filename format: poop-report-runid-nodeversion.md
 * @returns {Promise<{ [nodeVersion: string]: string }>} Map of node version to report filename
 */
async function getPoopFiles() {
  const files = await readdir(artifactsDir);
  const poopFiles = {};
  
  for (const file of files) {
    // Only process poop report files
    if (file.startsWith('poop-report-')) {
      // Extract the node version from the filename pattern: poop-report-runid-nodeversion.md
      const parts = file.split('-');
      // The node version should be the last part before .md (index 3)
      if (parts.length >= 4) {
        const nodeVersion = parts[3].replace('.md', '');
        poopFiles[nodeVersion] = file;
      }
    }
  }
  
  return poopFiles;
}

async function processPoopReports() {
  const poopFiles = await getPoopFiles();
  
  for (const nodeVersion of Object.keys(poopFiles)) {
    const reportFilepath = resolve(artifactsDir, poopFiles[nodeVersion]);
    
    const normalizedNodeVersion = nodeVersion.replace(/\./g, '_');
    const major = normalizedNodeVersion.split('_')[0];
    const outputFolder = resolve(rootFolder, `./v${major}/v${normalizedNodeVersion}`);
    
    if (!await existAsync(outputFolder)) {
      await mkdir(outputFolder, { recursive: true });
    }
    
    const outputFilepath = resolve(outputFolder, 'metrics.md');
    await rename(reportFilepath, outputFilepath);
    console.log(`Moved poop report for Node.js v${nodeVersion} to ${outputFilepath}`);
  }
}

processPoopReports().catch(console.error);
