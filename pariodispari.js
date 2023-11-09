function giocoPariDispari() {
    let sceltaUtente = prompt("Scegli pari o dispari").toLowerCase();
    
    if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
        alert("Scelta non valida. Scegli pari o dispari.");
        return;
    }

    let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        alert("Numero non valido. Inserisci un numero da 1 a 5.");
        return;
    }

    
    let numeroComputer = Math.floor(Math.random() * 5) + 1;
    console.log("Numero del computer: " + numeroComputer);

    console.log("Numero dell'utente: " + numeroUtente);
    let somma = numeroUtente + numeroComputer;


    if ((numeroUtente % 2 === 0 && sceltaUtente === "pari") || (numeroUtente % 2 !== 0 && sceltaUtente === "dispari")) {
        alert("Hai vinto!");
    } else if(numeroUtente && sceltaUtente === numeroComputer) {
        alert("Avete Pareggiato");
    }else {
        alert("Hai perso. Ritenta!");
    }
}

// Chiamata alla funzione principale del gioco
giocoPariDispari();