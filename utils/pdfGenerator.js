export function emailMocker(req, res) {
    if (req.method === "POST") {
        let body = ""
        req.on("data", chunk => {
            body += chunk.toString()
        })
        req.on("end", () => {
            const { to, subject, message } = JSON.parse(body)
            console.log(`Mock email sent to: ${to}`)
            console.log(`Subject: ${subject}`)
            console.log(`Message: ${message}`)
            res.status(200).json({ message: "Email sent successfully (mock)" })
        })
    }
}