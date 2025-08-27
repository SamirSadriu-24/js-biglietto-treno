// COPIA TRACCIA DA FARE //


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// TIP:
// per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

// 100km, 10 anni => prezzo corretto:  €16.80
// 100km, 70 anni => prezzo corretto: €12.60


//INIZIO PROGETTO//

//chiediamo al programma il numero di chilometri e l'età del passeggero.
let info;
const priceForKm = 0.21;

const userKm = parseInt(prompt("Inserisci i chilometri che vuoi percorrere"));
console.log(info = "Questi sono i chilometri che vuoi percorrere:", userKm);

const userAge = parseInt(prompt("Inserisci la tua Età"));
console.log(info = "Età del passeggero:", userAge);

//iniziamo a far ragionare il computer per fargli capire che un km è uguale a 0.21 €

const normalPrice = userKm * priceForKm;
// console.log(info = "Questo è il prezzo del biglietto:", parseInt(normalPrice.toFixed(2)), "€");

const minorDiscount = normalPrice * 0.20;
const minorPrice = normalPrice - minorDiscount;
// console.log(info = "Questo è il prezzo del biglietto per minorenni:", minorPrice, "€");

const oldDiscount = normalPrice * 0.40;
const oldPrice = normalPrice - oldDiscount;
// console.log(info = "Questo è il prezzo del biglietto per i viaggiatori Senior:", oldPrice, "€");


//dopo aver fatto capire al computer che calcoli fare per le varie età facciamoli capire che imput far uscire una volta recuperati i dati dall'utente.

if (userAge < 18){

    console.log(info= "Questo è il prezzo del biglietto per minorenni:", parseFloat(minorPrice.toFixed(2)), "€");

} else if (userAge >= 65){

    console.log(info = "Questo è il prezzo del biglietto per i viaggiatori Senior:", parseFloat(oldPrice.toFixed(2)), "€");

}else{
    
    console.log(info = "Questo è il prezzo del biglietto:", parseFloat(normalPrice.toFixed(2)), "€");
}

