// this is a second and yet a better methoed for doing this program 
// the main diffrecne between this and the frist one is instead of calling the eveytime we store it in a const variable
// i added stoping at 0 when deacreasing

//variables and consts (dom calls)
let count=0;
const increaseBtn=document.getElementById("increass-btn");
const decreaseBtn=document.getElementById("decreass-btn");
const resetBtn=document.getElementById("reset-btn");
let currentCount=document.getElementById("current-count");

//increase btn
increaseBtn.onclick=function(){
    count++;
    currentCount.textContent=count;
}
//deacrease btn
// prevernt count from reaching negative numbers
decreaseBtn.onclick=function(){
    if(count>0){
        count--;
        currentCount.textContent=count;
    }
}
//reset btn
resetBtn.onclick=function(){
    count=0;
    currentCount.textContent=count;
}
