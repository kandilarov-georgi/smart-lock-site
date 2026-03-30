// Register
document.getElementById("registerForm")?.addEventListener("submit", e=>{
e.preventDefault();
localStorage.setItem("user", username.value);
localStorage.setItem("pass", password.value);
alert("Registered!");
});

// Login
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

// Fake payment
function buy(){
localStorage.setItem("bought","yes");
alert("Purchase successful!");
}

function subscribe(){
localStorage.setItem("sub","yes");
alert("Subscription active!");
}

// Unlock
function unlock(){
if(localStorage.getItem("bought") || localStorage.getItem("sub")){
document.getElementById("status").innerText="Unlocked";
} else {
alert("No access");
}
}
function feature(name){
  alert(name + " activated!");
}