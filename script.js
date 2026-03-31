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

// unlock + sound
function unlock(){
let status = document.getElementById("status");
let door = document.getElementById("door");
let sound = new Audio("unlock.mp3");

if(status.innerText === "Locked"){
status.innerText = "Unlocked";
door.classList.add("open");
sound.play();
} else {
status.innerText = "Locked";
door.classList.remove("open");
}
}

// loading
window.onload = function(){
setTimeout(()=>{
document.getElementById("loader")?.classList.add("hidden");
},1000);
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

if(!localStorage.getItem("user")){
if(confirm("You need to login first!")){
window.location = "login.html";
}
return;
}

alert(name + " activated!");
}
function checkAccess(){
if(!localStorage.getItem("user")){
document.getElementById("guestActions").innerHTML = `
<p>You are not logged in</p>
<button onclick="location.href='login.html'">Login</button>
<button onclick="location.href='register.html'">Register</button>
`;
} else {
window.location = "plans.html";
}
}