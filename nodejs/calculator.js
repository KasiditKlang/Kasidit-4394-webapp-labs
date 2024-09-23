import { createInterface } from 'readline';

function add(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}


function subtract(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
}


const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Please enter two numbers");
} else {
    const n1 = args[0];
    const n2 = args[1];

    if (isNaN(n1) || isNaN(n2)) {
        console.log("Please enter two numbers");
    } else {
       
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('add | subtract ', (operator) => {
            operator = operator.toLowerCase();
            if (operator === "add") {
                console.log(`${n1} + ${n2} = ${add(n1, n2)}`);
            } else if (operator === "subtract") {
                console.log(`${n1} - ${n2} = ${subtract(n1, n2)}`);
            } else {
                console.log("Unknown operator");
            }
            rl.close(); 
        });
    }
}
