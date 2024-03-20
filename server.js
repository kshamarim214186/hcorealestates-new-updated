// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.port || 8081;

app.prepare().then(() => {
   createServer((req, res) => {
   const parsedUrl = parse(req.url, true)
   const { pathname, query } = parsedUrl

   if (pathname === '/a') {
      app.render(req, res, '/a', query)
   } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
   } else {
      handle(req, res, parsedUrl)
   }

      if (query && !query.startsWith('www.')) {
         res.writeHead(301, {
            Location: `https://www.${query}${pathname}`,
         });
         res.end();
         return;
      }
   }).listen(port, (err) => {
      if (err) throw err
      console.log(`App launched on ${port}`)
   })
})