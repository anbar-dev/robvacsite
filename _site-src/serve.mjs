import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const port = Number(process.env.DUSTMIGO_PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    // Only serve public site files, never source data, repository metadata or docs.
    if (!/^\/(?:|[a-z0-9-]+\.html|parts\/(?:[a-z0-9-]+\/)?(?:index\.html)?|assets\/[a-zA-Z0-9._-]+|robots\.txt|sitemap\.xml)$/.test(pathname)) throw new Error('Not public');
    let file = path.resolve(root, '.' + pathname);
    if (!file.startsWith(root + path.sep) && file !== root) throw new Error('Outside root');
    if ((await stat(file)).isDirectory()) file = path.join(file,'index.html');
    const body = await readFile(file);
    response.writeHead(200, {'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
    response.end(body);
  } catch {
    response.writeHead(404, {'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
    response.end(await readFile(path.join(root,'404.html')));
  }
}).listen(port, '127.0.0.1', () => console.log(`DustMigo preview: http://127.0.0.1:${port}/parts/roborock-qrevo/`));
