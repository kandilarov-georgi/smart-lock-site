// register
document.getElementById("registerForm")?.addEventListener("submit", e=>{
e.preventDefault();
localStorage.setItem("user", username.value);
localStorage.setItem("pass", password.value);
alert("Registered!");
});

// login
document.getElementById("loginForm")?.addEventListener("submit", e=>{
e.preventDefault();

if(loginUsername.value === localStorage.getItem("user") &&
   loginPassword.value === localStorage.getItem("pass")){

let code = Math.floor(100000 + Math.random()*900000);
sessionStorage.setItem("code", code);

alert("Your 2FA code is: " + code);
window.location = "2fa.html";

} else {
alert("Wrong login");
}
});

// 2FA
document.getElementById("faForm")?.addEventListener("submit", e=>{
e.preventDefault();

if(faCode.value == sessionStorage.getItem("code")){
window.location = "dashboard.html";
} else {
alert("Wrong code");
}
});

// unlock animation
function unlock(){
let status = document.getElementById("status");
let door = document.getElementById("door");

if(status.innerText === "Locked"){
status.innerText = "Unlocked";
door.classList.add("open");
} else {
status.innerText = "Locked";
door.classList.remove("open");
}
}

// payments
function buy(){
alert("Purchase successful!");
}

function subscribe(){
alert("Subscription active!");
}

// features
function feature(name){
alert(name + " activated!");
}