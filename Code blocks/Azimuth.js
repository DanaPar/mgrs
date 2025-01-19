// Function to calculate the azimuth from two points A(x1, y1) and B(x2, y2)
function calculateAzimuth(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Calculate the angle relative to the positive x-axis
    let theta = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convert radians to degrees

    // Convert Cartesian angle to azimuth (measured clockwise from north)
    let azimuth = (450 - theta) % 360; // Ensure the azimuth is in the range [0, 360)
    return azimuth;
}

// Prompt the user for input
console.log("Enter coordinates for point A (x1, y1):");
const x1 = parseFloat(prompt("x1:"));
const y1 = parseFloat(prompt("y1:"));

console.log("Enter coordinates for point B (x2, y2):");
const x2 = parseFloat(prompt("x2:"));
const y2 = parseFloat(prompt("y2:"));

// Calculate the azimuth
const azimuth = calculateAzimuth(x1, y1, x2, y2);

// Output the result
console.log(`The azimuth from point A(${x1}, ${y1}) to point B(${x2}, ${y2}) is: ${azimuth.toFixed(2)}°`);
