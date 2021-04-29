//1. chiedi all’utente il cognome
var cognome = "";
while (cognome == "") {
    cognome = prompt("Inserisci il tuo cognome!").toLowerCase();
}

//2. inseriscilo in un array con altri cognomi:
//‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lista_cognomi = ["bianchi", "neri", "rossi", "verdi", "gialli", "ferrari", "esempio", "cognome"];
lista_cognomi.push(cognome);

//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
lista_cognomi = lista_cognomi.sort();
console.log(lista_cognomi);

var posizione_cognome = 0;
var lista_output = "";
for (var i = 0; i < lista_cognomi.length; i++){
    lista_output = lista_output + "<span>" + (i + 1) + "." + "</span>" + "<span class=\"capitalize\">" + " " + lista_cognomi[i] + "</span>" + "<br>";
    if (lista_cognomi[i] == cognome) {
        posizione_cognome = (i + 1);  //al posto di questi potevo usare lista.indexOf(nomedacercare) e mi da la sua posizione (ovviamente partono da 0 quindi farò + 1)
    }
}
document.getElementById("cognomi").innerHTML = lista_output;
document.getElementById("tuo_cognome").innerHTML = "Il tuo cognome è: " + "<span class=\"capitalize\">" + cognome + "</span>";
document.getElementById("posizione_cognome").innerHTML = "La posizione del tuo cognome è: " + posizione_cognome;