import http from "node:http"
import fs from "node:fs/promises"
import path from "node:path"
import EventEmitter from "node:events" 
import { staticServer } from "./utils/staticServer.js"
import { logger } from "./utils/logger.js"
import { priceGenerator } from "./utils/priceGenerator.js"

const myEmitter = new EventEmitter()
const PORT = 3000
const server = http.createServer(async (req, res) => {
    staticServer(req, res, path.join(process.cwd(), "public"))
    
    if (req.url.startsWith("/api/price") && req.method === "POST") {
        let body = ""
        req.on("data", (chunk) => {
            body += chunk.toString()
        })
        req.on("end", async () => {
            const { basePrice } = JSON.parse(body)
            const price = priceGenerator(basePrice)
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ price }))
        })
    }
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("404 Not Found")
})


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

myEmitter.on("priceGenerated", (price) => {
    console.log(`New price generated: ${price}`)
})

setInterval(() => {
    const price = (Math.random() * 100).toFixed(2)
    myEmitter.emit("priceGenerated", price)
}, 5000)