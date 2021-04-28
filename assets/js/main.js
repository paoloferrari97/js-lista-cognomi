//1. chiedi all’utente il cognome
var cognome = "";
while (cognome == "") {
    cognome = prompt("Inserisci il tuo cognome!").toLowerCase();
}

//2. inseriscilo in un array con altri cognomi:
//‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lista_cognomi = ["bianchi", "neri", "rossi", "verdi", "gialli"];
lista_cognomi.push(cognome);

//3. stampa la lista ordinata alfabeticamente
lista_cognomi = lista_cognomi.sort();
console.log(lista_cognomi);

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova