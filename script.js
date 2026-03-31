// register
document.getElementById("registerForm")?.addEventListener("submit", e=>{
e.preventDefault();

let user = document.getElementById("username");
let pass = document.getElementById("password");

if(user && pass){
localStorage.setItem("user", user.value);
localStorage.setItem("pass", pass.value);
alert("Registered!");
}
});

// login
document.getElementById("loginForm")?.addEventListener("submit", e=>{
e.preventDefault();

let user = document.getElementById("loginUsername");
let pass = document.getElementById("loginPassword");

if(user.value === localStorage.getItem("user") &&
   pass.value === localStorage.getItem("pass")){

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

let code = document.getElementById("faCode");

if(code.value == sessionStorage.getItem("code")){
window.location = "dashboard.html";
} else {
alert("Wrong code");
}
});

// unlock
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

// loading FIX
window.onload = function(){
let loader = document.getElementById("loader");
if(loader){
loader.style.display = "none";
}
};
// buy
function buy(){
alert("Purchase successful!");
}

// subscribe
function subscribe(){
alert("Subscription active!");
}

// feature защита
function feature(name){
if(!localStorage.getItem("user")){
if(confirm("You need to login first!")){
window.location = "login.html";
}
return;
}
alert(name + " activated!");
}

// check access
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