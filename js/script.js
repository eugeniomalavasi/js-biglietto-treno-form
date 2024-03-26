// TEST
// alert("test")

// INPUT
// selezione bottone
const sendBtn = document.getElementById("send_button");
// eventlistener del bottone
sendBtn.addEventListener ("click", function() {
console.log("click");
// selezione dell'input e trasformazione in numero
let userKm = parseInt(document.getElementById("user_km")); // number
console.log(userKm , typeof userKm);

let userAge = parseInt(document.getElementById("age")); // number
console.log(userAge , typeof userAge);

const inputKm = userKm;
console.log(inputKm, typeof inputKm);
})

// LOGICA

// OUTPUT