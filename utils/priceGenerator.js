export async function priceGenerator(req, res) {
    const { basePrice } = req.body
    const price = basePrice * (1 + Math.random() * 0.5) // Randomly increase price by up to 50%
    res.status(200).json({ price: price.toFixed(2) })
}