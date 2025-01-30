/*Napisi funkciju koja za date rijeci i prefix, vraca rijeci koje imaju taj prefix.


Primjer:
Ulaz: words = ["pay","attention","practice","attend"], prefix = "at"
Izlaz: [“attention”, “attend”]
 */


function filtrirajPoPrefixu(rijeci, prefix) {
    let rezultat = [];
    
    for (let i = 0; i < rijeci.length; i++) {
      if (rijeci[i].slice(0, prefix.length) === prefix) {
        rezultat.push(rijeci[i]);
      }
    }
    
    return rezultat;
  }
  
  console.log(filtrirajPoPrefixu(["pay", "attention", "practice", "attend"], "at")); 
  