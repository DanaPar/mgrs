// Function to calculate the distance from one point to other A(x1, y1) and B(x2, y2)
function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Convert Cartesian angle to azimuth (measured clockwise from north)
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
}

// Prompt the user for input
console.log("Enter coordinates for point A (x1, y1):");
const x1 = parseFloat(prompt("x1:"));
const y1 = parseFloat(prompt("y1:"));

console.log("Enter coordinates for point B (x2, y2):");
const x2 = parseFloat(prompt("x2:"));
const y2 = parseFloat(prompt("y2:"));

// Calculate the azimuth
const distance = calculateDistance(x1, y1, x2, y2);

// Output the result
console.log(`The distance from point A(${x1}, ${y1}) to point B(${x2}, ${y2}) is: ${distance.toFixed(0)}m`);
