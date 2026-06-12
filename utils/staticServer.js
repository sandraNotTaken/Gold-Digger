import path from "node:path"
import fs from "node:fs/promises"
import http from "node:http"
import { getContentTYpe } from "./utils/getContentType.js"

export async function staticServer(req, res, baseDir) {
    try {
        const filePath = path.join(baseDir, req.url === "/" ? "index.html" : req.url)
        const ext = path.extname(filePath)
        const data = await fs.readFile(filePath)
        res.writeHead(200, { "Content-Type": await getContentType(filePath) })
        res.end(data)
    } catch (err) {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("404 Not Found")
    }
}