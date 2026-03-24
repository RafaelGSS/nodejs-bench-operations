import { readFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { platform, arch, cpus, totalmem } from 'node:os';
import { parsePoop, poopToMarkdown } from './poop-parser.mjs';
import { rootFolder } from './utils.mjs';

const POOP_BINARY = process.env.POOP_BINARY || 'poop';
const POOP_DURATION = process.env.POOP_DURATION || '5000';

async function main() {
  const configPath = join(rootFolder, 'fixtures', 'poop-commands.json');
  const commands = JSON.parse(await readFile(configPath, 'utf-8'));
  const allCommands = commands.flatMap(cmd => `'${cmd.command.join(' ')}'`);
  const poopArgs = ['-d', POOP_DURATION, ...allCommands];
  
  console.error(`Running: ${POOP_BINARY} ${poopArgs.join(' ')}`);
  
  let output;
  try {
    output = execSync(`${POOP_BINARY} ${poopArgs.join(' ')}`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
  } catch (error) {
    output = error.stdout || '';
    if (!output) throw error;
  }
  
  const results = parsePoop(output);
  const includeJson = !!process.env.CI;
  let markdown = poopToMarkdown(results, includeJson);
  
  const machineInfo = `${platform()} ${arch()} | ${cpus().length} vCPUs | ${(totalmem() / 1024 ** 3).toFixed(1)}GB Mem`;
  markdown += '\n<details>\n<summary>Environment</summary>\n\n';
  markdown += `* __Machine:__ ${machineInfo}\n* __Run:__ ${new Date()}\n* __Node:__ \`${process.version}\`\n`;
  markdown += '</details>\n';
  
  console.log(markdown);
}

main().catch(err => { console.error(err); process.exit(1); });
