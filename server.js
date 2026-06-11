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
    res.WriteHead(200, { "Content-Type": "text/html" })
    res.end("<h1>Hello World</h1>")
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