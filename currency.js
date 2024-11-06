async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultField = document.getElementById("result");

    if (!amount) {
        alert("Please enter an amount.");
        return;
    }

    // Fetch exchange rates from the API
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        // Check if the conversion currency exists in the response data
        if (data.rates[toCurrency]) {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            resultField.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultField.innerText = `Conversion rate for ${toCurrency} not found.`;
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        resultField.innerText = "Error fetching conversion rate.";
    }
}