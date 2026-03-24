import { writeFile, chmod } from 'node:fs/promises';
import { join } from 'node:path';
import { arch as osArch, platform as osPlatform } from 'node:os';
import { rootFolder } from './utils.mjs';

const POOP_REPO = 'andrewrk/poop';
const OUTPUT_PATH = join(rootFolder, 'poop');

function getPoopArchName() {
  const archMap = { 'x64': 'x86_64', 'ia32': 'x86', 'arm64': 'aarch64', 'riscv64': 'riscv64' };
  return archMap[osArch()] || osArch();
}

async function downloadPoop() {
  if (osPlatform() !== 'linux') throw new Error(`poop only supports Linux`);
  
  const assetName = `${getPoopArchName()}-linux-poop`;
  console.log(`Fetching latest poop release...`);
  
  const release = await fetch(`https://api.github.com/repos/${POOP_REPO}/releases/latest`).then(r => r.json());
  const asset = release.assets.find(a => a.name === assetName);
  if (!asset) throw new Error(`No binary for ${assetName}`);
  
  console.log(`Downloading ${asset.name} from ${release.tag_name}...`);
  const buffer = await fetch(asset.browser_download_url).then(r => r.arrayBuffer());
  await writeFile(OUTPUT_PATH, Buffer.from(buffer));
  await chmod(OUTPUT_PATH, 0o755);
  console.log(`Downloaded poop to ${OUTPUT_PATH}`);
}

downloadPoop().catch(err => { console.error(err); process.exit(1); });
