async function loadDashboard(){

const response=await fetch("/dashboard");

const data=await response.json();

document.getElementById("orders").innerText=data.totalOrders;
document.getElementById("revenue").innerText=data.totalRevenue;
document.getElementById("customers").innerText=data.totalCustomers;
document.getElementById("product").innerText=data.mostSoldProduct;

}

loadDashboard();

async function sendMessage(){

const input=document.getElementById("message");

const message=input.value;

if(message==="") return;

const chat=document.getElementById("chatBox");

chat.innerHTML+=`<div class="user"><b>You:</b> ${message}</div>`;

const response=await fetch("/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message
})

});

const data=await response.json();

chat.innerHTML+=`<div class="bot"><b>Bot:</b> ${data.response}</div>`;

chat.scrollTop=chat.scrollHeight;

input.value="";

}

document.getElementById("message").addEventListener("keypress",function(e){

if(e.key==="Enter")
sendMessage();

});