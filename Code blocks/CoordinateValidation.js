//Validates if coordinates are correct, check also precision
export function validateCoordinates(x1, y1, x2, y2, precision) {
    let isPassed = false;

    let userPrecision = {
        1000: x1.slice(0, 2) === x2.slice(0, 2) && y1.slice(0, 2) === y2.slice(0, 2),
        100: x1[2] === x2[2] && y1[2] === y2[2],
        10: x1[3] === x2[3] && y1[3] === y2[3],
        1: x1[4] === x2[4] && y1[4] === y2[4],
        precision: function() {
            if (this[1000] && !this[100]) return 1000;
            if (this[1000] && this[100] && !this[10]) return 100;
            if (this[1000] && this[100] && this[10] && !this[1]) return 10;
            if (this[1000] && this[100] && this[10] && this[1]) return 1;
            return 0;
        }
    }

    if (userPrecision.precision() <= precision) {
       isPassed = true;
   }

    return [isPassed, userPrecision.precision()];

}
// Code for function testing ONLY
// const x1 = "35123";
// const y1 = "16123";
// const x2 = "35120";
// const y2 = "16123";
// const precision = 10;
// const [isCorrect, userPrecision] = validateCoordinates(x1, y1, x2, y2, precision);
//
// console.log(`Coordinates are ${isCorrect}, your precision is ${userPrecision}`);
