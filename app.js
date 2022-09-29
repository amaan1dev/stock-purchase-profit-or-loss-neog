var buyingPrice = document.querySelector("#buying-price");

var stocksQuantity = document.querySelector("#stocks-qunatity");

var sellingPrice = document.querySelector("#selling-price");

var checkBtn = document.querySelector("#chk-btn");

function checkProfit(){
    var profit = sellingPrice.value - buyingPrice.value
}

function clickHandler(){
    console.log(checkProfit(profit))
}


checkBtn.addEventListener("click", clickHandler)