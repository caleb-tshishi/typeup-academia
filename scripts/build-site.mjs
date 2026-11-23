import { cp, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
for (const entry of ['index.html', 'admin', 'content']) {
  await cp(path.join(root, entry), path.join(output, entry), { recursive: true, force: true });
}
