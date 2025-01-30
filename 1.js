/*Napisi funkciju koja za ulaze ++x i x++ povecava vrijednost pocetne varijable, a za ulaze -–x i x-– smanjuje vrijednost varijable za 1. Pocetna vrijednost je 0.

Primjer:
Ulaz: ["--X","X++","X++", “X++”]
Izlaz: 2
 */



function sabiranjeUlaza(ulazi) {
    let x = 0;
  
    for (let i=0; i< ulazi.length; i++) {
      if (ulazi[i] === "X++" || ulazi[i] === "++X") {
        x++;
      } else if (ulazi[i] === "X--" || ulazi[i] === "--X") {
        x--;
      }
    }
  
    return x;
  }
  
  console.log(sabiranjeUlaza(["--X", "X++", "X++", "X++"])); 
  