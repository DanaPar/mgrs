//Validates if coordinates are correct, check also precision
function generateCoordinates(xMin, xMax, yMin, yMax) {
    let X,Y;
    // 1. Generate first two random digits in range min-max
    X = Math.floor(Math.random() * (xMax - xMin + 1) + xMin).toString();
    Y = Math.floor(Math.random() * (yMax - yMin + 1) + yMin).toString();
    // 2. Generate 3-4 digits in range 00-99
    X = X.concat(Math.floor(Math.random() * 100).toString());
    Y = Y.concat(Math.floor(Math.random() * 100).toString());
    // 3. Add zeros
    X = X.concat("0");
    Y = Y.concat("0");

    return [X, Y];
}

const xMin = 35;
const xMax = 40;
const yMin = 16;
const yMax = 19;
const [x, y] = generateCoordinates(xMin, xMax, yMin, yMax);

console.log(`Coordinates are ${x} ${y}`);
