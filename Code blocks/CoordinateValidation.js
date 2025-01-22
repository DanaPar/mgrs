//Validates if coordinates are correct, check also precision
function validateCoordinates(x1, y1, x2, y2) {
    let is1000 = false;
    let is100 = false;
    let is10 = false;
    let userPrecision;
    let isPassed = false;

    // 1. check if squares correct, if correct is1000 = true
    if(x1.slice(0, 2) === x2.slice(0, 2) && y1.slice(0, 2) === y2.slice(0, 2)) {
        is1000 = true;
    }
    // 2. check if 100m correct, if correct is100 = true;
    if(x1[2] === x2[2] && y1[2] === y2[2]) {
        is100 = true;
    }
    // 3. check if 10m correct, if correct is10 = true;
   if(x1[3] === x2[3] && y1[3] === y2[3]) {
       is10 = true;
   }

   // 4. Decide on precision
   if(is1000 && is100 && is10) {
       userPrecision = 10;
   }
   else if (is1000 && is100) {
       userPrecision = 100;
   }
   else if (is1000) {
       userPrecision = 1000;
   }
   else {
       userPrecision = 0;
   }

   if (userPrecision >= precision) {
       isPassed = true;
   }
    return [isPassed, userPrecision];
}

const x1 = prompt("Enter x1: ");
const y1 = prompt("Enter y1: ");
const x2 = prompt("Enter x2: ");
const y2 = prompt("Enter y2: ");
const precision = parseInt(prompt("Enter precision in meters (1000, 100, 10): "));
const [isCorrect, userPrecision] = validateCoordinates(x1, y1, x2, y2, precision);

console.log(`Coordinates are ${isCorrect}, your precision is ${userPrecision}`);
