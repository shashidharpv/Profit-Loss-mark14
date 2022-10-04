const buyingPrice = document.querySelector("#buy-price");
const numOfStocks = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");

const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitButton.addEventListener('click',submitHandler);

function submitHandler(){
    var bp = Number(buyingPrice.value);
    var nos = Number(numOfStocks.value);
    var curr = Number(currentPrice.value);

    calcProfitAndLoss(bp,nos,curr);
}

function calcProfitAndLoss(buyingPrice, numOfStocks, currentPrice) {
  //Loss
  if (buyingPrice > currentPrice) {
    var loss = (buyingPrice - currentPrice) * numOfStocks;
    var lossPercent = ((loss/(buyingPrice*numOfStocks))*100).toFixed(2);
    if(lossPercent>50){
      document.body.style.backgroundColor = "#6E6E6E";
    }else{
      document.body.style.backgroundColor = "#ABF62D";
    }

  showOutput(`Sorry Dear 😢, You lost ${loss}Rs and the Loss percentage is ${lossPercent}%`);
 
  } else if (buyingPrice < currentPrice) {
    //Profit
    var profit = (currentPrice - buyingPrice) * numOfStocks; 
    var profiPercent = ((profit/(buyingPrice*numOfStocks))*100).toFixed(2);
       document.body.style.backgroundColor = "#F7F7F7";


  showOutput(`Cheers buddy 🥂, You made a profit of ${profit}Rs and that is ${profiPercent}% gain`);

  } else {
    //Breakeven
       document.body.style.backgroundColor = "#E1E2E2";
  showOutput("No Pain, No Gain 😊 You gotta wait");
  }
}

function showOutput(msg){
    outputBox.innerHTML = msg;
}