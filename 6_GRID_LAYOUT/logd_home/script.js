/*
    Script for the landing page
    Created by Aashish Loknath Panigrahi
*/

//Selecting different elements from the landing page
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let time_val = document.querySelector(".time-val");
let nav_link = document.querySelectorAll(".nav-link");
let time_marker = document.querySelector(".time-marker");
let signup_label = document.querySelector("label[for='up']");
let signin_label = document.querySelector("label[for='in']");
let navbar_toggler = document.querySelector(".navbar-toggler");
let navbar_toggler_icon = document.querySelector(".navbar-toggler>i");

//On clicking the ... icon to the top, the icon type will toggle/change to three-dots-vertical
navbar_toggler_icon.addEventListener("click",(event)=>{
    navbar_toggler_icon.classList.toggle("bi-three-dots");
    navbar_toggler_icon.classList.toggle("bi-three-dots-vertical");
});

//Clicking any of the links in the nav-link section will close the navbar section by clicking on the navbar_toggler
nav_link.forEach((element)=>{
    element.addEventListener("click",(event)=>{
        navbar_toggler.click();
    }); 
});

//Making both containers of equal height
card2.style.height=window.getComputedStyle(card1).getPropertyValue("height")

//For timer on the main app
let count=0;
let timer_marker_height_interval = window.setInterval(()=>{
    if(count==101){
        window.clearInterval(timer_marker_height_interval);
    }
    else{
        // console.log(count,25,`${(count/25)*Number(card2.style.height.substr(0,card2.style.height.indexOf("px")))}px`);
        time_marker.style.setProperty("height",`${(count/100)*Number(card2.style.height.substr(0,card2.style.height.indexOf("px")))}px`);
        time_val.innerHTML=`${parseInt(50-count/2)}`;
        count++;
    }
},100);

//Clicking on the sign-up or sign-in button will toggle it's classes
signin_label.addEventListener("click",(event)=>{
    signup_label.classList.toggle("btn-dark");
    signup_label.classList.toggle("shadow");
    signin_label.classList.toggle("btn-dark");
    signin_label.classList.toggle("shadow");
});
signup_label.addEventListener("click",(event)=>{
    signup_label.classList.toggle("btn-dark");
    signup_label.classList.toggle("shadow");
    signin_label.classList.toggle("btn-dark");
    signin_label.classList.toggle("shadow");
});