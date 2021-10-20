var accept = true;
var decline = false;
var kaina = prompt("Įveskite prekės kainą");
kaina = Number(kaina);

while(isNaN(kaina) || kaina <= 0){
  var kaina = prompt("Įveskite prekės kainą");
}
while(kaina > 0 && decline == false){
  if(confirm('Ar reikalingas pristatymas į namus? (taip/ne)')) {
    var accept = "reikia";
    var miestas = prompt('Į kurį miestą reiks pristatyti?');
  } else {
    var accept = "nereikia";
    decline = true;
}

if(accept == "reikia") {
  var pristatymas = kaina * 0.05;
  var viso = kaina + pristatymas;
  console.log("Prekės kaina: " + (+kaina).toFixed(2) + " € ");
  console.log("Pristatymas: " + pristatymas.toFixed(2) + " € ");
  console.log("Iš viso: " + viso.toFixed(2) + " € ");
  console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.");
  alert("Ačiū už Jūsų pasirinkimą!");
  break;
} else {
  console.log("Prekės kaina: " + (+kaina).toFixed(2) + " € ");
  console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
  alert("Ačiū už Jūsų pasirinkimą!");
}
}



// console.log("Prekės kaina su PVM:" + bendrakaina.toFixed(2) + " Eur");
// console.log("PVM:" + (kaina * pvm).toFixed(2) + " Eur");
// console.log("Prekės kaina be PVM:" + kaina.toFixed(2) + " Eur");

//
// do {
//   var i = prompt("Parašyk skaičių");
//   console.log(i);
// } while(i <= 200)

// Interactions
// Variables: strings, numbers, boolean
// Loops: while, do-while, for
// Conditional statements: if, if else, else
// Logical operators: or(||), and(&&)
