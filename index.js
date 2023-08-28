// Molar Mass Calculator: Define an object that holds the atomic
// masses of different elements. Write a function that takes
// a chemical formula as input (e.g., "H2O") and calculates its molar mass.
// (1.00797 * 2) + 15.994 = 18.015
// looping through input element at each iteration:
// check if character is uppercase:
// if upper check if immediate next char is lower case
// if lower append it to upper characte, check mass
// else if upper get atomic mass of the previous upper
// if char is a number, parse it and * by atomic mass of prev element
let userInput = document.getElementById('userInput');
let calculateBtn = document.getElementById('calculateBtn');
let molarMass = document.getElementById('molarMass');

calculateBtn.addEventListener('click', calculateMolarMass)

let atomicMasses = {
  H: 1.00794,
  He: 4.002602,
  Li: 6.941,
  Be: 9.01218,
  O: 15.9994,
};
function calculateMolarMass(element) {
  let molarMass = 0;
  for (let i = 0; i < element.length; i++) {
    let character = element[i];
    if (character.match(/[A-Z]/)) {
      let symbol = character;
      if (i + 1 < element.length && element[i + 1].match(/[a-z]/)) {
        symbol += element[i + 1];
        i++;
      }
      const atomicMass = atomicMasses[symbol];
      let number = "1";
      if (i + 1 < element.length && element[i + 1].match(/[0-9]/)) {
        number = element[i + 1];
        if (i + 2 < element.length && element[i + 2].match(/[0-9]/)) {
          number += element[i + 2];
          i++;
        }
      }
      molarMass += atomicMass * parseInt(number);
      // molarMass += atomicMass;
    }
  }
  return molarMass;
}
console.log(calculateMolarMass("HeH2O"));
