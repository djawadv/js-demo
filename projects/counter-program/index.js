let count=0;
document.getElementById("current-count").textContent=count;

//increass button
document.getElementById("increass-btn").onclick=function(){
    count++;
    document.getElementById("current-count").textContent=count;

}
//decreass button
document.getElementById("decreass-btn").onclick=function(){
    count--;
    document.getElementById("current-count").textContent=count;
}
//reset button
document.getElementById("reset-btn").onclick=function(){
    count=0;
    document.getElementById("current-count").textContent=count;

}
