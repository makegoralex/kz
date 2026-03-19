import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import http from 'node:http'

const port = process.env.PORT || 3001
const distDir = join(process.cwd(), 'dist')

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.json': 'application/json; charset=utf-8'
}

function sendFile(res, filePath) {
  const ext = extname(filePath)
  res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' })
  createReadStream(filePath).pipe(res)
}

http
  .createServer((req, res) => {
    if (!existsSync(distDir)) {
      res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end('Build not found. Run: npm run build')
      return
    }

    const requestPath = req.url === '/' ? '/index.html' : req.url
    const safePath = normalize(requestPath).replace(/^\.\.(\/|\\|$)/, '')
    const filePath = join(distDir, safePath)

    if (existsSync(filePath) && statSync(filePath).isFile()) {
      sendFile(res, filePath)
      return
    }

    sendFile(res, join(distDir, 'index.html'))
  })
  .listen(port, () => {
    console.log(`AGGREGATOR 24/7 started on port ${port}`)
  })
