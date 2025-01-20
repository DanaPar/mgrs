//Checks user coordinates and transforms them to 10digit coordinates for later validation
function transformCoordinates(userCoordinates) {
    // 1.remove spaces
    let trimmed = userCoordinates.replace(/\s+/g, "");

    // 2.Split into two parts
    let half = trimmed.length / 2;
    let X = trimmed.slice(0, half);
    let Y = trimmed.slice(half);

    // 3. Add 0 till 5 digits in each
    X = X.padEnd(5, "0");
    Y = Y.padEnd(5, "0");

    return [X, Y];
}

const userCoordinates = prompt("Enter coordinates: ");

const [xCoordinates, yCoordinates] = transformCoordinates(userCoordinates);

console.log(`The 10digit mgrs coordinates are ${xCoordinates}${yCoordinates}`);
