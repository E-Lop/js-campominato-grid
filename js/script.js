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
//          se maxTentativi raggiunto ---> gioco finito e alert vittoria
//          altrimenti gioco continua

// chiedo all'utente il livello di difficoltà del gioco
const difficultyLevel = prompt(
  'Dimmi il livello di difficoltà a cui vuoi giocare: 1, 2 o 3'
);
