export async function getContentType(req, res, next) {
    const contentType = req.headers['content-type']
    switch (contentType) {
        case "text/html":
            return "text/html"
        case "text/css":
            return "text/css"
        case "application/javascript":
            return "application/javascript"
        case "application/json":
            return "application/json"
        default:
            return "text/plain"
    }
}