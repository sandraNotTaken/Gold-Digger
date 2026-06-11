const priceElement = document.getElementById("price")
const refreshBtn = document.getElementById("refreshPrice")
const investBtn = document.getElementById("invest-btn")
const outputDialog = document.getElementById("output-dialog")

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
        const response = await fetch("/api/price", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ basePrice: 100 })
        })
        const data = await response.json()
        priceElement.textContent = `Current Price: $${data.price}`
    } catch (err) {
        console.error("Error fetching price:", err)
        priceElement.textContent = "Error fetching price"
    }
}

fetchPrice()

