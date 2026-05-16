const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = __dirname;

const MIME = {
  '.htm':'text/html','.html':'text/html','.js':'application/javascript',
  '.css':'text/css','.json':'application/json','.png':'image/png',
  '.jpg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon',
};

http.createServer((req, res) => {
  let fp = path.join(ROOT, req.url === '/' ? '/reader.htm' : req.url);
  fp = path.normalize(fp);
  if (!fp.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
  const ext = path.extname(fp);
  fs.readFile(fp, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + req.url);
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log('Web Systems Reader: http://localhost:' + PORT + '/reader.htm');
  console.log('Press Ctrl+C to stop.');
});
