/*Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.*/

//Creo array 
let arraySpesa = ["Pane", "Uova", "Latte", "Pesto", "Formaggio", "Caffè", "Tritolo", "Shampoo", "Miele", "Una gioia", "Taralli", "Dentifricio", "Sacchi della spazzatura"];

let i = 0;
while (i < arraySpesa.length) {
    i++;
    console.log(arraySpesa[i] + " stampato da ciclo while");
}

//Creo ciclo for per printare in console i valori di array
for (let i = 0; i < arraySpesa.length; i++) {

    console.log(arraySpesa[i] + " stampato da ciclo for");

    document.getElementById("ulSpesa").innerHTML += '<li id="itemLista">' + arraySpesa[i] + '</li>';
}
//creo codice per identificare e rendere funzionale il bottone
let bottoneAggiunte = document.getElementById("bottone");

bottoneAggiunte.addEventListener("click", function () {

    let aggiuntaSpesa = document.getElementById("inputSpesa").value;

    if (aggiuntaSpesa.length > 0) {

        document.getElementById("ulSpesa").innerHTML += '<li id="itemLista">' + aggiuntaSpesa + '</li>';

        console.log(aggiuntaSpesa);
    }else

    alert("Il campo non può essere vuoto!");

});


