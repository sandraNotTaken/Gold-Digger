const priceElement = document.getElementById("price")
const refreshBtn = document.getElementById("refreshPrice")
const investBtn = document.getElementById("invest-btn")
const outputDialog = document.getElementById("output-dialog")
const priceDisplay = document.getElementById("price-display")
const closeDialog = document.getElementById("close-dialog")

refreshBtn.addEventListener("click", fetchPrice)

investBtn.addEventListener("click", () => {
    alert("Investment feature coming soon!")
    outputDialog.style.display = "block"
})

closeDialog.addEventListener("click", () => {
    outputDialog.style.display = "none"
})

async function fetchPrice() {
    try {
        const response = await fetch("http://localhost:3000/api/price", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ basePrice: 100 })
        })
        const data = await response.json()
        priceDisplay.textContent = data.price.toFixed(2)
    } catch (err) {
        console.error("Error fetching price:", err)
        priceDisplay.textContent = "Error fetching price"
    }
}

fetchPrice()

