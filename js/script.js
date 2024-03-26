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
// selezione input name
const userName = document.getElementById("user_name");
console.log(userName, typeof userName);
// selezione dell'input Age
const userAge = document.getElementById("age"); // object
console.log(userAge , typeof userAge);

// raccolta input km
const kmValue = parseInt(userKm.value); // number
console.log(kmValue, typeof kmValue);
// raccolta input age
let ageValue = (userAge.value) // string
console.log(ageValue, typeof ageValue);
// raccolta input name
const nameValue = (userName.value);
console.log(nameValue, typeof nameValue); 
// prezzo al km
const priceKm = 0.21; // number

// calcolo costo biglietto base
let baseTicket = priceKm * kmValue; // number
console.log(baseTicket, "prezzo biglietto base");

// LOGICA
// calcolo totale sconto
let discount = 0;

if (ageValue = "minorenne") {
    discount = 20;
} else if (ageValue = "over 65" ) {
    discount = 40;
} else if (ageValue = "maggiorenne") {
    discount = 0;
}

// calcolo sconto
let totalDiscount = (baseTicket * discount) / 100;
console.log(totalDiscount, "ammontare dello sconto");

// calcolo prezzo biglietto finale
let ticketPrice = baseTicket - totalDiscount;
console.log(ticketPrice, "prezzo finale del biglietto");

// rendere il ticket visibile
const ticketDisplay = document.getElementById("ticket"); 
ticketDisplay.classList.add("active")

// numero casuale da 1 a 10
let random10 = document.getElementById("rnd_10");
random10 =  Math.floor((Math.random() * 10) + 1);
let rnd10out = document.getElementById("rnd_10").innerHTML = random10;

// numero casuale da 1 a 10000
let random10000 = document.getElementById("rnd_10000");
random10000 =  Math.floor((Math.random() * 10000) + 1);
let rnd10000out = document.getElementById("rnd_10000").innerHTML = random10000;

// OUTPUT
// stampa prezzo biglietto finale
const priceOut = document.getElementById("price_out").innerHTML = ticketPrice.toFixed(2) + "€";
console.log(priceOut, "ciao sono price out");
// stampa del nome passeggero
const passengerOut = document.querySelector (".name_out_container p").innerHTML = nameValue;


})
