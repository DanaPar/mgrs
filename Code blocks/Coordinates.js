//Checks user coordinates and transforms them to 10digit coordinates for later validation
function transformCoordinates(userCoordinates) {
    // 1.remove spaces
    let trimmed = userCoordinates.replace(/\s+/g, "");
    // 2.count digits
    let length = trimmed.length;
    let half = trimmed.length / 2;
    // 3. split in half
    let X = "";
    for (let i = 0; i < half; i++) {
        X += trimmed[i];
    }

    let Y = "";
    for (let i = half; i < half*2; i++) {
        Y += trimmed[i];
    }

    // 4. Check if X an Y contains 5 digits, if no add 0 until there is 5 digits in each
    for (let i = X.length; i < 5; i++){
       X = X.concat("0");
    }
    for (let i = Y.length; i < 5; i++){
        Y = Y.concat("0");
    }

    return [X, Y];
}

const userCoordinates = prompt("Enter coordinates: ");

const [xCoordinates, yCoordinates] = transformCoordinates(userCoordinates);

console.log(`The 10digit mgrs coordinates are ${xCoordinates}${yCoordinates}`);
