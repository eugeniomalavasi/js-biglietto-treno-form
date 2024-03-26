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
})

// LOGICA

// OUTPUT