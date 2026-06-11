export async function emailMocker(req, res) {
    const { to, subject, body } = req.body
    console.log(`Mock email sent to: ${to}`)
    console.log(`Subject: ${subject}`)
    console.log(`Body: ${body}`)
    res.status(200).json({ message: "Email sent successfully (mock)" })
}