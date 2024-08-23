function displayStats(values) {
    let sum = values.reduce((a, b) => a + b, 0);
    let average = values.length > 0 ? (sum / values.length).toFixed(2) : 0;
    let min = values.length > 0 ? Math.min(...values) : 0;
    let max = values.length > 0 ? Math.max(...values) : 0;

    alert(`For the list ${values}, the average is ${average}, the minimum is ${min},and the maximum is ${max}`);
}

function readInput() {
    let values = [];
    let n;

    while (true) {
        n = prompt('Enter an integer (a negative integer to quit):');
        n = parseFloat(n);

        if (!isNaN(n) && n === Math.floor(n)) {
            if (n < 0) break;
            if (n > 0) values.push(n);
        }
    }

    displayStats(values);
}

readInput();