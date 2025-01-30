/*Napisi funkciju koja pronalazi ukupnu frekvenciju elemenata koji imaju najveću frekvenciju. Frekvencija elementa je broj njegovih pojavljivanja u nizu.

Primjer 1:
Ulaz: nums = [1,2,2,3,1,4]
Izlaz: 4

Objašnjenje: Brojevi 1 i 2 imaju frekvenciju 2, što je najveća frekvencija u nizu.
Ukupan broj elemenata sa tom frekvencijom je 4.

Primjer 2:
Ulaz: nums = [1,2,3,4,5]
Izlaz: 5

Objašnjenje: Svi elementi niza imaju frekvenciju 1, što je najveća frekvencija.
Ukupan broj elemenata sa tom frekvencijom je 5.*/

function brojFrekvencija(niz) {
    let frekvencija = {};
  
    for (let i = 0; i < niz.length; i++) {
      let broj = niz[i];
      
      if (frekvencija[broj]) {
        frekvencija[broj] = frekvencija[broj] + 1;
      } else {
        frekvencija[broj] = 1;
      }
    }
  
    let maxFrekvencija = 0;
    for (let broj in frekvencija) {
      if (frekvencija[broj] > maxFrekvencija) {
        maxFrekvencija = frekvencija[broj];
      }
    }
  
    let brojMax = 0;
    for (let broj in frekvencija) {
      if (frekvencija[broj] === maxFrekvencija) {
        brojMax++;
      }
    }
  
    return brojMax;
  }
  
  console.log(brojFrekvencija([1, 2, 2, 3, 1, 4])); 
  console.log(brojFrekvencija([1, 2, 3, 4, 5]));    
  
  
