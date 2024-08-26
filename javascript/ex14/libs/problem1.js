while (true) {
    n = prompt('Enter the first number');
    p = prompt('Enter the second number');
    n = parseFloat(n);
    p = parseFloat(p);

    // Check if both n and p are valid numbers
    if (!isNaN(n) && !isNaN(p)) {
        break; // Exit the loop if valid numbers are entered
    } else {
        alert("Please enter valid numbers."); // Alert the user if input is invalid
    }
}
        let resultText;
        if (n > p) {
            resultText = `The largest number between ${n} and ${p} is: ${n}`;
        } else if (n < p) {
            resultText = `The largest number between ${n} and ${p} is: ${p}`;
        } else {
            resultText = `Both numbers are equal: ${n}`;
        }

        // Use document.write to display the result
        document.write(`<p>${resultText}</p>`);
