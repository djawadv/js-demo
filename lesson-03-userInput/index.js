// there is two ways to user input in js
// easy way

//let name1 = window.prompt("enter you name");
//console.log(name1);

let username;

document.getElementById("submit-btn").onclick = function(){
    username=document.getElementById("user-input").value;
    console.log(username);
    document.getElementById("greetings").textContent=`hello ${username}`;
}