var buyingPrice = document.querySelector("#buying-price");

var stocksQuantity = document.querySelector("#stocks-qunatity");

var sellingPrice = document.querySelector("#selling-price");

var checkBtn = document.querySelector("#chk-btn");

var resultText = document.querySelector("#result-text");

function checkProfitAndLoss() {
    if (Number(sellingPrice.value) > Number(buyingPrice.value)) {
        var profit = Number(sellingPrice.value) - Number(buyingPrice.value);

        var totalProfit = Number(profit) * Number(stocksQuantity);

        var profitPercentage = ((profit / buyingPrice.value) * 100).toFixed(2);

        resultText.innerText = "The Profit Percentage is " + profitPercentage + "% " + "with a net profit of ₹" + totalProfit;
    }
    else if (Number(sellingPrice.value) < Number(buyingPrice.value)) {
        var loss = Number(buyingPrice.value) - Number(sellingPrice.value);

        var lossPercentage = ((loss / buyingPrice.value) * 100).toFixed(2);
        
        resultText.innerText = "The Loss Percentage is " + lossPercentage + "% " + "with a total loss of ₹" + loss;
    }
}



checkBtn.addEventListener("click", checkProfitAndLoss)