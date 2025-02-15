/*Il programma dovrà chiedere all'utente il numero di chilometri (numero interno) che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
:stella2:  Bonus:
Controllare che gli input di utenti siano numeri
Buon lavoro! :laptop_parrot:
PS:
Formula calcolo prezzo scontato:
sconto = prezzo * 20 / 100 */

/*
Richiesta utente
    quanti chilometri vuoi percorrere?
    quanti anni hai?

Elaborizione
    prezzo biglietto 0.21€ al km
    sconto per minorenni 20%
    sconto per over 65 40%

Output
    stampa prezzo finale
*/
const kmStr = prompt("Quanti chilometri vuoi percorrere?");
const ageStr = prompt("Quanti anni hai?")
const prezzo = 0.21;
console.log(kmStr, ageStr, prezzo);


const km = parseInt(kmStr);
const age = parseInt(ageStr);
console.log(km, age,);

let bigliettoStr;
let biglietto = parseInt(bigliettoStr)





if(age <= 17){
        biglietto = prezzo * km - ((prezzo * km) * 20) / 100 

}else if(age >= 65){
        biglietto = prezzo * km - ((prezzo * km) * 40) / 100
        
} else {
        biglietto = prezzo * km
 }
    console.log(biglietto.toFixed(2));     









