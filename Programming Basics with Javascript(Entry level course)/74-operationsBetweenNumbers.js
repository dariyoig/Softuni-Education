function solve([arg1, arg2, arg3]) {
    let numberOne = Number(arg1);
    let numberTwo = Number(arg2);
    let operator = arg3;
    let evenOrOdd;
    let result;
    let print;



    switch (operator) {
        case "+": result = numberOne + numberTwo;
            if (result % 2 == 0) evenOrOdd = "even";
            else evenOrOdd = "odd";
            print = `${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOrOdd}`
            break;
        case "-": result = numberOne - numberTwo;
            if (result % 2 == 0) evenOrOdd = "even";
            else evenOrOdd = "odd";
            print = `${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOrOdd}`
            break;
        case "*": result = numberOne * numberTwo;
            if (result % 2 == 0) evenOrOdd = "even";
            else evenOrOdd = "odd";
            print = `${numberOne} ${operator} ${numberTwo} = ${result} - ${evenOrOdd}`
            break;
        case "/": result = numberOne / numberTwo;
            if (numberTwo == 0) print = `Cannot divide ${numberOne} by zero`;
            else print = `${numberOne} / ${numberTwo} = ${result.toFixed(2)}`;
            break;
        case "%": result = numberOne % numberTwo;
            if (numberTwo == 0) print = `Cannot divide ${numberOne} by zero`;
            else print = `${numberOne} % ${numberTwo} = ${result}`;
            break;

        default:
            break;
    }
    console.log(print);
}
solve(["10",
    "12",
    "+"])