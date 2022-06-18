
//Sets class to 
document.querySelector(`[checked="true"]`).parentElement.classList.add("sign-option-checked");

//Selecting 
document.querySelector(`#up`).addEventListener("click",()=>{
	document.querySelector(`#up`).parentElement.classList.add("sign-option-checked");
	document.querySelector(`#in`).parentElement.classList.remove("sign-option-checked");
	document.querySelector("title").innerHTML="Sign up - Logd";
});
document.querySelector(`#in`).addEventListener("click",()=>{
	document.querySelector(`#in`).parentElement.classList.add("sign-option-checked");
	document.querySelector(`#up`).parentElement.classList.remove("sign-option-checked");
	document.querySelector("title").innerHTML="Sign in - Logd";
});

//Selecting
let alertItems = document.querySelectorAll(".alert");
alertItems.forEach((elements)=>{
	elements.style.display = "none";
});

console.log(alertItems[0],alertItems[1],alertItems[2],alertItems[4]);