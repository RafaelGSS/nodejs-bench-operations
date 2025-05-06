import { mkdir, rename } from 'node:fs/promises';
import { resolve } from 'node:path';
import { existAsync, rootFolder } from './utils.mjs';
import { readdir } from 'node:fs/promises';

const artifactsDir = './temp-reports';
const benchFile = process.env.BENCH_FILE;

/**
 * Get all benchmark report files from the temp-reports directory
 * Parse the node version from the filename format: report-runid-nodeversion-benchfile.md
 * @returns {Promise<{ [nodeVersion: string]: string }>} Map of node version to report filename
 */
async function getBenchmarkFiles() {
  const files = await readdir(artifactsDir);
  const benchFiles = {};
  
  for (const file of files) {
    // Only process files related to the current benchmark
    if (file.includes(benchFile)) {
      // Extract the node version from the filename pattern: report-runid-nodeversion-benchfile.md
      const parts = file.split('-');
      // The node version should be the third part (index 2) in the filename
      if (parts.length >= 3) {
        const nodeVersion = parts[2];
        benchFiles[nodeVersion] = file;
      }
    }
  }
  
  return benchFiles;
}

async function processBenchmarks() {
  const benchFiles = await getBenchmarkFiles();
  
  for (const nodeVersion of Object.keys(benchFiles)) {
    const benchmarkFile = benchFile;
    const reportFilepath = resolve(artifactsDir, benchFiles[nodeVersion]);
    
    const normalizedNodeVersion = nodeVersion.replace(/\./g, '_');
    const major = normalizedNodeVersion.split('_')[0];
    const outputFolder = resolve(rootFolder, `./v${major}/v${normalizedNodeVersion}`);
    
    if (!await existAsync(outputFolder)) {
      await mkdir(outputFolder, { recursive: true });
    }
    
    const outputFilepath = resolve(outputFolder, benchmarkFile.replace('.mjs', '.md'));
    await rename(reportFilepath, outputFilepath);
    console.log(`Moved ${benchmarkFile} report for Node.js v${nodeVersion} to ${outputFilepath}`);
  }
}

processBenchmarks().catch(console.error);
