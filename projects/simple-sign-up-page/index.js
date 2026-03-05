// declaring dom elements
const ageElement=document.getElementById("age");
const nameElement=document.getElementById("name");
const passwordElement=document.getElementById("password");
const submitBtnElement=document.getElementById("submit-btn");

// what happens when u clcik submit
submitBtnElement.onclick=function(){
    let nameInput = ageElement.value;
    let ageInput = Number(ageElement.value);
    let passwordInput = passwordElement.value;

    let container=document.getElementById("age-input");
    let message=document.createElement("p");
    let container1=document.getElementById("signUPC");

    if(ageInput===0 ){
        message.textContent=`plz enter your age`;
        message.style.color="red";
        container.appendChild(message);
    }
    else if (ageInput<18) {
        message.textContent=`youre too young !!`;
        message.style.color="red";
        container.appendChild(message);
    }
    else{
        message.textContent=`well done`;
        container1.appendChild(message);
    }



}