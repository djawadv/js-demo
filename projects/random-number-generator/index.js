const rollBtn=document.getElementById("roll-btn");
const rollNumber=document.getElementById("roll-num");

rollBtn.onclick=function(){
    let randomNUmber=Math.floor(Math.random()*7);
    rollNumber.textContent=randomNUmber;
}