/* Un alert espone 5 numeri casuali.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla
volta i numeri che ha visto precedentemente. Dopo che
sono stati inseriti i 5 numeri, il software dice quanti e
quali dei numeri da indovinare sono stati individuati */

var arrayRandom = [];
while (arrayRandom.length < 5){

    var number = randomNumber(1,100);
    if (!arrayRandom.includes(number)){
        arrayRandom.push(number);
    }

}
// Richiamata funzione per scandire il tempo
tempoRimanente(29);
$('#random').text(arrayRandom);

//Impostato il tempo dopo il quale parte la funzione;
setTimeout(sceltaUtente, 30000);

//FUNZIONI
//Funzione Genara un numero casuale
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mostra il tempo rimanente per memorizzare i numeri
function tempoRimanente(time){

    var timer = setInterval(function(){
        if (time == 0) {
            clearInterval(timer);
        } else {
            $('.time').text('ATTENZIONE: Hai ancora: ' + time-- + 'secondi per memorizzare posizione e numeri');
        }
    },1000);

}

// Popolazione array dei numeri che l'utente iserisce
// Con controllo su tutte le possibilità di errata digitazione
// Poi, confronto numeri dei due array
function sceltaUtente(){

    $('.time').hide();
    $('#random').hide();

    var arrayNumeriUtente = [];
    var i = 1;
    while (i < 6){

        var numeriUtente = parseInt(prompt('Inserisci il numero in poszione: ' + i));
        if (numeriUtente < 0 || numeriUtente > 100 || isNaN(numeriUtente)){
            alert('ATTENZIONE!\nNumero non valido')
            i--;
        } else if (!arrayNumeriUtente.includes(numeriUtente)){
            arrayNumeriUtente.push(numeriUtente);
        } else {
            alert('ATTENZIONE!\nHai gia inserito questo numero, riprova dai!')
            i--;
        }
        i++;

    }

    var arrayRisultati = [];
    var i = 0;
    while (i < arrayRandom.length){

        if (arrayNumeriUtente[i] == arrayRandom[i]){
            arrayRisultati.push(arrayNumeriUtente[i])
        }
        i++;

    }

    $('.indovinati').text('Hai indovinato: ' + arrayRisultati.length + ' numeri');
    if (arrayRisultati.length >= 1){
        $('#numeri-indovinati').text('Ed i numeri sono: ' + arrayRisultati);
    }
}