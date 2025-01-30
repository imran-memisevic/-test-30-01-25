/*Napisi funkciju koja izbacuje svaki drugi najmanji element niza, i ubacuje u novi niz. Pretpostaviti da su elementi u nizu unikatni.
Primjer:
Ulaz: [5, 1, 9 , 3, 7 ,2]
Izlaz: [2, 5, 9]
 */

function svakiDrugi(niz) {
    let noviNiz = [];
    let sortiraniNiz = niz.slice().sort((a, b) => a - b);
    
    for (let i = 1; i < sortiraniNiz.length; i += 2) {
      noviNiz.push(sortiraniNiz[i]);
    }
    
    return noviNiz;
  }
  
  console.log(svakiDrugi([5, 1, 9, 3, 7, 2])); 

  