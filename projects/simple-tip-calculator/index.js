//this is a small cal
let billValue,tipValue;
document.getElementById("submit-btn").onclick=function(){
    //user input
    billValue=document.getElementById("bill-input").value;
    tipValue=document.getElementById("tip-input").value;
    //data converting
    billValue=Number(billValue);
    tipValue=Number(tipValue);
    //caclcukating the tip amount and total price 
    let tipAmount=tipValue*(billValue/100);
    let total=tipAmount+billValue;
    //printing the result to the user as p elemnet
    document.getElementById("after-text").textContent=`the total price is ${total}$ , the bill is ${billValue}$ and the tip is ${tipAmount}$`;
}