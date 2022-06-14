/* L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba. */

//  ANALISI
// FASE PREPARATORIA
// chiedo livello difficoltà a utente (tramite prompt)
// se 1: 1-100; se 2: 1-81; se 3: 1-49
// genero 16 bombe, numeri compresi tra 1 e maxRange (100, 81, 49)
// maxTentativi = maxRange - bombe (16)

// FASE LOGICA
// numeroUtente (via input): se === bomba ---> gioco finito e alert sconfitta + punteggio
// altrimenti:
//      se non già incluso, inserisco in array numeri azzeccati
//      se maxTentativi raggiunto ---> gioco finito e alert vittoria
//          altrimenti gioco continua

// numero di bombe nel gioco
const quantityOfBombs = 16;

// chiedo all'utente il livello di difficoltà del gioco
const difficultyLevel = prompt(
  'Dimmi il livello di difficoltà a cui vuoi giocare: 1, 2 o 3'
);

// range di numeri per la partita, default su massima difficoltà
let maxRange = 49;

// calcolo di maxRange
if (difficultyLevel === '1') {
  maxRange = 100;
} else if (difficultyLevel === '2') {
  maxRange = 81;
}

// variabile che contiene le bombe
let bomba = generateBombs(quantityOfBombs, 1, maxRange);
console.log('bomba', bomba);

// numero di tentativi, quindi durata massima partita
const numberOfAttempts = maxRange - quantityOfBombs;

// array che contiene i numeri indicati dall'utente durante il gioco che non sono bombe
let safeNumbers = [];

// ------------------------
// LOGICA DEL GIOCO
// ------------------------

let gameContinues = true;
while (gameContinues === true) {
  const userNumber = parseInt(prompt('Scrivi un numero'));

  //   se il numero combacia con una bomba
  if (bomba.includes(userNumber)) {
    // messaggio di game over
    alert('Hai perso');
    alert('Totale di numeri indovinati: ' + safeNumbers.length);
    // il gioco finisce
    gameContinues = false;
  } else {
    // inserisco il numero nell'array dei numeri azzeccati, se non lo contiene già
    if (!safeNumbers.includes(userNumber)) {
      safeNumbers.push(userNumber);
    }
    if (safeNumbers.length === numberOfAttempts) {
      alert('Hai indovinato tutti i numeri! Hai vinto');
      gameContinues = false;
    }
  }
}
// ------------------------
// FUNZIONI
// ------------------------

// genera un array di x elementi con numeri casuali tra 1 e maxRange (inclusi)
// numberOfElements --> quantità elementi da creare
// minRange --> minimo del numero casuale
// maxRange --> max del numero casuale
function generateBombs(quantityOfBombs, minRange, maxRange) {
  // genero array per numeri casuali
  const randomNumbersArray = [];

  // genero elementi finchè array.length = numberOfElements
  while (randomNumbersArray.length < quantityOfBombs) {
    const randomNumber = getRndInteger(minRange, maxRange);
    // se il numero non è gia presente nell'array allora lo aggiungo
    if (!randomNumbersArray.includes(randomNumber)) {
      randomNumbersArray.push(randomNumber);
    }
  }
  return randomNumbersArray;
}

// generatore di numeri casuali tra min e max (inclusi)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
