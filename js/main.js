"use strict";
const textRight = document.querySelector(".yearplan-text-right")
const textLeft = document.querySelector(".yearplan-text-left")
const scrollButton = document.querySelector(".scroll-down-button")

function ChangeTypeActivateRight(){
    textRight.classList.remove("yearplan-text-black");
    textLeft.classList.add("yearplan-text-black");
    document.getElementById('price1').innerHTML = '3$';
    document.getElementById('price2').innerHTML = '5$';
}
function ChangeTypeActivateLeft(){
    textLeft.classList.remove("yearplan-text-black");
    textRight.classList.add("yearplan-text-black");
    document.getElementById('price1').innerHTML = '29$';
    document.getElementById('price2').innerHTML = '49$';
}
function ScrollDown(){
    window.scrollBy(0,2500);  
}
    textRight.addEventListener("click", ChangeTypeActivateRight);
    textLeft.addEventListener("click", ChangeTypeActivateLeft);
    scrollButton.addEventListener("click", ScrollDown);
