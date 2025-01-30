/* Napiši funkciju jeAritmetickiNiz(niz), koja provjerava da li su brojevi u nizu raspoređeni u aritmetičkom nizu (gdje je razlika između svakog uzastopnog para brojeva ista).

	Ulaz: 
	
	console.log(jeAritmetickiNiz([2, 4, 6, 8, 10]));
console.log(jeAritmetickiNiz([3, 6, 9, 15]));

	Izlaz: 
	
	true
false
 */

function jeAritmetickiNiz(niz) {
    if (niz.length < 2) {
      return true;
    }
  
    let razlika = niz[1] - niz[0];
  
    for (let i = 1; i < niz.length - 1; i++) {
      if (niz[i + 1] - niz[i] !== razlika) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(jeAritmetickiNiz([2, 4, 6, 8, 10])); 
  console.log(jeAritmetickiNiz([3, 6, 9, 15]));    
  