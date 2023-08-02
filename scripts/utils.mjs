import { exists } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

export const existAsync = promisify(exists);

export const majorNodeFolderRegexp = /^v\d{2}$/;
export const nodeFolderVersionRegexp = /^v\d{1,2}_\d{1,2}_\d{1,2}$/;

export const rootFolder = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
