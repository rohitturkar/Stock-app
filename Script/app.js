const initialPrice = document.querySelector("#initial-price");
const quantityOfStock = document.querySelector("#quantity-stock");
const currentPrice = document.querySelector("#current-price");
const calculateBtn = document.querySelector("#calculate");
const outputEL = document.querySelector("#output");



calculateBtn.addEventListener("click", function calculateProfitOrLoss() {
    hideoutput();
    let initialvalue=initialPrice.value;
    let currentValue=currentPrice.value;
    let quantityOfStockValue=quantityOfStock.value;

    if (initialvalue != "" && quantityOfStockValue!= "" && currentValue!= "") {
      if(initialvalue>currentValue){
           let loss=(initialvalue-currentValue)*quantityOfStockValue;
           let lossPercenatge=(loss/initialvalue)*100;
           showOutput(`Hey the loss is ${loss} and the percent is ${lossPercenatge} 😥`)
      }else if(currentValue>initialvalue){
           let profit=(currentValue-initialvalue)*quantityOfStockValue;
           let profitPercenatge=(profit/initialvalue)*100;
           showOutput(`Hey you gain a profit Congratulations!! the profit is ${profit} and the profit percentage is ${profitPercenatge} 🕺🏻😃 `)
      }else if(currentValue===initialvalue){
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