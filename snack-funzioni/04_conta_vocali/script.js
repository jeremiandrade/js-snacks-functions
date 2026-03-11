/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
// - creo una funzione che accetta un parametro
// - itero con un for la mia parola (lettera per lettera)
// - controllo con un if se la lettera corrente è == a o == e o == i

const word = 'javascript';
const vocali = (word) => {
    let contatore = 0;
    let listaVocali = [];
    for (let i = 0; i < word.length; i++) {
        let elements = word[i];
        
        if (elements === 'a'|| elements === 'e'|| elements === 'i'|| elements === 'o'|| elements === 'u') {
        
        listaVocali.push(elements)    
        contatore++

     }   
    }
    return [contatore,listaVocali];
    
}
console.log(vocali(word));

// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)