/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
 const letterA = (names) => {
    const A = []
    for (let i=0; i< names.length; i++){
        const letter = names[i];

    if(letter[0] === 'A')
        A.push(letter)       
 }  
 return A

}
console.log(letterA(names));




// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]