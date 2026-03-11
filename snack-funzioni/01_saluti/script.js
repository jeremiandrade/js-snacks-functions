/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

const hello = (userName) => {
    const togreet = 'ciao';
    const somma = togreet + userName;
    return somma;
}
console.log(hello(' ' + 'mario'));

const greet = (userName) => 'ciao'+ userName;
console.log(hello(' ' + 'Mario'));

// Dichiara la funzione qui.
// Invoca la funzione qui e stampa il risultato in console
//Risultato atteso se si passa 'Mario': // ciao Mario
