// TEST
// alert("test")

// INPUT
// selezione bottone
const sendBtn = document.getElementById("send_button");
// eventlistener del bottone
sendBtn.addEventListener ("click", function() {
console.log("click");
// selezione dell'input km
const userKm = document.getElementById("user_km"); // object
console.log(userKm , typeof userKm);
// selezione dell'input Age
const userAge = document.getElementById("age"); // object
console.log(userAge , typeof userAge);

// raccolta input km
const kmValue = parseInt(userKm.value); // number
console.log(kmValue, typeof kmValue);
// raccolta input age
const ageValue = parseInt(userAge.value) // number
console.log(ageValue, typeof ageValue);

// prezzo al km
const priceKm = 0.21; // number

// calcolo costo biglietto base
let baseTicket = priceKm * kmValue; // number
console.log(baseTicket, "prezzo biglietto base");

// LOGICA
// calcolo totale sconto
let discount = 0;

if (ageValue < 18) {
    discount = 20;
} else if (ageValue > 65) {
    discount = 40;
} 

let totalDiscount = (baseTicket * discount) / 100;
console.log(totalDiscount, "ammontare dello sconto");

let ticketPrice = baseTicket - totalDiscount;
console.log(ticketPrice, "prezzo finale del biglietto");
// OUTPUT

})
