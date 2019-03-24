import express from 'express'
import next from 'next'
import compression from "compression"
import cors from 'cors'
import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18next from '.././i18n'

const server = express()
const port = process.env.PORT || 3000
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handle = app.getRequestHandler();

server.use(compression({threshold: 0}))
server.use(cors())
server.use(nextI18NextMiddleware(nextI18next))

app.prepare().then(() => {
    //handle static next.js assets with their handler
    server.get('/_next/*', (req, res) => handle(req, res))

    //let next.js handler handle everything else
    server.get('*', (req, res) => handle(req, res))
})

server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
})