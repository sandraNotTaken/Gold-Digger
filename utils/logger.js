export async function logger(req, res, next) {
    const start = Date.now()
    console.log(`${req.method} ${req.url}`)
    next()
}