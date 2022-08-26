const initialPrice = document.querySelector("#initial-price");
const quantityOfStock = document.querySelector("#quantity-stock");
const currentPrice = document.querySelector("#current-price");
const calculateBtn = document.querySelector("#calculate");
const outputEL = document.querySelector("#output");



calculateBtn.addEventListener("click", function calculateProfitOrLoss() {
    hideoutput();
    let initialValue=Number(initialPrice.value);
    let currentValue=Number(currentPrice.value);
    let quantityOfStockValue=Number(quantityOfStock.value);

    if (initialValue != "" && quantityOfStockValue!= "" && currentValue!= "") {
      if(initialValue>currentValue){
           let loss=(initialValue-currentValue)*quantityOfStockValue;
           let lossPercenatge=(loss/initialValue)*100;
           showOutput(`Hey the loss is ${loss} and the percent is ${lossPercenatge} 😥`)
      }else if(currentValue>initialValue){
           let profit=(currentValue-initialValue)*quantityOfStockValue;
           let profitPercenatge=(profit/initialValue)*100;
           showOutput(`Hey you gain a profit Congratulations!! the profit is ${profit} and the profit percentage is ${profitPercenatge} 🕺🏻😃 `)
      }else{
        showOutput(`No pain no gain, no gain no pain 😐`)
      }
    }
    else {
        showOutput("Please Enter the valid stock details")
    }
}) 

function hideoutput() {
    outputEL.style.display = "none";
}
function showOutput(text) {
    outputEL.style.display = "block";
    outputEL.innerText = text;
}