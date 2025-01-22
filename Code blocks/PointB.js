//Finds point B if point A and distance from it is known
function findPointB(x1, y1, distance, degrees) {
    // 1. get radians from degrees
    const radians = degrees * Math.PI / 180;
    // 2. Calculate deltas
    const deltaX = distance * Math.sin(radians);
    const deltaY = distance * Math.cos(radians);
    // 3. Add calculated deltas to point A
    let X2 = x1 + deltaX;
    let Y2 = y1 + deltaY;

    return [X2, Y2];
}

const x1 = parseInt(prompt("Enter x1: "));
const y1 = parseInt(prompt("Enter y1: "));
const distance = parseInt(prompt("Enter distance: "));
const degrees = parseInt(prompt("Enter degrees: "));

const [xCoordinates, yCoordinates] = findPointB(x1, y1, distance, degrees);

console.log(`The 10digit mgrs coordinates are ${xCoordinates}${yCoordinates}`);
