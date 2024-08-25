var A= document.querySelector(".card-number-input")
var B= document.querySelector(".card-number-box")
var C= document.querySelector(".card-holder-input")
var D= document.querySelector(".card-holder-name")
var F= document.querySelector(".month-input")
var E= document.querySelector(".exp-month")
var H= document.querySelector(".year-input")
var G= document.querySelector(".exp-year")
var I= document.querySelector(".cvv-input")
var love= document.querySelector(".front")
var you= document.querySelector(".back")
var so= document.querySelector(".cvv-input")
var much= document.querySelector(".cvv-box")

 A.oninput=function(){
    B.innerText=A.value;
 }
 C.oninput=function(){
    D.innerText=C.value;
 }
 F.oninput=function(){
    E.innerText=F.value;
 }
 H.oninput=function(){
    G.innerText=H.value;
 }
 I.onmouseenter=function(){
    love.style.transform="perspective(1000px) rotateY(-180deg)";
    you.style.transform="perspective(1000px) rotateY(0deg)";
 }
 I.onmouseleave=function(){
    love.style.transform="perspective(1000px) rotateY(0deg)";
    you.style.transform="perspective(1000px) rotateY(180deg)";
 }
 so.oninput=function(){
    much.innerText=so.value;
 }