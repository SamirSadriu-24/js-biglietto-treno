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
let info

const userKm = parseInt(prompt("Inserisci i chilometri che vuoi percorrere"));
console.log(typeof userKm);
console.log(info = "Questi sono i chilometri che vuoi percorrere:", userKm);

const userAge = parseInt(prompt("Inserisci la tua Età"));
console.log(typeof userAge);
console.log(info = "Età del passeggero:", userAge);