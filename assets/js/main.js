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
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
lista_cognomi = lista_cognomi.sort();
console.log(lista_cognomi);

var lista_output = "";
for (var i = 0; i < lista_cognomi.length; i++){
    lista_output = lista_output + "<span>" + (i+1) + "</span>" + "<span class=\"capitalize\">" + " " + lista_cognomi[i] + "</span>" + "<br>";
}
document.getElementById("cognomi").innerHTML = lista_output;