let inserisciParola = prompt("Inserisci una parola");

let parola = invertiParola(inserisciParola);

if(inserisciParola == parola){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
  
function invertiParola(inserisciParola){
  let strInversa = inserisciParola.split('').reverse().join('');  
  return strInversa;
}

invertiParola();